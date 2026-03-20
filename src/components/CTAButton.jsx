import { Link } from 'react-router-dom'
import './CTAButton.css'

function CTAButton({ 
  children = '立即咨询', 
  to = '/contact', 
  variant = 'primary',
  size = 'medium',
  onClick,
  type = 'link'
}) {
  const className = `cta-button cta-${variant} cta-${size}`

  if (type === 'button') {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default CTAButton
