<template>
  <div class="calender-class">
    <v-app>
      <v-row>
        <v-col cols="7" >
          <!-- ここからカレンダー -->
          <!-- カレンダーの種別セレクトボックス -->
            <v-select
              v-model="type"
              :items="types"
              class="ma-2 ga-3"
              density="compact"
              label="View Mode"
              variant="outlined"
              hide-details
            ></v-select>
        <!-- カレンダー自体のコンポーネント -->
          <v-sheet style="height: 70%; overflow: auto;">
            <v-calendar
              ref="calendar"
              v-model="value"
              :events="events"
              :view-mode="type"
              :weekdays="[0, 1, 2, 3, 4, 5, 6]"
              :get-event-color="getEventColor"
              disabled="false"
            ></v-calendar>
          </v-sheet>
        </v-col>
        <!-- ここからカード -->
          <v-col cols="4" style="display: flex; flex-direction: column; gap: 15px;">
            <h2>TODO</h2>
            <div class="cards">
              <v-card v-for="(event, index) in eventss" :key="index" class="my-4 mx-auto card" hover>
                <div class="pa-2">{{ event.title }}</div>
                <v-card-subtitle class="text-grey">{{ event.start }}</v-card-subtitle>
                <v-card-subtitle class="text-grey">{{ event.end }}</v-card-subtitle>
                <v-card-text class="font-weight-medium">{{ event.contents }}</v-card-text>
              </v-card>
            </div>
          </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
  // 表示形式（月 / 週 / 日）
  const types = ['month', 'week', 'day']

  export default {
    data: () => ({
      type: 'month',
      types: ['month', 'week', 'day'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { title: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { title: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { title: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { title: 'Mon, Wed, Fri', value: [1, 3, 5] },
      ],
      value: new Date(),
      events: [],
    }),
    mounted() {
      this.events = [
      {
        title: '山梨旅行',
        start: new Date('2025-08-09T20:00:00'),
        end: new Date('2025-08-10T22:00:00'),
        color: 'green',
      },
      {
        title: '江東花火大会',
        start: new Date('2025-08-11T19:00:00'),
        end: new Date('2025-08-11T21:00:00'),
        color: 'red',
      },
      {
        title: '仙台旅行',
        start: new Date('2025-08-24T06:00:00'),
        end: new Date('2025-08-25T10:00:00'),
        color: 'blue',
      },
    ]

    console.log('イベントデータ:', this.events) // ←ここで中身を確認
  },

    methods: {
      getEventColor(event) {
        return event.color
      },
    },
  }
</script>

<style>
.calender{
  max-height: 500px;
}
.calender-class{
  margin-top: 5%;
  margin-left: 2%;
  background-color: #e5f4fb;
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