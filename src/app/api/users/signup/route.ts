import { ConnectionDB } from "@/db/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

ConnectionDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, username, email, password } = reqBody;

    // Check if user already exists
    const userEmail = await User.findOne({ email });
    const userName = await User.findOne({ username });
    if (userEmail || userName) {
      return NextResponse.json(
        { error: "User Already Exists" },
        { status: 400 }
      );
    }

    // Hash Password
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    // Create User
    const newUser = new User({
      name,
      username,
      email,
      password: hashPassword, // Store hashed password
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User Created Successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
