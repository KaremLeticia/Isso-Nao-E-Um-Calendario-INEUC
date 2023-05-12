import {
    LoginContainer,
    LoginContent,
    LoginTitle,
    Span,
} from './styles'

import { TextField } from '@mui/material'

const Login = () => {
    return (
        <>
            <LoginContainer>

                <LoginContent>
                    <LoginTitle>Faça seu <Span>login</Span></LoginTitle>
                    <TextField size='20' />
                    <TextField size='90' />
                </LoginContent>

            </LoginContainer>
        </>
    )
}

export default Login

// fiz merda