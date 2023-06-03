import { useContext, useEffect, useState } from 'react'
import { Modal, TextField, Button } from '@mui/material'
import { Link, useAsyncError, useNavigate } from 'react-router-dom'
import { auth, firestore, firebase } from '../../../firebase'
import { Howl } from 'howler'

import { UserContext } from '../../Context/UserContext'

import {
    WelcomeArea,
    MainContent,
    Title,
    HabbitContent,
    ModalContainer,
    FormBox,
    LoadingScreen
} from './styles'

import Header from '../../components/Header'
import Days from '../../components/Days'
import Habbit from '../../components/Habbit'

import deleteAudio from '../../assets/delete.mp3'

const Home = () => {

    const navigate = useNavigate()

    const { userData, listData } = useContext(UserContext)
    /* Modal open and clsoe */
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /* HabbitForms */
    const [habbitTitle, setHabbitTitle] = useState('')
    const [shown, setShown] = useState(false)

    /* Habbit list */
    const [habbits, setHabbits] = useState([])
    const habbitRef = firestore.collection('users').doc(userData.userId).collection('data')

    /* Delete habbit function */
    const deleteHabbit = async (id) => {

        await habbitRef
            .doc(id)
            .delete()
            .catch((error) => {
                alert(error.message);
            });

        const sound = new Howl({
            src: deleteAudio
        })

        sound.play()

    }

    /* Create habbit function  */
    const createHabbit = async (title) => {

        if (title == '') {

            alert('Você não digitou nenhum hábito!')
            handleClose()

        } else {

            setHabbitTitle('')

            /* firestore data upload */

            const doc = await habbitRef.add({
                title: title,
                checking: {
                    seg: false,
                    ter: false,
                    qua: false,
                    qui: false,
                    sex: false,
                },
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
                .catch((error) => {
                    alert(error.message);
                });

            doc.update({ id: doc.id })

            handleClose()

        }

    }

    const loginCheck = () => {

        { !userData ? navigate('/') : console.log('Usuário logado')}

    }

    useEffect(() => {

        loginCheck()

        setHabbits(listData)
        console.log(listData)
        console.log(habbits)

        habbitRef.orderBy('timestamp', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const mock = []
                    querySnapshot.forEach((doc) => {
                        const { title, id, checking } = doc.data()
                        mock.push({
                            id: id,
                            data: <Habbit title={title} deleteHabbit={() => deleteHabbit(id)} dayCheck={checking} id={id} />
                        })
                    })
                    setHabbits(mock)
                }
            )

    }, [])

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <ModalContainer>

                    <FormBox>

                        <TextField
                            sx={{ width: '30rem' }}
                            onChange={(event) => setHabbitTitle(event.target.value)}
                        />

                        <Button
                            sx={{ width: '30rem', height: '3rem', marginTop: '20px' }}
                            variant='contained'
                            onClick={() => createHabbit(habbitTitle)}
                        >
                            Adicionar
                        </Button>

                    </FormBox>

                </ModalContainer>
            </Modal>

            <Header />

            <WelcomeArea>

                <Title>Bem vindo! {userData.username}</Title>

            </WelcomeArea>

            <MainContent>

                <Days press={handleOpen} />

                <HabbitContent >

                    {habbits.map((item) => item.data)}

                </HabbitContent>

            </MainContent>

        </>

    )
}

export default Home