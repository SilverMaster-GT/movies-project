<template>
  <v-app>
    <v-container>

      <v-app-bar color="white">
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <v-avatar rounded="0" class="logo" image="../public/img/logo.webp" />
          </div>
        </v-app-bar-title>

        <v-container class="d-flex align-center py-0">
          <v-row no-gutters>
            <v-col cols="" />
            <v-col>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Busca tu peli, actor, actriz o director favorito"
                single-line
                hide-details
                class="mx-4"
              />
            </v-col>
            <v-col cols="6" lg="4" class="text-align">
              <v-menu>
                <template #activator="{ props }">
                  {{ fullName }}
                  <v-avatar rounded="10" image="../public/img/avatarbambi.jpg" class="avatar" v-bind="props" />
                  <v-btn :icon="{ change } ? 'mdi-menu-down' : 'mdi-menu-up'" v-bind="props" @click="changeValue" />
                </template>

                <v-list>
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>

      <v-navigation-drawer
        :style="gradient"
        floating
        expand-on-hover
        rail
        permanent
      >
        <v-list nav>
          <v-list-item prepend-icon="mdi-home" title="Home" value="home" />
          <v-list-item prepend-icon="mdi-fire" title="Trending" value="trending" />
          <v-list-item prepend-icon="mdi-heart" title="Mas Likes" value="likes" />
        </v-list>

        <template #append>
          <v-btn class="ma-1" variant="text" icon="mdi-cog" />
        </template>
      </v-navigation-drawer>

      <v-main>
        <v-container class="d-flex flex-wrap justify-space-between">
          <v-col
            v-for="peli in pelis"
            :key="peli.id"
            cols="12"
            lg="4"
          >
            <CardPelis :peli="peli" />
          </v-col>
        </v-container>
      </v-main>

      <v-footer>
        <v-container
          class="text-overline d-flex align-center justify-space-between"
        >
          <div>Copyright &copy; 2022 Vuetify, LLC</div>

          <v-icon icon="mdi-vuetify" size="x-large" />
        </v-container>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script setup>
  import CardPelis from '@/components/CardPelis.vue'

  import { ref } from 'vue'

  const fullName = ref('Victor Lopez')
  const items = ref([
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      to: '/dashboard',
    },
    {
      title: 'Users',
      icon: 'mdi-account-multiple',
      to: '/users',
    },
    {
      title: 'Settings',
      icon: 'mdi-cog',
      to: '/settings',
    },
  ])
  const pelis = ref([
    {
      id: 1,
      title: 'La vida secreta de las mascotas',
      year: 2016,
      content: `La vida secreta de seis mascotas y todo lo que hacen cuando sus dueños salen de la casa, desde mirar la televisión hasta vaciar la heladera, hasta que todo queda al descubierto.`,
      image: 'https://cinepremiere.com.mx/assets/images/criticasCN/2016/07-julio/La-vida-secreta-de-tus-mascotas-critica.jpg',
    },
    {
      id: 2,
      title: 'La vida secreta de las mascotas 2',
      year: 2019,
      content: `Max y Duke se embarcan en una nueva aventura, esta vez en la ciudad de Nueva York, donde Max conoce a una perra llamada Roxy y a su dueño, un niño llamado Gidget. Cuando Roxy y Gidget desaparecen, Max y Duke se unen a un grupo de animales callejeros para ayudar a encontrarlas.`,
      image: 'https://cinepremiere.com.mx/assets/images/noticias/2016/08-agosto/Secret-Life-Of-Pets.jpg',
    },
    {
      id: 3,
      title: 'AntMan',
      year: 2015,
      content: `Scott Lang es un ladrón que tras cumplir una condena en prisión, intenta reconducir su vida. Pero cuando su hija adolescente, Cassie, se enferma, Scott se ve obligado a volver a cometer delitos para poder pagar el tratamiento médico de su hija. Entonces, Scott se verá envuelto en una conspiración que pondrá en peligro el mundo entero.`,
      image: 'https://cinepremiere.com.mx/assets/images/noticias/2015/05-mayo/poster-ant-man.jpg',
    },
    {
      id: 4,
      title: 'AntMan y la Avispa',
      year: 2018,
      content: `Scott Lang vuelve a enfundarse el traje de Ant-Man para pelear codo a codo junto con la Avispa. La misión revela a los dos superhéroes un secreto terrible y los enfrenta a su enemigo más poderoso.`,
      image: 'https://www.cinepremiere.com.mx/wp-content/uploads/2018/07/primeras-reacciones-de-ant-man-and-the-wasp-1024x559.jpg',
    },
    {
      id: 5,
      title: 'Capitan America',
      year: 2011,
      content: `Steve Rogers es un joven que quiere participar en la Segunda Guerra Mundial, pero no es aceptado en el ejército. Sin embargo, un experimento le permite convertirse en el superhéroe Capitán América, que luchará contra el malvado Hombre de Hielo.`,
      image: 'http://cinepremiere.com.mx/imgsHistorico/u171/cap_poster_nota.jpg',
    },
    {
      id: 6,
      title: 'Capitan America: Civil War',
      year: 2016,
      content: `Steve Rogers lidera al nuevo equipo de Vengadores en sus continuos esfuerzos por proteger al mundo. Pero después de los daños colaterales causados por los Vengadores en los incidentes recientes, el gobierno decide instaurar un sistema de responsabilidad y un órgano de control para supervisar y dirigir al equipo. El nuevo sistema divide a los Vengadores, mientras que algunos apoyan la medida, otros la rechazan. Steve se encuentra en el medio de la disputa y se enfrenta a su amigo Tony Stark.`,
      image: 'https://cinepremiere.com.mx/assets/images/trivias/2016/09-septiembre/Civil-War-trivia-Blu-ray.jpg',
    },
    {
      id: 7,
      title: 'Capitan America: El Soldado de Invierno',
      year: 2014,
      content: `Steve Rogers, alias Capitán América, se enfrenta a un nuevo enemigo, el Soldado de Invierno, un agente del gobierno que se ha vuelto un asesino en serie. Steve deberá enfrentarse a su pasado para salvar a su país y al mundo de una nueva amenaza.`,
      image: 'https://www.cinepremiere.com.mx/assets/images/noticias/2014/03-marzo/capretro.jpg',
    },
    {
      id: 8,
      title: 'Avengers',
      year: 2012,
      content: `Nick Fury, director de la agencia de inteligencia S.H.I.E.L.D., reúne a un equipo de superhéroes para formar Los Vengadores y combatir a un enemigo que es demasiado poderoso para ser enfrentado por un solo superhéroe.`,
      image: 'http://cinepremiere.com.mx/imgsHistorico/u18/int_poster_avengers.jpg',
    },
    {
      id: 9,
      title: 'Avengers: Endgame',
      year: 2019,
      content: `Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en una última y desesperada misión para derrotar al poderoso Thanos antes de que su devastación y ruina pongan fin al universo.`,
      image: 'https://www.cinepremiere.com.mx/wp-content/uploads/2019/04/Avengers-Endgame-Poster-1024x559.jpg',
    },
  ])
  const gradient = ref('background: linear-gradient(to right, #FF535B, #FD746C);')

  const change = ref(false)

  function changeValue () {
    change.value = !change.value
  }
</script>

<style scoped>
.logo {
  width: 100px !important;
  height: 100px !important;
}

 .avatar {
  margin: 15px 15px;
}

.text-align{
  text-align: right;
}

.v-main {
  background-color: #f5f5f5 !important;
  color : #000;
}
</style>
