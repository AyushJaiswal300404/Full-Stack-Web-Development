import "./Product.css"

function Product({title, price}){
    // const list = features.map((feature) => <li>{feature}</li>);
    let styles = {backgroundColor: price>1500? "blue": "yellow"};
    return (
        <div className="product-card" style ={styles}>
            <h2 className="product-title">{title}</h2>
            <p className="product-price">${price}</p>
            {/* <ul>
                {features.map((feature) => (<li>{feature}</li>))}
            </ul> */}
            {price>1500? <p>Discount of 5%</p>:null}
        </div>
    )
}

export default Product;