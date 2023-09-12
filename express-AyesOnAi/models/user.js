// file : AyesOnAi\express-AyesOnAi\models\user.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      // required: true,
      unique: true,
    },

    email: {
      type: String,
      // required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      // required: true,
    },

    lastName: {
      type: String,
      // required: true,
    },

    dateOfBirth: {
      type: Date,
    },

    profilePicture: {
      type: String,
    },

    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },

    hasPurchased: {
      type: Boolean,
      default: false, // Default is false. It will be set to true once a purchase has been made.
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

module.exports = mongoose.model("User", userSchema);
