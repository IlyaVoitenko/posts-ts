import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Common from "./components/Common";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Common />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
