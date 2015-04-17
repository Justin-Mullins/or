Products = new Mongo.Collection("products");

ProductsSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Product Name"
  },
  
  info: {
    type: String,
    label: "Product Info"
  },

  price: {
  	type: Number,
  	label: "Product Price"
  }
})

Products.attachSchema(ProductsSchema);