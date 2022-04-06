<template>
  <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <form @submit.prevent="crearUsuario({ email: email, password: password})">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Ingrese su correo</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Ingrese su contraseña</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="password"
            />
          </div>

           <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label"
              >Repita su contraseña</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword2"
              v-model="password2"
            />
          </div>
            <!-- si false se activa y si es true se desactiva -->
          <button type="submit" class="btn btn-primary" :disabled="!desactivar">Registrar usuario</button>
        </form>
        <!-- <p>{{ this.password == this.password2}}</p> true -->
        <!-- <p>{{ this.password.trim() === ''}}</p> true -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Registro',
  data() {
    return {
      email: "",
      password: "",
      password2: ""
    }
  },
  methods: {
    ...mapActions(['crearUsuario'])
  },
  computed: {
    ...mapState(['error']),
    desactivar() {
      return this.password === this.password2 && this.password.trim() !== '' && this.password.length > 5;
      // true && false = false
    }
  }
};
</script>

<style>
</style>