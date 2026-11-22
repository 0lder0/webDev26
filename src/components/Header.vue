<template>
    <header class = "site-header">
        <ul>
            <li>
                <router-link to = "/">Home</router-link>| 
            </li>
            <li>
                <router-link to = "/signup">Sign Up</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
    export default{
        name: 'AppHeader',
        data() {
            return {
            }
        },
        methods: {

        }
    }
</script>