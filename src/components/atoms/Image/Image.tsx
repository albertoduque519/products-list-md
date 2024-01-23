interface ImageProps {
    source: string, 
    altText: string
}
const convertImage = (source: string) => {
    return new URL(source, import.meta.url).href
}
const Image = ({ source, altText } : ImageProps) => <img src={convertImage(source)} alt={altText} />

export default Image