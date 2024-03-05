<template>
  <v-container>

    <div>
      <v-img class="mx-auto mb-12" style="margin-top: 180px" max-width="450" max-height="90"
             src="../../assets/nammti.png"></v-img>

      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field density="compact" placeholder="Hemis id" prepend-inner-icon="mdi-card-account-details"
                      variant="outlined"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          New Password
        </div>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'" v-model="password"
                      density="compact" placeholder="New Password" prepend-inner-icon="mdi-lock" variant="outlined"
                      @click:append-inner="visible = !visible"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Confirm Password
        </div>

        <v-text-field :append-inner-icon="visible2 ? 'mdi-eye-off' : 'mdi-eye'" :type="visible2 ? 'text' : 'password'" v-model="confirmPassword"
                      density="compact" placeholder="Confirm New Password" prepend-inner-icon="mdi-lock" variant="outlined"
                      @click:append-inner="visible2 = !visible2"></v-text-field>

        <v-btn block class="mb-4" color="blue" size="large" variant="tonal" @click="login">
          Kirish
        </v-btn>
      </v-card>

    </div>

  </v-container>
</template>

<script>

export default {
  data: () => ({
    visible: false,
    visible2: false,
    email: '',
    password: '',
    confirmPassword: '',
  }),
  methods: {
    async login(){
      if (this.email.length > 0 && this.password.length > 0){


      } else {

      }

    }
  },
  mounted() {
    /*let user = localStorage.getItem("user-logged")

    if (!user){
      this.$router.push({name: "Login"})
    }*/
  }
}
</script>

<style scoped>

</style>
