import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { UserContext } from '../../Context/UserContext'

import {
    MainContent
} from './styles'

import Header from '../../components/Header'
import Days from '../../components/Days'
import Carrossel from '../../components/Carousel'

const Home = () => {

    const {user} = useContext(UserContext)

    return (
        <>
            <Header />

            <h1>Bem vindo {user}</h1>

            <MainContent>
                <Days/>
            </MainContent>            

        </>

    )
}

export default Home