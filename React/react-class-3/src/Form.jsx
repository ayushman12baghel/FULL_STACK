import { useState } from "react"

export default function(){
    let[formData,setFormData]=useState({
        fullName:"",
        username:"",
        password:""
    })

    let handleInputChange=(event)=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;
        setFormData((currData)=>{
            return {...currData,[fieldName]:newValue}
        })
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData)
        setFormData({
                fullName:"",
                username:"",
                password:""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">FullName</label>
            <input id="fullname" type="text" placeholder="Enter your name" name="fullName" value={formData.fullName} onChange={handleInputChange}/>
            <br />
            <br />
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" placeholder="Enter your username" value={formData.username} onChange={handleInputChange}/>
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange}/>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}