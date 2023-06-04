import { createContext, useState } from 'react';
import { firebase, auth, firestore } from '../../firebase'
import Habbit from '../components/Habbit';

export const UserContext = createContext({})

function UserProvider({ children }) {

    const [userData, setUserData] = useState(false)
    const [listData, setListData] = useState([])

    const userAuth = async (email, password) => {

        let threwError = false;
        await auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
                threwError = true;
            });

        if (!threwError) {

            alert('Login efetuado com sucesso!')

            const userId = auth.currentUser.uid
            localStorage.setItem('id', JSON.stringify(userId))

            const docRef = await firestore.collection('users').doc(userId).get()

            const docData = docRef.data()
            console.log(docData)

            setUserData(docData)

            const habbitRef = firestore.collection('users').doc(userId).collection('data')

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
                        setListData(mock)
                        console.log(mock)
                    }
                )
                
            return true

        } else {
            alert('Errou a senha ou ainda não é cadastrado!')
            return false
        }

    }

    const handleRegister = async (email, password, username) => {

        if (email.length === 0) {
            alert('Por favor, insira seu e-mail');
            return;
        }

        if (password.length === 0) {
            alert('Por favor, insira sua senha');
            return;
        }

        let signUpError = false;

        auth.createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                alert(error.message);
                signUpError = true;
            }).then(() => {
                firestore.collection('users')
                    .doc(auth.currentUser.uid).set({
                        userId: auth.currentUser.uid,
                        email: email,
                        username: username
                    })
                    .catch((error) => {
                        alert(error.message);
                    });
            })

        if (!signUpError) {

            alert('Cadastro realizado com sucesso!')
            return true

        } else {
            alert('Não foi possível concluir o cadastro.')
            return false
        }
    };

    return (
        <UserContext.Provider value={{
            userAuth,
            handleRegister,
            userData,
            listData
        }}>
            {children}
        </UserContext.Provider>

    )
}

export default UserProvider