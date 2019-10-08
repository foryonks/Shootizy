mongodump -d shootizy --gzip --archive=shootizy.gz
scp shootizy.gz <user>@chezgatsu.ovh:/tmp/shootizy.gz
ssh -t gatsu@chezgatsu.ovh "dokku mongo:import shootizy < /tmp/shootizy.gz"

## si pb update il faut drop la DB

dokku mongo:connect-admin shootizydev

### une fois dans la base :

use shootizydev
db.dropDatabase()
exit
dokku mongo:import shootizydev < /tmp/shootizy.gz

# ATTENTion toutes les commandes ci-dessous ne fonctionnent pas.

Pour restaurer (à vérifier) mais d'abord il faut expose la DB.

mongorestore --host localhost:28965 --username shootizydev --password ade73479a0a74c4b576aa5c2126926df --gzip --archive=/tmp/shootizy.gz --drop --db shootizydev

# Exporter et Backup la base distante en local :

```
ssh user@chezgatsu.ovh
dokku mongo:export shootizy > shootizy.dump
scp <user>@chezgatsu.ovh:/home/<user>/shootizy.dump shootizy.dump
```

# Importer la base locale et l'exporter vers le serveur

```
$ mongodump -d shootizy --gzip --archive=shootizy.dump.gzip
$ scp shootizy.dump.gzip <user>@chezgatsu.ovh:~/shootizy.dump.gzip
$ ssh -t gatsu@chezgatsu.ovh "mongorestore --host localhost:27017 --upsert --gzip --archive=~/shootizy.dump.gz --db shootizy"
$ mongorestore --gzip --archive=shootizy.gzip
```

# En local sur son PC de dev

## Sauvegarder la base en local :

```
mongodump -d shootizy --gzip --archive=shootizy.gzip
```

## Importer la base en local depuis un dump :

```
mongorestore --gzip --archive=shootizy.gzip
```

# Sur le serveur

Différentes commandes à connaîtres au cas où

## Exporter la base avec dokku :

```
dokku mongo:export shootizy > shootizy.dump
```

## Importer la base avec dokku (non recommandé) voir méthode avec mongorestore:

_Methode dokku : _

```
dokku mongo:import shootizy < shootizy.dump
```

_Methode Mongorestore : _

```
mongorestore --host localhost:27017 --upsert --gzip --archive=shootizy.dump.gz --db shootizy
```

# Pour copier le dump depuis le serveur en local

```
$ scp remoteuser@remoteserver:/remote/folder/myfile.txt  myfile.txt
```

# Pour copier le dump depuis le local sur le serveur

```
scp myfile.txt remoteuser@remoteserver:/remote/folder/
```

# Pour faire restaurer un quand mongo est installé via dokku :

installer mongo-tools
apt-get install mongotools

mongorestore --host localhost:27017 --upsert --gzip --archive=shootizy.dump.gz --db shootizy
