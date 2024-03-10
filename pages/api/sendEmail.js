// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import { Writable } from "stream";
import formidable from "formidable";

const formidableConfig = {
  keepExtensions: true,
  maxFileSize: 10_000_000,
  maxFieldsSize: 10_000_000,
  maxFields: 7,
  allowEmptyFiles: false,
  multiples: false,
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'reachgodlikestudio@gmail.com',
    pass: 'oxclfyyvpbrmplly',
  },
});

function formidablePromise(req, opts) {
  return new Promise((accept, reject) => {
    const form = formidable(opts);

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      return accept({ fields, files });
    });
  });
}

const fileConsumer = (acc) => {
  const writable = new Writable({
    write: (chunk, _enc, next) => {
      acc.push(chunk);
      next();
    },
  });

  return writable;
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(404).end();

  try {
    const chunks = [];

    const { fields, files } = await formidablePromise(req, {
      ...formidableConfig,
      // consume this, otherwise formidable tries to save the file to disk
      fileWriteStreamHandler: () => fileConsumer(chunks),
    });

    //console.log({ fields });
    //console.log({ files });
    const { careerCV } = files;

    const fileData = Buffer.concat(chunks);

    const filename = careerCV?.originalFilename;

    // here you'd pass all the fields and files to the nodemailer transport layer
    const { name, email, website, message, selectedCheckboxes } = fields;
    // console.log(selectedCheckboxes)

    const attachments = [{ content: fileData, filename }];
    // console.log({
    //   attachments,
    //   careerName,
    // });

    //Email Transporter Settings
    const emailRes = await transporter.sendMail({
      from: "reachgodlikestudio@gmail.com",
      replyTo: `${name} <${email}>`,
      to: "reachgodlikestudio@gmail.com",
      subject: `Contact Form Submission from ${email}`,
      html: `
          <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Form Submission Confirmation</title>
              <style>
                body {
                  font-family: 'Raleway', sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
                }
                .Title {
                  font-size:24px;
                  margin-bottom:12px;
                }
                .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 10px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h2 {
                  color: #333333;
                }
                p {
                  color: #555555;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <p class="Title">You have a new form submission</p>
                <p><strong>Name: </strong> ${name}</p>
                <p><strong>Email: </strong> ${email}</p>
                <p><strong>Phone Number: </strong> ${website}</p>
                <p><strong>Message: </strong> ${message}</p>
                <p><strong>Options selected: </strong> ${selectedCheckboxes}</p>
              </div>
            </body>
            </html>
`,
      // attachments: attachments,
    });

    return res.status(200).end();
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

