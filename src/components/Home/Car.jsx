import { useState, useContext, useRef } from 'react';
import { CarContext } from './contexts/CarContext';

function Car({ id, name, kilometers }) {
    const car_name_ref = useRef();
    const car_kilometers_ref = useRef();

    const [edit, setEdit] = useState(false);
    const { removeCar, updateCar } = useContext(CarContext);

    const handleUpdate = (e) => {
        e.preventDefault();

        updateCar(id, {
            name: car_name_ref.current.value,
            kilometers: car_kilometers_ref.current.value
        });

        setEdit(false);
    };

    const backgroundColor = kilometers > 120000 ? 'red' : kilometers < 50000 ? 'green' : 'white';

    return <div style={{ 
            display: 'flex', 
            backgroundColor,
            flexDirection: 'row', 
            justifyContent: "space-between", 
            maxWidth: '500px', 
            margin: '2em auto', 
            border: '1px solid black', 
            padding: '1em' 
        }}>
        <span style={{ fontWeight: "bold" }}>
            {name} - {kilometers} KM
        </span>
        { !edit && <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button onClick={() => setEdit(!edit)}>
                Modifier
            </button>

            <button onClick={() => removeCar(id)}>
                Supprimer le véhicule
            </button>
        </div> }

        { edit && <form onSubmit={ handleUpdate } style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '2em auto' }}>
            <h4>
                Modifier une voiture
            </h4>
            <label htmlFor="car_name">Nom du véhicule</label>
            <input type="text" id="car_name" ref={car_name_ref} defaultValue={name} />
            <label htmlFor="car_kilometers">Kilométrage</label>
            <input type="number" id="car_kilometers" ref={car_kilometers_ref} defaultValue={kilometers} />
            <button type="submit">Mettre à jour le véhicule</button>
        </form> }
    </div>
}

export default Car;