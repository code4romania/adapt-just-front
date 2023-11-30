import Vue from 'vue'

const PageTitle = () => import('~/components/shared/text/PageTitle')
const RecordText = () => import('~/components/shared/text/RecordText')

const FormUpload = () => import('~/components/shared/form/FormUpload')
const FormStepper = () => import('~/components/shared/form/FormStepper')
const FormTextArea = () => import('~/components/shared/form/FormTextArea')
const FormTextInput = () => import('~/components/shared/form/FormTextInput')

const FormActions = () => import('~/components/shared/form/FormActions')
const HomeButton = () => import('~/components/shared/buttons/HomeButton')
const NextButton = () => import('~/components/shared/buttons/NextButton')
const FormButton = () => import('~/components/shared/buttons/FormButton')
const RecordButton = () => import('~/components/shared/buttons/RecordButton')
const FormRadioButton = () => import('~/components/shared/buttons/FormRadioButton')

Vue.component('PageTitle', PageTitle)
Vue.component('HomeButton', HomeButton)
Vue.component('NextButton', NextButton)
Vue.component('FormButton', FormButton)
Vue.component('FormUpload', FormUpload)
Vue.component('FormStepper', FormStepper)
Vue.component('FormActions', FormActions)
Vue.component('FormTextArea', FormTextArea)
Vue.component('FormTextInput', FormTextInput)
Vue.component('FormRadioButton', FormRadioButton)

Vue.component('RecordText', RecordText)
Vue.component('RecordButton', RecordButton)
