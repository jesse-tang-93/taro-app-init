<script setup>
import Taro, { useLoad, useShareAppMessage, useShareTimeline } from '@tarojs/taro'
import { Location2, Order, RectRight, My } from '@nutui/icons-vue-taro'
import './index.scss'
const state = reactive({
  photos: [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  ], // 相册
  initPhotosPage: 1,
})
const sitterInfo = ref({
  star: 3,
})
const mapMarkers = ref([
  {
    iconPath:
      'https://avatars2.githubusercontent.com/u/1782542?s=460&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4',
    id: 0,
    latitude: 23.099994,
    longitude: 113.32452,
    width: 50,
    height: 50,
  },
])

definePageConfig({
  navigationBarTitleText: 'UKer',
  navigationStyle: 'default',
  // enableShareTimeline: true,
  enableShareAppMessage: true,
})
</script>
<template>
  <view class="page-container sitter">
    <!-- photos -->
    <nut-swiper
      :init-page="state.initPhotosPage"
      :pagination-visible="true"
      pagination-color="#426543"
      auto-play="3000"
      height="220"
    >
      <nut-swiper-item v-for="item in state.photos" :key="item">
        <img :src="item" alt="" />
      </nut-swiper-item>
    </nut-swiper>
    <!-- box -->
    <div class="sitter-content">
      <div class="info">
        <!-- 基础信息 -->
        <div class="base flex items-end">
          <img class="head" src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" />
          <!-- name -->
          <div class="name">苏苏</div>
          <!-- star -->
          <nut-rate v-model="sitterInfo.star" size="22rpx" active-color="#FE7301" readonly />
        </div>
        <!-- desc -->
        <div class="desc">
          养猫十年，目前养了三只猫，一直只偶，两只英短，非常喜欢猫猫，大家可以相信我，欢迎朋友们来找我下单哦～
        </div>
        <!-- 标签 -->
        <div class="tag-box">
          <nut-tag color="#999999">超多好评</nut-tag>
          <nut-tag color="#999999">回头客多</nut-tag>
          <nut-tag color="#999999">人超nice</nut-tag>
        </div>
      </div>
      <!-- 官方标签 -->
      <div class="platform-tag flex justify-between">
        <div class="item flex">
          <img src="" alt="" />
          <div class="text">官方认证</div>
        </div>
        <div class="item flex">
          <img src="" alt="" />
          <div class="text">平台培训</div>
        </div>
        <div class="item flex">
          <img src="" alt="" />
          <div class="text">封闭式服务直播</div>
        </div>
      </div>
      <!-- 所在位置 -->
      <div class="location-box">
        <div class="address-text flex items-center">
          <Location2 />
          <div class="text">四川省成都市锦江区中纱帽街8号</div>
        </div>
        <div class="map-box">
          <map
            id="map"
            style="width: 100%; height: 180rpx"
            longitude="113.324520"
            latitude="23.099994"
            scale="14"
            :markers="mapMarkers"
            :show-location="true"
          />
        </div>
        <!-- 服务收费 -->
        <div class="serve-info">
          <div class="title flex items-center">
            <Order />
            <div class="text">服务收费</div>
          </div>
          <!-- detail -->
          <div class="detail">
            <div class="item flex justify-between">
              <div class="text">3公里以内，每超过1公里</div>
              <div class="money">+10元</div>
            </div>
            <div class="item flex justify-between">
              <div class="text">2只以内不增加费用，超过两只，每增加一只</div>
              <div class="money">+10元</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 评价 reviews -->
      <div class="reviews-box flex justify-between items-center">
        <div class="title flex items-center">
          <div class="block"></div>
          服务评价
        </div>
        <div class="link flex items-center">
          <div class="text">查看全部评价</div>
          <RectRight />
        </div>
      </div>
      <!-- 评价次数 - 头像 -->
      <div class="reviews-count flex items-center">
        <nut-avatar-group max-count="3" max-color="#fff" max-bgColor="#498ff2" size="small">
          <nut-avatar>
            <img
              src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
            />
          </nut-avatar>
          <nut-avatar><My /></nut-avatar>
          <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</nut-avatar>
          <nut-avatar><My /></nut-avatar>
        </nut-avatar-group>
        <div class="count">142次评价</div>
      </div>
      <!-- 评价列表 -->
      <div class="reviews-list">
        <Reviews noMargin />
        <Reviews noMargin />
        <Reviews noMargin />
      </div>
    </div>
  </view>
  <!-- 底部按钮组 -->
  <div class="btn-box flex safe-area-bottom items-center">
    <!-- price -->
    <div class="price flex">65元/<span class="unit">次</span></div>
    <!-- btn -->
    <nut-button type="primary" color="#FE7301">立即预约</nut-button>
  </div>
</template>
