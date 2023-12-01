import * as React from 'react';
import './product.css';
import { useStateValue } from "../../StateProvider";

export default function Product({id,title,image,price,rating}){
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      };

    return (
        <div className='product'>
            <div className='info'>
                <p>{title}</p>
                <p><small>₹</small><strong>{price}</strong></p>
                <div className='rating'>
                    {Array(rating).fill().map((_,i)=>(<p>🌟</p>))}
                </div>
            </div>
            <img src={image} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}