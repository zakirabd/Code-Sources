<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="card">
      <q-card class="my-card">
        <q-img style="height: 200px; min-width: 350px" :src="results.image_url" />

        <q-card-section>
          <!-- <q-btn
            fab
            tag="a"
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
            href="/https://www.w3schools.com/cssref/css_colors.asp"
            target="_blank"
          /> -->

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ results.title }}
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            {{ results.publisher }}
          </div>
          <div class="text-caption text-grey">
            Cooking Time: {{results.cooking_time}} min & Servings: {{results.servings}}
          </div>
          <div class="q-pa-md" style="max-width: 100%">
            <q-list dense bordered padding class="rounded-borders">
                <q-item clickable v-ripple v-for="(ingredients, index) in results.ingredients" :key="ingredients.description">
                    <q-item-section style="border-bottom: 1px solid #FF8C00">
                      <p>Ingredient {{index + 1}}:  {{ ingredients.description }} </p>
                      <p v-if="ingredients.quantity">Quantity: {{ ingredients.quantity }}</p>
                      <p v-if="ingredients.unit !== ''">Unit: {{ ingredients.unit }}</p>
                    </q-item-section>
                </q-item>
                </q-list>
            </div>
        </q-card-section>
        <q-separator />

        <q-card-actions align="right">
          <q-btn @click="closeCard" flat color="primary" label="Close" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  name: 'spinner',
  props: {
    results: {
      type: Object
    },
    card: {
      type: Boolean
    }
  },
  data () {
    return {
      stars: 3
    }
  },
  methods: {
    closeCard () {
      this.$emit('closeCard', this.closeCard)
    }
  }
}
</script>
