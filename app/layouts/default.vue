<template>
        <header style="max-height: 10px">
            <v-app >
                <v-app-bar  :elevation="0" >
                    <!-- <template v-slot:prepend>
                        <v-app-bar-nav-icon class="header-content" href="/"></v-app-bar-nav-icon>
                    </template> -->
                    <a  class="header-icon" href="/">
                        <font-awesome-icon icon="fa-solid fa-cat" style="height: 50px" />
                    </a>
                    <v-app-bar-title class="header-content">いろはのおうち</v-app-bar-title>
                    <div class="header-content">
                        <v-btn variant="text" color="#048db7" size="x-large" href="/schedule">
                            予定表
                        </v-btn>
                        <v-btn variant="text" color="#048db7" size="x-large">
                            日記
                        </v-btn>
                        <v-btn variant="text" color="#048db7" size="x-large">
                            蓑部家新聞
                        </v-btn>
                        <v-btn variant="text" color="#98cfe3" >
                            coming soon
                        </v-btn>
                    </div>
                </v-app-bar>
            </v-app>
        </header>
        <slot /> 
        <footer>
            <p>&copy; 2025 Iroha Minobe</p>
        </footer>
</template>

<style>
.header-icon{
    margin:25px;
    padding-top: 3%;   
    color: #048db7;
}
.header-content{
    margin:25px;
    padding-top: 2%;
}
header{
    height: 100px;
}
footer{
    text-align: center;
    background-color: #98cfe3;
    padding: 10px;
}
</style>

