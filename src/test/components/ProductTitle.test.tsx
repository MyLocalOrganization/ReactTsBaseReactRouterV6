import React from 'react'
import render from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../02-components-patterns/components';
import { products1, products2 } from '../products';


describe('ProductTitle', () => {
    test('debe de mostrar el componente de forma correcta con el titulo personalizado', () => {
        const wrapper = render.create(
            <ProductTitle title="Custom Product" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = render.create(
            <ProductCard product={products1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    

});