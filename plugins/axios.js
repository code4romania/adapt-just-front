export default function ({$axios, redirect, app}) {
  $axios.onError(error => {
    const code = parseInt(error?.response && error?.response?.status);

    if (code === 404) {
      redirect('/errors/not-found')
    }
    if (code === 403) {
      redirect('/errors/not-authorized')
    }
    if (code === 401  && app.$auth?.loggedIn) {
      app.$auth.logout()
    }
    if (code === 429) {
      const snack = { color: 'error', message: 'Too many attempts. Please try again later' }
      app.$store.commit('snackbar/setSnack', snack);
    }

    return false;
  })
}
