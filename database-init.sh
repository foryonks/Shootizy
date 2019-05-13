MONGO_CONN=$1

# Init Database (only in local)
if [ -z "$MONGO_CONN" ]
then
  mongo database/0-init.js
  MONGO_CONN="mongodb://localhost:27017"
fi

# Init Data
mongo $MONGO_CONN database/data-entrypoint.js
