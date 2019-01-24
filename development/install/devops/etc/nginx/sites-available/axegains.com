# websocket service
upstream websocket_service {
    server localhost:8001 fail_timeout=0;
}

# rest service
upstream rest_service {
    server localhost:8002 fail_timeout=0;
}

# AWS healthcheck
#server {
#    listen 8081;
#    root /axegains/hosts/www;
#    index index.html;
#}

# .
server {

    index index.html;

    # AWS
    #listen 81;
    #if ($http_x_forwarded_proto != 'https') {
    #   return 301 https://$host$request_uri;
    #}
    #server_name axegains.com;
    #root /www/axegains.com/hosts/www;

    # Development
    listen 80;
    listen 443 ssl;
    ssl_certificate /etc/nginx/axegains.local.crt;
    ssl_certificate_key /etc/nginx/axegains.local.key;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    if ($scheme != 'https') {
       return 301 https://$host$request_uri;
    }
    server_name axegains.local;
    root /axegains/hosts/www;

    # Logs
    access_log /var/log/axegains/www.access.log;
    error_log /var/log/axegains/www.error.log;

    # service
    location /rest {
        proxy_pass http://rest_service;
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_read_timeout 600;
    }
}

# www
server {

    # AWS
    #listen 81;
    #server_name www.axegains.local
    #return 301 $scheme://axegains.com$request_uri;

    # Development
    listen 80;
    listen 443 ssl;
    ssl_certificate /etc/nginx/axegains.local.crt;
    ssl_certificate_key /etc/nginx/axegains.local.key;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    server_name www.axegains.local;
    return 301 $scheme://axegains.local$request_uri;
}

# AWS websocket healthcheck
#server {
#    listen 8082;
#    server_name ws.axegains.local;
#    root /axegains/hosts/ws;
#    index index.html
#    access_log /var/log/www/axegains.ws.healthcheck.access.log;
#    error_log /var/log/www/axegains.ws.healthcheck.error.log;
#}

# websocket
server {

    # AWS
    #listen 82 proxy_protocol;
    #server_name ws.axegains.com;

    # Standard
    listen 80;
    listen 443 ssl;
    ssl_certificate /etc/nginx/axegains.local.crt;
    ssl_certificate_key /etc/nginx/axegains.local.key;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    server_name ws.axegains.local;

    # Logs
    access_log /var/log/axegains/ws.access.log;
    error_log /var/log/axegains/ws.error.log;

    # websocket
    location / {
        proxy_pass http://websocket_service;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_protocol_addr;
        proxy_read_timeout 600;
    }
}
