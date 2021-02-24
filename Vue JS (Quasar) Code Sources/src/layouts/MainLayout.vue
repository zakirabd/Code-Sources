<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="bg-orange text-white">
      <q-toolbar class="flex flex-center">
      </q-toolbar>
      <q-toolbar>
        <q-toolbar-title style="text-align: center"><strong>Your</strong> Recipe</q-toolbar-title>
      </q-toolbar>
    </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  name: 'MainLayout'
}
</script>
