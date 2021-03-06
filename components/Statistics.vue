<template>
  <section class="cards">
    <div class="cards__title">{{ statisticsData.title }}</div>
    <div class="cards__container">
      <div class="card" v-for="card in cardsWithProgressBar" :key="card.id">
        <card-title :title="card.description" />
        <progressbar :value="card.currentValue" :maxValue="card.maxValue" />
        <card-content :content="card.summary" />
        <card-source :source="card.source" />
      </div>
      <div class="card" v-for="card in cardsWithFakeData" :key="card.id">
        <card-title :title="card.description" />
        <double-bar
          :valueEmpty="card.valueEmpty"
          :maxValueEmpty="card.maxValueEmpty"
          :valueFill="card.valueFill"
          :maxValueFill="card.maxValueFill"
        />
        <card-content :content="card.summary" />
        <card-source :source="card.source" />
      </div>
    </div>
  </section>
</template>

<script>
import CardStatTitle from '@/components/ui/CardStatTitle';
import ProgressBar from '@/components/ui/ProgressBar';
import CardStatContent from '@/components/ui/CardStatContent';
import CardStatSource from '@/components/ui/CardStatSource';
import ProgressBarD from '@/components/ui/ProgressBarD';
export default {
  components: {
    'card-title': CardStatTitle,
    progressbar: ProgressBar,
    'card-content': CardStatContent,
    'card-source': CardStatSource,
    'double-bar': ProgressBarD,
  },
  computed: {
    cardsWithProgressBar() {
      return this.$store.getters['statisticsData/getStatistics'].slice(0, 2);
    },
    cardsWithFakeData() {
      return this.$store.getters['statisticsData/getFakeData'];
    },
    statisticsData() {
      return this.$store.getters['blocks/getStatisticsBlock'];
    },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1320px;
  margin: 0 auto 100px;
  padding: 100px 60px 0;
}
.cards__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 0 0 70px;
  max-width: 413px;
}
.cards__container {
  display: grid;
  grid-template-rows: repeat(1, minmax(265px, 300px));
  grid-template-columns: repeat(4, minmax(265px, 300px));
  grid-column-gap: 40px;
  margin: 0 auto;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
}

@media screen and (max-width: 1280px) {
  .cards {
    padding: 90px 50px 0;
    margin: 0 auto 90px;
  }
  .cards__title {
    font-size: 28px;
    line-height: 32px;
    margin: 0 0 46px;
    max-width: 367px;
  }
  .cards__container {
    grid-template-rows: repeat(1, minmax(208px, 265px));
    grid-template-columns: repeat(4, minmax(208px, 265px));
  }
}
@media screen and (max-width: 1024px) {
  .cards {
    padding-top: 80px;
    margin: 0 auto 80px;
  }
  .cards__title {
    font-size: 24px;
    line-height: 28px;
    max-width: 288px;
  }
  .cards__container {
    grid-template-rows: repeat(1, minmax(160px, 208px));
    grid-template-columns: repeat(4, minmax(160px, 208px));
    grid-column-gap: 30px;
  }
}
@media screen and (max-width: 810px) {
  .cards {
    padding-left: 40px;
    padding-right: 40px;
  }
  .cards__container {
    grid-template-rows: repeat(1, 216px);
    grid-template-columns: repeat(4, 216px);
    grid-column-gap: 20px;
    max-width: 100%;
    overflow-x: scroll;
  }
}
@media screen and (max-width: 320px) {
  .cards {
    padding: 50px 15px;
  }
}
</style>
