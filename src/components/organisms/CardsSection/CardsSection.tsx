import classnames from 'classnames'
import ProductCard, { IProductCardProps } from '../../molecules/ProductCard/ProductCard'
import TitleHeader from '../TitleHeader/TitleHeader'
import './style.css'

interface ICardsSectionProps {
    title: string,
    subtitle: string,
    items: IProductCardProps[],
    highlighted?: boolean
}
const CardsSection = ({
    title,
    subtitle,
    items,
    highlighted = false
}: ICardsSectionProps) => {

    const cardsSliderClassnames = classnames('cards-slider', {
        'cards-slider--special': highlighted
    })

    return (
        <>
            {items &&
            <section className={cardsSliderClassnames}>
                <TitleHeader title={title} subtitle={subtitle} />
                <div className='cards-slider__slider'>
                    {items.map((item, idx) => <ProductCard key={idx} {...item} />)}
                </div>
            </section>
            }
        </>
    )
}

export default CardsSection