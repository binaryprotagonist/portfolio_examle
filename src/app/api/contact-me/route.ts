import User from "@app/app/model/User";
import { connect } from "@app/database/db.config";
import { sendEmail } from "@app/utils/nodemail";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    // const { username, email, message } = reqBody;
    await User.create(reqBody);

    await sendEmail({ email: reqBody.email, name: reqBody.name, message: reqBody.message });

    return NextResponse.json({
      message: "Email sent successfully",
      success: true,
      reqBody,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

