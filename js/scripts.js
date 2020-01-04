const dep = new Vue({
  el: '#app',
  data: {
    titulo: 'hola mundo con vue',
    frutas: ['pera', 'manzana', 'uva', 'mandarina'],
    fruits: [
      {nombre:'pera', cantidad: 10},
      {nombre:'manzana', cantidad: 0},
      {nombre:'uva', cantidad: 7},
      {nombre:'mandarina', cantidad: 3}
    ],
    newFruit: '',
    total: 0,

  },
  methods: {
    addFruit () {
      console.log('hurra, se agrego una fruta');
      this.fruits.push({
        nombre: this.newFruit, cantidad: 0
      });
      this.newFruit = '';
    }
  },
  computed: {
    sumfruit (){
      this.total = 0;
      for (fruta of this.fruits){
        this.total = this.total + fruta.cantidad;
      }
      return this.total;
    }
  }
});