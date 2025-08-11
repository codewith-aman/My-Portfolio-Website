const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Resend } = require("resend");

dotenv.config();

const app = express();
const resend = new Resend('re_R2nEjvJW_DiH6yf7EFMMTQraWuuyzRn5Y');

app.use(cors());
app.use(express.json());

app.post("/api/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Aman <onboarding@resend.dev>",
      to: "amanbalhara54321@gmail.com", // mera email
      subject: `Message from ${name}`,
      html: `<p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("✅ Server started at http://localhost:5000");
});
