<template>
  <div class="modal-card" style="width: auto">
    <header v-if="mode == 'popup'" class="modal-card-head">
      <p class="modal-card-title">{{ $t('auth.login') }}</p>
      <button type="button" class="delete" @click="$emit('close')" />
    </header>
    <form id="form-login" @submit.prevent="handleSubmit">
      <section class="modal-card-body">
        <h2 v-if="mode == 'page'" class="is-size-4">{{ $t('auth.login') }}</h2>
        <p class="field">{{ $t('auth.logininfo') }}</p>

        <b-field label="Email">
          <b-input type="email" value=""> </b-input>
        </b-field>

        <b-field :label="$t('auth.password')">
          <input :type="inputType" value="" class="input" />
          <img
            src="~assets/svg/visibility.svg?data"
            class="icon-svg overlay-right clickable toggle-password"
            @click="toggleVisibility"
          />
        </b-field>

        <b-field>
          <b-checkbox>{{ $t('auth.remember') }}</b-checkbox>
        </b-field>

        <div v-if="mode == 'page'" class="buttons">
          <b-button type="is-primary">{{ $t('submit') }}</b-button>
        </div>
      </section>
      <footer v-if="mode == 'popup'" class="modal-card-foot">
        <b-button :label="$t('close')" @click="$emit('close')" />
        <b-button
          :label="$t('submit')"
          type="is-primary"
          native-type="submit"
        />
      </footer>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'popup',
    },
  },
  data() {
    return {
      inputType: 'password',
    }
  },
  methods: {
    ...mapActions({
      userLogin: 'auth/userLogin',
    }),
    async handleSubmit() {
      try {
        const response = await this.userLogin({
          email: this.email,
          password: this.password,
        })

        if (response) {
          // this.closeModal()
          // this.resetInput()
          // this.$cookiz.set('token', response.token)
          // if (response.user) {
          //   this.$cookiz.set('userId', response.user.id)
          //   this.$cookiz.set('userName', response.user.name)
          //   this.$cookiz.set('ol_user_type', response.user.type)
          //   this.$cookiz.set('ol_user_email', response.user.email)
          // }
          // const res = await getNotification(response.token)
          // if (res) {
          //   const newUser = res.data.data
          //   const newUserFromApi = { ...response.user, ...newUser }
          //   this.setUser(newUserFromApi)
          //   // localStorage.user = JSON.stringify(newUser);
          //   if (this.remember) {
          //     localStorage.remember = JSON.stringify(true)
          //     localStorage.rememberEmail = response.user.email
          //   } else {
          //     localStorage.removeItem('remember')
          //     localStorage.removeItem('rememberEmail')
          //   }
          //   if (
          //     this.$route.hash === '#masuk' ||
          //     this.$route.hash === '#daftar'
          //   ) {
          //     this.$router.push(this.langPath || '/')
          //   }
          //   if (
          //     this.$route.path ===
          //     this.langPath + '/dasbor-listing/landing'
          //   ) {
          //     this.$router.push(this.langPath + '/dasbor-listing')
          //   } else if (this.$route.path === this.langPath + '/looking-for') {
          //     this.$router.push(this.langPath + '/dasbor-wishlist?type=Looking')
          //   } else if (this.$route.name === `newsletter${this.langName}`) {
          //     window.location.reload()
          //   }
          // }
        } else {
        }
      } catch (err) {}
    },
    toggleVisibility() {
      this.inputType = this.inputType === 'password' ? 'text' : 'password'
    },
  },
}
</script>
