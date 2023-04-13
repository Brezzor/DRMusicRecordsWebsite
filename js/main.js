const baseUri = "https://drmusicrecordsapi20230321092257.azurewebsites.net/api/Records";

const app = Vue.createApp({
  data() {
    return {
        getAllResponse: null,
        error: null,
        showGetAll: false,
        getParams: {
          title: null,
          artist: null,
          duration: null,
          publicationyear: null,
        }
    }
  },
  methods: {
    clearParams() {
      for (var key in this.getParams) {
        this.getParams[key] = null;
      }
    },
    clearGetAll() {
        this.getAllResponse = null,
        this.error = null,  
        this.showGetAll = false     
    },
    async getAll() {
      try {
          const response = await axios.get(baseUri, { params: this.getParams })
          this.getAllResponse = await response
          this.error = null
          this.showGetAll = true           
          this.clearParams();        
      } catch (error) {
          this.getAllResponse = null
          this.error = error
          this.showGetAll = false
          this.clearParams();
      }
    },
  },
})

app.mount('#app');