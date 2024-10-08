import './App.css'
import HomeFunc from '../src/components/HeaderFunc'
import HeaderClass from '../src/components/HeaderClass'

const dishes = [
  {
    id: 1,
    name: 'Plato 1',
    description: 'Este es el plato 1',
    price: 10,
  },
  {
    id: 2,
    name: 'Plato 2',
    description: 'Este es el plato 2',
    price: 20,
  },
  {
    id: 3,
    name: 'Plato 3',
    description: 'Este es el plato 3',
    price: 15,
  },
];


function App() {
  return (
    <>
      <div className='App'>
        <HomeFunc dishes= {dishes} />
        <HeaderClass dishes = {dishes} />

       </div>
    </>
  )
}

export default App