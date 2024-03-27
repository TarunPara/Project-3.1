const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const passport = require("passport");
const httpStatus = require("http-status");
const routes = require("./src/routes/v1");
const config = require("./src/config/config");
const { authLimiter } = require("./src/middlewares/rateLimiter");
const { errorConverter, errorHandler } = require("./src/middlewares/error");
const { jwtStrategy } = require("./src/config/passport");
const ApiError = require("./src/utils/ApiError");
const app = express();

// if (config.env !== "test") {
//   app.use(morgan.successHandler);
//   app.use(morgan.errorHandler);
// }

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors("*"));
app.options("*", cors());

app.use(express.static("uploads"));

// jwt authentication
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

// limit repeated failed requests to auth endpoints
if (config.env === "production") {
  app.use("/v1/auth", authLimiter);
}

// v1 api routes
app.use("/v1", routes);

app.post("/checkWord", async (req, res) => {
  const para = req.body.para;

  const count = para.split("").length;

  const words_arr = para.split(" ");

  let firstRepeatedWord = { word: "", repeated: 0 };
  let secondRepeatedWord = { word: "", repeated: 0 };
  let thirdRepeatedWord = { word: "", repeated: 0 };
  await new Promise((resolve, reject) => {
    words_arr.forEach((word) => {
      const repeatedWords = words_arr.filter((w) => w === word);
      if (repeatedWords.length > firstRepeatedWord.repeated) {
        console.log("yes");
        firstRepeatedWord = { word, repeated: repeatedWords.length };
      } else if (
        repeatedWords.length > secondRepeatedWord.repeated &&
        word !== firstRepeatedWord.word
      ) {
        secondRepeatedWord = { word, repeated: repeatedWords.length };
      } else if (
        repeatedWords.length > thirdRepeatedWord.repeated &&
        word !== secondRepeatedWord.word &&
        word !== firstRepeatedWord.word
      ) {
        thirdRepeatedWord = { word, repeated: repeatedWords.length };
      }
    });
    resolve();
  });

  res.json({ count, firstRepeatedWord, secondRepeatedWord, thirdRepeatedWord });
});
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);
module.exports = app;
