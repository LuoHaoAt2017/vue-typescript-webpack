<template>
    <div class="app">
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
</style>
