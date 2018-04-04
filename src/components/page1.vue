<style lang="less">
.page1{}
</style>

<template>
    <div class="page1">
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'page1',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            data:[
                {name:'page1',text:'page11'}
            ]
        }
    }
}
</script>
