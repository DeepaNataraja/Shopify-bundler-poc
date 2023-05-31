import React, { useState } from 'react';
import laptop from '../images/laptop.jpg'
import jeans from '../images/jeans.jpg'
import shoe from '../images/shoe.jpg'
import pencil from '../images/pencil.jpg'
import boat from '../images/boat.jpg'
import table from '../images/table.jpg'
import top from '../images/top.jpg'
import './Data.css';

const Data = () => {
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

  const AddItem = () => {
    const newProduct = {
      id: `${productitems.length + 1}`,
      name: "Table",
      price: 400,
      image: table
    };

    setproductitems([...productitems, newProduct]);
  };

  const removeitem = (id) => {
    const updateditems = productitems.filter((item) => item.id !== id);
    setproductitems(updateditems);
  };

  return (
    <>
      <div className='data'>
        {productitems.map((val, key) => {
          console.log(val)
          return (
            <div className="product" key={key}>
              <div className='no.of item'>
                <p>Showing 1-10 Results</p>
                </div>
              <img src={val.image} width="200px" height="200px" alt="Product Image" />
              <div className="product-details">
                <h2 className="product-name">{val.name}</h2>
                <p className="product-price"> ${val.price}</p>
              </div>
              <button className='remove-button' onClick={() => removeitem(val.id)}>
                Remove
              </button>
            </div>
          )
        })}

      </div>
      <button className='addbutton' onClick={AddItem}>
        Add Products
      </button>
    </>
  );
};


export default Data;