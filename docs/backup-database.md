# Exporter et Backup la base distante en local :

```
ssh user@chezgatsu.ovh
dokku mongo:export shootizy > shootizy.dump
scp <user>@chezgatsu.ovh:/home/<user>/shootizy.dump shootizy.dump
```

# Importer la base locale et l'exporter vers le serveur

# En local sur son PC de dev

## Sauvegarder la base en local :

```
mongodump -d shootizy --gzip --archive=shootizy.dump
```

## Importer la base en local depuis un dump :

```
mongorestore --gzip --archive=shootizy.dump
```

# Sur le serveur

Différentes commandes à connaîtres au cas où

## Exporter la base :

```
dokku mongo:export shootizy > shootizy.dump
```

## Importer la base :

```
dokku mongo:import shootizy < shootizy.dump
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
