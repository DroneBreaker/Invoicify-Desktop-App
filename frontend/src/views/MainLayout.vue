<template>
    <main>
        <div class="intro-title">
        
        </div>

        <aside>
            <div>
                <h3>Invoicify</h3>
                <hr>
            </div>
            
            <div>
                <li>
                    <RouterLink to="/">
                        <a href="">Dashboard</a>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/sales">
                        <a href="">Sales</a>
                    </RouterLink>
                </li>
                
                <li>
                    <RouterLink to="/purchase">
                        <a href="">Purchase</a>
                    </RouterLink>
                </li>
            </div>
        </aside>

        <div class="main-layout"><RouterView /></div>
    </main>
</template>

<script setup>
/**
 * IMPORTS
*/
  import Button from '../components/Button.vue';

</script>

<style lang="css" scoped>
/* RouterLink {
    margin-right: 10px;
} */
main {
    margin-left: 25px;
}

.intro-title {
    height: 50px;
}


h1 {
    text-transform: uppercase;
    font-weight: 300;
}

hr {
    border-color: black;
}

aside {
    position: fixed;
    top: 60px;
    z-index: 40;
    width: 230px;
    height: 100vh;
    background-color: rgb(194, 193, 193);
    padding: 15px;
    border-radius: 10px;
}

li {
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 600;
    list-style: none;
    margin-left: 20px;
}

li a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
}

.main-layout {
    padding-left: 280px;
}

h3 {
    margin: 0;
    margin-left: 20px;
}
</style>