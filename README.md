# Express: User Signup

The Express app in `index.js` currently has two routes:

* `GET /users`, which lists every record in the user database
* `POST /signup`, which expects an HTTP body formatted like this:

```json
{
  "user": {
    "username": "some-username",
    "password": "some-password"
  }
}
```

Secure the passwords by hashing them.

## Reference

### Running the Server

Run the server localy with `npm run dev`.

### Inserting a User Record with Objection

To insert a user record with Objection.js, import the model and use its `User.query().insert(user)` method:

```js
const User = require("./models/User")

User.query().insert({
  username: "some-username",
  password_hash: "some-password-hash",
})
```
