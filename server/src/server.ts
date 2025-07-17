import express from "express";
import passport from "passport";
import session from "express-session";
import nodesRouter from "./routes/nodes";
import edgesRouter from "./routes/edges";
import rootLayout from "./lib/layouts/rootLayout";

const app = express();

app.use(express.static("src/public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(nodesRouter);
app.use(edgesRouter);

app.get("/", (req, res) => {
  res.send(rootLayout("/css/index.css", "/js/index.js"));
});

app.get("*", async (req, res) => {
  res.send("Not Found");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(
    `server listening on PORT: ${PORT} and env: ${process.env.NODE_ENV}`
  )
);
