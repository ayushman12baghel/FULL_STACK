function doSomething(event){
    console.log(event)
    console.log("button was clicked");
}


export default function Button(){
    return(
        <div>
            <button onClick={doSomething}>Click me!</button>
        </div>
    )
}