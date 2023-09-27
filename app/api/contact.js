import nodemailer from "nodemailer";

const pass = process.env.PASS;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email service (e.g., Gmail, SMTP, etc.)
      service: "Gmail",
      auth: {
        user: "manojbastakoti252@gmail.com",
        pass,
      },
    });

    // Email data
    const mailOptions = {
      from: email,
      to: email, // Receiver's email address
      subject: subject,
      text: `From: ${email}\n\n${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Email sending failed!" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
