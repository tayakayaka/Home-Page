<template>
  <v-app class="bg">
    <v-main>
      <v-container class="top">
        <v-row >
          <!-- 左: カルーセル -->
          <v-col cols="7">
            <v-carousel height="800" cycle="true"> 
              <v-carousel-item
              v-for="(pic) in pics"
              :key="pic"
              :src="pic"
              cover
            />
            </v-carousel>
          </v-col>

          <!-- 右: カード -->
          <v-col cols="4" style="display: flex; flex-direction: column; gap: 15px;">
            <h2>TODO</h2>
            <div class="cards">
              <v-card v-for="[status, deadline, contents] in todos" :key="status" class="my-4 mx-auto card" hover>
                <div :class="[getStatusClass(status), 'pa-2']">{{ status }}</div>
                  <v-card-subtitle class="text-grey">{{deadline}}</v-card-subtitle>
                  <v-card-text class="font-weight-medium">{{ contents }}</v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup>
 const pics = [
  '/images/carousel_Item1.jpg',
  '/images/carousel_Item2.jpg',
  '/images/carousel_Item3.jpg',
  '/images/carousel_Item4.jpg',
  '/images/carousel_Item5.jpg',
  '/images/carousel_Item6.jpg',
 ]
 
 const todos = [
    ['完了', '2025/08/05','Home画面を完成させる'],
    ['未着手', '2025/08/05','お部屋を片付ける'],
    ['完了', '2025/08/05','お弁当をつくる'],
    ['未着手', '2025/08/10', 'firebaseに接続、DB管理を行う'],
    ['着手中', '2025/08/10','Nuxtのルーティング処理を最後までやる'],
  ]

  function getStatusClass(status) {
  if (status === '完了') return 'text-green-darken-1'
  if (status === '着手中') return 'text-orange-darken-1'
  if (status === '未着手') return 'text-red-darken-1'
  return ''
}
console.log('pics配列:', pics)

</script>

<style>
.carousel{
  width: 50%;
}
.card{
  margin:3%;
  padding: 2%;
}
.bg{
    background-color: #e5f4fb;
}
.top{
  margin-top: 3%;
}
.text-green-darken-1 {
  color: #43a047 !important;
}
.text-orange-darken-1 {
  color: #fb8c00 !important;
}
.text-red-darken-1 {
  color: #e53935 !important;
}

</style>