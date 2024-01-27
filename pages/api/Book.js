// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import { Writable } from "stream";
import formidable from "formidable";

const formidableConfig = {
  keepExtensions: true,
  maxFileSize: 80_000_000,
  maxFieldsSize: 10_000_000,
  maxFields: 100,
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
    user: 'dikshantjoshi97@gmail.com',
    pass: 'vjlditpwwpzkglxc',
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

    console.log({ files });
    const { References } = files;
    // console.log(files)
    const fileData = Buffer.concat(chunks);

    const filename = References?.originalFilename;

    // here you'd pass all the fields and files to the nodemailer transport layer
    const {
      careerName,
      careerEmail,
      careerTelephone,
      websiteURL,
      Insta,
      companyName,
      numbersOfPhotos,
      dropdown1,
      dropdown2,
      locationPreference,
      products,
      deadLine,
      props,
      propsBudgetAndSuggestion,
      productCombination,
      brandColors,
      careerMessage,
      Page,
    } = fields;
    console.log(fields)

    const attachments = [{ content: fileData, filename }];
    // console.log({
    //   attachments,
    //   // careerName,
    // });

    //Email Transporter Settings
    const emailRes = await transporter.sendMail({
      from: "dikshantjoshi97@gmail.com",
      replyTo: `${careerName} <${careerEmail}>`,
      to: "dikshantjoshi97@gmail.com",
      subject: `Quote request for ${Page} from ${careerName}`,
      html: `
          <p style='width:700px'><strong>Name:</strong></p>
          <p style='width:700px'>${careerName}</p>
          <p style='width:700px'><strong>Company name: </strong></p>
          <p style='width:700px'>${companyName}</p>
          <p style='width:700px'><strong>Email: </strong></p>
          <p style='width:700px'>${careerEmail}</p>
          <p style='width:700px'><strong>Phone Number: </strong></p>
          <p style='width:700px'>${careerTelephone}</p>
          <p style='width:700px'><strong>Instagram: </strong></p>
          <p style='width:700px'>${Insta}</p>
          <p style='width:700px'><strong>Website URL: </strong></p>
          <p style='width:700px'>${websiteURL}</p>
          <br>


          <p style='width:700px'><strong>Number of photos: </strong></p>
          <p style='width:700px'>${numbersOfPhotos}</p>
          <p style='width:700px'><strong>What type of content are you looking to create? : </strong></p>
          <p style='width:700px'>${dropdown1}</p>
          <p style='width:700px'><strong>If you require a model for your shoot : </strong></p>
          <p style='width:700px'>${dropdown2}</p>
          <p style='width:700px'><strong>Please let us know if you have any location preferences </strong></p>
          <p style='width:700px'>${locationPreference}</p>
          <p style='width:700px'><strong>Please list the products you would like photographed:: </strong></p>
          <p style='width:700px'>${products}</p>
          <br>


          <p style='width:700px'><strong>Do you have a soft and/or hard deadline for receiving the images? (If you have a specific date you need the images by, please state this below) </strong></p>
          <p style='width:700px'>${deadLine}</p>
          <p style='width:700px'><strong>Please list any specific props you'd like to see (or not see) in the photos: </strong></p>
          <p style='width:700px'>${props}</p>
          <p style='width:700px'><strong>Do you have a budget for props? *I may suggest specific props I would need to purchase to help bring out the BEST results for your photos.: </strong></p>
          <p style='width:700px'>${propsBudgetAndSuggestion}</p>
          <p style='width:700px'><strong>Are there any product combinations that must occur in a single photo? (Please list each photo combination required): </strong></p>
          <p style='width:700px'>${productCombination}</p>
          <p style='width:700px'><strong>What are your brand's colours? Please list both colour names and hex codes: </strong></p>  
          <p style='width:700px'>${brandColors}</p>
          <p style='width:700px'><strong>Message: </strong></p>
          <p style='width:700px'>${careerMessage}</p>
          ` ,
      attachments: attachments,
    });

    return res.status(200).end();
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
