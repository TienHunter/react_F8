import { memo } from 'react'

function Content({ onIncrease }) {
   console.log('re-render');
   return (
      <div>
         <div> Hello anh em </div>
         <button onClick={onIncrease}> Click me </button>
      </div>
   );
}

export default memo(Content);
