import React,{useState} from 'react'
import api from '../services/api'
import { login } from '../services/auth'
import { Container } from '../styles/user'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Login = () => {

    const [user, setUser] = useState({
        email : null,
        password : null,
        visible : false,
        errors:null
    })

    const signIn = async () => {
        const { email, password } = user

        try{
            const response = await api.post('/user/login',user)
            login(response.data.token)
            window.location.href = '/'
        }catch(err){
            setUser({...user,errors : 'Email or Password are invalid'})
        }
    }
    const visible = () => {
        const password = document.getElementById('password')
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type',type)
        setUser({ ...user,visible: !user.visible })
    }

    return(
        <Container>
            <h1>Login</h1>
            <p id='error'>{user.errors}</p>
            <input type='text' placeholder='Email...' onChange={e => setUser({ ...user, email : e.target.value})}/>
            <div id='pass'>
                <input type='password' id='password' placeholder='Password...' onChange={e => setUser({ ...user, password : e.target.value})}/>
                <FontAwesomeIcon id='icon' icon={user.visible ? faEyeSlash : faEye} 
                    onClick={() => visible()}
                />
            </div>
            <button onClick={() => signIn()}>Login</button>
            <Link to='/new_user'>
                <p>New User?Create new account</p>
            </Link>
        </Container>
        
    )
}

export default Login