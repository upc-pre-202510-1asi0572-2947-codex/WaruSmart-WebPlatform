
<script>
import CropsAmountStatsCard from '/src/crops/components/crops-amount-stats-card.component.vue';
import ControlsByCropStats from '/src/crops/components/controls-by-crop-stats-card.component.vue';
import DeviceTypeGeneralStatisticCard from '/src/crops/components/device-type-general-statistic-card.component.vue';
export default {
  name: "crops-statistics",
  components: {
    //CropsAmountStatsCard,
    //ControlsByCropStats
    DeviceTypeGeneralStatisticCard
  }
}
</script>

<template>
  <h1>{{$t('welcomeStatistics')}}</h1>
  <div class="flex-container">
    <!--<crops-amount-stats-card />
    <controls-by-crop-stats /> -->
    <device-type-general-statistic-card />
  </div>
</template>


<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
}

h1{
  color:black;
  font-size: 2.7rem;
  margin-bottom:10%;
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
    height: 100vh;
    justify-content: revert-layer;
  }
}
</style>