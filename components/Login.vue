<template>
  <section class="section">
    <h2>Sign In</h2>
    <b-field label="Email">
      <b-input type="email" value=""> </b-input>
    </b-field>

    <b-field label="Password">
      <b-input type="password" value="" password-reveal> </b-input>
    </b-field>

    <b-field>
      <b-checkbox>Remember me</b-checkbox>
    </b-field>
    <div class="buttons">
      <b-button type="is-primary">Submit</b-button>
    </div>
  </section>
</template>

<script>
export default {}
</script>
