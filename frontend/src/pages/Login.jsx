import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (

        <div>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Register
                </h1>
                <p>Login and start setting goals</p>
            </section>
            <section className="form">
                <form>
                    <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control" 
                        id='email' 
                        name='email' 
                        value={email} 
                        placeholder="Enter your email" 
                        onChange={onChange} />
                    
                    <input 
                        type="password" 
                        className="form-control" 
                        id='pasword' 
                        name='password' 
                        value={password} 
                        placeholder="Enter password" 
                        onChange={onChange} />
                    
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn btn-block' >Submit</button>
                    </div>
                </form>
            </section>
        </div>

    )
}

export default Login