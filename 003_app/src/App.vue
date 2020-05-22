<template>
  <div class="container">
    <form class="pt-3" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          v-model.trim="$v.email.$model"
        />
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">This field should an email</div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">This email is alredy exists</div>
      </div>

      <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          v-model.trim="$v.password.$model"
        />
        <div
          class="invalid-feedback"
          v-if="!$v.password.minLength"
        >Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}</div>
      </div>

      <div class="form-group">
        <label for="confirm" class="form-label">Confirm password</label>
        <input
          type="password"
          id="confirm"
          class="form-control"
          :class="{'is-invalid': $v.confirmPassword.$error}"
          v-model.trim="$v.confirmPassword.$model"
        />
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Password should match</div>
      </div>
      <button class="btn btn-success" type="submit" :disabled="$v.$invalid">Submit</button>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("Email", this.email);
      console.log("Password", this.password);
    }
  },
  validations: {
    email: {
      required,
      email,
      uniqEmail: function(newEmail) {
        if (newEmail === "") return true;
        return new Promise(resolve => {
          setTimeout(() => {
            const value = newEmail !== "test@mail.ru";
            resolve(value);
          }, 1000);
        });
      }
    },
    password: {
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs("password")
    }
  }
};
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
