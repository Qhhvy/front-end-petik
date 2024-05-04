const express = require("express");
const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv");
const ProductRoute = require("./routes/ProductRoute.js");
const UserRoute = require("./routes/UserRoute.js");
const AuthRoute = require("./routes/AuthRoute.js");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./config/database.js");
const fileUpload = require("express-fileupload");
const path = require("path");

dotenv.config();

const app = express();

const sessionStore = new SequelizeStore({
  db: db,
});

// agar dapat mengakses gambar di public
app.use(express.static("public"));
app.use(fileUpload());

// Middleware
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json()); // Ini adalah middleware untuk mengurai body permintaan JSON

// Routes
app.use(ProductRoute);
app.use(UserRoute);
app.use(AuthRoute);

// Landing page untuk penggunaan API
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server listening
app.listen(process.env.APP_PORT || 5000, () => {
  console.log("Server up and running...");
});
