import { Link } from 'react-router-dom'

import {
    CarouselContent
} from './styles'

import Header from '../../components/Header'
import Carrossel from '../../components/Carousel'

const Home = () => {
    return (
        <>
            <Header />
            <div>Home</div>
            <Link to={'/test'}><button>Next Page</button></Link>

            <CarouselContent>
                <Carrossel />
            </CarouselContent>

        </>

    )
}

export default Home