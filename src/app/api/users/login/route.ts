import { ConnectionDB } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
ConnectionDB();
export async function POST(request: NextResponse) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);

    // check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User Dosn't exist" }, { status: 400 });
    }
    // check if password is correct
    const validpassword = await bcryptjs.compare(password, user.password);
    if (!validpassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }
    // create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // create Token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SCERET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login Sucessfull",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
