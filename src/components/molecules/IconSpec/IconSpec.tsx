import Icon from '../../atoms/Icon/Icon'
import './style.css'

const IconSpec = ({ children, icon }: { children: React.ReactNode, icon: string }) => {
    return (
        <span className='specification'>
            <div className='specification specification__icon svg'>
                <Icon type={icon} /> {children}
            </div>
        </span >
    )
}

export default IconSpec