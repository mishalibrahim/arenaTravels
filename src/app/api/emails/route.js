import Email from "@/emails/Email";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API);

export async function POST(req) {
  try {
    const { name, phoneNo, email, desc, resumeContent } = await req.json();

    const emailOptions = {
      from: "onboarding@resend.dev",
      to: "sales@arenatravels.ae",
      subject: `New ${resumeContent ? "Job Application" : "Contact Form Submission"} from ${name}`,
      react: Email({ name, phoneNo, email, desc }),
    };

    if (resumeContent) {
      // Convert base64 back to binary content
      const buffer = Buffer.from(resumeContent, "base64");

      // Add attachment for career form
      emailOptions.attachments = [
        {
          filename: "resume.pdf",
          content: buffer.toString("base64"),
          type: "application/pdf",
        },
      ];
    }

    // Send the email using Resend
    await resend.emails.send(emailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 },
    );
  }
}
