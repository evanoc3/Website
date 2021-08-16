# Personal Website

## Deployment

To deploy this site:
1. Running the build step will create a `build` directory in the project root containing the static files which comprise the site.

2. The `make deploy` command uses [rsync](https://rsync.samba.org/) to transfer the build files to the _'VPS'_ SSH target (which can be set in your SSH config).

	**Note:** On the server, Nginx is already set up to serve the website as static files from the directory they get transferred into. So the website is updated instantly when new files are transferred to the server.

3. The Nginx config file for this site is also stored within this repo in the [evanoconnor.ie.conf](./evanoconnor.ie.conf) file. If changes need to be made to the site's configuration, the `make deploy-config` command can be used to transfer the updated file to the server. However in order for the server to react to changes in the config file, you will need to SSH into the server and run the `sudo systemctl restart nginx` command, for it to load the new config.