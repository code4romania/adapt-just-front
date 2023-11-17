import Vue from 'vue'

const PageTitle = () => import('~/components/shared/text/PageTitle')
const FormUpload = () => import('~/components/shared/form/FormUpload')
const FormStepper = () => import('~/components/shared/form/FormStepper')
const FormActions = () => import('~/components/shared/form/FormActions')
const FormButton = () => import('~/components/shared/buttons/FormButton')
const FormTextArea = () => import('~/components/shared/form/FormTextArea')
const FormTextInput = () => import('~/components/shared/form/FormTextInput')
const FormRadioButton = () => import('~/components/shared/buttons/FormRadioButton')

const RecordText = () => import('~/components/shared/text/RecordText')
const RecordButton = () => import('~/components/shared/buttons/RecordButton')

Vue.component('PageTitle', PageTitle)
Vue.component('FormButton', FormButton)
Vue.component('FormUpload', FormUpload)
Vue.component('FormStepper', FormStepper)
Vue.component('FormActions', FormActions)
Vue.component('FormTextArea', FormTextArea)
Vue.component('FormTextInput', FormTextInput)
Vue.component('FormRadioButton', FormRadioButton)

Vue.component('RecordText', RecordText)
Vue.component('RecordButton', RecordButton)
