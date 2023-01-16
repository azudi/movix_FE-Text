import stacks from './stack';
import routes from './routes';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from "../pages/Register"


const route = [
    // Landing Pages
    {
        stack:stacks.LANDING,
        route: routes.login,
        Page: Login,
    },
    {
        stack:stacks.LANDING,
        route: routes.register,
        Page: Register,
    },
    {
        stack:stacks.AUTH,
        route: routes.landing,
        Page: Dashboard,
    },
]


export default route

