<template>
   <div class="container">
    <div class="row">
      <div class="col-4 offset-4">
        <form @submit.prevent="">
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

          <button type="submit" class="btn btn-primary">Acceder</button>
        </form>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: "",
      password: ""
    }
  }

}
</script>

<style>

</style>