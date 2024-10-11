const mongoose=require("mongoose");

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const booksSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20,
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        default:0,
    },
});

const Book=mongoose.model("Book",booksSchema);

// let book3=new Book({
//     title:"xyzhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
//     author:"ifyufuyfyugf",
// });

// book3.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

Book.findByIdAndUpdate("67091789b2c2a72bdfa8054d",{price:500},{new:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})