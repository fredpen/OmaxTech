var express = require("express"),
   bodyParser = require("body-parser"),
   app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(express.static(__dirname + "/public"));

// the landing page
app.get("/", function(req, res) {
   res.render("landing")
});

// the home page
app.get("/home", function(req, res) {
   res.render("home")
});

// about page
app.get("/about", function(req, res) {
   res.render("about")
});

// contact page
app.get("/contact", function(req, res) {
   res.render("contact")
});

// contact logic
app.post("/contact", function(req, res) {
   var name = req.body.name,
      email = req.body.email,
      content = req.body.content,
      number = req.body.number;
   res.redirect("home")
});


// the local server
app.listen(4000, function() {
   console.log("database is running");
})


// app.listen(process.env.PORT, process.env.IP, function() {
//    console.log("database is running");
// });
