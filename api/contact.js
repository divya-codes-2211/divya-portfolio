export default async function handler(req, res) {
  // Allow CORS for local dev across ports
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Next/Vercel handles JSON body parsing by default, but we can double check.
  // We can dynamically import nodemailer to keep the function light if possible,
  // or just static import for standard Vercel functions. Vercel supports both.
  const nodemailer = await import('nodemailer');

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  const transporter = nodemailer.default.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailToAdmin = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Portfolio Contact: ${name}`,
    html: `
      <div style="font-family: sans-serif; background-color: #09090b; color: #fff; padding: 40px; border-radius: 12px; border: 1px solid #27272a;">
        <h2 style="color: #a855f7;">New Entry Received</h2>
        <p style="color: #a1a1aa;">You have a new message from your portfolio.</p>
        <hr style="border-color: #27272a; margin: 20px 0;" />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <div style="background-color: #18181b; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <p style="margin: 0;">${message}</p>
        </div>
      </div>
    `,
  };

  const mailToUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Thanks for reaching out, ${name}!`,
    html: `
      <div style="font-family: sans-serif; background-color: #fafafa; color: #18181b; padding: 40px; border-radius: 12px; border: 1px solid #e4e4e7;">
        <h2 style="color: #9333ea;">Hello ${name}!</h2>
        <p>Thank you for stopping by my portfolio and reaching out. I have successfully received your message and will get back to you shortly.</p>
        <hr style="border-color: #e4e4e7; margin: 20px 0;" />
        <p style="color: #52525b; font-size: 14px;"><strong>Your Message:</strong></p>
        <div style="background-color: #f4f4f5; padding: 15px; border-radius: 8px; color: #3f3f46; font-style: italic;">
          ${message}
        </div>
        <br />
        <p style="color: #52525b; font-size: 14px;">Best regards,<br/><strong style="color: #9333ea;">Divyanjali Tiwari</strong></p>
      </div>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(mailToAdmin),
      transporter.sendMail(mailToUser)
    ]);
    return res.status(200).json({ success: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
}
