import Video from './Video'
import { useRef, useEffect } from 'react'

function App() {
  const videoRef = useRef()
  useEffect(() => {
    console.log(videoRef.current);
  })

  const hanldePlay = () => {
    videoRef.current.play()
  }
  const hanldePause = () => {
    videoRef.current.pause()
  }
  return (
    <div>
      <h1>Hello ae f8</h1>
      <Video ref={videoRef} />
      <button onClick={hanldePlay}>Play</button>
      <button onClick={hanldePause}>Pause</button>
    </div>
  )
}
export default App