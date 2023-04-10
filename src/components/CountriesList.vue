<template>
  <!-- Bootstrap container wrapper div -->
  <div class="container">
    <!-- Bootstrap row wrapper div -->
    <div class="row">
      <!-- Countries List (Bootstrap column) -->
      <h5 v-if="!countriesData">Loading</h5>
      <div v-else class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group">
          <router-link class="list-group-item list-group-item-action"

            v-for="countryData in countriesData" :key="countryData.alpha3Code"
            :to="countryData.alpha3Code">
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`" />
            <p>{{ countryData.name.common }}</p>
            </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { objectToString } from '@vue/shared';

export default {
    name: 'CountriesList',
    props: {
      countriesData: {
        type: Object,
      }
    },
    data() {
      return {
      countriesOrdered: [],

      }
    },
/*    created() {

      this.$watch(
      () => this.$route.params,
      () => {
        this._orderAlphabetic()
      }
    );
   },
    methods: {
      _orderAlphabetic(){
        this.countriesOrdered = this.countriesData.sort((a,b) =>
        a.name.common.locaCompare(b.name.common));
        console.log(this.countriesOrdered);
        return this.countriesOrdered
      },
    },  */
  }
</script>
