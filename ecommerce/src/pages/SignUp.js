import React,{useState} from 'react'
import api from '../services/api'
import { Container } from '../styles/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const SignUp = () => {
    const [user, setUser] = useState({
        username : null,
        email : null,
        password : null,
        visible : false,
        errors:null
    })

    const createNewUser = async () => {
        const { password, username, email } = user

        if(password == null || username == null || email == null){
            setUser({...user,errors : 'There are fields empty'})
        }
        
        await api.post('/user/signup',user)
        .then(res => {
            // If works correctly
            window.location.href = '/login'
        }).catch(err => {
            // If we get Errors
            if (err.response) {
                // Request made and server responded
                const errors = err.response.data
                setUser({...user,errors:errors.error})
            }
        })        
    }

    const visible = () => {
        const password = document.getElementById('password')
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type',type)
        setUser({...user, visible: !user.visible })
    }
    return(
        <Container>
            <h1>New User</h1>
            <p id='error'>{user.errors}</p>
            <input type='text' placeholder='Email...' onChange={e => setUser({ ...user, email : e.target.value})}/>
            <input type='text' placeholder='Username...' onChange={e => setUser({ ...user, username : e.target.value})}/>
            <div id='pass'>
                <input type='password' id='password' placeholder='Password...' onChange={e => setUser({ ...user, password : e.target.value})}/>
                <FontAwesomeIcon id='icon' icon={user.visible ? faEyeSlash : faEye} 
                    onClick={() => visible()}
                />
            </div>
            <button onClick={() => createNewUser()}>Cadastrar</button>
        </Container>
        
    )
}

export default SignUp