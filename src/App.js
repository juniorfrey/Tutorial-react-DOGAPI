import React, { useState, useEffect } from "react";
import Card from './components/Card';
import Select from './components/Select';
import  getDog  from './helpers/getDog'
import Error from "./components/Error";

const initialDog = {
  image:
    "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg",
  breed: {
    id:1,
    name:'Labrador'
  },
};

const App = () => {

  const [dog, setdog] = useState(initialDog);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    updateDog();
  }, [])

  const updateDog = (breedId) => {
    setloading(true);
    getDog(breedId).then((newDog) => {
      setdog(newDog);
      setloading(false);
      //console.log(newDog)
    }).catch((error) => {
      seterror("Error al cargar el perro");
      setloading(false);
    })
    
  }
 
  return (
    <div className="app">
      <h1>Aplicación para Mostrar Perros</h1>
      <Select updateDog={updateDog} />
      {error && <Error error={error} />}
      <Card dog={dog} updateDog={updateDog} loading={loading} />
    </div>
  );
}

export default App


