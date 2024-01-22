import classnames from "classnames"
import Title from "../../atoms/Title/Title"
import Text from "../../atoms/Text/Text"
import IconSpec from '../IconSpec/IconSpec'
import Image from "../../atoms/Image/Image"
import './style.css'


export interface IProductCardProps { 
    alt: string, 
    image: string, 
    name: string, 
    description: string, 
    stock: string, 
    price: string 
}
const ProductCard = ({ alt, image, name, description, stock, price }: IProductCardProps) => {

    const cardClassNames = classnames('card', {
        'card--hasImage': image
    })

    return (
        <article className={cardClassNames}>
            {image && <Image source={image} altText={alt} />}
            <div className="card__details">
                <Title level="h3" text={name} />
                <Text text={description} />
                <footer className="card__footer">
                    <IconSpec icon="flag">{stock} uds.</IconSpec>
                    <IconSpec icon="info">{price} $</IconSpec>
                </footer>
            </div>
        </article>
    )
}

export default ProductCard