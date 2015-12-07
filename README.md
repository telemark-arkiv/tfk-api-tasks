# tfk-api-tasks
Simple tasks api for Telemark fylkeskommune

## Testing

Generate testToken

```sh
$ npm run generate
```

```sh
curl -v -H "Authorization: <token>" http://localhost:3000/tasks
```

## Docker

```sh
docker run -d -p 27017:27017 --name mongodb mongo
```

To setup indexes
```sh
$ mongo 192.168.99.100:27017/tfk config/mongodb.indexes
```

To import dummydata
```sh
mongoimport -h 192.168.99.100:27017 -d tfk -c tasks data/tasks.json --jsonArray
```