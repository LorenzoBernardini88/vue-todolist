let app = new Vue({
    el: '#myapp',
    data : {
        valoreTesto : '',
        todo:[
            {
                text:'Discutere con Milan',
                done: false
            }
        ]
    },
    methods:{

        //funzione che aggiunge obj all'array 'todo' => elemento nella "to do list".
        addObj: function(){
            
            let obj= {
                text :this.valoreTesto ,
                done: false
            }
            this.todo.push(obj);
        },

        //funzione che rimuove obj dalla "to do list".
        removeObj: function(indice){
            this.todo.splice(indice,1);
        },
        
        //funzione che assegna classe .delete al click sullo span.
        deleteObj : function(indice){
            if(this.todo[indice].done == false){
                this.todo[indice].done = true
                
            }else{
                this.todo[indice].done = false
            }
            
        }
    }
})