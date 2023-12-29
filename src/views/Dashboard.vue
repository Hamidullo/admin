<template>
  <v-container
    class="py-8 px-6 bg-grey-lighten-2"
    fluid
    style="min-height: 300px"
  >
    <v-row >
      <v-col
        v-for="card in cards"
        :key="card"
        cols="6"
        class="bg-grey-lighten-2"
      >
        <v-card class="elevation-2">
          <v-list density="compact">
            <v-list-subheader :title="card"></v-list-subheader>

            <v-list-item v-for="n in 6" :key="n"  class="mx-1 my-1" >
              <template v-slot:prepend>
                <v-avatar  class="bg-green-lighten-3">
                  <v-icon color="green">
                    mdi-account-outline
                  </v-icon>
                </v-avatar>
              </template>

              <v-list-item-title v-text="`Message ${n}`" ></v-list-item-title>

              <v-list-item-subtitle v-text="`Message ${n}`"></v-list-item-subtitle>

              <v-divider></v-divider>
            </v-list-item>

          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

  data: () => ({
    cards: ['Today', 'Yesterday'],

  }),
  methods: {

  }
}
</script>
