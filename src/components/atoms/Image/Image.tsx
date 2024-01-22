interface ImageProps {
    source: string, 
    altText: string
}
const Image = ({ source, altText } : ImageProps) => <img src={source} alt={altText} />

export default Image