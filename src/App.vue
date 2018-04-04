<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.xoffset-enter-active,.xoffset-leave-active{
   transition: transform .3s ease-in-out,opacity .3s ease-in-out,-webkit-transform .3s ease-in-out
}
.xoffset-enter{
    opacity: 0;
    -webkit-transform: translate3d(10px,0,0);
    transform: translate3d(10px,0,0)
}
.xoffset-leave{
    opacity: 0;
    -webkit-transform: translate3d(-10px,0,0);
    transform: translate3d(-10px,0,0)
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>

<template>
    <div id="app">
        <transition enter-class="xoffset-leave" enter-active-class="xoffset-enter-active"
            leave-class="xoffset-leave">
            <router-view/>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
