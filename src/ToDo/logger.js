
function logger(reducer) {
   return (prevState, action) => {
      console.group(action.type)

      console.log('prevState:', prevState);
      console.log('Action', action);

      const newState = reducer(prevState, action)

      console.log('newState:', newState);

      console.groupEnd()
      return newState
   }
}
export default logger