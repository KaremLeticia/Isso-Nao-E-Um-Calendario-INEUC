import { useEffect, useState, useContext } from 'react';
import { PacmanLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

import {
    Screen
} from './styles'

const LoadingScreen = () => {

    const { userData } = useContext(UserContext)

    const navigate = useNavigate()

    /* LoadingScreen */
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    useEffect(() => {
      
        setTimeout(() => {

            navigate('home')

        }, 3000)
      
    }, [])
    

    return (
        <>
            <Screen>
                <PacmanLoader
                    color={"#1565C0"}
                    loading={true}
                    cssOverride={override}
                    size={150}
                />
            </Screen>
        </>
    )
}

export default LoadingScreen