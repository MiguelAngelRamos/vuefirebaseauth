import { createStore } from 'vuex';
import { auth } from '../firebase';
import router from '../router';

export default createStore({
  state: {
    usuario: null,
    error: null
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload
    },
    setError(state, payload) {
      state.error = payload
    }
  },
  actions: {
    // usuario va ser objeto {email: 'correo@correo.com', password: '31314'}
    crearUsuario({commit}, usuario) {
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
       .then(response => {
         console.log(response);

         // OTRO OBJETO QUE VAMOS CREAR PARA ALMACENARLO AL "state.usuario"

         const usuarioCreado = {
           email: response.user.email,
           uid: response.user.uid
         }
         commit('setUsuario', usuarioCreado);

         // Podemos realizar la redirección
         router.push('/')

       })
       .catch( err => {
         console.log(err);
         commit('setError', err)
       })
    },
    loginUsuario({commit}, usuario) {
      // el usuario va ser un objeto
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then( response => {
          console.log(response); // objeto con mucha información y solo vamos tomar el email y la uid

          // Creamos un nuevo objeto con las propiedades email y uid
          const usuarioLogeado = {
            email: response.user.email,
            uid: response.user.uid
          }
          // el objeto usuarioLogeado es el que va ir a el state, para almacenar en el state necesitamos el mutation "setUsuario"
          commit('setUsuario', usuarioLogeado)
          router.push('/')
        })
        .catch(err => {
          // Si el inicio de sesión no sale bien, pasamos el error el state por medio del mutation "setError"
          commit('setError', err)
        })
    },
    cerrarSesion({commit}) {
      auth.signOut()
        .then(() => {
          router.push('/login')
        }).catch(err => console.log(err))
    },
    detectarUsuario({commit}, usuario) {
      commit('setUsuario', usuario)
    }
  },
  modules: {
  },
  getters: {
    existeUsuario(state) {
      return state.usuario==null?false:true
    }
  },
})
