import stacks from './stack';
import routes from './Routes';

import Dashboard from '../pages/dashboard';


const route = [
    // Landing Pages
    {
        stack:stacks.Landing,
        route: routes.landing,
        Page:Dashboard,
    },
]


export default route

