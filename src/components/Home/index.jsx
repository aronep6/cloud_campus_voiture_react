import { useState } from "react";
import CarForm from "./CarForm";
import CarList from "./CarList";
import CarContextProvider from "./contexts/CarContext.jsx";

export default function index() {
    const [cars, setCars] = useState([{
        id: 1,
        name: "Peugeot 208",
        kilometers: 10000
    }, {
        id: 2,
        name: "Renault Clio",
        kilometers: 20000
    }, {
        id: 3,
        name: "Citroën C3",
        kilometers: 30000
    }]);

    const addCar = (car) => {
        setCars([...cars, { ...car, id: cars.length + 1 }]);
    };

    const removeCar = (inId) => {
        const updatedCars = [ ...cars ];
        const carIndex = updatedCars.findIndex(car => car.id === inId);
        updatedCars.splice(carIndex, 1);
        setCars(updatedCars);
    };

    const updateCar = (inId, car) => {
        const updatedCars = [ ...cars ];
        const carToUpdate = updatedCars.find(car => car.id === inId);

        carToUpdate.name = car.name;
        carToUpdate.kilometers = car.kilometers;

        setCars(updatedCars);
    };

    const handleRemoveOldCars = () => {
        const updatedCars = cars.filter(car => car.kilometers < 120000);
        setCars(updatedCars);
    };

    return <CarContextProvider initialValues={{ 
            cars, addCar, removeCar, updateCar
        }}>

        <div>
            Bonjour, vous avez { cars.length } véhicule(s).
        </div>

        <CarForm />

        <CarList cars={ cars } />

        <button onClick={ handleRemoveOldCars }>
            Retirer les véhicules de plus de "120 000 km"
        </button>

    </CarContextProvider>
};