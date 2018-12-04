<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="item in cur"
        :key="item.title">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.img"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      kind: 'all',
      list: {
        all: [
          {
            title: 'title1',
            img: 'https://p0.meituan.net/tdchotel/f1ac32e10e0b017fbb7a605cd788ed475571644.jpg@368w_208h_1e_1c',
            pos: 'pos1',
            price: '111'
          },
          {
            title: 'title2',
            img: 'https://p1.meituan.net/tdchotel/ee16a6453e41b96d655821c1a06046132910415.jpg@368w_208h_1e_1c',
            pos: 'pos2',
            price: '112'
          },
          {
            title: 'title3',
            img: 'https://p0.meituan.net/tdchotel/85a46a6bee1d00940e3c0d04405837a4304319.jpg@368w_208h_1e_1c',
            pos: 'pos3',
            price: '113'
          },
          {
            title: 'title4',
            img: 'https://p1.meituan.net/tdchotel/29e12dab78a238ed256f7114bcd7cbb03695302.jpg@368w_208h_1e_1c',
            pos: 'pos4',
            price: '114'
          },
          {
            title: 'title5',
            img: 'https://p0.meituan.net/tdchotel/f1ac32e10e0b017fbb7a605cd788ed475571644.jpg@368w_208h_1e_1c',
            pos: 'pos1',
            price: '111'
          },
          {
            title: 'title6',
            img: 'https://p1.meituan.net/tdchotel/ee16a6453e41b96d655821c1a06046132910415.jpg@368w_208h_1e_1c',
            pos: 'pos2',
            price: '112'
          },
          {
            title: 'title7',
            img: 'https://p0.meituan.net/tdchotel/85a46a6bee1d00940e3c0d04405837a4304319.jpg@368w_208h_1e_1c',
            pos: 'pos3',
            price: '113'
          },
          {
            title: 'title8',
            img: 'https://p1.meituan.net/tdchotel/29e12dab78a238ed256f7114bcd7cbb03695302.jpg@368w_208h_1e_1c',
            pos: 'pos4',
            price: '114'
          },
        ],
        part: [
          {
            title: 'title3',
            img: 'https://p0.meituan.net/tdchotel/85a46a6bee1d00940e3c0d04405837a4304319.jpg@368w_208h_1e_1c',
            pos: 'pos3',
            price: '113'
          },
          {
            title: 'title4',
            img: 'https://p1.meituan.net/tdchotel/29e12dab78a238ed256f7114bcd7cbb03695302.jpg@368w_208h_1e_1c',
            pos: 'pos4',
            price: '114'
          }
        ],
        spa: [],
        movie: [],
        travel: []
      }
    }
  },
  computed: {
    cur: function () {
      return this.list[this.kind]
    }
  },
  methods: {
    over (e) {
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      let self = this
      if (tag === 'dd') {
        this.kind = dom.getAttribute('kind')
        let keyword = dom.getAttribute('keyword')
      }
    }
  }
}
</script>

<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>
