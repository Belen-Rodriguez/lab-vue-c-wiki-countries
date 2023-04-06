<template>
  <div class="app">
    <NavBar />
    <CountriesList />
    <router-view></router-view>
    <CountryDetails 
    :country="countrySelected"/>

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
      countrySelected: '',
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
      _getParams(){
        const newURL = this.$route.params
        this.countryID = newURL.alpha3Code;
        return this.countryID
      },

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
        this._filterWithURL(this.arrCountriesFiltered)
        console.log(this.arrCountriesFiltered)
      },

      _filterObject(object){
        const {name, alpha3Code, capital, area, borders} = object;
        const nameFiltered = name.common
        const objectFiltered = {nameFiltered, alpha3Code, capital, area, borders}
        return objectFiltered
      },

      _filterWithURL(array){
        const countryWatched = array.filter((eachCountry) => eachCountry.alpha3Code === this.countryID)

        if (this.countrySelected === '' && this.countryID == undefined) {
       this.countrySelected = {nameFiltered:'example city'}
       console.log(this.countryID)
        }

        else { 
        this.countrySelected = countryWatched[0]
        console.log(this.countrySelected)}
         }
    }



  }


</script>

<style>

</style>