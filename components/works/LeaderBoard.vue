<template>
  <div class="Leaderboard-main flex flex-column">
    <div class="input flex flex-row">
      <div>
        <span v-show="this.$store.state.fa">رتبه</span>
        <span v-show="!this.$store.state.fa">Rank</span>
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
        <div v-for="n in range" class="row" :id="n">
          <span class="rank">
            {{ n < 10 ? "0" + n.toString() : n.toString() }}
          </span>
          <span>Someone Else!</span>
          <span class="points">{{ Math.round(9000 / n) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LeaderBoard",
        data() {
            return {
                isRowIntersecting: false,
                isRowPassed: false,
                isRowUpcoming: false,
                rank: null,
                range: 30,
            };
        },
        watch:{
          rank(newRank){
              this.rank = newRank;
              for (let i = 1; i <= this.range; i++){
                  let row = document
                      .getElementById(i.toString());
                  row.getElementsByTagName("span")[1].textContent = "Someone Else!";
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
                  console.log(entries[0].boundingClientRect.y);
                  if (entries[0].isIntersecting) {
                      console.log("entered");
                      // this.isRowIntersecting = !this.isRowIntersecting;
                  } else {
                      if (entries[0].boundingClientRect.y < 500) {
                          this.isRowPassed = true;
                          this.isRowUpcoming = false;
                          console.log("isRowPassed: " + this.isRowPassed);
                          document.getElementById(this.rank).classList.add("stick-top");
                      } else {
                          this.isRowPassed = false;
                          this.isRowUpcoming = true;
                          console.log("isRowUpcoming: " + this.isRowUpcoming);
                          document.getElementById(this.rank).classList.add("stick-bottom");
                      }
                  }
              }, options);
              this.observe(observer);
          }
        },
        mounted() {
            this.rank = 23;
        },
        methods: {
            observe(observer){
                document
                    .getElementById(this.rank)
                    .getElementsByTagName("span")[1].textContent = "YOU!";

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
    /*height: 100vh;*/
    /*background: linear-gradient(270deg, #17eab4, #9478ec);*/
    /*background-size: 400% 400%;*/
    /*-webkit-animation: bg-animation 10s ease infinite;*/
  }
  .title {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 3vh auto 0;
    color: white;
  }
  .leaderboard {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 35vh;
    overflow-y: scroll;
    margin: 3vh auto;
  }
  .leaderboard::-webkit-scrollbar {
    display: none;
  }
  .rows {
    width: 60%;
    margin: 0 auto;
  }
  .row {
    display: flex;
    flex-direction: row;
    height: 7vh;
    text-align: right;
    margin: 0 auto 0.5vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
  }
  .row:after {
    content: "";
    width: 12%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .rank {
    z-index: 10;
  }
  span {
    margin: auto 2vw;
    color: var(--text-color);
  }
  .row > span {
    color: var(--bg-color);
  }
  .row > .points {
    margin: auto 2vw auto auto;
  }
  .stick-top {
    position: sticky;
    top: 0.7vh;
  }
  .stick-bottom {
    position: sticky;
    bottom: 0.7vh;
  }
  .current-user-row {
    background-color: #452b5a;
    color: white;
    animation: you 300ms ease-in-out forwards;
    box-shadow: 0 2px 10px 10px rgba(20, 20, 20, 0.1);
    z-index: 20;
  }
  .current-user-row:after {
    width: 12%;
  }
  @-webkit-keyframes bg-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
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
</style>
