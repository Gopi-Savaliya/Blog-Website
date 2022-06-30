const router = require("express").Router();
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
const User = require("../models/User");

//UPDATE
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  if (req.body.userId === id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json(updatedUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(401).json("You can update only your account...");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (req.body.userId === id) {
    try {
      const user = await User.findById(id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json("User has been deleted...");
      } catch (err) {
        return res.status(500).json(err);
      }
    } catch (err) {
      return res.status(404).json("User not found...");
    }
  } else {
    return res.status(401).json("You can delete only your account...");
  }
});

//FETCH USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//FETCH ALL USER
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
