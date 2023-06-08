
export default (context, inject) => {
  const form = {
    handleError: (error, formRef = null) => {
      const message = error?.response?.data?.message || 'Something was wrong';

      const errors = error?.response?.data?.errors || [];
      formRef?.setErrors(errors);

      const snack = { color: 'error', message }

      context.store.commit('snackbar/setSnack', snack);
    }
  }

  inject('form', form)
}
