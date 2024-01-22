import './style.css'

interface TitleProps {
    level: 'h1' | 'h2' | 'h3';
    text: string;
}

const Title: React.FC<TitleProps> = ({ level, text }) => {
    const Heading = level as keyof JSX.IntrinsicElements;

    return <Heading>{text}</Heading>;
};

export default Title;