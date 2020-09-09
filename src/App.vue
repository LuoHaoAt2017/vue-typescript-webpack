<template>
    <div class="app">
        <div class="head">
            <router-link to="/home">首页</router-link> |
            <router-link to="/fleet">舰船</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Mixins
} from "vue-property-decorator";
@Component({
    name: 'App'
})
export default class App extends Vue {

}
</script>

<style>
.head {
    margin: 20px 0;
    font-size: 20px;
    text-align: center;
}
</style>
