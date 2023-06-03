import { firestore } from '../../../firebase'
import { Checkbox } from '@mui/material'

import {
    Content,
    DeleteArea,
    TitleArea,
    Title,
    Ghost,
    CheckArea,
    CheckButton,

} from './styles'

import { MdDone, MdDelete } from 'react-icons/md'

const Habbit = ({ title, deleteHabbit, dayCheck, id }) => {

    const checkday = async (day) => {

        const docRef = await firestore.collection('data').doc(id).get()

        const data = docRef.data()
        const days = data.checking

        switch (day) {
            case 'seg':
                days.seg = !days.seg
                break;
            case 'ter':
                days.ter = !days.ter
                break;
            case 'qua':
                days.qua = !days.qua
                break;
            case 'qui':
                days.qui = !days.qui
                break;
            case 'sex':
                days.sex = !days.sex
                break;
            default:
                break;
        }

        await firestore.collection('data').doc(id).update({
            checking: days
        })

    }

    return (
        <Content>

            <DeleteArea>
                <MdDelete size={22} style={{ cursor: 'pointer' }} onClick={deleteHabbit} />
            </DeleteArea>

            <TitleArea>

                <Title>{title}</Title>

            </TitleArea>

            <Ghost />
            <CheckArea>

                <CheckButton onClick={() => { checkday('seg') }}>
                    <Checkbox checked={dayCheck.seg} />
                </CheckButton>

                <CheckButton onClick={() => { checkday('ter') }}>
                    <Checkbox checked={dayCheck.ter} />
                </CheckButton>

                <CheckButton onClick={() => { checkday('qua') }}>
                    <Checkbox checked={dayCheck.qua} />
                </CheckButton>

                <CheckButton onClick={() => { checkday('qui') }}>
                    <Checkbox checked={dayCheck.qui} />
                </CheckButton>

                <CheckButton onClick={() => { checkday('sex') }}>
                    <Checkbox checked={dayCheck.sex} />
                </CheckButton>

            </CheckArea>

        </Content>
    )
}

export default Habbit