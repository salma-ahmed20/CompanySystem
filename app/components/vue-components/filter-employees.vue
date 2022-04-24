<template>
  <div >
     <input v-model="keyword" placeholder="Search"/>
     <button class="c-button" @click="clearSearch()">Clear</button>
  </div>
</template>

<script>

export default {
  name: "FilterEmployeesComponent",
  data(){
    return {
      keyword: ''
    }
  },
  watch:{
    keyword(value){
      console.log(value)
      this.$emit('keyword-change',value)
    }
  },
  methods:{
    clearSearch() {
      this.keyword = ''
    }
  }
};
</script>
