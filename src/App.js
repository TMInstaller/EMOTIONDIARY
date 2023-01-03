import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";

// COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton text={"왼쪽 버튼"} onClick={() => alert("click left")} />
          }
          rightChild={
            <MyButton
              text={"오른쪽 버튼"}
              onClick={() => alert("click right")}
            />
          }
        />
        <h2>App.js</h2>

        <MyButton
          text={"button"}
          onClick={() => alert("button click")}
          type={"positive"}
        />
        <MyButton
          text={"button"}
          onClick={() => alert("button click")}
          type={"negative"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("button click")}
          type={"default"}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
          /* 일기 아이디가 존재하지 않을 이유가 없으므로 이대로 둠 */
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
