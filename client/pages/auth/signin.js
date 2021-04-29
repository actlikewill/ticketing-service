
import { useState, useEffect} from 'react'
import Router from 'next/router'
import useRequest from '../../hooks/useRequest'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { doRequest, errors } = useRequest({
        url: '/api/users/signin',
        method: 'post',
        body: {email, password},
        onSuccess: () => Router.push('/')
    })

useEffect(() => {
    })

    const handleSubmit = async (e) => {
        e.preventDefault()       
        doRequest()
    }
return (
        <form className="container col-md-4 pt-5" onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div className="form-group">
                <label>Email Address</label>
                <input 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-control"
                 />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                className="form-control" 
                 />
            </div>

            { errors }


            <button className="btn btn-primary btn-block">Sign In</button>
        </form>
    )
}

export default Signin 