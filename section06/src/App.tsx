
import './App.css'
import {useState, useEffect, useRef } from 'react'

import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Even from './components/Even'

// state는 부모와 자식간 정보를 가져야하는 관계에서
// 부모에 있어야한다!

function App() {

  const [count, setCount] = useState(0);
  const isMount = useRef(false);
  
  // life-cycle 1. mount
  useEffect(() => {
    console.log("mount!");
    if (!isMount.current) {
      isMount.current = true;
    }
  }, []);

  // life-cycle 2. update
  useEffect(() => { 
    if (isMount) {
      console.log("update");
    }
  })

  // life-cycle 3. unmount


  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter App!</h1>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even/> : null }
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
