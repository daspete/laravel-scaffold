# laravel scaffold

Just a laravel docker scaffolding project.

## TODO

- Clone this repository
- if you want to create another instance, start `./create-app myapp` -> when you do so, also update the app folder in your compose.yml file
- copy the `/myapp/.env.example` file to `/myapp/.env`
- start instance with `docker compose up -d`
- run `./artisan migrate:install` 
- run `./artisan migrate:fresh`
- create en entry in your local hosts file `127.0.0.1 myproject.test`
- go to http://myproject.test
