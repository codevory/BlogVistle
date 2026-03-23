import './Tooltip.css'

const Tooltip = ({ children, content }) => {
  return (
    <div className='tooltip-container'>
      {children}
      <span className='tooltip-text'> {content}</span>
    </div>
  )
}

export default Tooltip
