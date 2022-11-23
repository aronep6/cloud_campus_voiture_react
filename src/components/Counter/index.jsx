import { useEffect, useState } from 'react'
import Display from './Display'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount((prev) => prev + 1)
    const decrement = () => setCount((prev) => prev - 1)

    useEffect(() => {
        console.log('count changed', count)
    }, [count])

    return <div>
        <Display value={count} />

        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
}

export default Counter;