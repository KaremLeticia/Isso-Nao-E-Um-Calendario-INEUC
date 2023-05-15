import {
    HelpContanier,
    HelpTitle,
    QuestionList,
    Question,
} from './styles'

const Help = () => {
    return (
        <>
            <HelpContanier>
                <HelpTitle>Dúvidas frequentes</HelpTitle>

                <QuestionList>
                    <Question>O que é o INEUC?</Question>
                </QuestionList>
            </HelpContanier>
        </>
    )
}

export default Help