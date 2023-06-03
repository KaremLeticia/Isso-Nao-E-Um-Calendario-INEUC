import {
    Container,
    ButtonArea,
    CreateItem,
    DaysArea,
    Items
} from './styles'

const Days = ({ press }) => {
    return (
        <Container>

            <ButtonArea onClick={press}>
                <CreateItem>Adicione um item</CreateItem>
            </ButtonArea>


            <DaysArea>

                <Items>Segunda</Items>
                <Items>Terça</Items>
                <Items>Quarta</Items>
                <Items>Quinta</Items>
                <Items>Sexta</Items>

            </DaysArea>

        </Container>
    )
}

export default Days