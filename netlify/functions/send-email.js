// Import the nodemailer library to send emails
const nodemailer = require("nodemailer");


exports.handler = async function (event, context) {
  // Check if the HTTP method is POST, as we only want to handle form submissions (POST requests)
  if (event.httpMethod === "POST") {

    // Parse the JSON data that was sent in the request body
    const {email, message } = JSON.parse(event.body);

    // Simple validation: Ensure that all fields are provided (name, email, message)
    if (!email || !message) {
      return {
        statusCode: 400,  // 400 status means "Bad Request" due to missing fields
        body: JSON.stringify({ message: "All fields are required." }),  // Return an error message to the client
      };
    }

    // Set up nodemailer transporter using zoho
    let transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',   // Zoho SMTP server
        port: 587,               // Port for SSL (or 587 for TLS)
        secure: false,            // Use SSL (set to false if using TLS with port 587)
        auth: {
          user: 'your-email@zoho.com',  // Your Zoho email address
          pass: 'your-email-password',   // Your Zoho email password or app-specific password
        },
      });

    // Email to yourself (predefined email)
    const mailToYourself = {
        from: process.env.EMAIL_USER,
        to: process.env.MY_EMAIL,
        subject: "New Contact Form Submission",
        text: `You have received a new message from ${email}:\n\n${message}`,
    };

    // Email to the client (the email they input)
    const mailToClient = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us!",
      text: `Dear ${email},\n\nThank you for your message! We will get back to you shortly.\n\nYour message:\n\n${message}`,
    };

    try {
      // Attempt to send the emails using the transporter object
      await transporter.sendMail(mailToYourself);
      await transporter.sendMail(mailToClient);

      // If the email is sent successfully, return a 200 status with a success message
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Message sent successfully!" }),  // Success response
      };
    } catch (error) {
      // If there’s an error sending the email, return a 500 status code and the error message
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),  // Error response with details
      };
    }
  }

  // If the method is not POST, return a 405 "Method Not Allowed" status
  return {
    statusCode: 405,  // 405 indicates that the HTTP method is not allowed for this route
    body: JSON.stringify({ message: "Method Not Allowed" }),  // Inform the client about the invalid method
  };
};



    // Set up nodemailer transporter using Gmail as the email service (you can also use other services like Mailgun or SMTP)
    //   service: "gmail",  // Using Gmail service
    //   auth: {
    //     user: "your-email@gmail.com",  // Your Gmail address (replace with your actual email)
    //     pass: "your-email-password",   // Your Gmail password or an app-specific password for security
    //   },
    // });