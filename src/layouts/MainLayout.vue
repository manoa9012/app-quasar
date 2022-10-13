<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> App </q-toolbar-title>

        <div>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
            <q-menu auto-close>
              <div class="row no-wrap q-pa-md">
                <!--  <div class="column">
                  <div class="text-h6 q-mb-md">Settings</div>
                  <q-toggle v-model="mobileData" label="Use Mobile Data" />
                  <q-toggle v-model="bluetooth" label="Bluetooth" />
                </div> -->
                <div class="column">
                  <q-list style="max-width: 100px">
                    <q-item clickable to="profile">
                      <q-item-section>Profile</q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable>
                      <q-item-section>Medical History</q-item-section>
                    </q-item></q-list
                  >
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <q-avatar size="72px">
                    <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs">
                    {{ storeauth.getName }}
                  </div>

                  <q-btn
                    color="primary"
                    label="Logout"
                    push
                    size="sm"
                    v-close-popup
                  />
                </div>
              </div>
            </q-menu>
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer :width="200" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>
        <q-item
          clickable
          :to="link.link"
          v-for="link in essentialLinks"
          :key="link.title"
        >
          <q-item-section v-if="link.icon" avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>{{ link.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { useAuthStore } from 'src/stores/auth-store';

const linksList = [
  {
    title: 'Home',
    caption: 'Home Page',
    icon: 'las la-home',
    link: 'home',
  },
  {
    title: 'Profile',
    caption: 'User Profile',
    icon: 'las la-user',
    link: 'profile',
  },
];

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);
    const storeauth = useAuthStore();
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      storeauth,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
