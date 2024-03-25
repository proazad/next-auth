import { ConnectionDB } from "@/db/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
ConnectionDB();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, username, email, password } = reqBody;
    console.log(reqBody);
    //check if user already exist
    const userEmail = await User.findOne({ email });
    const userName = await User.findOne({ username });
    if (userEmail || userName) {
      return NextResponse.json(
        { error: "User Already Exist" },
        { status: 400 }
      );
    }
    // console.log(user);
    // hash Password
    // const salt = bcryptjs.genSalt(10);
    // const hashPassword = bcryptjs.hash(password, salt);
    // console.log(hashPassword);
    // Create User
    const newUser = new User({
      name,
      username,
      email,
      password,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({
      message: "User Created Successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
