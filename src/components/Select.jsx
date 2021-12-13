import React, { useState, useEffect } from 'react'
import getBreeds from '../helpers/getBreeds';
import Error from './Error';


const initialBreeds = [
    {
        id: 1,
        name: 'Boxer'
    },
    {
        id:2,
        name: 'Labrador'
    }
];
const Select = ({ updateDog }) => {
  const [breeds, setbreeds] = useState(initialBreeds);
  const [error, seterror] = useState(null);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds().then((newBreeds) => {
      setbreeds(newBreeds);
    })
    .catch((error) => {
        seterror('Error al cargar las razas')
    })
  };

  return (
    <div>
      <select onChange={(e) => updateDog(e.target.value)}>
        {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
       { error && <Error error={error}/> }
    </div>
  );
};

export default Select
