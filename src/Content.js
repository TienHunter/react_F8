import { useState, useEffect, useRef } from 'react'


function Content() {
   const [count, setCount] = useState(60)
   const [start, setStart] = useState(false)
   const timeId = useRef()
   const prevCount = useRef()
   useEffect(() => {
      prevCount.current = count
   }, [count])
   const handleStart = () => {
      setStart(true)
      if (!start) {
         timeId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
         }, 1000)
      }
      console.log('start ->', timeId.current);

   }
   const handleStop = () => {
      setStart(false)
      clearInterval(timeId.current)
      console.log('stop ->', timeId.current);
   }
   console.log(count, prevCount.current);
   return (
      <div>
         <h1>{count}</h1>
         <button onClick={handleStart} > start </button>
         <button onClick={handleStop} > stop </button>
      </div>
   )
}

export default Content;
