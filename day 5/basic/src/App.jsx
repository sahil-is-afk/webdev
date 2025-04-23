// import Navbar from "./pages/navbar";
// import Footer from "./pages/Footer";
// import Body from "./pages/Body";
// import Blog from "./pages/Blog";
// import Faq from "./pages/Faq";
// import Ctas from "./pages/Ctas";

// function App(){
//   console.log("sum");

//   return (
//   <>
//     <Blog/>
//     <Navbar/>
//     <Body/>
//     <Faq/>
//     <Footer/>
//     <Ctas/>
//   </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";

function App(){

  const [Count, setCount] = useState(0);
  const [byvalue, setbyvalue] = useState(0);
  const [text, settext] = useState("play");
  const play = () => {
    settext("play");
    setbyvalue(1);
  };
  const ten = () => {
    setbyvalue(10);
  };
  const reset = () => {
    setbyvalue(0);
    setCount(0);
  };
  const hundred = () => {
    setbyvalue(100);
  };

const pause = () => {
    settext("resume");
    setbyvalue(0)
}
    useEffect(() => {
      let timer = setTimeout(() => {
      setCount((count) => count +byvalue);
    }, 1000);
    return () => clearTimeout(timer)
  },);


  return(
    <>
    <div id="Timer">
    <h1>Counter:{Count}</h1>
    <button onClick={play}>{text}</button>
    <button onClick={play}>Count By 1</button>
    <br  />
    <button onClick={pause}>Pause</button>
    <button onClick={ten}>Count By 10</button>
    <br  />
    <button onClick={reset}>Reset</button>
    <button onClick={hundred}>Count By 100</button>
    </div>
    </>
  );

}

export default App;