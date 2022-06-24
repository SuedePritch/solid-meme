const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [ 
        { model: Product}
  ]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const tagData = await Tag.findByPk(req.params.id,
      {
      include: [ 
        { model: Product}
  ]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  Tag.create(req.body)
  res.status(200).json('Created new tag ' + req.body.tag_name)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json('updated '+ req.body.tag_name);
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const tagData = await Tag.findByPk(req.params.id)
    await tagData.destroy();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
