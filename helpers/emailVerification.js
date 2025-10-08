const nodemailer = require("nodemailer");

let emailVerification=async (email)=>{
const transporter = nodemailer.createTransport({
  service:"gmail",

  auth: {
    user: "arnob4all@gmail.com",
    pass: "jvmexojwmtmzwtdf",
  },
});

  const info = await transporter.sendMail({
    from: '"Arnob" <arnob4all@gmail.com>',
    to: email,
    subject: "Email verification",
    text: "Please verify your mail for security propose", 
    html: `<div style=" border-radius: 10px; margin: auto auto; background: rgb(226, 226, 226); width: 30%; text-align: center; padding: 50px 0; " ><div style=" font-weight: 700; font-size: 40px; text-align: center; color: rgb(33, 117, 234); " > MERN Dev </div><hr><div></div><p style="font-family: sans-serif; font-weight:600; padding: 55px 40px"> Please confirm This email is your, then Click in the verification button to verify your account to secure your account. Thank you. </p><a style=" padding: 15px 25px; margin-top: 20px; background: rgba(116, 116, 196, 0.662); text-decoration: none; border-radius: 10px; font-size: 20px; font-weight: 600; color: black; 
    " href="" >Verification</a ><div style="padding-top: 50px;">copy right 2011</div></div>`, 
  });
}





module.exports=emailVerification