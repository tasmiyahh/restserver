import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000

let home = [];


app.post('/home', (req, res) => {

    console.log(req.body);
    home.push(req.body);
    res.send('your input is created')
  })
  


app.get('/home', (req, res) => {
  res.send(home)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})