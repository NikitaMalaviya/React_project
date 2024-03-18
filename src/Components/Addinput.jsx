import React from "react";
import { useState } from "react";

const Addinput = () => {
  const [counter, setCounter] = useState(0);

  let HandleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <>
      <br />
      <div className="App">
        <button onClick={HandleClick}>Click Me!</button>
        <br />
        {Array.from(Array(counter)).map((val, index) => {
          return (
            <>
              <br />
              <input key={val} type="text"></input>
              <button>Submit</button>
              <br />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Addinput;

// import React from "react";
// import { useState } from "react";

// const Addinput = () => {
//   const inputArr = [
//     {
//       type: "text",
//       id: 1,
//       value: "",
//     },
//   ];

//   const [arr, setArr] = useState(inputArr);

//   let addInput = () => {
//     setArr((s) => {
//       return [
//         ...s,
//         {
//           type: "text",
//           value: "",
//         },
//       ];
//     });
//   };

//   const handleChange = (e) => {
//     e.preventDefault();

//     const index = e.target.id;
//     setArr((s) => {
//       const newArr = s.slice();
//       newArr[index].value = e.target.value;

//       return newArr;
//     });
//   };

//   return (
//     <div>
//       <br />
//       <button onClick={addInput}>+</button>
//       {arr.map((val, i) => {
//         return (
//           <>
//             <br />
//             <input
//               onChange={handleChange}
//               value={val.value}
//               id={i}
//               type={val.type}
//               size="40"
//             />
//             <button>Submit</button>
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default Addinput;

// import React, { useState } from "react";

// const Addinput = () => {
//   const [inputList, setinput] = useState([{ firstName: "", lastName: "" }]);

//   const inputchange = (e, ind) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[ind][name] = value;
//     setinput(list);
//   };

//   const Addinputfield = () => {
//     setinput(...inputList, { firstName: "", lastName: "" });
//   };

//   return (
//     <>
//       <div className="row">
//         <div className="col-10">
//           <h5 className="fw-bold">
//             Dynamically add / remove input fields react
//           </h5>

//           {inputList.map((val, ind) => {
//             return (
//               <>
//                 <label>FirstName</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="firstName"
//                   onChange={(e) => inputchange(e, ind)}
//                 />
//                 <label>LastName</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="lastName"
//                   onChange={(e) => inputchange(e, ind)}
//                 />
//                 <button className="btn btn-success" onClick={Addinputfield}>
//                   Add more
//                 </button>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Addinput;
