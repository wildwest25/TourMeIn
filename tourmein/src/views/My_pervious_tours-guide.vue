<template>
  <div class="row">
    <div class="col-8">
      <div class="float-left offset-1">
        <h1>My Previous Tours</h1>
      </div>
    </div>
    <div class="col-8 offset-1">
      <user-card
        v-for="card in filteredCards"
        :key="card.url"
        :info="card"
      />
    </div>
    <!--<div class="col-4">
            Sidebar
        </div>-->
  </div>
</template>
<script>
// @ is an alias to /src
import UserCard from "@/components/UserCard.vue";
import store from "@/store";
import { db } from "@/firebase";

// let cards = [];

//... API/Firebase -> sve kartice -> cards
/*
cards = [
  {
    url: "https://picsum.photos/id/1/400/400",
    description: "Tina Mandarić",
    time: "19.03.2020",
    rated: 3,
    languages: "English, Polish",
    monuments: "Arena Amphitheater, Arco dei Sergi",
  },
  {
    url: "https://picsum.photos/id/2/400/400",
    description: "Lucijan Separović",
    time: "hour ago...",
  },
  {
    url: "https://picsum.photos/id/3/400/400",
    description: "David Janković",
    time: "few hours ago...",
  },
];*/

export default {
  name: "home",
  props: ["id"],
  data: function () {
    return {
      cards: [],
      store,
    };
  },
  mounted() {
    //* dohvat iz Firebasea
    this.getPosts();
  },
  methods: { 
    getPosts() {
      console.log("firebase dohvat...")

      db.collection("posts")
    },
  },
  computed: {
    filteredCards() {
      // logika koja filtrira cards
      let termin = this.store.searchTerm;

      return this.cards.filter((card) => card.description.includes(termin));
    },
  },
  components: {
    UserCard,
  },
};
</script>