import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

if (process.env.NODE_env !== "test") {
  app.listen(8080, () => {
    console.log("Server running on port 8080");
  });
}

export default app;
