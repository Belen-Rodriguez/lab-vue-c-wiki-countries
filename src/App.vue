<template>
  <div class="app">
    <NavBar />
  <div class="countiesContainer">
    <CountriesList 
    :countriesData="arrCountriesNoFiltered"/>
    <router-view></router-view>
    <CountryDetails 
    :country="countrySelected"/>
  </div>

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
      arrCountriesNoFiltered: [],
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
          'https://ih-countries-api.herokuapp.com/countries');
        const data = await response.json();
        console.log(data);
        this._filteredArray(data);
        this.arrCountriesNoFiltered = data
        return this.arrCountriesNoFiltered
      },
      
      _filteredArray(arrayJson){
        arrayJson.forEach(eachCountry => {
        const cleanCountry = this._filterObject(eachCountry);
        this.arrCountriesFiltered.push(cleanCountry);
        })

        console.log(this.arrCountriesFiltered)
        this._filterWithURL(this.arrCountriesFiltered)

      },

      _filterObject(object){
        const {name, alpha3Code, capital, area, borders, alpha2Code} = object;
        const nameFiltered = name.common
        const objectFiltered = {nameFiltered, alpha3Code, capital, area, borders, alpha2Code}
        return objectFiltered
      },

      _filterWithURL(array){
        const countryWatched = array.filter((eachCountry) => eachCountry.alpha3Code === this.countryID)

       if (this.countrySelected === '' && this.countryID == undefined) {
       this.countrySelected = 
       {nameFiltered:'France',
       capital:['Paris'],
       area:'551695',
       borders: 
       ['AND', 'BEL', 'DEU', 'ITA', 'LUX', 'MCO', 'ESP', 'CHE'],
       alpha2Code:'FR',
      }
       console.log(this.countryID)
       }
       else { 
        this.countrySelected = countryWatched[0]
        console.log(this.countrySelected)}
      }
    }



  }


</script>

<style scoped>
.countriesContainer{
  display: flex;
  flex-direction: column;
}
</style>