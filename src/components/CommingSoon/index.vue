<template>
  <div class="movie_body">
				<ul>
					<li v-for="item in movieList" :key="item.filmId">
						<div class="pic_show"><img :src="item.poster"></div>
						<div class="info_list">
							<h2><span class="name">{{item.name}}</span><span class="item">{{item.item.name}}</span></h2>
							<p></p>
							<p>主演: <span v-for="(actor,index) in item.actors" :key="index">{{actor.name}} </span></p>
							<p>{{item.premiereAt}}上映</p>
						</div>
						<div class="btn_pre">
							预售
						</div>
					</li>
				</ul>
			</div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'CommingSoon',
  data () {
    return {
      movieList: []
    }
  },
  mounted () {
    this.$http({
      url: '/api',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      },
      params: {
        cityId: 210300,
        pageNum: 1,
        pageSize: 10,
        type: 2
      }
    }).then(res => {
      if (res.data.msg === 'ok') {
        const films = res.data.data.films.map((item, index, arr) => {
          item.premiereAt = moment(item.premiereAt * 1000).format('YYYY-MM-DD')
          return item
        })
        this.movieList = films
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list h2 .name{
  max-width: calc(100% - 25px);
  color: #191a1b;
  font-size: 16px;
  height: 22px;
  line-height: 22px;
  margin-right: 5px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.movie_body .info_list h2 .item{
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
</style>
