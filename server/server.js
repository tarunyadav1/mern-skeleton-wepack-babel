import config from "./../config/config";
import app from "./express";
import mongoose from "mongoose";

mongoose.set("useCreateIndex", true);

mongoose.connect(
  config.mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Problem to connect with DB");
    }

    console.log("Connected to DB");
  }
);

mongoose.connection.on("error", (err) => {
  logError(err);
});

app.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info(`Sever started on port ${config.port}`);
});
