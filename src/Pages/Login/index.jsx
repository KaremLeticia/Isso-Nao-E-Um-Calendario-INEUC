import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
    LoginContainer,
    DisplayContent,
    DisplayImg,
    LoginContent,
    LoginTitle,
    Span,
    InputArea
} from './styles'

import { TextField, Button } from '@mui/material'

import calendar from '../../assets/calendar.svg'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <LoginContainer>

                <DisplayContent>
                    <DisplayImg src={calendar}/>
                </DisplayContent>

                <LoginContent>

                    <LoginTitle>Faça seu <Span>Login</Span></LoginTitle>

                    <InputArea>
                        <TextField 
                            sx={{ width: '30rem' }}
                            placeholder='E-mail'
                            type='email'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField 
                            sx={{ width: '30rem' }}
                            placeholder='Senha'
                            type='password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </InputArea>

                    <Button 
                        sx={{ width: '30rem', height: '3rem', marginTop: '20px' }}
                        variant='contained'
                        onClick={() => navigate('/home')/* Função autenticar login */}
                    >
                        ENTRAR
                    </Button>

                </LoginContent>

            </LoginContainer>
        </>
    )
}

export default Login

// fiz merda