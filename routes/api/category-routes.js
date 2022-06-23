const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');
const sequelize = require('../../config/connection')
// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [ 
        { model: Product}
  ]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});




router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne({
      include: [ 
        { model: Product}
  ]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  res.status(200).json('Created new Category ' + req.body.category_name)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json('updated'+ req.params.id);
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id,
      },
    })
    await categoryData.destroy();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
