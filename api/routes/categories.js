const Category = require("../models/Category");
const router = require("express").Router();

//CREATE CATEGORY
router.post("/", async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const category = await newCategory.save();
    return res.status(200).json(category);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//FETCH CATEGORIES
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    return res.status(200).json(category);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
