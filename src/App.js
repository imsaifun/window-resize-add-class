import React,{ useLayoutEffect, useState } from "react";

function App() {
    const [size, setSize] = useState(0);
    console.log(size);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener("resize", updateSize);
    }, []);
  return (
     <div className={size < 991 ? "red": "green"}>

<h1>{size}</h1>
    </div>
  );
}

export default App;
