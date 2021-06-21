import express, { request, response } from "express";

const app = express();

app.get("/teste", (request, response) => {
    return response.send("Olá NLW");
})

app.post("/teste", (request, response) => {
    return response.send("Olá NLW método POST");
})

app.listen(3000, () => console.log("Server is Running"))