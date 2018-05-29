<template>
    <div id="child">
        {{childMsg}}
        <div @click='up'>{{msga}}</div>
        <div @click="changeTitle" class="b">
            {{title}}
        </div>
    </div>
</template>
<script>
import Hub from '../assets/js/bus.js'

export default{
    props:['childMsg']
        // {
            // childMsg:{
            //     type:String,
            //     default:"aaa" //默认值
            // }
        // }
    ,
    data (){
        return{
            title: '点我给下面兄弟传值',
            msga:"点我给父组件传值"
        }
    },
    methods:{
        up(){
            console.log(1)
            this.$emit('upup','bian');
        },
        changeTitle () {
            Hub.$emit('toChangeTitle','首页')
            // this.$router.push({ path: '/router' })
        },
    }
}
</script>
<style scoped>
    #child{
        color: #000;
    }
</style>

