
import Context from './Content'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import './App.css'
function App() {
  const context = useContext(ThemeContext)
  return (
    <div>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Context />
    </div>
  )
}
export default App