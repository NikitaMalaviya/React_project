import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const API = () => {
  let [data, setdata] = useState([]);
  const [view, setview] = useState({});

  let name = useRef();
  let age = useRef();

  // get data
  let fetchData = () => {
    axios.get("http://localhost:3001/post").then((res) => {
      setdata(res.data);
      //   console.log(res.data);
    });
  };

  //add data
  let handleSubmit = () => {
    let Data = {
      name: name.current.value,
      age: age.current.value,
    };
    console.log(Data);
    axios.post("http://localhost:3001/post", Data).then((res) => {
      console.log(res.data);
      setdata([...data, res.data]);
    });
  };

  //delete data
  let deleteData = (id) => {
    axios.delete(`http://localhost:3001/post/${id}`).then((res) => {
      setdata(data.filter((val) => val.id !== id));
    });
  };

  //--------update--------//

  //set view
  let viewData = (index) => {
    let users = data[index];
    setview(users);
  };

  let handleView = (e) => {
    setview({ ...view, [e.target.name]: e.target.value });
  };

  let handleUpdate = () => {
    axios.put(`http://localhost:3001/post/${view.id}`, view).then((res) => {
      setdata(
        data.map((val, ind) => {
          if (val.id == res.data.id) {
            return res.data;
          } else {
            return val;
          }
        })
      );
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    {/*data*/}
    <div style={{textAlign: 'center'}}>
      <label style={{marginBottom:'5px'}}> ENTER YOUR DATA:-</label><br />
      <input style={{marginRight:'10px'}} type="text" name="name" ref={name} placeholder="enter your name" />
      <input type="number" name="age" ref={age} placeholder="enter your age" />
      <button style={{marginLeft:'15px'}} onClick={handleSubmit}>Add</button>
    </div>
      <br /><br />
      {/*update data*/}
      <div style={{textAlign: 'center'}}>
        <label style={{marginBottom:'5px'}}>UPDATE DATA:-</label><br />
        <input style={{marginRight:'10px'}} type="text" name="name" value={view.name} onChange={handleView} placeholder="enter your updated name"/>
        <input type="number" name="age" value={view.age} onChange={handleView} placeholder="enter your updated age"/>
        <button style={{marginLeft:'15px'}} onClick={handleUpdate}>Update</button>
      </div>
      <br /><br />
      {/* show data */}
      <div className="row">
          {data?.map((val, ind) => {
            return (
              <div class="card" style={{ width: "18rem", margin:'10px 5px'}}>
                <div class="card-body">
                  <h5 class="card-title">{val.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{val.age}</h6>
                  <button onClick={() => deleteData(val.id)} class="card-link">
                    Delete
                  </button>
                  <button class="card-link" onClick={() => viewData(ind)}>
                    update
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default API;
