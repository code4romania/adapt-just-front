<template>
  <v-card
    class="ui-form-card"
    elevation="0"
  >
    <v-card-title v-if="$slots.title">
      <slot name="title"/>
    </v-card-title>
    <v-card-subtitle v-if="$slots.subtitle">
      <slot name="subtitle"/>
    </v-card-subtitle>
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
