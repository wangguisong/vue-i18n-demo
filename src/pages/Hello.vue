<template>
  <div>
    <div>{{$t('hello.hello')}}</div>
    <button @click="change">change</button>
  </div>
</template>

<script>
import {changeLanguage, getLanguage} from '@/assets/libs/locale'
export default {
    methods:{
      change(){
        let locale = getLanguage(this);
        if(locale=='zh')
          changeLanguage(this,'en')
        else
          changeLanguage(this, 'zh')
      }
    }
}
</script>

<style>

</style>
