import Router from 'next/router'
import { useEffect } from 'react'
import useRequest from '../../hooks/useRequest'

const Signout = () => {
    const { doRequest } = useRequest({
        url: '/api/users/signout',
        method: 'post',
        body: {},
        onSuccess: () => Router.push('/')
    })
    
    useEffect(() => {
        doRequest()
    }, [])

    return <div><p>Signing you out ...</p></div>
}

export default Signout