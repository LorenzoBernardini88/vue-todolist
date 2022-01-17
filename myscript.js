let app = new Vue({
    el: '#myapp',
    data : {
        valoreTesto : '',
        todo:[
            {
                text:'Discutere con Milan',
                done: 'false'
            },
            {
                text:'Portare a spasso il cane',
                done: 'false'
            },
            {
                text:'Aperitivo al Maboo',
                done: 'false'
            },
            {
                text:'Andare al circo di scacchi',
                done: 'false'
            },
            {
                text:'Esercitarsi con la chitarra',
                done:'false'
            },

            
        ]

    },
    methods:{
        //funzione che aggiunge obj all'array 'todo' => elemento nella "to do list"
        addObj: function(){
            
            let obj= {
                text :this.valoreTesto ,
                done:'false'
            }
            this.todo.push(obj);
        },
        //funzione che rimuove obj dalla "to do list"
        removeObj: function(indice){
            this.todo.splice(indice,1);
            return indice
        }
    }
})