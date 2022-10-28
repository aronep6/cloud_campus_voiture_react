import { createContext } from "react";

export const CarContext = createContext(null);

export default function CarContextProvider({ initialValues, children }) {
    return <CarContext.Provider value={ initialValues }>
        { children }
    </CarContext.Provider>
};