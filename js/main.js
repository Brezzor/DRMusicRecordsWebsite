const baseUri = "https://drmusicrecordsapi20230321092257.azurewebsites.net/api/Records";

const app = Vue.createApp({
  data() {
    return {
        getAllResponse: null,
        error: null,
        id: null,
        showGetAll: false,
        title: null,
        artist: null,
        duration: null,
        publicationyear: null,
    }
  },
  methods: {
    clearGetAll() {
        this.getAllResponse = null,
        this.error = null,  
        this.showGetAll = false     
    },
    async getAll() {
      
      let uri = baseUri       

      if (this.title != null){
        uri = uri + "?title=" + this.title
      }
      if (this.artist != null){
        uri = uri + "?artist=" + this.artist
      }
      if (this.duration != null){
        uri = uri + "?duration=" + this.duration
      }
      if (this.publicationyear != null){
        uri = uri + "?publicationYear=" + this.publicationyear
      }
      
      try {
          const response = await axios.get(uri)
          this.getAllResponse = await response
          this.error = null
          this.showGetAll = true 
          this.title = null
          this.artist = null
          this.duration = null
          this.publicationyear = null         
      } catch (error) {
          this.getAllResponse = null
          this.error = error
          this.showGetAll = false
          this.title = null
          this.artist = null
          this.duration = null
          this.publicationyear = null
      }
    },
  },
})

app.mount('#app');