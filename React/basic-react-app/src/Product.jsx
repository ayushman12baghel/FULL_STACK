import "./Product.css";
import Price from "./Price"

export default function Product({title,idx}){
    let oldPrices=["12,498","11,900","15,999","899"];
    let newPrices=["11,500","9,999","12,599","699"];
    let description=[["8,000 DPI","5 Programmable buttons"],["Intuitive surface","Designes for ipad"],["Designes for ipad","Intuitive surface"],["Wireless","5 Programmable buttons"]]
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    )
}