import classnames from "classnames"
import Icon from '../Icon/Icon'
import './style.css'

interface ButtonProps {
  variant: string; 
  text: string; 
  icon: string;
  onClick?: () => void;
}
const Button = ({ variant, text, icon, onClick }: ButtonProps) => {

  const buttonClasses = classnames('button', {
    'button--dark': variant === 'dark',
    'button--light': variant === 'light',
    'button--warning': variant === 'warn',
    'button--hasIcon': icon
  })
  
  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon && <Icon type={icon} />}
      {text}
    </button>
  )
}

export default Button