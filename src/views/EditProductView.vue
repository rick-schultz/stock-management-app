<template>
  <v-main class="pt-1 main">
    <v-container fluid>
      <v-row dense>
        <v-col cols="12" xs="12" sm="12" md="6" lg="6">
          <v-card :title="$store.state.product.name">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row class="pa-2 align-center">
                <v-col cols="7">
                  <v-text-field
                    rounded
                    hide-details
                    v-model="stock"
                    :rules="stockRules"
                    :label="`Current stock: ${$store.state.product.stock}`"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="5">
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    @click="
                      ;[
                        this.updateStock(
                          `${$store.state.product.id}/refill?amount=${this.stock}`
                        ),
                        this.clearInput()
                      ]
                    "
                  >
                    Add to Stock
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'EditProductView',
  data: () => ({
    valid: true,
    stock: '',
    stockRules: [(v) => !!v || 'Stock is required']
  }),

  methods: {
    ...mapActions(['updateStock']),
    validate() {
      this.$refs.form.validate()
    },
    clearInput() {
      this.stock = ''
      this.stockRules = [true]
    }
  },
  watch: {
    group() {
      this.drawer = false
    }
  }
})
</script>
