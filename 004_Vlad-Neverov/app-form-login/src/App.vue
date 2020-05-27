<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 mx-auto">
        <form @submit.prevent="registerUser" novalidate>
          <pre>
            {{$v.formReg.name}}
          </pre>
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
                      v-if="!$v.formReg.name.$required"
                      class="invalid-feedback">
                Please choose a username
              </div>
            </div>
            <div class="form-group">
              <label for="surname">Surname</label>
              <input v-model="formReg.surname" type="text" class="form-control" id="surname" placeholder="Surname...">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="formReg.email" type="email" class="form-control" id="email" placeholder="Email...">
            </div>
            <button
                    @click="nextStep"
                    type="button"
                    class="btn btn-primary"
            >Next step</button>
          </div>
          <transition name="slide-fade">
            <div v-show="step === 2" class="step">
              <div class="form-group">
                <label for="password">Password</label>
                <input v-model="formReg.password" type="password" class="form-control" id="password" placeholder="Password...">
              </div>
              <div class="form-group">
                <label for="passwordConfirm">Surname</label>
                <input v-model="formReg.passwordConfirm" type="password" class="form-control" id="passwordConfirm" placeholder="Confirm password...">
              </div>
              <button
                      @click="backStep"
                      type="button"
                      class="btn btn-dark mr-2"
              >Back</button>
              <button
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
                <input v-model="formReg.country" type="text" class="form-control" id="country" placeholder="Country...">
              </div>
              <div class="form-group">
                <label for="city">City</label>
                <input v-model="formReg.city" type="text" class="form-control" id="city" placeholder="City...">
              </div>
              <button
                      @click="backStep"
                      type="button"
                      class="btn btn-primary mr-2"
              >Back</button>
              <button
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
  import {required} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      step: 1,
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
    }
  },
  validations: {
    formReg: {
      name: {
        required
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
