import Car from "./Car";

export default function CarList({ cars }) {
    return cars.map((car, index) => <Car key={index} { ...car } />);
};