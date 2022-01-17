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

        addObj: function(){
            
            let obj= {
                text :this.valoreTesto ,
                done:'false'
            }
            this.todo.push(obj);
        }
    }
})