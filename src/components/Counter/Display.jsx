import { memo } from 'react'

const Display = ({ value }) => {
  return (
    <div>{ value }</div>
  )
}

export default memo(Display, (_, nextProps) => {
    return nextProps.value >= 9
})