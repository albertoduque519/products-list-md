import DefaultLayout from "../../components/templates/DefaultLayout"
import CardsSection from "../../components/organisms/CardsSection/CardsSection.tsx"

import './style.css'

const Home = () => {
  const products =[
    { alt:'tv', image:'/assets/tv.jpg', name:'Tv de 43', description:'Es un tv para toda la familia', stock:'5', price:'30000' },
    { alt:'tv-lg', image:'/assets/tv2.jpg', name:'Tv Lg de 53', description:'Es un tv para toda la familia y para una mejor experiencia con videjuegos', stock:'15', price:'50000' },
    { alt:'tv-43', image:'/assets/tv4.jpg', name:'Tv de 32', description:'Es un tv para tenerlo en el mejor lugar de tu hogar', stock:'45', price:'10000' },
    { alt:'tv-54', image:'/assets/tv3.jpg', name:'Tv de 65', description:'Es un tv de 65" para toda la familia', stock:'46', price:'60000' }
  ]

  return (
    <>
      <DefaultLayout>
        <CardsSection items={products} title="Últimos productos" subtitle="Novedades primavera 2024" />
        <CardsSection items={[...products].reverse()} highlighted title="Destacados" subtitle="Best sellers y ofertas" />
      </DefaultLayout>
    </>
  )
}

export default Home