import Home from "./components/pages/Home";
import BooksApp from "./components/pages/BooksApp";
import BooksContext from "./context";
import { useContext, useState } from "react";
function App() {
  const props = useContext(BooksContext);
  const [home, setHome] = useState(true);
  return (
    <>
      {!home && <BooksApp props={{ ...props, setHome: setHome }} />}{" "}
      {home && <Home props={{ ...props, setHome: setHome }} />}
    </>
  );
}

export default App;
