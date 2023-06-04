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

                        <NavButtons>
                            <Link to={'#'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}><FcCalendar size={'35px'} /><Span>INEUC </Span>não é um calendário</Link>
                        </NavButtons>

                        <NavButtons>
                            <Link to={'#'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>Como usar</Link>
                        </NavButtons>

                        <NavButtons>
                            <Link to={'/SignUp'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>Cadastre-se</Link>
                        </NavButtons>

                        <NavButtons>
                            <Link to={'/ajuda'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>Ajuda</Link>
                        </NavButtons>

                    </NavContent>

                </NavContainer>

            </HeaderContainer>
        </>
    )
}

export default Header