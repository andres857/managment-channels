<template>
  <div class="container text-center mt-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <input type="text" v-model="client" />
        <button
          type="button"
          class="btn btn-success btn-sm"
          @click="getPlayersByClient(client)"
        >
          Consultar
        </button>
      </div>
    </div>

    <div class="row justify-content-center mt-5">
      <div class="col-10">
        <ul class="list-group">
          <li
            v-for="(player, index) in players.data"
            :key="index"
            class="list-group-item"
          >
            <div class="row justify-content-center">
              <div class="col-2">
                <i class="bi bi-circle-fill" style="color: red"></i>
                <!-- status: {{player.connected}} -->
              </div>
              <div class="col-2">
                <span>client Id: {{ player.clientid }}</span>
              </div>
              <div class="col-4">
                <span>ver mas</span>
              </div>
              <div class="col-4">
                <button
                  type="button"
                  class="btn btn-success btn-sm"
                  @click="changeStreaming()"
                >
                  cambiar emision
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      client: "",
      players: "",
      message: "creando con vue 3",
      statusConnection: {
        connected: "color: green;",
        desconnected: "color: red;",
      },
    };
  },
  methods: {
    getPlayersByClient: async function (client) {
      this.players = "";
      this.message = "saludos";
      this.players = await axios.get(
        "http://localhost:3000/v1/streaming/players",
        {
          params: {
            client: client,
          },
        }
      );
    },
    changeStreaming: async function () {
      console.log("simulando boton de cambio");
      console.log(this.players.data);
    },
  },
  // computed: {
  //   statusConnectionPlayer: function () {
  //     return player.connected ? "color: green" : "color: red";
  //   },
  // },
};
</script>

<style>
.connected {
  color: green;
}
</style>
