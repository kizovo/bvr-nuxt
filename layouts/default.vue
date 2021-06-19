<template>
  <div>
    <section class="header has-background-primary-dark">
      <div class="container">
        <b-navbar class="has-background-primary-dark">
          <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img src="~assets/buefy.png" alt="Buefy" height="28" />
            </b-navbar-item>
          </template>

          <template #start>
            <b-navbar-item href="#">{{ $t('nav.contact') }}</b-navbar-item>
            <b-navbar-item href="#">{{ $t('nav.about') }}</b-navbar-item>
          </template>

          <template #end>
            <b-navbar-item tag="div">
              <b-dropdown position="is-bottom-left">
                <template #trigger>
                  <img
                    src="~assets/svg/account_circle.svg?data"
                    class="icon-svg white"
                  />
                </template>
                <b-dropdown-item href="/auth/login">
                  {{ $t('auth.login') }}
                </b-dropdown-item>
                <b-dropdown-item href="/auth/register">
                  {{ $t('auth.register') }}
                </b-dropdown-item>
              </b-dropdown>
            </b-navbar-item>
          </template>
        </b-navbar>
      </div>
    </section>

    <section class="main-content">
      <div class="container">
        <div class="columns">
          <div class="column">
            <nuxt />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
  .navbar-item,
  .navbar-burger {
    color: #fff;
  }
}
</style>
