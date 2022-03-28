import React from 'react'
import render from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../02-components-patterns/components';
import { products1, products2 } from '../products';

test('debe de mostrar el componente con la imagen', () => {
    const wrapper = render.create(
        <ProductCard product={products2}>
            {
                () => (
                    <ProductImage img={products2.img}  />
                )
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
});

test('debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = render.create(
        <ProductCard product={products1}>
            {
                () => (
                    <ProductImage />
                )
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
});
