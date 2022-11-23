import React, { useContext, createContext, useState } from 'react';

const Day = ({ day }) => {
    const { setSelectedDate } = useContext(CalendarContext);
    
    const date = new Date(day);
    const today = new Date();

    const isToday = today.toDateString() === date.toDateString();
    const isCurrentMonth = today.getMonth() === date.getMonth();

    return (
        <div
            onClick={() => setSelectedDate(date)}
            className={`day rounded-full cursor-pointer flex items-center justify-center duration-200 hover:bg-gray-100 p-3 
            ${isToday ? 'bg-blue-500 hover:text-blue-500 text-white' : ''}
            ${!isCurrentMonth ? 'text-gray-300' : ''}    
            `}>
            { date.getDate() }
        </div>
    );
};

const Week = ({ days }) => {
    return <div className="grid grid-cols-7">
        {
            days.map(day => (
                <Day key={day} day={day} />
            ))
        }
    </div>
};

const DatePicker = () => {
    const { selectedDate, setSelectedDate } = useContext(CalendarContext);

    const today = new Date(selectedDate);

    const header = ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."];

    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const firstDayOfWeek = firstDayOfMonth.getDay();

    const days_before = (firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1) + 1;

    const days = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
        days.unshift(new Date(today.getFullYear(), today.getMonth(), -i));
    }

    for (let i = 1; i <= 7 * 6 - days_before; i++) {
        days.push(new Date(today.getFullYear(), today.getMonth(), i));
    }

    return <div className="full-date-selector max-w-md shadow-2xl shadow-slate-300/50 border p-3.5 rounded-lg mx-auto">
        <div className="grid grid-cols-7">
            {
                header.map(day => (
                    <div key={day} className="day duration-200 font-bold p-2">
                        <span className="day">{day}</span>
                    </div>
                ))
            }
        </div>
        <div className="grid grid-cols-7">
            {
                days.map((day, index) => {
                    return <Day key={index} day={day} />
                })
            }
        </div>
    </div>
};

const CalendarContext = React.createContext();

export default function Calendar() {
    const [ selectedDate, setSelectedDate ] = useState(new Date());
    return <CalendarContext.Provider value={{ selectedDate, setSelectedDate }}>
        <h1 className='mb-6'>Calendrier</h1>

        <DatePicker />

        <div className="mt-6">
            <h2 className="mb-3">Date sélectionnée</h2>
            <div className="bg-gray-100 p-3 rounded-lg">
                { selectedDate.toDateString() }
            </div>
        </div>
    </CalendarContext.Provider>
};