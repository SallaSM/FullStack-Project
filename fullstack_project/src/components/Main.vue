<template>
  <div class="main">

    <Nav @input:change="inputChange" />

    <div class="searchContainer" v-if="this.input.length >= 1">
      <Heading v-bind:title="this.input" v-bind:search="true" />
      <SearchList :input=this.input />
    </div>

    <div class="mainContainer" v-if="this.input.length === 0">
      <div v-for="(title, index) in this.titles" :key="title">
        <Heading v-bind:title="titles[index]" v-bind:search="false" v-bind:profile="false" />
        <MovieList v-bind:id="titles[index]" v-bind:genre="genres[index]" />
      </div>
    </div>

  </div>
</template>

<script>
import Nav from "@/components/Nav";
import MovieList from "@/components/MovieList";
import SearchList from "@/components/SearchList";
import Heading from "@/components/Heading";
export default {
  name: "Main",
  components: {
    Nav,
    MovieList,
    SearchList,
    Heading,
  },
  data() {
    return {
      input: '',
      titles: [
        "Trending", "Horror", "Fantasy", "Comedy",
        "Drama", "Action", "Adventure",
        "Romance", "Documentary", "Crime"
      ],
      genres: [
        0, 27, 14, 35, 18, 28, 12, 10749, 99, 80
      ]
    }
  },
  methods: {
    /**
     * Updates the variable input when a "@input:change" emit is caught
     * @param{string} emit is the result that will be put to the variable input
     */
    inputChange(emit){
      this.input = emit;
    }
  }
}
</script>

<style scoped>
.main{

  background: linear-gradient(to right, #171616, #242323, #171616);

  min-height: 100vh;
}
.mainContainer, .searchContainer{
  padding: 20px;
  transition: .2s ease-in-out;
}

</style>