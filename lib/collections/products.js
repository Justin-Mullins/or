Products = new Mongo.Collection("products");

ProductsSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Product Name"
  },
  
  info: {
    type: String,
    label: "Product Info"
  }
})

Products.attachSchema(ProductsSchema);