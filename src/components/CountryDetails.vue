<template>
    
  <!-- Bootstrap container wrapper div -->
  <div class="container">
    <!-- Bootstrap row wrapper div -->
    <div class="row">
      <!-- Countries List (Bootstrap column) -->
      <!-- Country Details (Bootstrap column) -->
      <div class="col-7">
        <img
          src="https://restcountries.eu/data/fra.svg"
          alt="country flag"
          style="width: 300px"
        />
        <h1>{{ country.nameFiltered }}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style="width: 30%">Capital</td>
              <td v-for="capital in country.capital">{{ capital }}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td> {{ country.area }} m<sup>2</sup></td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li v-for="border in country.borders">
                   <router-link :to="border" >{{ border }}</router-link>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import { objectToString } from '@vue/shared';

export default {
    name: "CountriesDetail",
    props: {
      country: {
        type: Object,
        nameFiltered: {
          type: Object,
        },
        alpha3Code: {
          type: Object,
        },
        capital: {
          type: Object,
        },
        area: {
          type: Number,
        },
        borders: {
          type: Array,
        },

      },
    }
  }

</script>