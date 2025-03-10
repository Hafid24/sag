import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BooksApp from "./components/pages/BooksApp";
import BooksContext from "./context";
import { useContext } from "react";
function App() {
  const props = useContext(BooksContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home props={{ ...props }} />} />
        <Route path="/table" element={<BooksApp props={{ ...props }} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
