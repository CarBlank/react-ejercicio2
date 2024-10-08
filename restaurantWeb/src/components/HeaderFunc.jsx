import React from 'react'

const Home = ( props ) => {
    const  {dishes} = props
    return (
      <div>
        <h1>HomeFunc</h1>
        <h2>Lista de Platos</h2>
        <ul>
          {dishes.map((props) => (
            <li key={props.id}>
              <h3>{props.name}</h3>
              <p>{props.description}</p>
              <p>Precio: ${props.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Home