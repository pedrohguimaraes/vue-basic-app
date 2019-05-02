new Vue({
    el: '#app',
    data () {
      return {
        products: null
      }
    },
    filters : {
        convBoolean: (value) =>{
            return value ? 'Ativo' : 'Inativo';
        }
    },
    mounted() {
      axios
        .get('http://localhost:3000/product')
        .then(response => (this.products = response.data))
    }
  })