.PHONY: deploy deploy-config


deploy:
	rsync -av ./build/ VPS:/var/www/evanoconnor.ie/ --delete


deploy-config: 
	rsync -av ./evanoconnor.ie.conf VPS:/etc/nginx/sites-available/