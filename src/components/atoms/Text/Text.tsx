import './style.css'

interface TextProps {
    text: string
}
const Text: React.FC<TextProps> = ({ text }) => <p>{text}</p>

export default Text