import { useRef, useContext } from 'react';
import { CarContext } from './contexts/CarContext';

export default function CarForm() {
    const { addCar } = useContext(CarContext);

    const car_name_ref = useRef();
    const car_kilometers_ref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        addCar({
            name: car_name_ref.current.value,
            kilometers: car_kilometers_ref.current.value
        });
        car_name_ref.current.value = '';
        car_kilometers_ref.current.value = '';
    };

    return <form onSubmit={ handleSubmit } style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '2em auto' }}>
        <h4>
            Ajouter une voiture
        </h4>
        <label htmlFor="car_name">Nom de la voiture</label>
        <input type="text" id="car_name" ref={car_name_ref} />
        <label htmlFor="car_kilometers">Kilométrage</label>
        <input type="number" id="car_kilometers" ref={car_kilometers_ref} />
        <button type="submit">Ajouter le véhicule</button>
    </form>
};