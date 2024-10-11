const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main().then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats=[
    {
        from:"rahul",
        to:"neha",
        message:"could you please  lend me your password",
        created_at:new Date()
    },
    {
        from:"rohit",
        to:"jannat",
        message:"Send me your exam notes",
        created_at:new Date()
    },
    {
        from:"priya",
        to:"aditi",
        message:"hi how are you",
        created_at:new Date()
    },
    {
        from:"jhanvi",
        to:"riya",
        message:"hi what are you doing",
        created_at:new Date()
    },
]

Chat.insertMany(allChats);
    