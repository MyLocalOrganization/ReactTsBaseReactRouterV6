import { ProductButton, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-style.css'

export const ShoppingPage = () => {

    const products = {
        id: '1',
        title: 'Coffe Mug - Card',
        img: './coffee-mug.png'
    }

    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                <ProductCard
                    product={products}
                    className="bg-dark text-white"
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-bold" />
                    <ProductButton className="custom-button" />
                </ProductCard>

                <ProductCard
                    product={products}
                    className="bg-dark text-white"
                >
                    <ProductImage
                        className="custom-image"
                    />
                    <ProductTitle
                        title="Titulo desde componente"
                        className="text-bold"
                    />
                    <ProductButton className="custom-button" />
                </ProductCard>

                <ProductCard
                    product={products}
                    style={{
                        backgroundColor:'#70D1F8'
                    }}
                >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButton />
                </ProductCard>
            </div>
        </div>
    )
}
