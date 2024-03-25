import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  isAdmin: boolean;
  forgotPasswordToken?: string;
  forgotPasswordTokenExpiry?: Date;
  verifyToken?: string;
  verifyTokenExpiry?: Date;
}

const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide a name"],
    },
    username: {
      type: String,
      required: [true, "Please Provide a Unique User name"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a unique email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

const User: Model<IUser> =
  mongoose.models.users || mongoose.model<IUser>("users", userSchema);
export default User;
