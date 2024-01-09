import Work from "@app/app/model/Work";
import { connect } from "@app/database/db.config";
import { NextRequest, NextResponse } from "next/server";
// import { sendEmail } from "@/helpers/mailer";

connect();

export async function GET(request: NextRequest) {
  try {
    const data = await Work.find({}).lean();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
