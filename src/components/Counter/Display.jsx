import { memo } from 'react'

const Display = ({ value }) => {
    console.log('Display component rendered')

    return (
        <div>{value}</div>
    )
}

export default memo(Display, (_, nextProps) => {
    return nextProps.value >= 9
})