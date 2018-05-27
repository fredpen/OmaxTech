var express = require("express"),
   bodyParser = require("body-parser"),
   nodemailer = require('nodemailer'),
   app = express();

// using the app dependencies
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(express.static(__dirname + "/public"));


// the routes
// the landing page route
app.get("/", function(req, res) {
   res.render("landing")
});

// the home page route
app.get("/home", function(req, res) {
   res.render("landing")
});

// about page route
app.get("/about", function(req, res) {
   res.render("about")
});

// contact page route
app.get("/contact", function(req, res) {
   res.render("contact")
});

// electrical installation route
app.get("/services/electrical_installation", function(req, res) {
   res.render("services/electric")
});

// fire prevention and protection route
app.get("/services/fire", function(req, res) {
   res.render("services/fire")
})

// contact logic
app.post("/contact", function(req, res) {
   var name = req.body.name,
      email = req.body.email,
      content = req.body.content,
      number = req.body.number;

   var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: 'fredrickksola@gmail.com',
         pass: 'lautech@60'
      }
   });

   var mailOptions = {
      from: email,
      to: 'fredricksola@yahoo.com',
      subject: "An email from your website Omax technologies",
      text: name,
      html: content, name
   };

   transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
         console.log(error);
      } else {
         console.log('Email sent: ' + info.response);
      }
   });
   res.redirect("/")
});


// the local server
app.listen(4000, function() {
   console.log("database is running");
})


// app.listen(process.env.PORT, process.env.IP, function() {
//    console.log("database is running");
// });
