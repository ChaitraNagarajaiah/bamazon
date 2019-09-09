require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.PASSWORD,
    "database": "bamazon",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL"
  }
}