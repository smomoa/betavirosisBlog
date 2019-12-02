import React from 'react';

const Inicio = React.lazy(() => import('./src/views/Index'));
const Escribe = React.lazy(() => import('./src/views/examples/ProfilePage'));

const routes = [
    { id: '0', path: '/', exact: true, name: 'Inicio' },
    { id: '1', path: '/inicio', exact: true, name: 'Inicio', component: Inicio },
    { id: '2', path: '/quien-escribe', exact: true, name: 'Gmail', component: Escribe }
];

export default routes;