<template>
  <div>
    <slot name="navigation"/>
    <v-app-bar
      dense
      color="transparent"
      flat
      class="page-header-bar"
    >
      <v-toolbar-title class="font-weight-bold">
        <slot name="title" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="actions" />
    </v-app-bar>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return{
      drawer: false
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss">
.page-header-bar{
  .v-toolbar__content{
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
