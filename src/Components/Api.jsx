// import axios from "axios";
// import React, { useEffect, useRef } from "react";
// import { useState } from "react";

// const Api = () => {
//   let [data, setdata] = useState([]);
//   let name = useRef();
//   let age = useRef();

//   // get data
//   let fetchdata = () => {
//     axios.get("http://localhost:3001/post").then((res) => {
//       setdata(res.data);
//       // console.log(res.data);
//     });
//   };

//   // add data
//   let HandleaData = () => {
//     let Data = {
//       name: name.current.value,
//       age: age.current.value,
//     };
//     axios.post("http://localhost:3001/post", Data).then((res) => {
//       setdata([...data, res.data]);
//     });
//   };

//   //delete data
//   let deleteData = (id) => {
//     console.log(id);

//     axios.delete(`http://localhost:3001/post/${id}`).then((res) => {
//       console.log(res);
//       setdata(data.filter((val) => val.id !== id));
//     });
//   };

//   useEffect(() => {
//     fetchdata();
//   }, []);
//   return (
//     <>
//       <input type="text" name="name" placeholder="name" />
//       <input type="number" age="age" placeholder="age" />
//       <button onClick={HandleaData}>Add</button>

//       <div className="row">
//         {data?.map((val, ind) => {
//           return (
//             <div className="col-3">
//               <div class="card" style={{ width: "18rem;" }}>
//                 <div class="card-body">
//                   <h5 class="card-title">{val.name}</h5>
//                   <h6 class="card-subtitle mb-2 text-muted">{val.age}</h6>
//                   <p class="card-text">
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </p>
//                   <button onClick={() => deleteData(val.id)} class="card-link">
//                     delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Api;

import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

const Api = () => {
  let [data, setdata] = useState([]);
  let name = useRef();
  let age = useRef();

  //get data
  let fetchData = () => {
    axios.get("http://localhost:3001/post").then((res) => {
      //   console.log(res.data);
      setdata(res.data);
    });
  };

  //add data
  let handleSubmit = () => {
    let dataa = {
      name: name.current.value,
      age: age.current.value,
    };

    axios.post("http://localhost:3001/post", dataa).then((res) => {
      console.log(res.data);
      // fetchData()
      setdata([...data, res.data]);
    });
  };

  //delete data
  let deleteData = (id) => {
    console.log(id);

    axios.delete(`http://localhost:3001/post/${id}`).then((res) => {
      console.log(res);
      setdata(data.filter((val) => val.id !== id));
    });
  };

  useEffect(() => {
    //get data
    fetchData();
  }, []);

  return (
    <>
      <input type="text" name="name" placeholder="name" ref={name} />
      <input type="number" name="age" placeholder="age" ref={age} />
      <button onClick={handleSubmit}>Add</button>

      <div class="row">
        {data?.map((val, ind) => {
          return (
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">{val.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{val.age}</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button class="card-link">view</button>
                <button onClick={() => deleteData(val.id)} class="card-link">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Api;
