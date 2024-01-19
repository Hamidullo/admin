<template>
  <div>
    <v-img class="mx-auto mb-12" style="margin-top: 180px" max-width="450" max-height="90"
      src="../assets/nammti.png"></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field density="compact" placeholder="Hemis id" prepend-inner-icon="mdi-card-account-details"
        variant="outlined"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
          Forgot login password?</a>
      </div>

      <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
        density="compact" placeholder="Hemis parol" prepend-inner-icon="mdi-lock" variant="outlined"
        @click:append-inner="visible = !visible"></v-text-field>

      <v-btn block class="mb-4" color="blue" size="large" variant="tonal" @click="login">
        Kirish
      </v-btn>

      <v-btn block class="mb-2" color="blue" size="large" variant="tonal">
        Hemis orqali kirish
      </v-btn>
    </v-card>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    visible: false,
    email: '',
    password: '',
  }),
  methods: {
    async login(){
      if (this.email.length > 0 && this.password.length > 0){
        let result = await axios.get(`http://localhost:5000/users/api/user-login?userId=${this.email}&password=${this.password}`);

        if (result.status === 200 && result.data.length > 0){
          localStorage.setItem("user-info", JSON.stringify( result.data[0]))

          await this.$router.push({name: "Home"})
        }
      } else {

      }

    }
  },
  mounted() {
    let user = localStorage.getItem("user-info")
    if (user){
      this.$router.push({name: "Home"})
    }
  }
}
</script>

<style scoped>

</style>
