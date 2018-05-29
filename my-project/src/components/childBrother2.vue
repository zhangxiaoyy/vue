<template>
  <div>{{msg}}fdsa</div>
</template>

<script>
    import Hub from '../assets/js/bus.js'

    export default {
        data () {
            return {
                msg:""
            }
        },
        created(){
            
        },
        mounted(){
            let self = this
            Hub.$on('toChangeTitle',(e)=>{
                console.log(e)
                self.msg = e
            })
        }
    }

</script>
<style scoped>
    div{
        color: red;
    }
</style>
