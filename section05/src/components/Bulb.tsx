import {useState} from 'react'

const Bulb = () => {
    const [light, setLight] = useState("OFF");
  
    console.log(light);
    return (
        <div>
          <div>
            {light === "ON" 
            ? (<h1 style={{ backgroundColor: "orange"}}>ON</h1>) 
            : (<h1 style={{ backgroundColor: "gray"}}>OFF</h1>)}
          </div>
          <button onClick={()=> {
            setLight(light === "ON" ? "OFF" : "ON")
          }}> Turn {light === "ON" ? "Off" : "On"}
          </button>  
        </div>
      )
}

export default Bulb;