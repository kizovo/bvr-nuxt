import createRepository from '~/services/Repository'

export default (ctx, inject) => {
  inject('repositories', createRepository(ctx.$axios))
}
