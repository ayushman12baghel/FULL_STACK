const mongoose = require("mongoose");
main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));
const { Schema } = mongoose;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema=new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
})

const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);

const addData=async ()=>{
    // let user1=new User({
    //     username:"rahul",
    //     email:"rahul@gmail.com",
    // })
    let user=await User.findOne({username:"rahul"});
    let post1=new Post({
        content:"Hello",
        likes:48,
    })

    post1.user=user;
    // let result1=await user1.save();
    let result2=await post1.save();
    // console.log(result1);
    // console.log(result2);
}

addData();