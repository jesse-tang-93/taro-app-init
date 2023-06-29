<template>
  <view class="sitter-item flex justify-between">
    <div class="info">
      <div class="price-top flex">
        <!-- price -->
        <div class="price flex">
          58元/
          <div class="unit">次</div>
        </div>
        <!-- star -->
        <nut-rate size="22rpx" active-color="#FE7301" readonly></nut-rate>
        <!-- 距离 -->
        <div class="distance">距离3.1km</div>
      </div>
      <!-- desc  -->
      <div class="desc">养猫十年，目前养了三只猫，一直只偶，两只英短，非常喜欢猫猫～</div>
      <!-- 标签 -->
      <div class="tag-box">
        <nut-tag color="#999999">超多好评</nut-tag>
        <nut-tag color="#999999">回头客多</nut-tag>
        <nut-tag color="#999999">人超nice</nut-tag>
      </div>
    </div>
    <div class="avatar-box flex">
      <img
        src="https://miaoo-oss.oss-cn-chengdu.aliyuncs.com/photo/2023-6-19/%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A2%206%402x.png"
        alt=""
        class="avatar"
      />
      <div class="name">小果子的芭比</div>
    </div>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.sitter-item {
  box-sizing: border-box;
  padding: 22px 20px 26px;
  color: #111111;
  width: 660px;
  background: #ffffff;
  box-shadow: 0px 6px 20px 0px rgba(238, 238, 238, 0.8);
  border-radius: 16px;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
  .info {
    flex: 1;
    padding-right: 38px;
    .price-top {
      align-items: flex-start;
      .price {
        font-size: 34px;
        align-items: flex-end;
        .unit {
          font-size: 20px;
          margin-left: 4px;
          margin-bottom: 4px;
        }
        padding-right: 20px;
      }
      .h5-view.nut-rate {
        margin-top: 12px;
        .nut-rate-item {
          margin-right: 8px;
        }
      }
      // distance
      .distance {
        flex: 1;
        font-size: 26px;
        font-family: PingFang SC;
        font-weight: 500;
        margin-bottom: 5px;
        text-align: right;
      }
    }
    // desc
    .desc {
      width: 100%;
      font-size: 24px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      padding-top: 18px;
      padding-bottom: 20px;
    }
    .tag-box {
      .nut-tag {
        padding: 8px 22px;
        font-size: 24px;
        border-radius: 8px;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .avatar-box {
    flex-direction: column;
    align-items: flex-end;
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 10px;
      margin-top: 4px;
    }
    .name {
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #111111;
      line-height: 68px;
      margin-top: 10px;
      max-width: 120px;
      text-overflow: ellipsis;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
    }
  }
}
</style>
