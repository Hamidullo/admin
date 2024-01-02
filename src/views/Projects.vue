<template>
  <v-container class="py-8 px-6 bg-grey-lighten-2"
  fluid>

    <v-row>
      <v-col>
        <v-card
        flat
        title="Xalqaro loyihalardagi ishtiroki">
        <template v-slot:text>
          <v-text-field
            v-model="search"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
        ></v-data-table>
      </v-card>
      </v-col>

      <v-col>
        <v-card
        flat
        title="Qo’shma loyihalardagi ishtiroki">
        <template v-slot:text>
          <v-text-field
            v-model="searchM"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersM"
          :items="itemsM"
          :search="searchM"
        ></v-data-table>
      </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card
        flat
        title="Respublik aloyihalaridagi ishtiroki">
        <template v-slot:text>
          <v-text-field
            v-model="searchY"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersY"
          :items="itemsY"
          :search="searchY"
        ></v-data-table>
      </v-card>
      </v-col>

      <v-col>
        <v-card
        flat
        title="Startaplardagi ishtiroki">
        <template v-slot:text>
          <v-text-field
            v-model="searchN"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersN"
          :items="itemsN"
          :search="searchN"
        ></v-data-table>
      </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card
        flat
        title="Xo’jalik shartnomalari">
        <template v-slot:text>
          <v-text-field
            v-model="searchA"
            label="Qidiruv..."
            prepend-inner-icon="mdi-magnify"
            single-line
            variant="outlined"
            hide-details
          ></v-text-field>
        </template>
        <v-data-table
          :headers="headersA"
          :items="itemsA"
          :search="searchA"
        ></v-data-table>
      </v-card>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
export default {
    data () {
      return {
        search: '',
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Loyiha nomi',
          },
          { key: 'raqami', title: 'Loyiha turi' },
          { key: 'mSoni', title: 'Loyiha bajariladigan yillar' },
          { key: 'mNomi', title: 'Loyihani moliyalashtirish xajmi' },
          { key: 'sana', title: 'Loyihadagi lavozim' },
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
        ],
        searchM: '',
        headersM: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Loyiha nomi',
          },
          { key: 'raqami', title: 'Loyiha turi' },
          { key: 'mSoni', title: 'Loyiha bajariladigan yillar' },
          { key: 'mNomi', title: 'Loyihani moliyalashtirish xajmi' },
          { key: 'sana', title: 'Loyihadagi lavozim' },
        ],
        itemsM: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
        ],
        searchY: '',
        headersY: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Loyiha nomi',
          },
          { key: 'raqami', title: 'Loyiha turi' },
          { key: 'mSoni', title: 'Loyiha bajariladigan yillar' },
          { key: 'mNomi', title: 'Loyihani moliyalashtirish xajmi' },
          { key: 'sana', title: 'Loyihadagi lavozim' },
        ],
        itemsY: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
        ],
        searchN: '',
        headersN: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Loyiha nomi',
          },
          { key: 'raqami', title: 'Loyiha turi' },
          { key: 'mSoni', title: 'Loyiha bajariladigan yillar' },
          { key: 'mNomi', title: 'Loyihani moliyalashtirish xajmi' },
          { key: 'sana', title: 'Loyihadagi lavozim' },
        ],
        itemsN: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
            sana: 4.0,
          },
        ],
        searchA: '',
        headersA: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Shartnoma nomi',
          },
          { key: 'raqami', title: 'Shartnoma bajariladigan yil' },
          { key: 'mSoni', title: 'Shartnoma  xajmi' },
          { key: 'mNomi', title: 'Shartnoma tuzsilgan tashkilot' },
        ],
        itemsA: [
          {
            name: 'Frozen Yogurt',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
          },
          {
            name: 'Ice cream sandwich',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
          },
          {
            name: 'Eclair',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
          },
          {
            name: 'Cupcake',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
          },
          {
            name: 'Gingerbread',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
          },
          {
            name: 'Jelly bean',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
          },
          {
            name: 'Lollipop',
            raqami: 159,
            mSoni: 6.0,
            mNomi: 24,
          },
        ],
      }
    },
    
  }
</script>

<style scoped>

</style>
