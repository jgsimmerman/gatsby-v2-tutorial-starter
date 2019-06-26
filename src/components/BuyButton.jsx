import React, { useState } from 'react';
import { AddToCart } from 'react-snipcart'


let BuyButton = React.memo(({post, images}) => {
    const [selected, setSelected] = post.customField 
        ? useState(post.customField.values[0]) 
        : useState({});
    //var filteredImgs = images.filter(x => x.name === selected);
    //var choosenImgSrc = filteredImgs.length > 0
    //? filteredImgs[0].src
    //: images[0].src

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
        {/* <button 
        data-item-custom1-name={post.customField ? post.customField.name : null}
        data-item-custom1-value={selected}
        style={{
            backgroundColor: "#212121",
            borderRadius: "5px",
            color: "#F5F5F5",
            fontWeight: "bold",
            paddingBottom: "15px",
            paddingTop: "5px",
            paddingRight: "35px",
            paddingLeft: "35px",
            fontSize: "24"
        }}
        id="buyButton"
        className='snipcart-add-item buyBtn'
        data-item-id={post.id}
        data-item-price={post.price}
        data-item-name={post.title}
        data-item-description={post.description}
        data-item-url={"http://localhost:8000" + post.path}>
        Buy for {post.price}$
        </button> */}
        <button 
            style={{
                backgroundColor: "#212121",
                borderRadius: "5px",
                color: "#F5F5F5",
                fontWeight: "bold",
                paddingBottom: "15px",
                paddingTop: "5px",
                paddingRight: "35px",
                paddingLeft: "35px",
                fontSize: "24"
            }}
        >
            <AddToCart data={{
                id: post.id,
                name: post.title,
                url: 'http://localhost:8000' + post.path,
                price: post.price,
                openCart: true,
                }}>
                Add to Cart for ${post.price}
            </AddToCart>
        </button>
    </div>
    )
})

export default BuyButton;