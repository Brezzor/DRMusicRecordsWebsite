const baseUri = "https://drmusicrecordsapi20230321092257.azurewebsites.net/api/Records";

const app = Vue.createApp({
  data() {
    return {
        getAllResponse: null,
        error: null,
        showGetAll: false,
        getForm: {
          title: null,
          artist: null,
          duration: null,
          publicationyear: null,
        }
    }
  },
  methods: {
    clearGetAll() {
        this.getAllResponse = null,
        this.error = null,  
        this.showGetAll = false     
    },
    async getAll() {
      try {
          const response = await axios.get(baseUri, {
            params: {
              title: this.getForm.title,
              artist: this.getForm.artist,
              duration: this.getForm.duration,
              publicationyear: this.getForm.publicationyear
            }
          })
          this.getAllResponse = await response
          this.error = null
          this.showGetAll = true 
          this.getForm.title = null,
          this.getForm.artist = null,
          this.getForm.duration = null,
          this.getForm.publicationyear = null         
      } catch (error) {
          this.getAllResponse = null
          this.error = error
          this.showGetAll = false
          this.getForm.title = null,
          this.getForm.artist = null,
          this.getForm.duration = null,
          this.getForm.publicationyear = null
      }
    },
  },
})

app.mount('#app');