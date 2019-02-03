// https://stackoverflow.com/questions/48107693/call-method-from-another-component-in-vue-js
import injector from 'vue-inject'

import AuthService from '@services/auth.service'

injector.service('authService', function() {
  console.log('authService')
  return AuthService
})
