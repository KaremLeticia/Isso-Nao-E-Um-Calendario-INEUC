import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { auth, firestore } from '../../../firebase'

import { UserContext } from '../../Context/UserContext'

import {
    WelcomeArea,
    MainContent,
    Title,
    HabbitContent,
} from './styles'

import Header from '../../components/Header'
import Days from '../../components/Days'
import Habbit from '../../components/Habbit'

const Home = () => {

    return (
        <>
            <Header />

            <WelcomeArea>

                <Title>Bem vindo!</Title>

            </WelcomeArea>

            <MainContent>
                <Days />

                <HabbitContent>

                    <Habbit/>
                    <Habbit/>
                    <Habbit/>
                    <Habbit/>

                </HabbitContent>

            </MainContent>

        </>

    )
}

export default Home