<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <template v-slot:image>
          <v-img gradient="to top right, #098098, #99eeff"></v-img>
        </template>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-app-bar-title>Stock Management App</v-app-bar-title>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" bottom temporary>
        <div class="drawer">
          <router-link to="/" class="drawerLinks">Home</router-link>
        </div>
        <div class="drawer">
          <router-link to="/stock" class="drawerLinks">Stock</router-link>
        </div>
      </v-navigation-drawer>

      <router-view />

      <v-footer class="bg-cyan text-white text-center d-flex flex-column">
        <div>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 text-white"
            :icon="icon"
            variant="text"
          ></v-btn>
        </div>

        <div class="text-white pt-0">This web application was created by</div>

        <v-divider></v-divider>

        <div class="text-white">
          <strong>Rick Schultz</strong> — {{ new Date().getFullYear() }}
        </div>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    icons: ['mdi-linkedin', 'mdi-github', 'mdi-xing']
  })
}
</script>

<style scoped>
.drawer {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
}

.drawer:hover {
  background: rgb(153, 238, 255);
}

.drawer:first-child {
  padding-top: 1rem;
}

.drawerLinks {
  text-decoration: none;
  color: #000;
}
</style>
