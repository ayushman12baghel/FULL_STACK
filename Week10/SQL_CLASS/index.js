const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");
const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ayush',
    password:'qwerty123'
});

//inserting new data
// let q="insert into user (id,username,email,password) values ?";

// let data=[];

// let getRandomUser=()=> {
//     return [
//       faker.string.uuid(),
//       faker.internet.userName(),
//       faker.internet.email(),
//       faker.internet.password(),
//     ];
// };

// for(let i=1console.log(data);;i<=100;i++){
//     data.push(getRandomUser());
// }

// try{
//     connection.query(q,[data],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// }
// catch(err){
//     console.log(err);
// }
// connection.end();

let getRandomUser=()=> {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
};

//home route
app.get("/",(req,res)=>{
    let q="select count(id) from user";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let count=result[0]['count(id)'];
            res.render("home.ejs",{count});
        });
    }
    catch(err){
        console.log(err);
        res.send("Some problem in DB");
    }
});

//Show Route
app.get("/user",(req,res)=>{
    let q="select * from user";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let data=result;
            res.render("showusers.ejs",{data});
        })
    }
    catch(err){
        res.send("Some problem occured");
    }
});

//edit route
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`select * from user where id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user=result[0];
            res.render("edit.ejs",{user});
        })
    }
    catch(err){
        res.send("Some problem occured");
    }
});

//update route
app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let{password:formPass,username:newUsername}=req.body;
    let q=`select * from user where id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user=result[0];
            if(formPass!=user.password){
                res.send("Wrong Password");
            }else{
                let q2=`update user set username='${newUsername}' where id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    }
    catch(err){
        res.send("Some problem occured");
    }
})

//add user
app.get("/user/new", (req, res) => {
    res.render("new.ejs");
});
  
app.post("/user/new", (req, res) => {
    let { username, email, password } = req.body;
    let id = uuidv4();
    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        console.log("added new user");
        res.redirect("/user");
      });
    } catch (err) {
      res.send("some error occurred");
    }
});

//delete user
app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
        res.render("delete.ejs", { user });
      });
    } catch (err) {
      res.send("some error with DB");
    }
});
  
app.delete("/user/:id/", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
  
        if (user.password != password) {
          res.send("WRONG Password entered!");
        } else {
          let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
          connection.query(q2, (err, result) => {
            if (err) throw err;
            else {
              console.log(result);
              console.log("deleted!");
              res.redirect("/user");
            }
          });
        }
      });
    } catch (err) {
      res.send("some error with DB");
    }
});


app.listen("8080",()=>{
    console.log("server is listening on port 8080");
})