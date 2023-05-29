import { Link } from 'react-router-dom'

import {
    MainContent
} from './styles'

import Header from '../../components/Header'
import Days from '../../components/Days'
import Carrossel from '../../components/Carousel'

const Home = () => {
    return (
        <>
            <Header />
            <MainContent>
                <Days/>
            </MainContent>            

        </>

    )
}

export default Home