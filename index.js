const express = require("express")

const server = express()

const cors = require("cors")
server.use(cors({ orgin: "http://localhost:3000" }))

server.use(express.json())

const logic = require('./components/logic')



server.post("/signIn", (req, res) => {
   logic.login(
      req.body.email,
      req.body.password
   ).then(result => {
      res.status(result.statusCode).json(result)
   })
})

server.post("/signUp", (req, res) => {
   logic.addUser(
      req.body.email,
      req.body.uname,
      req.body.password
   ).then(result => {
      res.status(result.statusCode).json(result)
   })
})

server.post("/post", (req, res) => {
   logic.info(
      req.body.uname,
      req.body.proName,
      req.body.info,
      req.body.pid
   ).then(result => {
      res.status(result.statusCode).json(result)
   })
})

server.get('/tweets', (req, res) => {
   logic.allTweets().then(result => {
      res.status(result.statusCode).json(result)
   })
})

server.post('/uTweets', (req, res) => {
   logic.userTweets(
      req.body.uname
   ).then(result=> {
      res.status(result.statusCode).json(result)
   })
})

server.delete("/deleteFesa", (req,res) => {
   logic.deletePost(req.params.pid).then(result => {
      res.status(result.statusCode).json(result)
   })
})
server.listen(5000, () => {
   console.log("fesa server started at port http://localhost:5000");
})