<template>
  <div class="app-wrapper">
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Welcome to registration</h4>
        <form @submit.prevent="submitHandler">
          <div class="input-field">
            <input
              id="last_name"
              type="text"
              class="validate"
              v-model.trim="name"
              :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
            />
            <label for="last_name">Your name</label>
            <small
              v-if="$v.name.$dirty && !$v.name.required"
              class="helper-text invalid"
            >Пожалуйста введите name</small>
          </div>
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
          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input type="file" multiple @change="processFile($event)" />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" placeholder="Upload one or more files" />
            </div>
          </div>
          <button class="waves-effect waves-light btn login" type="submit">Register</button>
        </form>
      </div>
      <div class="modal-footer clearfix">
        <p>
          If you have account
          <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import messages from "@/utils/messages";
import { email, required, minLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  name: "Register",
  data: () => ({
    email: "",
    password: "",
    name: "",
    photo: null
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(8) },
    name: { required }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  computed: {
    ...mapGetters(["errorMessage"])
  },
  methods: {
    processFile(event) {
      console.log(event.target.files[0]);
      this.photo = event.target.files[0];
    },
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        photo: this.photo
      };
      try {
        await this.$store.dispatch("register", formData);
        console.log("log");

        this.$router.push("/");
      } catch (e) {
        console.log(e);
        this.$message(this.errorMessage);
      }
    }
  }
};
</script>

<style>
</style>