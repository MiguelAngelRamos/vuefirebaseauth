import { auth } from '../firebase';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import (/* webpackChunkName: "Inicio" */ '../views/InicioView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/registro',
    name: 'Registro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Registro" */ '../views/RegistroView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// La lógica para las rutas protegidas
router.beforeEach((to, from, next ) => {
  // Estamos recorriendo cada unas de las rutas
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // si en la aplicacion hay un usuario con la sesion activa
    console.log('ruta protegida');
    const usuario = auth.currentUser
    console.log(usuario);
    if(!usuario) {
      next({path: '/login'})
    } else {
      // si existe usuario con sesion activa 
      next(); // lo dejamos pasar a la ruta protegida
    }
  } else {
    // En este punto estan las rutas que no contienen meta: { requiresAuth: true }
    // y se le da acceso
    next();
  }
})

export default router
