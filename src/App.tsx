// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import axios from "axios";
import Router from "./pages/Router";

function App() {
  // const [count, setCount] = useState(0);

  // const [data, setData] = useState(null);
  // console.log("data ::", data);
  // const onClick = async () => {
  //   try {
  //     const response = await axios.get(

  // '경로'
  //     );
  //     setData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <div>
    //       <button onClick={onClick}>불러오기</button>
    //     </div>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    <>
      {/* <ToastContainer />
      {init ? <Router isAuthEnticated={isAuthEnticated} /> : <Loading />} */}
      <Router />
    </>
  );
}

export default App;
