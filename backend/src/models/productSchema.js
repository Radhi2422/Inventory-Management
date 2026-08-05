const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  }
});

// Index productName
productSchema.index({ productName: 1 });

// Index category
productSchema.index({ category: 1 });

module.exports = mongoose.model("Product", productSchema);