import express from 'express'

const app = express();

app.use(express.json())

app.get("/", (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  return response.json({
    message: "PIETRO"
  })
})

app.listen(3333, () => {
  console.log("Server started!")
})