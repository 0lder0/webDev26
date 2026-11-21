<template>
    <header class = "site-header">
        <ul>
            <li>
                <router-link to = "/">Home</router-link>| 
            </li>
            <li>
                <a href="addPost.html">addPost</a>
            </li>
        </ul>
        <ul class="icon">
            <li class="dropdown-container" tabindex="0">
                <a href="#" onclick="return false;">
                    <img src="res/images/istockphoto-1300845620-612x612.jpg" alt="User">
                </a>
                <div class="dropdown-menu">
                    <p class="dropdown-name">John Doe</p>
                    <p class="dropdown-email">john.doe@ut.ee</p>
                    <a href="login.html">logout</a>
                </div>
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