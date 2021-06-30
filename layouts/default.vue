<template>
  <div id="main">
    <div id="wrapper-content">
      <header class="header">
        <div class="container">
          <b-navbar>
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
              <b-dropdown
                class="btn-account clickable"
                position="is-bottom-left"
              >
                <template #trigger>
                  <img
                    src="~assets/svg/account_circle.svg?data"
                    class="icon-svg white"
                  />
                </template>
                <b-dropdown-item @click="openModal(loginComp)">
                  {{ $t('auth.login') }}
                </b-dropdown-item>
                <b-dropdown-item @click="openModal(registerComp)">
                  {{ $t('auth.register') }}
                </b-dropdown-item>
              </b-dropdown>
            </template>
          </b-navbar>
        </div>
      </header>

      <section class="main-content">
        <div class="container">
          <div class="columns is-inline-flex">
            <div class="column">
              <nuxt />
            </div>
          </div>
        </div>
      </section>
    </div>

    <footer class="footer has-text-centered">
      Copyright &copy; 2022. All right reserved.
    </footer>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Register from '@/components/Register'
import { ModalProgrammatic as Modal } from 'buefy'

export default {
  data() {
    return {
      loginComp: Login,
      registerComp: Register,
    }
  },
  methods: {
    openModal(comp) {
      Modal.open({
        component: comp,
        hasModalCard: true,
        parent: this,
        trapFocus: true,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#wrapper-content {
  flex: 1;
}
header,
footer,
nav {
  background: #552fbc;
  color: #fff;
}
nav {
  .btn-account {
    align-items: center;
  }
  .navbar-item {
    @media screen and (min-width: 1024px) {
      color: #fff;
      &:hover {
        color: #4a4a4a;
      }
    }
  }
}
</style>
