<template>
    <div class="film-actor">
        <section class="swiper-actor">
             <swiper :options="swiperOption" >
                <swiper-slide  v-for="(item,index) in FilmIteminfo.photos" :key="index" >
                    <div class="swiper-item">
                        <img :src="handleImg(item)" alt="">
                        <p  class="name"></p>
                        <p  class="position"></p>
                    </div> 
                </swiper-slide>
            </swiper>
        </section>
        <div class="actor-all">
            <h4>更多剧情</h4>
            <i class="iconfont icon-arrow-right-copy-copy-copy"></i>
        </div>
        <section class="film-actor-footer">
            <div class="download-btn">
                下载猫眼电影，查看更多电影信息
            </div>
            <div class="footer-misc" >
                <div class="copyright">
                    <span >
                        <span >© 猫眼电影 客服电话: </span>
                        <a >1010-5335</a>
                    </span>
                </div>
                <p class="icp" >
                    <a href="http://www.miibeian.gov.cn" class="link" target="_blank" >
                        <span >京ICP备16022489号-1</span>
                    </a>
                    <span >&nbsp;</span>
                    <a href="http://www.beian.gov.cn" class="link" target="_blank" >
                        <span >京公网安备11010502030881号</span>
                    </a>
                </p>
                <p class="sankuai" >
                    <a class="link">
                        <span >北京猫眼文化传媒有限公司</span>
                    </a>
                </p>
            </div>
        </section>
    </div>
</template>
<script>
export default {
     props:['FilmIteminfo'],
    data() {
        return {
        swiperOption: {
            slidesPerView: 3.5,
            spaceBetween: 10
        }
    };
  },
  methods:{
       handleImg(imgUrl){
            let arr = imgUrl.split('/')
            return 'https://p0.meituan.net/128.180/movie/'+arr[arr.length-1];
        }
  }
};
</script>
<style lang="scss">
section.swiper-actor {
  background: white;
  padding: 15px 0 5px 15px;
  .swiper-item {
    font-size: 12px;
    text-align: center;
    height: 3.786667rem;
    img {
        width: 120px;
        height: 120px;
    }
    p.name {
      color: black;
      line-height: 18px;
    }
    p.position {
      color: #999;
      line-height: 18px;
    }
  }
}
.actor-all {
  background: white;
  border-top: 1px solid #e5e5e5;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  line-height: 1.066667rem;
  color: #555;
}
.film-actor-footer {
  margin-top: 0.32rem;
  .download-btn {
    display: block;
    margin: 0.266667rem;
    padding: 0.266667rem;
    text-align: center;
    border-radius: 4px;
    line-height: 1;
    background: #e54847;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
  }
}
.footer-misc{
    text-align: center;
    .copyright{
        a{
                color: #e54847;
            }
    }
    .icp{
        margin-top: .266667rem;
        a{
            color: #9e9e9e;
            font-size: .32rem;
        }
    }
    .sankuai{
        margin-top: .266667rem;
        margin-bottom: .533333rem;
        a{
            color: #9e9e9e;
            font-size: .346667rem;
        }
    }
}
</style>
