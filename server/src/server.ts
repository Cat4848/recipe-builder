import express from "express";
import passport from "passport";
import session from "express-session";
import { getAllNodes } from "./services/NodesTable/actions";
import { getAllEdges } from "./services/EdgesTable/actions";

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

app.get("/nodes", async (req, res) => {
  const result = await getAllNodes();
  if (result instanceof Error) {
    res.status(500).send(result.message);
    return;
  }
  res.send(result);
  return;
});

app.get("/edges", async (req, res) => {
  const result = await getAllEdges();
  if (result instanceof Error) {
    res.status(500).send(result.message);
    return;
  }
  res.send(result);
  return;
});

app.post("/nodes/new", async () => {});

app.post("/edges/new", async () => {});

app.get("*", async (req, res) => {
  res.send("Not Found");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(
    `server listening on PORT: ${PORT} and env: ${process.env.NODE_ENV}`
  )
);
