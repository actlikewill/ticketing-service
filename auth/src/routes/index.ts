import { signInRoute } from './signin'
import { signUpRoute } from './signup'
import { signOutRoute } from './signout'
import { currentUserRoute } from './currentuser'

const routes = [
    signOutRoute,
    signUpRoute,
    signInRoute,
    currentUserRoute
]

export default routes