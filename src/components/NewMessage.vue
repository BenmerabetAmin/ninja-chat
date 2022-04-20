<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message: </label>
            <input type="text" name="new-message" v-model="newMessage">
            <p v-if="feedback" class="red text">{{feedback}}</p>
        </form>
    </div>    
</template>

<script>
import db from '../firebase/init'
export default {
    name:'NewMessage',
    props:['name'],
    data(){
        return{
            newMessage: null,                
            feedback: null,

        }
    },
    methods: {
      async addMessage(){
            if(this.newMessage){
               await db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now() 
                })
                this.newMessage= null
                ths.feedback= null
            }else{
                this.feedback= 'You must enter a message in order to send it'
            }
        }
    }
}
</script>
