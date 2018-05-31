<template>
    <div>
        <p>{{msg}}</p>
        <p>{{author}}</p>
        <input type="text" v-model="inputTxt">
        <button @click='setAuthor'>设置store.js中的全局变量</button>        
    </div>
</template>
<script>
    export default{
        name:'vuex',
        data(){
            return {
                msg:"fda",
                inputTxt:''
            }
        },
        computed:{
            author(){
                return this.$store.state.author
            }
        },
        methods:{
            setAuthor:function(){
                // this.$store.state.author = this.inputTxt;
                this.$store.commit('newAuthor',this.inputTxt)
            }
        }
    }
</script>
