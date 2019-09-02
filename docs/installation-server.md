## PARAMETRES D'ACCES:

L'adresse IPv4 du VPS est : 51.255.47.158
L'adresse IPv6 du VPS est : 2001:41d0:0302:2200:0000:0000:0000:4713

Le nom du VPS est : vps684149.ovh.net

Le compte administrateur suivant a été configuré sur le VPS :
Nom d'utilisateur : root
Mot de passe : xxxxxxxx

user : gatsu / xxxxxxxx

##Suivre tutoriels suivants pour la première install :
Setup Debian 9 : https://www.digitalocean.com/community/tutorials/initial-server-setup-with-debian-9
Installer ensuite Dokku : https://github.com/dokku/dokku/blob/master/docs/getting-started/installation.md
(ne pas oublier d'aller sur le web pour y stocker les clés SSH publiques)
Configurer pour que les apps puissent être accessiblent ainsi : <appname>.domain.com

Mettre var accessible à certains users :
\$ sudo chown <username>:www-data ./ -R

Installer dokku mongo :
sudo dokku plugin:install https://github.com/dokku/dokku-mongo.git mongo

# SUR LE SERVER

## Créer la App :

dokku apps:create shootizy-dev
dokku git:set shootizy-dev deploy-branch develop

## Créer la db

```
sudo dokku mongodb:create shootizy
sudo dokku mongo:expose shootizy
sudo dokky mogo:link shootizy shootizy-dev
```

Pour récupérer les infos de la db :

```
sudo dokku mongo:info shootizy
```

## Mettre les variables d'environnement

ATTENTION il ne faut pas set DB_CONN_STR avant d'avoir fait un dokku mongo:link. Ici on a déjà fait un link, donc ça marchera

```
dokku config:set shootizy-dev DB_NAME=shootizy JWT_EXPIRATION=24h JWT_SECRET=shootizy_secret NODE_MODULES_CACHE=true NODE_VERBOSE=true NPM_CONFIG_PRODUCTION=false STORAGE=/upload DB_CONN_STR=<mongo_uri>
```

mongo_uri peut être obtenu avec `dokku mongo:info shootizy-dev``

## Mettre à jour la db :

Attention ce paragraphe est à revoir

```
mongodump --archive=test.gz --gzip --uri <mongo local uri>
```

exemple : mongodump --archive=test.gz --gzip --uri

```
mongodb://shootizywebapp:yourStrong\(\!\)Password@localhost:27017/shootizy
```

Copier ce fichier dans le home dans votre server ssh

`scp test.gz gatsu@chezgatsu.ovh:~/`

Executer la commande pour importer ce fichier

`ssh -t gatsu@chezgatsu.ovh "dokku mongo:import shootizy < ~/test.gz"`

Supprimer ce fichier

`ssh -t gatsu@chezgatsu.ovh "rm ~/test.gz"`

## Configurer Nginx

Pour ajouter des variables à nginx sur l'app

```
sudo mkdir /home/dokku/shootizy/nginx.conf.d
```

```
sudo nano home/dokku/shootizy/nginx.conf.d/upload.conf
```

CTRL+X pour sauver le fichier et quitter nano

```
sudo service nginx reload
```

## Gestion du storage

On créé un dossier linkée au container

```
mkdir -p /home/gatsu/storage/shootizy/upload
dokku storage:mount shootizy /home/gatsu/storage/shootizy/upload:/upload
```

Le dossier upload est associé à la variable d'environnement STORAGE, c'est cette variable qui pointe vers upload, ne pas oublier de l'ajouter si elle n'est pas dans la config dokku :
dokku config:set shootizy-dev STORAGE=/upload

`

## Update le projet :

- Ajouter d'abord un remote (dans notre cas c'est un remote dev)
  git remote add dev dokku@chezgatsu.ovh:shootizy-dev
- Push le code
  git push dev develop

Et laisser le déploiement se faire
