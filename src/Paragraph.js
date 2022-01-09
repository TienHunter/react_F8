import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
function Paragraph() {
   const context = useContext(ThemeContext)
   return (

      <p className={context.theme}>
         Text is a Google Chrome packaged app. It functions as a lightweight text
         editor that is not platform dependent. It is capable of working offline
         and supports syntax highlighting. Wikipedia
      </p>
   );
}
export default Paragraph;
