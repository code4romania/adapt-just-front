<template>
  <v-card
    class="ui-form-card"
    elevation="0"
  >
    <v-card-text>
      <slot/>
    </v-card-text>
    <v-card-actions class="py-3">
      <slot name="actions"/>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.ui-form-card{
  border: 2px solid #F2F2F2 !important;
  .v-card__actions{
    background-color: #F9FAFB;
  }
}
</style>
