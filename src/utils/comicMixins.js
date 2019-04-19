import storage from '@/utils/storage'

const common = {
  methods: {
    goDetail(item) {

      storage.save('comic_vuex', { "select": item })

      this.$router.push({
        name: '/Comic/ComicDetails',
        params: {
          item: JSON.stringify(item),
        }
      })
    }
  },
}

export { common }
