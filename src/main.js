import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { auth } from './firebase';

// Este "onAuthStateChanged" es un observable y nos va a identificar si hay un usuario con sesión iniciada
// Va estar atento (observando) cada vez que iniciemos la sesión y cuando la cerremos nuestra sesión
auth.onAuthStateChanged(user => {
  if(user) {
    console.log('existe el usuario y es: ');
    console.log(user);
    const usuarioDetectado = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('detectarUsuario', usuarioDetectado);
  } else {
    console.log('no existe el usuario: ');
    console.log(user); // null
    store.dispatch('detectarUsuario', user)
  }
})


createApp(App).use(store).use(router).mount('#app')
