import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000

let users = [];

function randomnumber(){
  return Math.floor(Math.random()* 100000);
}


app.post('/user', (req, res) => {

  let newuser = {
    id : randomnumber(),
    fullname : req.body.fullname,
    password : req.body.password
  }
   
  users.push(newuser)
    console.log(req.body);
   
    res.send('your input is created')
  })
  


app.get('/users', (req, res) => {
  res.send(users)
})

// app.get('/user:userId', (req, res) => {
//  let userId = req.params.userId;

//  let isfound = false;

//  for(let i =0 ; i < users.length ; i ++){
//   if(users[i].id == userId ){
//     res.send(users[i]);
//     isfound = true;
//     break;
//   }
//  }

//  if(!isfound){
//   res.send("user is not created")
//  }
// })

app.get("/user/:userId", (req, res) => { // get single user

  let userId = req.params.userId;
  let isFound = false;

  for (let i = 0; i < users.length; i++) {
      if (users[i].id == userId) {
          res.send(users[i]);
          isFound = true;
          break;
      }
  }
  if (!isFound) {
      res.send("user not found");
  }
})

app.put('/user:userId', (req, res) => {
  let userId = req.params.userId;

  let userIndex = -1;

  for(let i = 0 ; i<users.length ; i++){
    if(users[i].id == userId){
      userIndex = i ;  
      break ;
      }
  }

  if (userIndex === -1){
    res.send("user is not found")
  }else{
    if(req.body.fullname){
      users[userIndex].fullname = req.body.fullname
    };
    if(req.body.password){
      users[userIndex].password = req.body.password
    }
    

  }
  res.send(users[userIndex]);
})










app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})