// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";

const user = "geraldnewton123@gmail.com"
  pass = "Dob@21112001";

export const createHTML = ({
  fullName,
  role,
  email,
  phone,
  productCategories,
  website,
  insta,
  marketPlace,
  gst,
  gstno,
  bussinessName,
  businessTypeOptions,
  address,
  city,
  state,
  pincode,
  rating,
}) => {
  const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8" />
          <style>
            body { font-family: Arial; background: #f8f9fa; color: #333; }
            .container { max-width: 600px; margin: auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
            .header { background: #00aa78; color: #fff; padding: 20px; font-size: 24px; font-weight: bold; }
            .section { margin-bottom: 20px; }
            .section-title { font-size: 16px; font-weight: bold; color: #00aa78; margin-bottom: 8px; }
            .label { font-weight: bold; }
            .value { margin-left: 5px; }
            .stars { color: gold; font-size: 20px; letter-spacing: 3px; }
            .highlight-box { background: #f1fdf8; border-left: 4px solid #00aa78; padding: 12px; margin-bottom: 10px; border-radius: 4px; font-size: 14px; }
            .footer { font-size: 12px; text-align: center; color: #888; padding: 20px; border-top: 1px solid #eee; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">Vendor Registration — FrameFinder</div>
            <div class="section">
              <div class="section-title">Vendor Details</div>
              <p><span class="label">GST Registration:</span><span class="value">${gst}</span></p>
              ${
                gst === "yes"
                  ? `<p><span class="label">GST No.:</span><span class="value">${gstno}</span></p>`
                  : ""
              }
              <p><span class="label">Business Name:</span><span class="value">${bussinessName}</span></p>
              <p><span class="label">Business Type:</span><span class="value">${businessTypeOptions.join(
                ", "
              )}</span></p>
              <p><span class="label">Store Address:</span><span class="value">${address} , ${city} , ${state}</span></p>
              <p><span class="label">Pincode:</span><span class="value">${pincode}</span></p>
            </div>
            <div class="section">
              <div class="section-title">Contact Person</div>
              <p><span class="label">Full Name:</span><span class="value">${fullName}</span></p>
              <p><span class="label">Role:</span><span class="value">${role}</span></p>
              <p><span class="label">Email:</span><span class="value">${email}</span></p>
              <p><span class="label">Phone Number:</span><span class="value">${phone}</span></p>
            </div>
            <div class="section">
              <div class="section-title">Product Information</div>
              <p><span class="label">Category:</span><span class="value">${productCategories.join(
                ", "
              )}</span></p>
              <p><span class="label">Online Presence:</span>
                <span class="value">
                  ${website === "yes" ? "Website, " : ""}
                  ${insta === "yes" ? "Instagram/Facebook, " : ""}
                  ${marketPlace === "yes" ? "Marketplace" : ""}
                </span>
              </p>
            </div>
            <div class="section">
              <div class="section-title">Why Join FrameFinder?</div>
              <div class="highlight-box">✅ Zero onboarding fee during the pre-launch phase</div>
              <div class="highlight-box">📣 Early access to promotions and marketing support</div>
              <div class="highlight-box">📦 Dedicated dashboard to manage products and orders</div>
              <div class="highlight-box">👓 Customer base focused purely on eyewear</div>
              <div class="highlight-box">🚚 Sell your product to Pan-India</div>
            </div>
            <div class="section">
              <div class="section-title">How Much Do You Like This Platform?</div>
              <div class="stars">${"★".repeat(rating)}${"☆".repeat(
    5 - rating
  )}</div>
            </div>
            <div class="footer">© 2025 FrameFinder. All rights reserved.</div>
          </div>
        </body>
        </html>
      `;
  return htmlContent;
};

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user,
    pass,
  },
});

// Wrap in an async IIFE so we can use await.
export const sendMail = async (html) => {
  const info = await transporter.sendMail({
    from: `"Gerald" <${user}>`,
    to: "arpitnewton1@gmail.com",
    subject: "New Vendor Registration - FrameFinder",
    text: "Hello world?", // plain‑text body
    html, // HTML body
  });
  return info;
};

// module.exports = { createHTML, sendMail };
