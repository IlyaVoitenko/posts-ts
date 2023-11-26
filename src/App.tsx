import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPosts from "./components/ListPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
