const baseUri = "https://drmusicrecordsapi20230321092257.azurewebsites.net/api/Records";

const app = Vue.createApp({
  data() {
    return {
        getAllResponse: null,
        error: null,
        id: null,
        showGetAll: false
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
            const response = await axios.get(baseUri)
            this.getAllResponse = await response
            this.error = null
            this.showGetAll = true
        } catch (error) {
            this.getAllResponse = null
            this.error = error
            this.showGetAll = false
        }
    },
  },
})

app.mount('#app');