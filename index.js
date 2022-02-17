
const app = Vue.createApp({
    data() {
        return {
            regions: '',
            states: '',
            cities: '',
            idRegion: 0,
            idState: 0,
            totalCities: 0,
        }
    },
    methods: {
        getRegions() {
            axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
                .then(response => {
                    this.regions = response.data;
                })
                .catch(error =>{})
                .finally(() => {})
        },
        getStates() {
            axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${this.idRegion}/estados`)
                .then(response => {
                    this.states = response.data;
                })
                .catch(error => {})
                .finally(() => {})
        },
        getCities() {
            axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.idState}/municipios`)
                .then(response => {
                    this.cities = response.data;
                    this.totalCities = response.data ? parseInt(response.data.length) : 0;
                })
                .catch(error => {})
                .finally(() => {})
        },
    },
    created() {
        this.getRegions()
    },
})
app.mount("#mainApp")