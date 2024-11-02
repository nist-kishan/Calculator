import Display from "./Components/display"
import Button from "./Components/button"
import KeyPad from "./Components/KeyPad"
import { useState } from "react"
function App() {
  const [key, setkey] = useState("");

  const onClick = (item) => {
    if (item === "C") {
      setkey("")
    }
    else if (item === "=") {
      let res = eval(key)
      setkey(res)
    }
    else {
      let screen = key + item;
      setkey(screen)
    }
  }
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-8 m-auto mt-5">
            <div className="col col-6 pe-3 pb-1 border border-dark">
              <center>
                <Display displayVal={key}></Display>
                <Button Keys={KeyPad()} handleKeyPress={onClick}></Button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
