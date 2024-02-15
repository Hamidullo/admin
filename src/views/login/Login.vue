<template>
  <v-container>

    <div>
      <v-img class="mx-auto mb-12" style="margin-top: 180px" max-width="450" max-height="90"
             src="../../assets/nammti.png"></v-img>

      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Login</div>

        <v-text-field density="compact" placeholder="Hemis id" prepend-inner-icon="mdi-card-account-details" v-model="hemisId" type="number"
                      variant="outlined"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Parol

          <v-tooltip text="Parol esdan chiqqanda kafedra mudriga murojat qilasiz!">
            <template v-slot:activator="{ props }">
              <button v-bind="props" class="text-caption text-decoration-none text-blue" rel="noopener noreferrer" target="_blank">
                Parol esdan chiqdimi?</button>
            </template>
          </v-tooltip>

        </div>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'" v-model="password"
                      density="compact" placeholder="Hemis parol" prepend-inner-icon="mdi-lock" variant="outlined"
                      @click:append-inner="visible = !visible"></v-text-field>

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
      Parol yoki Hemis Id hato!
    </v-snackbar>

    <v-snackbar
      :timeout="2000"
      color="success"
      v-model="snackS"
      elevation="24">
      KPI tizimiga hush kelibsiz!
    </v-snackbar>

  </v-container>
</template>

<script>
import UserDataService from "@/services/UserDataService";

export default {
  data() {
    return {
      visible: false,
      snackF: false,
      snackS: false,
      hemisId: '',
      password: '',
    }
  },
  methods: {
    async login(){
      if (this.hemisId.length > 0 && this.password.length > 0){
        var data = {
          "hemisId": this.hemisId,
          "password": this.password
        }
        UserDataService.get(data).then(response => {
          this.snackS = true;
          localStorage.setItem("user-logged", JSON.stringify( true))
          let data = response.data
          console.log(data)
          if (data.name){
            localStorage.setItem("user-id", JSON.stringify(response.data.id))
            localStorage.setItem("user-hemisId", JSON.stringify(response.data.hemisId))
            localStorage.setItem("user-name", JSON.stringify(response.data.name))
            localStorage.setItem("user-avatar", JSON.stringify(response.data.avatar))
            localStorage.setItem("user-position", JSON.stringify(response.data.position))
            if (response.data.admin){
              this.$router.push({name: "AdminDash"})
              localStorage.setItem("user-admin", JSON.stringify(response.data.admin))
            } else {
              this.$router.push({name: "Dashboard"})
            }
          } else {
            localStorage.setItem("user-id", JSON.stringify(response.data.id))
            localStorage.setItem("user-hemisId", JSON.stringify(response.data.hemisId))
            if (response.data.admin){
              this.$router.push({name: "AdminAbout"})
              localStorage.setItem("user-admin", JSON.stringify(response.data.admin))
            } else {
              this.$router.push({name: "About"})
            }

          }
        }).catch(e => {
          console.log(e);
          this.snackF = true;
        });

      } else {

      }

    }
  },
  mounted() {
    let user = localStorage.getItem("user-logged")
    if (user){
      let userData = localStorage.getItem("user-admin")
      if (userData){
        this.$router.push({name: "AdminDash"})
      } else {
        this.$router.push({name: "Dashboard"})
      }

    }
  }

}
</script>


<style scoped>

</style>
