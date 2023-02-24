const mongoose = require("mongoose");
const petfoodSchema = new mongoose.Schema({
    foodname: {
      type: String,
      required:[true, "please enter food name"]
    },
    brand: {
      type: String,
      required: [true, "please enter brand name"]
    },
    petClass: {
      type: String,
      required: [true, "please enter pet class"],
    },
    description:{
      type: String,
      required: [true, "please enter description"]
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    flavor: {
    type: String
    },
    price: {
      type: Number,
      required: [true, "please enter price"],
      maxlength: [8,"price cannot exceed 8 figures"],
    },
    stock: {
      type: Number,
      required: [true, "please enter  pet stock"],
      maxLength: [4, "stock cannot exceed four characters"],
      default: 1
    },
    numofreviews: {
      type: Number,
      default: 0,
    },
    reviews: [
    { 
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
  const petfood = mongoose.model('petfood', petfoodSchema);
  
  module.exports = petfood;