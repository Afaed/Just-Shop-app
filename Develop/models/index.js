// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { DataTypes } = require('sequelize/types/index');

// Products belongsTo Category
Product.belongsTo(
  Category, {
    foreignKey: 'category_id'
  });
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
})

// Products belongToMany Tags (through ProductTag)
Product.belongtoMany(Tag, {
  Through: ProductTag,
  foreign_key: 'product_id',

})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
