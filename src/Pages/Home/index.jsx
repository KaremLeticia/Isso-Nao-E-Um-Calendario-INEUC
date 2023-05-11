import { Link } from 'react-router-dom'

import {

} from './styles'

import Header from '../../components/Header'

const Home = () => {
    return (
        <>
            <Header/>
            <div>Home</div>
            <Link to={'/test'}><button>Next Page</button></Link>
        </>

    )
}

export default Home