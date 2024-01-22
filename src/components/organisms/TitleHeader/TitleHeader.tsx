import './style.css'
import Title from '../../atoms/Title/Title'

const TitleHeader = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <header>
            <Title level="h2" text={title}></Title>
            {subtitle && <p className="titleHeader__subtitle">{subtitle}</p>}
        </header>
    )
}

export default TitleHeader