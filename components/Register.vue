<template>
  <section class="section">
    <h2 class="is-size-4">Register</h2>
    <b-field label="Name">
      <b-input type="text" value=""> </b-input>
    </b-field>

    <b-field label="Email">
      <b-input type="email" value=""> </b-input>
    </b-field>

    <b-field label="Password">
      <b-input type="password" value="" password-reveal> </b-input>
    </b-field>

    <b-field label="Confirm Password">
      <b-input type="password" value="" password-reveal> </b-input>
    </b-field>

    <div class="buttons">
      <b-button type="is-primary">Submit</b-button>
    </div>
  </section>
</template>

<script>
export default {}
</script>
