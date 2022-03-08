import { ProductButton, ProductCard, ProductImage, ProductTitle } from "../components"

export const ShoppingPage = () => {

    const products = {
        id: '1',
        title: 'Coffe Mug - Card',
        img: './coffee-mug.png'
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                <ProductCard product={products} >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductButton />
                </ProductCard>

                <ProductCard product={products} >
                    <ProductImage />
                    <ProductTitle title="Titulo desde componente" />
                    <ProductButton />
                </ProductCard>
            </div>
        </div>
    )
}
