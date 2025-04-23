import Product from "./Product";
import './Product.css'

function ProductTab(){
    // let features= ["Feature 1", "Feature 2", "Feature 3"];
    return (
        <div className="product-grid">
            <Product title="phone" price="1000" />
            <Product title="laptop" price="2000"/>
            <Product title="tablet" price="3000"/>
        </div>
    )
}

export default ProductTab; 