import { useState, useMemo, useRef } from 'react';
// import Content from './Content.js';

function App() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])
  const inputName = useRef();

  const hanldeSubmit = () => {
    setProducts([...products, {
      name: name,
      price: +price
    }])
    setName('')
    setPrice('')
    inputName.current.focus()
  }

  const total = useMemo(() => {
    products.reduce((total, product) => {
      console.log('tinh toan lai ...');
      return total + product.price;
    }, 0)
  }, [products])

  return (
    <div>
      <input
        ref={inputName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name ...'
      />
      <br />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder='Enter your price ...'
      />
      <br />
      <button onClick={hanldeSubmit}>Add</button>
      <br />Total: {total}<br />
      <ul>
        {products.map((product, index) =>
          <li key={index} > {product.name} - {product.price} </li>
        )}
      </ul>
    </div>
  )
}

export default App;
