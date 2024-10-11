const mongoose=require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);

// const user2=new User({
//     name:"Ayush2",
//     email:"ayush99@email.com",
//     age:25,
// });

// user2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{console.log(err)});


// User.insertMany([
//     {name:"Tony",email:"tony@email.com",age:88},
//     {name:"Peter",email:"peter@email.com",age:45},
//     {name:"Bruce",email:"bruce@email.com",age:65},
// ]).then((data)=>{
//     console.log(data);
// });

// User.find({age:{$gte:45}}).select('name -_id').then((data)=>{
//     console.log(data);
// }).catch(err=>{console.log(err)});

// User.findOneAndUpdate({name:'Bruce'},{age:55},{new:true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

User.findOneAndDelete({name:'Peter'}).then((res)=>{
    console.log(res);
})