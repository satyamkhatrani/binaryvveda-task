import Joi from "joi";
import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

autoIncrement.initialize(mongoose);

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, isUnique: true },
    password: { type: String, required: true },
    age: { type: Number },
    address: { type: String },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const validateRegisterUser = (body) => {
  const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string(),
    age: Joi.number(),
    address: Joi.string().max(50),
  });
  return schema.validate(body);
};

userSchema.plugin(autoIncrement.plugin, "user");
const UserModel = mongoose.model("user", userSchema);

export { UserModel, validateRegisterUser };
