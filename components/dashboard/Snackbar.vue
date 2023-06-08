<template>
  <v-snackbar v-model="show" :top="top" :color="color" :timeout="timeout">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn text icon color="default" @click.native="show = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
import {mapState} from 'vuex';

export default {
  name: 'DashboardSnackbar',
  data() {
    return {
      show: false,
      top: true,
      message: '',
      color: '',
      timeout: 5000
    }
  },
  computed: {
    ...mapState('snackbar', ['snack'])
  },
  mounted() {
    this.showSnackBar();
    this.$store.watch(state => state.snackbar.snack, () => this.showSnackBar());
  },
  methods: {
    showSnackBar() {

      if (!this.snack || !this.snack.message) {
        return
      }
      const message = this.snack.message;
      if (this.snack.timeout) {
        this.timeout = this.snack.timeout;
      }
      if (message) {
        this.show = true;
        this.message = message;

        this.color = this.snack.color;
        this.$store.commit('snackbar/setSnack', {});
      }
    }
  }
}
</script>
