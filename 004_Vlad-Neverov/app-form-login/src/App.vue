<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 mx-auto">
        <form @submit.prevent="registerUser" novalidate>
          <div v-show="step === 1" class="step">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                      @blur="$v.formReg.name.$touch()"
                      :class="{'is-invalid': $v.formReg.name.$error}"
                      v-model="formReg.name"
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Name...">
              <div
                      v-if="!$v.formReg.name.required"
                      class="invalid-feedback">
                Invalid user name entered
              </div>
              <div
                      v-if="!$v.formReg.name.alpha"
                      class="invalid-feedback">
                {{msg}}
              </div>
            </div>
            <div class="form-group">
              <label for="surname">Surname</label>
              <input
                      @blur="$v.formReg.surname.$touch()"
                      :class="{'is-invalid': $v.formReg.surname.$error}"
                      v-model="formReg.surname"
                      type="text"
                      class="form-control"
                      id="surname"
                      placeholder="Surname...">
              <div
                      v-if="!$v.formReg.surname.required"
                      class="invalid-feedback">
                Invalid user surname entered
              </div>
              <div
                      v-if="!$v.formReg.name.alpha"
                      class="invalid-feedback">
                {{msg}}
              </div>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                      @blur="$v.formReg.email.$touch()"
                      :class="{'is-invalid': $v.formReg.email.$error}"
                      v-model="formReg.email"
                      type="email" class="form-control"
                      id="email"
                      placeholder="Email...">
              <div
                      v-if="!$v.formReg.email.required"
                      class="invalid-feedback">
                Please choose a email
              </div>
              <div
                      v-if="!$v.formReg.email.email"
                      class="invalid-feedback">
                Invalid email entered
              </div>
            </div>
            <button
                    :disabled="disabledBtnOne"
                    @click="nextStep"
                    type="button"
                    class="btn btn-primary"
            >Next step</button>
          </div>
          <transition name="slide-fade">
            <div v-show="step === 2" class="step">
              <div class="form-group">
                <label for="password">Password</label>
                <input
                        @blur="$v.formReg.password.$touch()"
                        :class="{'is-invalid': $v.formReg.password.$error}"
                        v-model="formReg.password"
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Password...">
                <div
                        v-if="!$v.formReg.password.required"
                        class="invalid-feedback">
                  Enter password
                </div>
                <div
                        v-if="!$v.formReg.password.minLength"
                        class="invalid-feedback">
                  It must be at least 6 characters
                </div>
              </div>
              <div class="form-group">
                <label for="passwordConfirm">Confirm password</label>
                <input
                        @blur="$v.formReg.confirmPassword.$touch()"
                        :class="{'is-invalid': $v.formReg.confirmPassword.$error}"
                        v-model="formReg.confirmPassword"
                        type="password" class="form-control"
                        id="passwordConfirm"
                        placeholder="Confirm password...">
                <div
                        v-if="!$v.formReg.confirmPassword.sameAs"
                        class="invalid-feedback">
                  Passwords must match
                </div>
              </div>
              <button

                      @click="backStep"
                      type="button"
                      class="btn btn-dark mr-2"
              >Back</button>
              <button
                      :disabled="disabledBtnTwo"
                      @click="nextStep"
                      type="button"
                      class="btn btn-primary"
              >Next step</button>
            </div>
          </transition>
          <transition name="slide-fade">
            <div v-show="step === 3" class="step">
              <div class="form-group">
                <label for="country">Country</label>
                <input
                        @blur="$v.formReg.country.$touch()"
                        :class="{'is-invalid': $v.formReg.country.$error}"
                        v-model="formReg.country"
                        type="text" class="form-control"
                        id="country"
                        placeholder="Country...">
                <div
                        v-if="!$v.formReg.country.alpha"
                        class="invalid-feedback">
                  {{msgNotNumber}}
                </div>
              </div>
              <div class="form-group">
                <label for="city">City</label>
                <input
                        @blur="$v.formReg.city.$touch()"
                        :class="{'is-invalid': $v.formReg.city.$error}"
                        v-model="formReg.city"
                        type="text"
                        class="form-control"
                        id="city"
                        placeholder="City...">
                <div
                        v-if="!$v.formReg.city.alpha"
                        class="invalid-feedback">
                  {{msg}}
                </div>
              </div>
              <button
                      @click="backStep"
                      type="button"
                      class="btn btn-primary mr-2"
              >Back</button>
              <button
                      :disabled="disabledRegister"
                      type="submit"
                      class="btn btn-success"
              >Submit</button>
            </div>
          </transition>


        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {required, email, helpers, minLength, sameAs} from 'vuelidate/lib/validators'
  const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)

export default {
  data() {
    return {
      step: 1,
      msgNotNumber: 'Only letters, not numbers',
      formReg: {
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: '',
        city: ''
      }
    }
  },
  computed: {
    disabledBtnOne() {
      return this.$v.formReg.name.$invalid ||
        this.$v.formReg.surname.$invalid ||
        this.$v.formReg.email.$invalid
    },
    disabledBtnTwo() {
      return this.$v.formReg.password.$invalid ||
        this.$v.formReg.confirmPassword.$invalid
    },
    disabledRegister() {
      return this.$v.formReg.country.$invalid ||
        this.$v.formReg.city.$invalid
    }
  },
  methods: {
    nextStep() {
      if (this.step < 3) {
        this.step++;
      }
    },
    backStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    registerUser() {
      console.log('Register well done!')
      this.step = 1;

      for (let input in this.formReg) {
        this.formReg[input] = ''
      }
      this.$v.$reset()
    }
  },
  validations: {
    formReg: {
      name: {
        required,
        alpha
      },
      surname: {
        required,
        alpha
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs('password')
      },
      country: {
        alpha
      },
      city: {
        alpha
      }
    }
  }
}
</script>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-enter {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
