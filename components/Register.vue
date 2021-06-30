<template>
  <div class="modal-card" style="width: auto">
    <header v-if="mode == 'popup'" class="modal-card-head">
      <p class="modal-card-title">{{ $t('auth.register') }}</p>
      <button type="button" class="delete" @click="$emit('close')" />
    </header>
    <form action="">
      <section class="modal-card-body">
        <h2 v-if="mode == 'page'" class="is-size-4">
          {{ $t('auth.register') }}
        </h2>
        <p class="field">{{ $t('auth.registerinfo') }}</p>

        <b-field :label="$t('name')">
          <b-input type="text" value=""> </b-input>
        </b-field>

        <b-field grouped>
          <b-field label="Email" expanded>
            <b-input type="email" value=""> </b-input>
          </b-field>

          <b-field :label="$t('auth.phone')" expanded>
            <b-input type="number" value=""> </b-input>
          </b-field>
        </b-field>

        <b-field :label="$t('auth.password')">
          <b-input type="password" value="" password-reveal> </b-input>
        </b-field>

        <b-field :label="$t('auth.confirmpass')">
          <b-input type="password" value="" password-reveal> </b-input>
        </b-field>

        <div v-if="mode == 'page'" class="buttons">
          <b-button type="is-primary">{{ $t('submit') }}</b-button>
        </div>
      </section>
      <footer v-if="mode == 'popup'" class="modal-card-foot">
        <b-button :label="$t('close')" @click="$emit('close')" />
        <b-button :label="$t('submit')" type="is-primary" />
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
}
</script>
