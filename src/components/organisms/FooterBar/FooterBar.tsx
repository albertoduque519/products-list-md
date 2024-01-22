import classnames from 'classnames'
import Text from '../../atoms/Text/Text'
import './style.css'

const FooterBar = ({ fixed }: { fixed?: boolean }) => {

    const footerClasses = classnames('footerBar', {
        'footerBar--fixed': fixed
    })

    return (
        <footer className={footerClasses}>
            <Text text={'Todos los derechos reservados'} />
        </footer>
    )
}

export default FooterBar