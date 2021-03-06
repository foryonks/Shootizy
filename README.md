# shootizy

Shootizy website

## Node version

We are using node LTS v10.15.3, install nvm and the required node version
If you use zsh place this code in .zshrc in order to use it automatically

```
# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" != "N/A" ] && [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

## MongoDB

### Installation

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

### Init db

Once Mongo is correctly installed, execute this command to (re)initialize db / user / data

```
npm run init-db
```

In order to reinit remote db, pass the connection string in npm -- arg

```
npm run init-db -- [CONNECTIONSTRING]
```

## Bypass login in dev mode

Add these configs to .env files of each packages

```
#shootizy-client/.env REACT_APP_USE_DEV_TOKEN=true
#shootizy-server/.env USE_DEV_TOKEN=true
```

## Heroku deploy

Install heroku client and login

```
npm i -g heroku
heroku login
```

Create app instance "shootizy" in your account's heroku interface and bind it to the app, it's better than heroku create because you can choose extra params (for ex. region Europe)

```
heroku git:remote -a shootizy
```

We must keep devDependencies so add this config

```
heroku config:set NPM_CONFIG_PRODUCTION=false

```

Deploy a branch other than master:

```
git push heroku <any-branch>:master
```
