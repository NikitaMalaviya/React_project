// import React from 'react'
// import imgs from "./img/71gyjE_OR9L._SL1500.webp"

// function Cards({ data }) {
//     return (
//         <>
//             <div className="card" style={{ width: "18rem" }}>
//                 <img src={imgs} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                     <h5 className="card-title">{data.fname}</h5>
//                     <p className="card-text">{data.dec}</p>
//                     <h5 className="card-text">{data.price}$</h5>
//                     <a href="#" className="btn btn-primary">MORE</a>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Cards

// import React from "react";
// import { useState } from "react";

// const Addinput = () => {
//   const [counter, setCounter] = useState(0);

//   let HandleClick = () => {
//     setCounter(counter + 1);
//     console.log(counter);
//   };
//   return (
//     <>
//       <br />
//       <div className="App">
//         <button onClick={HandleClick}>Click Me!</button>
//         <br />
//         {Array.from(Array(counter)).map((val, index) => {
//           return (
//             <>
//               <br />
//               <input key={val} type="text"></input>
//               <button>Submit</button>
//               <br />
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Addinput;

import React from "react";
import { useState } from "react";

const Addinput = () => {
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  return (
    <div>
      <button onClick={addInput}>+</button>
      {arr.map((item, i) => {
        return (
          <>
            <br />
            <input
              onChange={handleChange}
              value={item.value}
              id={i}
              type={item.type}
              size="40"
            />
            <button>Submit</button>
          </>
        );
      })}
    </div>
  );
};
export default Addinput;
