import {
    Content,
    TitleArea,
    Title,
    CheckArea,
    CheckButton,

} from './styles'

import { MdDone } from 'react-icons/md'

const Habbit = () => {
    return (
        <Content>

            <TitleArea>
                <Title>Tomar banho</Title>
            </TitleArea>


            <CheckArea>

                <CheckButton>
                    <MdDone />
                </CheckButton>

                <CheckButton>
                    <MdDone />
                </CheckButton>

                <CheckButton>
                    <MdDone />
                </CheckButton>

                <CheckButton>
                    <MdDone />
                </CheckButton>

                <CheckButton>
                    <MdDone />
                </CheckButton>

            </CheckArea>

        </Content>
    )
}

export default Habbit