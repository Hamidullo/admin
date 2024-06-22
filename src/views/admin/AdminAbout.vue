<template>
  <v-container  class="bg-grey-lighten-2"  justify="center" fluid>
    <v-card rounded="5" class="pt-10 pl-10 pb-10 pr-10">
      <!-- alert -->
      <v-row v-if="snack === 1">
        <v-alert text type="success" border="left" width="100%" dismissible >
          Thank you, <strong>{{ name }}</strong> Your Profile was updated successfully !
        </v-alert>
      </v-row>
      <!-- avatar -->
      <v-row class="justify-center pb-5">
        <v-avatar size="270px">
          <img :src="photo + avatar" />
        </v-avatar>
      </v-row>
      <!-- name -->
      <v-row class="justify-center pb-5">
        <span class="title text-secondary py-2 font-weight-bold">{{ name }}</span>
      </v-row>
      <!-- data -->
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="F.I.SH."
            clearable
            outlined
            shaped
            v-model="name"
            prepend-inner-icon="mdi-account">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="lavozim"
            clearable
            outlined
            shaped
            v-model="position"
            prepend-inner-icon="mdi-account">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Username"
            clearable
            outlined
            shaped
            v-model="userName"
            prepend-inner-icon="mdi-account">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Email"
            clearable
            outlined
            shaped
            v-model="email"
            prepend-inner-icon="mdi-email">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Address"
            clearable
            outlined
            shaped
            v-model="address"
            prepend-inner-icon="mdi-map-marker">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Phone Number"
            clearable
            outlined
            shaped
            v-model="phone"
            prepend-inner-icon="mdi-phone">

          </v-text-field>
        </v-col>
        <v-col  cols="6">
          <v-select
            readonly
            label="Role"
            v-model="role"
            :items="['User', 'Admin', 'Super-Admin']">

          </v-select>
        </v-col>
        <v-col  cols="6">
          <v-text-field
            label="Telegram"
            clearable
            outlined
            shaped
            v-model="telegram"
            prepend-inner-icon="mdi-send">

          </v-text-field>
        </v-col>
        <v-col>
          <v-file-input
            :rules="rules"
            v-model="avatarNew"
            show-size
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="Avatar">
          </v-file-input>
        </v-col>
      </v-row>
      <!-- Buttons -->
      <v-row>
        <v-col cols="12" md="6">
          <v-btn
            color="secondary"
            text
            block
            tile
            elevation="0"

            class="pa-6 font-weight-bold">
            Cancel
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn
            color="info"
            class="pa-6 font-weight-bold"
            block
            tile
            @click="save"
            elevation="0">
            Update
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

  </v-container>
  <v-overlay
    :model-value="overlay"
    class="align-center justify-center">
    <v-progress-circular
      color="primary"
      indeterminate
      size="64"
    ></v-progress-circular>
  </v-overlay>

  <v-snackbar
    :timeout="3000"
    color="red"
    v-model="snackF"
    elevation="24">
    Hujjatni yuklashda hatolik!
  </v-snackbar>

  <v-snackbar
    :timeout="3000"
    color="success"
    v-model="snackS"
    elevation="24">
    Hujjat muvaffaqiyatli yuklandi!
  </v-snackbar>


</template>

<script>
import axios from "axios";
import url from "@/utils/url";

export default {
  data (){
    return{
      overlay: false,
      snackF: false,
      snackS: false,
      photo: url.baseURL +"/uploads/photos/",

      name: localStorage.getItem("user-name"),
      position: "",
      userId: localStorage.getItem("user-userId"),
      userName: "",
      email: "",
      address: "",
      phone: "",
      role: "",
      telegram: "",
      avatar: localStorage.getItem("user-avatar"),
      avatarNew: null,
      snack: 0,
      rules: [
        value => {
          return !value || !value.length || value[0].size < 500000 || 'Avatar size should be less than 2 MB!'
        },
      ],
    }
  },
  computed: {

  },
  methods: {

    save () {
      this.overlay = true
      let formData = new FormData();
      formData.append('name', this.name)
      formData.append('userId', this.userId)
      formData.append('position', this.position)
      formData.append('userName', this.userName)
      formData.append('email', this.email)
      formData.append('address', this.address)
      formData.append('phone', this.phone)
      formData.append('role', this.role)
      formData.append('email', this.email)
      formData.append('telegram', this.telegram)

      if (this.avatarNew){
        // files
        for (let file of this.avatarNew) {
          formData.append("avatar", file, file.name);
        }
      } else {
        formData.append('avatar', this.avatarNew)
      }
      axios.put(url.baseURL + "/api/users/personal-admin?userId=" + this.userId, formData)
        .then(response => {
          console.log(response.data)
          this.overlay = false

          this.snackS = true;
        })
        .catch(error => {
          this.errorMessage = error.message;
          this.overlay = false
          this.snackF = true;
          console.error("There was an error!", error);
        });

    },

  },

  async mounted(){
    await axios
      .get(url.baseURL + `/api/users/personal-admin?userId=${this.userId}`)
      .then(response => {
        const data  = response.data
        console.log(data)
        for (const dataKey in data) {

          this.name = data[dataKey].name
          this.position = data[dataKey].position
          this.address = data[dataKey].address
          this.userName = data[dataKey].userName
          this.email = data[dataKey].email
          this.phone = data[dataKey].phone
          this.role = data[dataKey].role
          this.telegram = data[dataKey].telegram
          this.avatar = data[dataKey].avatar

          localStorage.setItem("user-avatar",data[dataKey].avatar)

        }
      });
  }
};
</script>

<style>

</style>
