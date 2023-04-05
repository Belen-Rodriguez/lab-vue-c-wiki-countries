<template>
    <!-- Bootstrap container wrapper div -->
    <div class="container">
      <!-- Bootstrap row wrapper div -->
      <div class="row">
        <!-- Countries List (Bootstrap column) -->
        <div class="col-5" style="max-height: 90vh; overflow: scroll">
          <div class="list-group">
            <router-link class="list-group-item list-group-item-action" to="/ABW">
              <img src="https://flagpedia.net/data/flags/icon/72x54/aw.png" />
              <p>Aruba</p>
              </router-link>
            <router-link class="list-group-item list-group-item-action" to="/AFG">
              <img src="https://flagpedia.net/data/flags/icon/72x54/af.png" />
              <p>Afghanistan</p>
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/AGO">
              <img src="https://flagpedia.net/data/flags/icon/72x54/ao.png" />
              <p>Angola</p>
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/AIA">
              <img src="https://flagpedia.net/data/flags/icon/72x54/ai.png" />
              <p>Anguilla</p>
            </router-link>
            <router-link  class="list-group-item list-group-item-action" to="/ALA">
              <img src="https://flagpedia.net/data/flags/icon/72x54/ax.png" />
              <p>Åland Islands</p>
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/ALB">
              <img src="https://flagpedia.net/data/flags/icon/72x54/al.png" />
              <p>Albania</p>
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/AND">
              <img src="https://flagpedia.net/data/flags/icon/72x54/ad.png" />
              <p>Andorra</p>
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/ARE">
              <img src="https://flagpedia.net/data/flags/icon/72x54/ae.png" />
              <p>United Arab Emirates</p>
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/ARG">
              <img src="https://flagpedia.net/data/flags/icon/72x54/ar.png" />
              <p>Argentina</p>
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/ARM">
              <img src="https://flagpedia.net/data/flags/icon/72x54/am.png" />
              <p>Armenia</p>
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/ASM">
              <img src="https://flagpedia.net/data/flags/icon/72x54/as.png" />
              <p>American Samoa</p>
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/ATA">
              <img src="https://flagpedia.net/data/flags/icon/72x54/aq.png" />
              <p>Antarctica</p>
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/FLK">
              <img src="https://flagpedia.net/data/flags/icon/72x54/fk.png" />
              <p>Falkland Islands</p>
            </router-link>
            <router-link class="list-group-item list-group-item-action active" to="/FRA">
              <img src="https://flagpedia.net/data/flags/icon/72x54/fr.png" />
              <p>France</p>
            </router-link>
            <router-link class="list-group-item list-group-item-action" to="/ZWE">
              <img src="https://flagpedia.net/data/flags/icon/72x54/zw.png" />
              <p>Zimbabwe</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  
  </template>
  
  <script>
  export default {
      name: 'CountriesURL',
      data() {
        return{
            listURL[
                {
                    country: 'Aruba',
                    CountryURL: '/ABW',
                    imageSrc: 'https://flagpedia.net/data/flags/icon/72x54/aw.png'
                },
                
            ]
        }
      }
      }
  </script>