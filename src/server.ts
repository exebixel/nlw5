import express from 'express';

const app = express();

app.get("/", (resquest, response) => {
  return response.send("Olá NLW 05");
})

app.post("/", (resquest, response) => {
  return response.send({
    message: "Olá NLW 05!"
  })
})

app.listen(3333, () => console.log("Server is running on port 3333"));
