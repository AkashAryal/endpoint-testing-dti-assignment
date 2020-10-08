module.exports = {
   "type": "mysql",
   "host": "localhost",
   "port": 3306,
   "username": "root",
   "password": "",
   "database": "endpoint-testing",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/typeORM/entity/**/*.ts"
   ],
   "migrations": [
      "src/typeORM/migration/**/*.ts"
   ],
   "subscribers": [
      "src/typeORM/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/typeORM/entity",
      "migrationsDir": "src/typeORM/migration",
      "subscribersDir": "src/typeORM/subscriber"
   }
}
