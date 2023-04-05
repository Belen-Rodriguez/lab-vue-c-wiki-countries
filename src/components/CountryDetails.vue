<template>
    <RouterView>
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
        <h1>{{ country.name }}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style="width: 30%">Capital</td>
              <td>Paris</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>551695 km <sup>2</sup></td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li><a href="/AND">Andorra</a></li>
                  <li><a href="/BEL">Belgium</a></li>
                  <li><a href="/DEU">Germany</a></li>
                  <li><a href="/ITA">Italy</a></li>
                  <li><a href="/MCO">Monaco</a></li>
                  <li><a href="/ESP">Spain</a></li>
                  <li><a href="/CHE">Switzerland</a></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</RouterView>
</template>

<script>
export default {
    name: "CountriesDetail",
    props: {
      country: {
        type: Object,
      },
    },
    data() {
      return {
        countryName: '',
        searchNewURL: '',
        countryID: '',
      }
    },
    methods: {
      _getParams(){
        const newURL = this.$route.params
        this.countryID = newURL.alpha3Code;

        console.log(newURL)
        console.log(`esto es el alpha3code ${this.countryID}`)
        return this.countryID
      }
  },
   created() {
    console.log(this.$route.params)
    console.log('------ CREATED EVENT!')

    this.$watch(
      () => this.$route.params,
      () => {
        console.log('------ UPDATE RUOUTE PARAMS!')
        this._getParams();
      }
    );
   },
  }

</script>