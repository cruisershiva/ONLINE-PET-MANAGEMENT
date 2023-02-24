const mongoose = require("mongoose");
const petToySchema = new mongoose.Schema({
    Toyname: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    petClass: {
        type: String,
        required: [true, "please enter pet class"],
      },
    material:{ 
        type:String,
    },
    size:{
        type:String,
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
  
  const PetToy = mongoose.model('PetToy', petToySchema);
  
  module.exports = PetToy;