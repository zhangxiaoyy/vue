<template>
<div>
  <div>{{msgs}}</div>
  <div class="a">
    hong
    
  </div>
  

  <childBrother1 @upup='change' :msg='msgs' :child-msg='msg'></childBrother1>
  
  <childBrother2></childBrother2>
  
</div>
  
</template>
<script>
import childBrother1 from './childBrother1.vue'
import childBrother2 from './childBrother2.vue'

export default {
  name: 'Index',
  data () {
    return {
      msg:'hello word',
      msgs:"faster"
    }
  },
  components:{
    'childBrother1':childBrother1,
    'childBrother2':childBrother2
  },
  methods:{
    
    change(msgs){
      console.log(msgs)
      this.msgs = msgs
    }
  }
}
</script>
<style  type="text/css">
  
</style>

