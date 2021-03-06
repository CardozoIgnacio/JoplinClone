var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/user");
var notebookRouter = require("./routes/booknote");
var flash = require("express-flash");
var session = require("express-session");
var passport = require("passport");
var initalize = require("./passport-config");
initalize(passport);

//require('./db/dbAssociations');
//const db = require("./db/dbConector");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(flash());
app.use(
	session({
		secret: process.env.SECRET, //Encritpa los datos
		resave: false, //Evita que se vuelva a salvar si no hay cambios
		saveUninitialized: false, //Evita la inicializacion de la session en vacio
		//cookie: { secure: true },

	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/booknote", notebookRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
