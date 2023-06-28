// 评价
<template>
  <div class="review-item" :class="props.noMargin && 'no-margin'">
    <div class="top flex">
      <img
        class="head-img"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
      />
      <!-- name-box -->
      <div class="name-box">
        <div class="name">高新区气枪哥哥</div>
        <div class="star">
          <nut-rate v-model="starVal" readonly size="22rpx" active-color="#FE7301" />
        </div>
      </div>
      <!-- time -->
      <div class="time">2023.04.11</div>
    </div>
    <!-- content -->
    <div class="out-box">
      <div class="content">
        味道蛮不错的，想要老板加一点饭，还给我特意加了不少米饭，口味很好，还有一杯柠檬茶，也很好喝，性价比挺高的，下次还会光顾的~
      </div>
      <div class="imgs flex">
        <img
          class="imgs-item"
          mode="aspectFit"
          src="https://miaoo-oss.oss-cn-chengdu.aliyuncs.com/photo/2023-6-19/reviews.png"
        />
        <img
          class="imgs-item"
          mode="aspectFit"
          src="https://miaoo-oss.oss-cn-chengdu.aliyuncs.com/photo/2023-6-19/reviews.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const starVal = ref(3)
const props = defineProps({
  noMargin: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss">
.review-item {
  padding: 20px 44px 30px 46px;
  &.no-margin {
    padding: 0;
  }
  .top {
    .head-img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .name-box {
      padding-top: 4px;
      flex: 1;

      .name {
        font-size: 26px;
        font-weight: bold;
        color: #111111;
        margin-bottom: 10px;
      }
      .h5-view.nut-rate {
        .nut-rate-item {
          margin-right: 8px;
        }
      }
    }
    .time {
      color: #999999;
      font-size: 24px;
      padding-top: 4px;
    }
  }
  .out-box {
    padding-left: 70px;
  }
  // content
  .content {
    width: 527px;
    font-size: 22px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #111111;
    line-height: 36px;
    margin-bottom: 20px;
  }
  .imgs {
    .imgs-item {
      width: 167px;
      height: 143px;
      margin-right: 20px;
      &:nth-child(3n) {
        margin-right: 0px;
      }
    }
  }
}
</style>
