import React, { useState } from 'react';
import laptop from '../images/laptop.jpg'
import jeans from '../images/jeans.jpg'
import shoe from '../images/shoe.jpg'
import pencil from '../images/pencil.jpg'
import boat from '../images/boat.jpg'
import './Createbundle.css';

const Createbundle = () => {
    const [bundleForm, setBundleForm] = useState({
        product1: {
            id: "1",
            name: "Laptop",
            price: 200000,
            image: laptop
        },
        product2: {
            id: "1",
            name: "Laptop",
            price: 200000,
            image: laptop
        },
        discount: "10"

    })

    const [bundledProducts, setBundledProducts] = useState([])
    const [productitems, setproductitems] = useState([
        {
            id: "1",
            name: "Laptop",
            price: 200000,
            image: laptop
        },
        {
            id: "2",
            name: "Jeans",
            price: 999,
            image: jeans
        },
        {
            id: "3",
            name: "Nike-shoe",
            price: 1200,
            image: shoe
        },
        {
            id: "4",
            name: "Pencil",
            price: 100,
            image: pencil
        },
        {
            id: "5",
            name: "boatrockers Headset",
            price: 400,
            image: boat
        }
    ]);
    const handleChange = (e) => {
        if (e.target.name === "discount") {
            setBundleForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        } else {
            const item = productitems.filter(item => item.id === e.target.value)[0];
            setBundleForm(prev => ({ ...prev, [e.target.name]: item }));
        }
    };
    const createBundle = (e) => {
        e.preventDefault();
        const discountedPrice1 = bundleForm.product1.price - (bundleForm.product1.price * bundleForm.discount / 100);
        const discountedPrice2 = bundleForm.product2.price - (bundleForm.product2.price * bundleForm.discount / 100);
        const finalAmount = discountedPrice1 + discountedPrice2;

        const bundledProduct = {
            product1: {
                ...bundleForm.product1,
                price: discountedPrice1
            },
            product2: {
                ...bundleForm.product2,
                price: discountedPrice2
            },
            discount: bundleForm.discount,
            finalAmount: finalAmount
        };

        setBundledProducts([...bundledProducts, bundledProduct]);
    };
    return (
        <div className='createbundle'>
            <h2>Createbundle</h2>
            <form className='form' onSubmit={createBundle}>
                <label className='p1'>Product 1</label>
                <select name="product1" id="product1" onChange={handleChange}>
                    {productitems.map((item) => (
                        <option value={item.id}>{item.name}</option>

                    ))}
                </select>
                <label className='p2'>Product 2</label>
                <select name="product2" id="product2" onChange={handleChange}>
                    {productitems.map((item) => (
                        <option value={item.id}>{item.name}</option>

                    ))}
                </select>
                <label>Discount</label>
                <select name="discount" id="discount" onChange={handleChange}>
                    <option value="10">10%</option>
                    <option value="20">20%</option>
                    <option value="30">30%</option>
                    <option value="40">40%</option>
                </select>
                <button>Submit</button>

            </form>
            <div>
                {bundledProducts.map(product => (
                    <>
                        <label className='labelproduct1'>Product 1</label>


                        <div className="product1" key={product.product1}>
                            <img src={product.product1.image} width="200px" height="200px" alt="Product Image" />
                            <div className="product-details">
                                <h4 className="product-name">{product.product1.name}</h4>
                                <p className="product-price"> ${product.product1.price}</p>
                            </div>
                        </div>

                        <label className='labelproduct2' >Product 2</label>
                        <div className="product2" key={product.product2}>
                            <img src={product.product2.image} width="200px" height="200px" alt="Product Image" />
                            <div className="product-details">
                                <h4 className="product-name">{product.product2.name}</h4>
                                <p className="product-price"> ${product.product2.price}</p>
                            </div>
                        </div>
                        <div>{product.discount}</div>
                    </>
                ))}
            </div>

        </div>
    );

}

export default Createbundle;
