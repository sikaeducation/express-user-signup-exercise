const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

const User = require("./models/User")

app.get("/users", (request, response) => {
  User.query().then(users => {
    response.json({ users })
  })
})

app.post("/signup", async (request, response) => {
  const { username, password } = request.body.user
  const user = await User.query().insert({
    username,
    password_hash: password,
  })

  response.json({ user })
})

app.use((error, request, response, next) => {
  console.error(error.message)

  response.status(500).json({
    error: error.message
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
