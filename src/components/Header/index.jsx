import { Link } from 'react-router-dom'

import {
    HeaderContainer,
    NavContainer,
    NavContent,
    NavButtons,
    Span,
} from './styles'

import { FcCalendar } from 'react-icons/fc'

const Header = () => {
    return (
        <>
            <HeaderContainer>

                <NavContainer>

                    <NavContent>

                        <Link to={'#'} style={{ textDecoration: 'none' }}>
                            <NavButtons><FcCalendar size={'35px'}/><Span>INEUC </Span>não é um calendário</NavButtons>
                        </Link>

                        <Link to={'#'} style={{ textDecoration: 'none' }}>
                            <NavButtons>Como usar</NavButtons>
                        </Link>

                        <Link to={'/SignUp'} style={{ textDecoration: 'none' }}>
                            <NavButtons>Cadastre-se</NavButtons>
                        </Link>

                        <Link to={'/ajuda'} style={{ textDecoration: 'none' }}>
                            <NavButtons>Ajuda</NavButtons>
                        </Link>

                    </NavContent>

                </NavContainer>

            </HeaderContainer>
        </>
    )
}

export default Header