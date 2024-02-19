import React from 'react'
import imgs from "./img/71gyjE_OR9L._SL1500.webp"


function Cards({ data }) {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={imgs} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.fname}</h5>
                    <p className="card-text">{data.dec}</p>
                    <h5 className="card-text">{data.price}$</h5>
                    <a href="#" className="btn btn-primary">MORE</a>
                </div>
            </div>
        </>
    )
}

export default Cards