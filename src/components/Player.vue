<template>
    <div class="container text-center mt-5">
        <div class="row justify-content-center">
            <div class="col-6">
                <input type="text" v-model="client">
                <button type="button" class="btn btn-success btn-sm" @click="getinfo(client)">Consultar</button>
            </div>
        </div>

        <div class="row justify-content-center mt-5">
            <div class="col-8">
                <ul class="list-group">
                    <li  v-for="(player, index) in players.data" :key="index" class="list-group-item">
                        <div class="row justify-content-center">
                            <div class="col-2">
                                <i class="bi bi-circle-fill" style="color: green"></i>
                                <!-- status: {{player.connected}} -->            
                            </div>
                            <div class="col-5">
                                <span>conectado: {{player.connected_at}}</span>
                            </div>
                            <div class="col-5">
                                <span>client Id: {{player.clientid}}</span>
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
                client: '',
                players: '',
                message:"creando con vue 3"
            }
        },
        methods:{
            getinfo: async function(client){
                this.players = ""
                this.message = 'saludos'
                this.players = await axios.get('http://localhost:3000/v1/streaming/wc/info',{
                    params:{
                        client: client
                    }
                })  
            }
        }
    }
</script>

<style>
 .connected {
    color: green;
 }
</style>