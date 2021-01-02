<template>
  <div class="cinema_body">
    <ul>
      <li v-for="item in cinemaList" :key="item.cinemaId">
        <div class="detail">
          <span>{{item.name}}</span>
          <span class="q"><span class="price">{{item.lowPrice/100}}</span> 元起</span>
        </div>
        <div class="address">
          <span>{{item.address}}</span>
          <span>{{item.Distance | formatDistance}}km</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CList',
  data () {
    return {
      cinemaList: []
    }
  },
  filters: {
    formatDistance (value) {
      return (value * 1000).toFixed(2)
    }
  },
  mounted () {
    this.$http('/api', {
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      },
      params: {
        cityId: 110100,
        ticketFlag: 1
      }
    }).then(res => {
      if (res.data.msg === 'ok') {
        this.cinemaList = res.data.data.cinemas
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .detail .q{ font-size: 11px; color:#f03d37;float: right;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(1){
  display:inline-block;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cinema_body .address span:nth-of-type(2){ float:right; }
</style>
