import { useState } from "react";
import "./App.scss";
import Button from "./component/button/Button";
import Header from "./component/header/Header";
import Person from "./component/person/Person";
function App() {
  const [count, setCount] = useState(0);
  const click = (e) => {
    if (e.target.value === "next") {
      if (count >= 0 && count < 11) {
        setCount(count + 5);
      } else if (count >= 15) {
        setCount(0);
      }
    } else if (e.target.value === "prev") {
      if (count > 0) {
        setCount(count - 5);
      } else if (count <= 0) {
        setCount(15);
      }
    }
  };
  return (
    <div className="container">
      <Header count={count} />
      <Person count={count} />
      <Button func={click} />
    </div>
  );
}

export default App;
