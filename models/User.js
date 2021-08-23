const { Model } = require("objection")
const database = require("./database-connection")
Model.knex(database)

class User extends Model {
  static tableName = "user"
}

module.exports = User
