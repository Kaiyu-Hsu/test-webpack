import Vue from 'vue'
import Hello from '././components/Hello.vue'

new Vue({
    el: '#app',
    mounted: function () {
        console.log('work!');
    },
    components: { Hello },
    template: '<hello/>'
});