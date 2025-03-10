import Home from "./components/pages/Home";
import BooksList from "./components/pages/BooksList";
import BooksContext from "./context";
import { useContext, useState } from "react";
function App() {
  const props = useContext(BooksContext);
  const [home, setHome] = useState(true);
  return (
    <>
      {!home && <BooksList props={{ ...props, setHome: setHome }} />}{" "}
      {home && <Home props={{ ...props, setHome: setHome }} />}
    </>
  );
}

export default App;
