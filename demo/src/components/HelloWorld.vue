<template>
  <div class="hello">
   <ul>
     <li v-for="data in dataList" :key="data.age">
       <p>{{data.data}}</p>
       <p>{{data.age}}</p>
       <p>{{data.num}}</p>
     </li>
   </ul>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataList: []
    }
  },
   mounted(){
  	axios.get('/test/123',{
  	}).then(res=>{
      console.log(res)
      this.dataList = res.data
      console.log(this.dataList)
    })
     
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
