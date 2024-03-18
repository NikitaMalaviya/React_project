import React, { useState } from 'react'
import Cards from "./Cards"
import imgphone from "./img/pexels-photo-920382.webp"
import { Button } from '@mui/material'
function Form() {

    const [data, setdata] = useState({})
    const [cards, setCards] = useState([])

    const handle = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
        console.log(handle,"handleeeeeeeeee");
    }

    function isEmpty(obj) {
        for (const prop in obj) {
            if (Object.hasOwn(obj, prop)) {
                return false;
            }
        }

        return true;
    }
    const add = () => {
        console.log(data);
        if (isEmpty(data)) {
            alert("fill detail then add product")
            return
        }
        setCards([...cards, data])
    }


    return (
        <React.Fragment key={data}>
            <div className="container new-form">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <input type="text" value={data.fname} placeholder='enter name' name='fname' onChange={handle} /><br />
                        <input type="text" placeholder='enter decription' name='dec' onChange={handle} /><br />
                        <input type="number" placeholder='price' name='price' onChange={handle} /><br />
                        <input type="file" onChange={handle} />
                        <br /><br />
                        <button onClick={add}>add</button><br/>
                        <Button variant='text'>Click me!</Button>
                        <Button variant='contained'>Click me!</Button>
                        <Button variant='outlined'>Click me!</Button>
                    </div>
                    <div className="col-5">
                        <img src={imgphone} className='phoneModel' alt="" />
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            {
                cards?.map((d, i) => {

                    return (
                        <>

                            <div key={i} className="col-3">
                                <Cards data={d} />
                            </div>

                        </>
                    )
                })
            }



        </React.Fragment>
    )
}
export default Form