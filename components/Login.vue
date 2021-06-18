<template>
  <section class="section">
    <h2 class="is-size-4">{{ $t('auth.login') }}</h2>
    <b-field label="Email">
      <b-input type="email" value=""> </b-input>
    </b-field>

    <b-field :label="$t('auth.password')">
      <b-input type="password" value="" password-reveal> </b-input>
    </b-field>

    <b-field>
      <b-checkbox>{{ $t('auth.remember') }}</b-checkbox>
    </b-field>
    <div class="buttons">
      <b-button type="is-primary">{{ $t('submit') }}</b-button>
    </div>
  </section>
</template>

<script>
export default {}
</script>
