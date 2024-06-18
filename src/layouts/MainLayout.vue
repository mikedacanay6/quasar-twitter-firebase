<template>
  <q-layout view="lHr lpr fFf" class="bg-black text-white">
    <q-header bordered elevated class="bg-black text-white">
      <q-toolbar>
        <div class="col ">
          <div class="row" v-if="isMobile">
            <q-btn round class="q-my-sm" @click="leftDrawerOpen = !leftDrawerOpen">
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
            </q-btn>

            <q-icon size="md" class="fa-brands fa-x-twitter q-pa-md logo-mobile"/>
          </div>

          <q-tabs
            class="text-white"
            >
            <q-tab name="mails" label="For you" class="full-width" no-caps/>
            <q-tab name="alarms"  label="Following" class="full-width" no-caps/>
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered class="bg-black text-white" :breakpoint="450" :mini="miniMode" :width="200">
      <div>
        <q-icon size="md" class="fa-brands fa-x-twitter q-pa-md"/>
      </div>
      <q-list>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon color="white" class="fa-solid fa-house" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">
            Home
          </q-item-section>
        </q-item>

        <q-item clickable to="/about" exact>
          <q-item-section avatar>
            <q-icon color="white" class="fa-solid fa-question" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">
            About
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered class="bg-black text-white drawerRight" :width="400" style="overflow: hidden;min-width: 400">
      <div>
        <q-input dense rounded outlined class="q-ma-md" placeholder="Search" input-class="text-white" color="primary" bg-color="grey-9">
          <template v-slot:prepend>
            <q-avatar>
              <q-icon size="sm" name="search"/>
            </q-avatar>
          </template>
        </q-input>
  
        <q-list bordered padding class="rounded-borders q-px-lg">
          <q-item class="listRight q-mb-md">
            <q-item-section>
              <q-item-label class="text-white text-h6 text-weight-bold q-py-md">Subscribe to Premium</q-item-label>
              <q-item-label lines>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</q-item-label>
              <q-item-label>
                <q-btn unelevated rounded color="primary" class="q-ma-sm" no-caps>
                  Subscribe
                </q-btn>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-list class="listRight q-mx-lg">
            <q-item-label header class="text-white text-h6 text-weight-bold">
              Trends for you
            </q-item-label>

            <div>
              <q-item clickable class="q-py-md">
                <q-item-section>
                  <q-item-label caption class="text-grey">Gaming | Trending</q-item-label>
                  <q-item-label class="text-white text-weight-bold">#T1FAKER</q-item-label>
                  <q-item-label caption class="text-grey">2,773 posts</q-item-label>
                </q-item-section>
                <q-item-section side top>
                  <q-item-label caption class="text-white"><q-icon color="grey" size="sm" name="more_horiz"/></q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable class="q-py-md">
                <q-item-section>
                  <q-item-label caption class="text-grey">Gaming | Trending</q-item-label>
                  <q-item-label class="text-white text-weight-bold">#T1FAKER</q-item-label>
                  <q-item-label caption class="text-grey">2,773 posts</q-item-label>
                </q-item-section>
                <q-item-section side top>
                  <q-item-label caption class="text-white"><q-icon color="grey" size="sm" name="more_horiz"/></q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable class="q-py-md">
                <q-item-section>
                  <q-item-label caption class="text-grey">Gaming | Trending</q-item-label>
                  <q-item-label class="text-white text-weight-bold">#T1FAKER</q-item-label>
                  <q-item-label caption class="text-grey">2,773 posts</q-item-label>
                </q-item-section>
                <q-item-section side top>
                  <q-item-label caption class="text-white"><q-icon color="grey" size="sm" name="more_horiz"/></q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable class="q-py-md">
                <q-item-section>
                  <q-item-label caption class="text-grey">Gaming | Trending</q-item-label>
                  <q-item-label class="text-white text-weight-bold">#T1FAKER</q-item-label>
                  <q-item-label caption class="text-grey">2,773 posts</q-item-label>
                </q-item-section>
                <q-item-section side top>
                  <q-item-label caption class="text-white"><q-icon color="grey" size="sm" name="more_horiz"/></q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable class="q-py-md">
                <q-item-section>
                  <q-item-label caption class="text-grey">Gaming | Trending</q-item-label>
                  <q-item-label class="text-white text-weight-bold">#T1FAKER</q-item-label>
                  <q-item-label caption class="text-grey">2,773 posts</q-item-label>
                </q-item-section>
                <q-item-section side top>
                  <q-item-label caption class="text-white"><q-icon color="grey" size="sm" name="more_horiz"/></q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable class="q-py-md">
                <q-item-section>
                  <q-item-label caption class="text-grey">Gaming | Trending</q-item-label>
                  <q-item-label class="text-white text-weight-bold">#T1FAKER</q-item-label>
                  <q-item-label caption class="text-grey">2,773 posts</q-item-label>
                </q-item-section>
                <q-item-section side top>
                  <q-item-label caption class="text-white"><q-icon color="grey" size="sm" name="more_horiz"/></q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable class="q-py-md">
                <q-item-section>
                  <q-item-label caption class="text-grey">Gaming | Trending</q-item-label>
                  <q-item-label class="text-white text-weight-bold">#T1FAKER</q-item-label>
                  <q-item-label caption class="text-grey">2,773 posts</q-item-label>
                </q-item-section>
                <q-item-section side top>
                  <q-item-label caption class="text-white"><q-icon color="grey" size="sm" name="more_horiz"/></q-item-label>
                </q-item-section>
              </q-item>
            </div>
            
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar';

const $q = useQuasar()
const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

const switchToMobile = ref(436)
const switchToMini = ref(550)

const isMobile = computed(() => {
  return $q.screen.width < switchToMobile.value
})

const miniMode = computed(() => {
  return $q.screen.width < switchToMini.value
})


</script>

<style>
.listRight{
  border: solid rgb(70, 69, 69) 1px;
  border-radius: 14px;
  width: auto;
}
.logo-mobile{
  position: absolute;
  left: 50%;
  transform: translateX(-50%)
}

</style>