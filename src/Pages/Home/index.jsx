import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { UserContext } from '../../Context/UserContext'

import {
    WelcomeArea,
    MainContent,
    Title
} from './styles'

import Header from '../../components/Header'
import Days from '../../components/Days'
import Carrossel from '../../components/Carousel'

const Home = () => {

    const {user} = useContext(UserContext)

    return (
        <>
            <Header />

            <WelcomeArea>

                <Title>Bem vindo, {user}</Title>

            </WelcomeArea>

            <MainContent>
                <Days/>
            </MainContent>            

        </>

    )
}

export default Home