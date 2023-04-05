<template>
  <div class="app">
    <NavBar />
    <CountriesList />
    <CountryDetails 
    :country="countrySelected[0]"/>

  </div>

</template>

<script>
  import NavBar from './components/Navbar.vue';
  import CountriesList from './components/CountriesList.vue';
  import CountryDetails from './components/CountryDetails.vue';

  export default {
    name: 'App',
    data() {
      return {
      countryID: '',
      countrySelected: [],
      arrCountriesFiltered: [],
      }
    },
    components: {
      NavBar,
      CountriesList,
      CountryDetails
    },

    created() {
      this._getCountriesData()
      console.log('CREATE APP VIEW')

      this.$watch(
      () => this.$route.params,
      () => {
        console.log('------ UPDATE RUOUTE PARAMS APP!')
        this._getParams();
        this._filterWithURL(this.arrCountriesFiltered)
      }
    );
   },
    methods: {
      async _getCountriesData(){
        const response = await fetch(
          'https://ih-countries-api.herokuapp.com/countries')
        const data = await response.json()
        this._filteredArray(data)
      },
      
      _filteredArray(arrayJson){
        arrayJson.forEach(eachCountry => {
        const cleanCountry = this._filterObject(eachCountry)
        this.arrCountriesFiltered.push(cleanCountry)
        })
        console.log(this.arrCountriesFiltered)
      },

      _filterObject(object){
        const {name, alpha3Code, capital, area, borders} = object;
        const nameFiltered = name.common
        const objectFiltered = {nameFiltered, alpha3Code, capital, area, borders}

        return objectFiltered
      },
      _getParams(){
        const newURL = this.$route.params
        this.countryID = newURL.alpha3Code;

        console.log(newURL)
        console.log(`esto es el alpha3code desde APP ${this.countryID}`)
        return this.countryID
      },
      _filterWithURL(array){
      if (this.countrySelected[0] == undefined) {
          this.countrySelected = [{name:'example'}]
        }
        else { 
        this.countrySelected = array.filter((eachCountry) => eachCountry.alpha3Code === this.countryID)
        console.log(this.countrySelected[0])}
         }
    }



  }


</script>

<style>

</style>