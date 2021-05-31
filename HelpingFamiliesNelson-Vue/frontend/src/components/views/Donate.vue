<template>
  <div class="col-md-12">
    <div v-if="loggedIn" class="card card-container" >
      <Form @submit="handleUpload" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <label for="category">Category</label>
            <Field name="category" type="text" class="form-control" />
            <ErrorMessage name="category" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="size">Size</label>
            <Field name="size" type="text" class="form-control" />
            <ErrorMessage name="size" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
          <div class="d-flex flex-row justify-content-center">
            <div class="p-2">
                <Field name="gender" id="male" value="male" type="radio" class="form-control" />
                <label for="male"><p>Male</p></label>
            </div>
            <div class="p-2">
                <Field name="gender" id="female" value="female" type="radio" class="form-control" />
                <label for="female"><p>Female</p></label>
            </div>
            <div class="p-2">
                <Field name="gender" id="other" value="other" type="radio" class="form-control" />
                <label for="other"><p>Either</p></label>
            </div>
            </div>
            <ErrorMessage name="gender" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <Field name="age" type="text" class="form-control" />
            <ErrorMessage name="age" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="other">Other</label>
            <Field name="other" type="text" class="form-control" />
            <ErrorMessage name="other" class="error-feedback" />
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Upload
            </button>
          </div>
        </div>
      </Form>

      <div
        v-if="message"
        class="alert d-flex flex-column mb-3 justify-content-center"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        <div class="p-2 text-center">
            <h4>{{ message }}</h4>
        </div>
      </div>
      <div
        v-if="successful"
        >
        <div class="p-2 text-center">
            <h6>Would you like to upload another item?</h6>
        </div>
        <div class="p-2 text-center">
            <button @click="handleClick" class="btn btn-primary btn-block">Yes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Upload",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      category: yup
        .string()
        .required("Category is required!"),
      size: yup
        .string()
        .required("Size is required!"),
      gender: yup
        .string(),
      age: yup
        .string(),
      other: yup
       .string()
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    handleUpload(upload) {
      upload.user = this.currentUser;
      console.log(this.currentUser);
      this.message = "";
      this.successful = false;
      this.loading = true;
      
      this.$store.dispatch("auth/upload", upload).then(
        (data) => {
          console.log(data);
          this.message = data;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );

    },
    handleClick() {
      console.log(this.currentUser)
        this.successful = false;
        this.message = "";
    }
  }
};
</script>
<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.error-feedback {
  color: red;
}
</style>