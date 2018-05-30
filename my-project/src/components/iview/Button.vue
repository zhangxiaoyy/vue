<template>
    <div>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <br><br>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>


        <Button type="primary" shape="circle" icon="ios-search"></Button>
        <Button type="primary" icon="ios-search">Search</Button>
        <Button type="primary" shape="circle" icon="ios-search">Search</Button>
        <Button type="primary" shape="circle">Circle</Button>
        <br><br>
        <Button type="ghost" shape="circle" icon="ios-search"></Button>
        <Button type="ghost" icon="ios-search">Search</Button>
        <Button type="ghost" shape="circle" icon="ios-search">Search</Button>
        <Button type="ghost" shape="circle">Circle</Button>

        <Button type="primary" loading>Loading...</Button>
        <Button type="primary" :loading="loading" @click="toLoading">
            <span v-if="!loading">Click me!</span>
            <span v-else>Loading...</span>
        </Button>
        <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
            <span v-if="!loading2">Click me!</span>
            <span v-else>Loading...</span>
        </Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
