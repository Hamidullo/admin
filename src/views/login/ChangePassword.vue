<template>
  <v-container class="container" fluid>

    <div>

      <v-card class="mx-auto pa-8 pb-8" elevation="8" max-width="448" rounded="lg">

        <v-img class="mx-auto mb-6" max-width="450" max-height="90"
               src="../../assets/nammti.png"></v-img>

        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field density="compact" placeholder="Hemis id" prepend-inner-icon="mdi-card-account-details" v-model="hemisId"
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

    <v-snackbar
      :timeout="2000"
      color="red"
      v-model="snackF"
      elevation="24">
      Password or Login not found!
    </v-snackbar>
    <v-snackbar
      :timeout="2000"
      color="red"
      v-model="snackE"
      elevation="24">
      Password or Login not found!
    </v-snackbar>

    <v-snackbar
      :timeout="2000"
      color="red"
      v-model="snackC"
      elevation="24">
      Password and Confirm Password not valid!
    </v-snackbar>

    <v-snackbar
      :timeout="2000"
      color="success"
      v-model="snackS"
      elevation="24">
      Password Successfully changed!
    </v-snackbar>

  </v-container>
</template>

<script>

import UserDataService from "@/services/UserDataService";

export default {
  data: () => ({
    visible: false,
    visible2: false,
    snackF: false,
    snackS: false,
    snackC: false,
    snackE: false,
    hemisId: '',
    password: '',
    confirmPassword: '',
  }),
  methods: {
    async login(){

      if (this.hemisId.length > 0 && this.password.length > 0 && this.confirmPassword.length > 0){
        if (this.password === this.confirmPassword){

          var data = {
            "userId": this.hemisId,
            "password": this.password,
            "confirmPassword": this.confirmPassword
          }
          UserDataService.updatePassword(this.hemisId,data).then(response => {

            let data = response.data
            console.log(data)
            if (data){
              this.snackS = true;
              let userData = localStorage.getItem("user-role")
              if (userData === "0"){
                this.$router.push({name: "Dashboard"})
              } else {
                this.$router.push({name: "AdminDash"})
              }
            }

          }).catch(e => {
            console.log(e);
            this.snackF = true;
          });

        } else {
          this.snackC = true
        }
      } else {
        this.snackE = true
      }

    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  background: url("https://images.inc.com/uploaded_files/image/1920x1080/getty_820889114_396686.jpg") no-repeat center center fixed;
  background-size: cover;
  align-content: center;
}
</style>
