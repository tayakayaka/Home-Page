<template>
  <v-app class="bg">
    <v-main>
      <v-container>
        <v-row >
          <!-- 左: カルーセル -->
          <v-col cols="7">
            <v-carousel height="800">
              <v-carousel-item src="/images/carousel_Item1.jpg" cover />
              <v-carousel-item src="/images/carousel_Item2.jpg" cover />
              <v-carousel-item src="/images/carousel_Item3.jpg" cover />
            </v-carousel>
          </v-col>

          <!-- 右: カード -->
          <v-col cols="4"  class="pa-4" style="display: flex; flex-direction: column; gap: 25px;">
              <v-card
                class="mx-auto"
                hover
              >
                <v-card-item>
                  <v-card-title>
                    Card title
                  </v-card-title>

                  <v-card-subtitle>
                    Card subtitle secondary text
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>
              </v-card>
                            <v-card
                class="mx-auto"
                hover
              >
                <v-card-item>
                  <v-card-title>
                    Card title
                  </v-card-title>

                  <v-card-subtitle>
                    Card subtitle secondary text
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>
              </v-card>
                            <v-card
                class="mx-auto"
                hover
              >
                <v-card-item>
                  <v-card-title>
                    Card title
                  </v-card-title>

                  <v-card-subtitle>
                    Card subtitle secondary text
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>
              </v-card>
                            <v-card
                class="mx-auto"
                hover
              >
                <v-card-item>
                  <v-card-title>
                    Card title
                  </v-card-title>

                  <v-card-subtitle>
                    Card subtitle secondary text
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>
              </v-card>
                            <v-card
                class="mx-auto"
                hover
              >
                <v-card-item>
                  <v-card-title>
                    Card title
                  </v-card-title>

                  <v-card-subtitle>
                    Card subtitle secondary text
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>
              </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup>
</script>

<style>
.carousel{
  width: 50%;
}
.cards{
  width: 50%;
}
.bg{
    background-color: #e5f4fb;
}
</style>