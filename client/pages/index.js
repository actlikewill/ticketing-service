import buildClient from '../api/buidClient'

const Landing = ({ currentUser }) => {
    return  currentUser ?
        <>
        <p>Welcome {currentUser.email.split('@')[0]}</p>
         <h4>You are signed in</h4> 
        </>
         : <h4>You are not Signed in</h4>
}

Landing.getInitialProps = async (context) => {
    const { data } = await buildClient(context).get('/api/users/currentuser')
    return data
}

export default Landing