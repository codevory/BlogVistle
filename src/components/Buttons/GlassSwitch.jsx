import PropTypes from 'prop-types'
import styles from './GlassSwitch.module.css'


const GlassSwitch = ({ isOn, content, ariaLabel, onChange, disabled = false, size = 'medium' }) => {
  return (
    <button type='button'
      role='switch'
      aria-label={ariaLabel}
      aria-checked={isOn}
      onClick={onChange}
      className={`glass ${styles.switch} ${isOn ? styles.on : ''}`}  >
      <span className={`${styles.thumb}`}>{content}</span>
    </button>
  )
}

GlassSwitch.PropTypes = {
  isOn: PropTypes.bool.isRequired,
  content: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.string,
}

export default GlassSwitch
