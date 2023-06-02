import { createContext, useState } from 'react';
import { firebase, auth, firestore } from '../../firebase'

export const UserContext = createContext({})

function UserProvider({ children }) {

    const [userId, setUserId] = useState()
    
    const userAuth = async (email, password) => {

        let threwError = false;
        await auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
                threwError = true;
            });

        if (!threwError) {
            
            navigation.navigate('home')
            
        } else {
            alert('Errou a senha ou ainda não é cadastrado!')
            
        }


    }

    const handleRegister = async (email, password) => {

        alert('enviado');

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
                alert('adding database')
                firestore.collection('users')
                    .doc(auth.currentUser.uid).set({
                        userId: auth.currentUser.uid,
                        email: email
                    })
                    .catch((error) => {
                        alert(error.message);
                    });
            })

        if (!signUpError) {
            navigation.navigate('/')
        } else {
            alert('Não foi possível concluir o cadastro.')
        }
    };

    return (
        <UserContext.Provider value={{
            userAuth,
            handleRegister,
        }}>
            {children}
        </UserContext.Provider>

    )
}

export default UserProvider