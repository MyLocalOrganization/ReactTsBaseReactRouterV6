import { ProductButton, ProductCard, ProductImage, ProductTitle } from "../components"
import { productos } from "../data/product"
import '../styles/custom-style.css'

const product = productos[0];

export const ShoppingPage = () => {

    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard
                key={product.id}
                product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButton />
                            {/*<button onClick={reset}>Reset</button>*/}
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}
