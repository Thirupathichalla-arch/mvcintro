const express = require("express");


const connect= require("./config/db");


const User= require("./modals/user.model");
const Post= require("./modals/post.model");
const Comment= require("./modals/comment.model");
const Tag= require("./modals/tag.model");

const usersController=require("./controller/user.controller")
const tagsController=require("./controller/tag.controller")
const postsController=require("./controller/post.controller")
const commentController=require("./controller/comment.controller")

const app = express();

app.use(express.json());

app.use("/posts",postsController)
app.use("/users",usersController)
app.use("/tags",tagsController)
app.use("/comments",commentController)

app.listen(2345, async function () {
  await connect();
  console.log("listening on port 2345");
});