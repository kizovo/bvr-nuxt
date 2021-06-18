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
                  <b-icon icon="account-circle"></b-icon>
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
          <aside class="column is-2 section">
            <p class="menu-label is-hidden-touch">General</p>
            <ul class="menu-list">
              <li v-for="(item, key) of items" :key="key">
                <nuxt-link :to="item.to" exact-active-class="is-active">
                  <b-icon :icon="item.icon" /> {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </aside>

          <div class="column is-10">
            <nuxt />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
  .navbar-item,
  .navbar-burger {
    color: #fff;
  }
}
</style>
