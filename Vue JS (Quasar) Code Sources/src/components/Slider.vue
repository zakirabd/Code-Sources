<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="https://pakwired.com/wp-content/uploads/2017/09/pizza-1.jpg" />
      <q-carousel-slide :name="2" img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Pizza_%281%29.jpg/1200px-Pizza_%281%29.jpg" />
      <q-carousel-slide :name="3" img-src="http://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
      <q-carousel-slide :name="4" img-src="https://cdn3.tmbi.com/toh/GoogleImages/Quick-Hawaiian-Pizza_EXPS_HCK17_61320_B09_13_4b.jpg" />
    </q-carousel>
  </div>
</template>
<script>
export default {
  name: 'SliderComponent',
  data () {
    return {
      slide: 1
    }
  }
}
</script>
