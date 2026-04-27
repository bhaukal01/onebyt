import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST methods
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: `Method ${req.method} Not Allowed`,
    });
  }

  try {
    const { name, email, message, requirement } = req.body;

    // "message" or "requirement" can be interchangeable depending on the form
    const bodyText = requirement || message || "No specific requirement detailed.";

    // Validate request inputs
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: "Name and email are required fields.",
      });
    }

    // Set up Nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // Application-specific password
      },
    });

    // Email content configuration
    const mailOptions = {
      from: `"${name}" <${email}>`, // Note: Gmail often overrides this with your GMAIL_USER
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Deployment Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Requirement: 
        ${bodyText}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">New Deployment/Hosting Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 20px;">
            <strong>Requirement:</strong>
            <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #333; margin-top: 10px; white-space: pre-wrap;">${bodyText}</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Email successfully forwarded from ${email} to ${process.env.RECEIVER_EMAIL}`);

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Your request has been delivered successfully.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to send email. Please try again later.",
    });
  }
}
