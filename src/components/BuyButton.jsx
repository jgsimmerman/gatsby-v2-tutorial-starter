import React, { useState } from 'react';
import { AddToCart } from 'react-snipcart'


let BuyButton = React.memo(({post, images}) => {
    const [selected, setSelected] = post.customField 
        ? useState(post.customField.values[0]) 
        : useState({});

    return (
    <div>
        { post.customField && <h3>{post.customField.name}</h3> }
        { post.customField &&
            <select 
                id={post.customField.name} 
                onChange={(e) => setSelected(e.target.value)} 
                value={selected}
                style={{
                    borderRadius: "5px",
                    paddingRight: "20px",
                    paddingBlockStart: "13px",
                    paddingBlockEnd: "13px",
                    marginRight: "15px"
                }}>
                {post.customField.values.map((x) => (<option key={x}>{x}</option>))}
            </select>
        }

        <button 
            style={{
                backgroundColor: "hsla(228, 34.9%, 83.1%)",
                borderRadius: "5px",
                marginTop: "36px",
                border: "0",
                color: "hsl(228, 34.9%, 23.1%)",
                fontWeight: "500",
                paddingBottom: "15px",
                paddingTop: "15px",
                paddingRight: "35px",
                paddingLeft: "35px",
                fontSize: "24"
            }}
            class="snipcart-add-item"
            data-item-id= {post.id}
            data-item-price={post.price}
            data-item-url={post.path}
            data-item-name={post.title}
            data-item-image={post.snipPic} // This doesn't work.
        >
            Add to Cart
            {/* <AddToCart data={{
                id: post.id,
                name: post.title,
                url: 'http://localhost:8000' + post.path,
                price: post.price,
                openCart: true,
                }}>
                Add to Cart 
            </AddToCart> */}
        </button>
    </div>
    )
})

export default BuyButton;