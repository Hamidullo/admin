import { defineStore } from "pinia"
export const useUsersStore = defineStore("userData", {
  state: () => ({
    id: 1,
    name: "",
    image: "",
    language: "",
    theme: "",
    isLoggedIn: false,
  }),
  getters: {
    getId: state => state.id,
    getName: state => state.name,
    getImage: state => state.image,
    getLanguage: state => state.language,
    getTheme: state => state.theme,
  },
  actions: {
    updateUserId(id){
      this.id = id
    },
    updateUserData(name,image,language,theme){
      this.name = name
      this.image = image
      this.language = language
      this.theme = theme
    },
    updateUserLanguage(language){
      this.language = language
    },
    updateUserTheme(theme){
      this.theme = theme
    },
    login() {
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
    },
  },
})
