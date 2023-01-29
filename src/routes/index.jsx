import { Home, Register, Login } from '../pages'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }