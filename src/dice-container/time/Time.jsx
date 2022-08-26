// import React, { useState, useEffect } from "react";

// export default function Time(props) {

//   useEffect(() => {
//     let intervalId = setInterval(() => {
//       props.setTime(prevCount => prevCount + 1)
//     }, 1000);
//     return (() => {
//       clearInterval(intervalId)
//       console.log('may')
//     })
//   }, []);

//   return <h1>Time: <span className="font-bold">{props.time}</span>s</h1>
// };
