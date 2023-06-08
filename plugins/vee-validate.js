import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'

import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/ro.json'

_.keys(rules).forEach((rule) => {
  extend(rule, {
    // eslint-disable-next-line import/namespace
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  })
})

extend('invalid', v => {
  return 'Field {_field_} is not valid';
});

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)


extend('min_time', {
  validate: (value, args ) => {
    if (value === null || value === undefined || value === '') {
      return {
        valid: false
      }
    }
    return {
      valid: value >= args[0]
    }
  },
  message: (field, args, data)  => {
    return `The fields ${field} must be ${args[0]} or more`
  }

})

extend('min_one_uppercase', {
  validate: (value, args ) => {
    return {
      valid: /[A-Z]/.test(value)
    }
  },
  message: (field, args, data)  => {
    return `The field ${field} must have one uppercase character`
  }
})

extend('min_one_number', {
  validate: (value, args ) => {
    return {
      valid: /\d/.test(value)
    }
  },
  message: (field, args, data)  => {
    return `The field ${field} must have one number`
  }
})

extend('min_one_special_character', {
  validate: (value, args ) => {
    return {
      valid: /\W/.test(value)
    }
  },
  message: (field, args, data)  => {
    return `The field ${field} must have one special character [!@#$%]`
  }
})
extend('not_like', {
  validate: (value, args ) => {
    return {
      valid: args[1] !== value
    }
  },
  message: (field, args, data)  => {
    return `The field ${field} must not be same as ${args[0]}`
  }
})

// extend('required_btn_toggle_boolean', {
//   validate: (value, args ) => {
//
//     return {
//       valid: parseInt(args[1]) === value
//     }
//   },
//   message: (field, args, data)  => {
//     return `The field ${field} must be "${args[0]}"`
//   }
// })

extend('custom_password_consecutive_validation', {
  validate: (value, args ) => {
    function checkPassword(value) {

      if(value) {
        let test = (x) => !isNaN(x);
        let check = (x, y, i) => x + i === y;

        for(let i = 0; i < value.length - 2; i++) {

          if(test(value[i])) {
            if(test(value[i + 1]) && test(value[i + 2])) {
              if(check(Number(value[i]),Number(value[i + 1]), 1) &&
                check(Number(value[i]), Number(value[i + 2]), 2)) {
                return false;
              }
            }
          } else if(!test(value[i + 1]) && !test(value[i + 2])) {
            if(check(value.charCodeAt(i), value.charCodeAt(i + 1), 1) &&
              check(value.charCodeAt(i), value.charCodeAt(i + 2), 2)) {
              return false;
            }
          }
        }
      }

      return true;
    }
    return {
      valid: checkPassword(value)
    }
  },
  message: (field, args, data)  => {
    return `The field ${field} shall not contain more than 3 consecutive alphabet letters or numbers`
  }
})
extend('custom_password_qwerty_validation', {
  validate: (value, args ) => {
    function checkPassword(value) {
      let qwerty = "qwertyuiopasdfghjklzxcvbnm"
      let qwertyValidationNo = 4

      if(value) {
        let test = (x) => !isNaN(x);
        let check = (x, y, i) => x + i === y;

        for(let i = 0; i < value.length - 2; i++) {
          let qwertyGroup = ''
          for(let qI = 0; qI < qwertyValidationNo; qI++) {
              qwertyGroup += value[i + qI]
          }
          if (qwertyGroup.length && qwerty.includes(qwertyGroup)) {
            return false;
          }
        }
      }

      return true;
    }
    return {
      valid: checkPassword(value)
    }
  },
  message: (field, args, data)  => {
    return `The field ${field} shall not contain more than 4 consecutive keyboard letters`
  }
})
extend('custom_password_same_validation', {
  validate: (value, args ) => {
    function checkPassword(value) {
      let sameValidationNo = 4

      if(value) {

        for(let i = 0; i < value.length - 2; i++) {

          let sameGroup = ''
          for(let qI = 0; qI < sameValidationNo; qI++) {
            sameGroup += value[i + qI]
          }
          if(sameGroup.length && new RegExp("^[\s" + sameGroup[0] + "]+$").test(sameGroup)){
            return false;
          }

        }
      }

      return true;
    }
    return {
      valid: checkPassword(value)
    }
  },
  message: (field, args, data)  => {
    return `The field ${field} shall not contain more than 4 repeated characters.`
  }
})
