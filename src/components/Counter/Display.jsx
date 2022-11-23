import { memo } from 'react'

const Display = ({ value }) => {
  return (
    <div>{ value }</div>
  )
}

export default memo(Display, (prevProps, nextProps) => {
    return prevProps.value >= 9 && nextProps.value >= 9
})