<template>
        <header>
            <v-app >
                <v-app-bar height="hv" :elevation="0">
                    <template v-slot:prepend>
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    </template>
                    <v-app-bar-title>いろはのおうち</v-app-bar-title>
                    <div class="navigation">
                        <v-btn variant="text" color="#048db7" size="x-large">
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
            <p>&copy; 2025 My Application</p>
        </footer>
</template>

<style>
.navigation{
    margin:25px;
}
header{
    height: 100px;
}
</style>