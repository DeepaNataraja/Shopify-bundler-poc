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
    const createBundle = (e) => {
        e.preventDefault()
        console.log(bundleForm)
        setBundledProducts([...bundledProducts, bundleForm])
    }
    const handleChange = (e) => {
        const item = productitems.filter(item => item.id === e.target.value)[0]
        setBundleForm(prev => ({ ...prev, [e.target.name]: item }))
    }

    return (
        <div className='createbundle'>
            <h2>Createbundle</h2>
            <form onSubmit={createBundle} className='form'>
                <label className='p1'>Product 1</label>
                <select className="product1" id="product1" onChange={handleChange}>
                    {productitems.map((item) => (
                        <option value={item.id}>{item.name}</option>

                    ))}
                </select>
                <label className='p2'>Product 2</label>
                <select className="product2" id="product2" onChange={handleChange}>
                    {productitems.map((item) => (
                        <option value={item.id}>{item.name}</option>

                    ))}
                </select>
                <label className='dis'>Discount</label>
                <select className="discount" id="discount" onChange={handleChange}>
                    <option value="10">10%</option>
                    <option value="20">20%</option>
                    <option value="30">30%</option>
                    <option value="40">40%</option>
                </select>
                <button className='submit'>Submit</button>

            </form>
            <div>
                {bundledProducts.map(product => (
                    <>
                        <label>Product 1</label>


                        <div className="product" key={product.product1}>
                            <img src={product.product1.image} width="200px" height="200px" alt="Product Image" />
                            <div className="product-details">
                                <h2 className="product-name">{product.product1.name}</h2>
                                <p className="product-price"> ${product.product1.price}</p>
                            </div>
                        </div>

                        <label>Product 2</label>


                        <div className="product" key={product.product2}>
                            <img src={product.product2.image} width="200px" height="200px" alt="Product Image" />
                            <div className="product-details">
                                <h2 className="product-name">{product.product2.name}</h2>
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