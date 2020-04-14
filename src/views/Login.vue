<template>
  <div class="app-wrapper">
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Please Login</h4>
        <form @submit.prevent="submitHandler">
          <div class="input-field">
            <input
              id="last_mail"
              type="text"
              class="validate"
              v-model.trim="email"
              :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
            />
            <label for="last_mail">Your email</label>
            <small
              v-if="$v.email.$dirty && !$v.email.required"
              class="helper-text invalid"
            >Пожалуйста введите email</small>
            <small
              v-else-if="$v.email.$dirty && !$v.email.email"
              class="helper-text invalid"
            >Введите корректный email</small>
          </div>

          <div class="input-field">
            <input
              id="password"
              type="password"
              class="validate"
              v-model.trim="password"
              :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
            />
            <label for="password">Password</label>
            <small
              v-if="$v.password.$dirty && !$v.password.required"
              class="helper-text invalid"
            >Пожалуйста введите Password</small>
            <small
              v-else-if="$v.password.$dirty && !$v.password.minLength"
              class="helper-text invalid"
            >Пароль должен быть не менее {{$v.password.$params.minLength.min}} символов, сейчас он {{password.length}}</small>
          </div>

          <button class="waves-effect waves-light btn login" type="submit">Login</button>
        </form>
      </div>
      <div class="modal-footer clearfix">
        <p>
          I want to
          <a href="/register">register</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

import messages from "@/utils/messages";

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: ""
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(8) }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      };
      try {
        await this.$store.dispatch("login", formData);
        console.log("log");
        this.$message("You in the system");
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style>
</style>