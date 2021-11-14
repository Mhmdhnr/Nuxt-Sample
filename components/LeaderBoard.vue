<template>
  <div class="Leaderboard-main flex flex-column">
    <div class="input flex flex-row">
      <div>
        <span v-if="this.fa">رتبه</span>
        <span v-if="!this.fa">Rank</span>
        <span>{{rank}}</span>
      </div>
      <input
        class="input-slider"
        type="range"
        min="1"
        :max="range"
        step="1"
        v-model="rank"
      />
    </div>
    <div class="leaderboard" id="base">
      <div class="rows" id="rows">
        <div class="row flex flex-row">
          <span v-if="this.fa" class="rank flex">رتبه</span>
          <span v-if="!this.fa" class="rank flex">Rank</span>
          <span v-if="this.fa" class="name flex">اسم</span>
          <span v-if="!this.fa" class="name flex">Name</span>
          <span v-if="this.fa" class="points flex">امتیاز</span>
          <span v-if="!this.fa" class="points flex">Score</span>
        </div>
        <div v-if="this.fa">
          <div v-for="n in range" class="row flex flex-row" :id="n">
            <span class="rank flex">
              {{ n < 10 ? "0" + n.toString() : n.toString() }}
            </span>
            <span  class="name flex">{{names.persian[n - 1] ? names.persian[n - 1].first_name + " " + names.persian[n - 1].last_name : ""}}</span>
            <span class="points flex">{{ Math.round(9000 / n) }}</span>
          </div>
        </div>
        <div v-if="!this.fa">
          <div v-for="n in range" class="row flex flex-row" :id="n">
            <span class="rank flex">
              {{ n < 10 ? "0" + n.toString() : n.toString() }}
            </span>
            <span  class="name flex">{{names.english[n - 1] ? names.english[n - 1].first_name + " " + names.english[n - 1].last_name : ""}}</span>
            <span class="points flex">{{ Math.round(9000 / n) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import apiServices from "~/api/apiServices";
    export default {
        name: "LeaderBoard",
        data() {
            return {
                isRowIntersecting: false,
                isRowPassed: false,
                isRowUpcoming: false,
                rank: null,
                range: 40,
                names: {
                    persian:[],
                    english:[]
                },
            };
        },
        computed: mapState(['fa']),
        watch:{
            fa(newValue){

            },
            rank(newRank){
                this.rank = newRank;
                for (let i = 1; i <= this.range; i++){
                    let row = document
                        .getElementById(i.toString());
                    // row.getElementsByTagName("span")[1].textContent = "Someone Else!";
                    row.classList.remove("current-user-row");
                    row.classList.remove("stick-top");
                    row.classList.remove("stick-bottom");
                }
                let options = {
                    root: document.getElementById("base"),
                    rootMargin: "0px",
                    thresholds: 1
                };

                const observer = new IntersectionObserver((entries, observer) => {
                    // observer.root.style.border = "8px solid #44aa44";
                    // console.log(entries[0].boundingClientRect.y);
                    if (entries[0].isIntersecting) {
                        console.log("entered");
                        // this.isRowIntersecting = !this.isRowIntersecting;
                    } else {
                        if (entries[0].boundingClientRect.y < 520) {
                            console.log(entries[0].boundingClientRect.y);
                            console.log(entries[0].boundingClientRect.x);
                            this.isRowPassed = true;
                            this.isRowUpcoming = false;
                            console.log("isRowPassed: " + this.isRowPassed);
                            // document.getElementById(this.rank).classList.remove("stick-bottom");
                            document.getElementById(this.rank).classList.add("stick-top");
                        } else {
                            console.log(entries[0].boundingClientRect.y);
                            this.isRowPassed = false;
                            this.isRowUpcoming = true;
                            console.log("isRowUpcoming: " + this.isRowUpcoming);
                            // document.getElementById(this.rank).classList.remove("stick-top");
                            document.getElementById(this.rank).classList.add("stick-bottom");
                        }
                    }
                }, options);
                this.observe(observer);
            }
        },
        mounted() {
            this.rank = 23;
            apiServices.methods.getRandomNames(this.range).then(response => {
                this.names = response;
                console.log(this.names);
            });
        },
        methods: {
            observe(observer){
                // document
                    // .getElementById(this.rank)
                    // .getElementsByTagName("span")[1].textContent = "YOU!";

                if (document.getElementById(this.rank)) {
                    observer.observe(document.getElementById(this.rank));
                }
                this.$nextTick(() => {
                    setTimeout(() => {
                        if (document.getElementById(this.rank)) {
                            document.getElementById(this.rank).classList.add("current-user-row");
                        }
                    }, 10);
                });
            }
        }
    }
</script>

<style scoped>
  .input {
    width: 500px;
    justify-content: space-between;
  }
  .input > div > span {
    font-size: 1.1em;
    margin: 0.5vw;
  }
  .input-slider {
    width: 60%
  }
  .Leaderboard-main {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    padding: 2vh 0 0;
  }
  .leaderboard {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 43vh;
    overflow-y: scroll;
    margin: 2vh auto;
  }
  .leaderboard::-webkit-scrollbar {
    display: none;
  }
  .rows {
    width: 500px;
    margin: 0 auto;
  }
  .row {
    display: flex;
    flex-direction: row;
    height: 5vh;
    text-align: right;
    margin: 0 auto 2px;
    background-color: var(--text-color);
    position: relative;
    justify-content: space-evenly;
    font-size: 1em;
  }
  .rank, .name, .points {
    justify-content: center;
    height: 100%;
  }
  .rank {
    z-index: 10;
    flex: 1;
    background-color: rgba(100,100,100,0.5);
  }
  .name {
    flex: 4;
  }
  .points {
    flex: 2;
  }
  span {
    margin: auto;
    color: var(--text-color);
  }
  .row > span {
    color: var(--bg-color);
  }
  .row > .points {
  }
  .stick-top {
    position: sticky;
    top: 0.5vh;
  }
  .stick-bottom {
    position: sticky;
    bottom: 0.5vh;
  }
  .current-user-row {
    background-color: var(--primary-color);
    color: var(--bg-color);
    animation: you 300ms ease-in-out forwards;
    box-shadow: 0 2px 10px 10px rgba(20, 20, 20, 0.1);
    z-index: 20;
  }
  @keyframes you {
    from {
      transform-origin: center;
      transform: scale(1);
    }
    to {
      transform-origin: center;
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 864px) {
    .input {
      width: 70vw;
    }
    .leaderboard {
      width: 100vw;
      height: 35vh;
    }
    .rows {
      width: 70%
    }
    .row {
      font-size: 0.8em;
    }
  }
</style>
