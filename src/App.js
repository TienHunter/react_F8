import Heading from "./components/Heading"
import Paragraph from "./components/Paragraph"
import Button from "./components/Button"
function App() {
  return (
    <div style={{ padding: 20 }}>
      <Heading />
      <Paragraph />
      <Button />
      <Button primary />
      <Button primary disabled />
    </div>
  )
}

export default App