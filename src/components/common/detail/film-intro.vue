<template>
<div>
    <div   class="film-intro">
        <div class="movie-filter"></div>
        <div :style = "styleObject" class="detail-bg">
        </div>
           
            <div  class="detail-content">
                <div class="item-left">
                    <img :src="bg" alt = "">
                </div>
                <div class="item-center">
                    <span class="movies-title">{{FilmIteminfo.nm}}</span>
                    <span class="eng">{{FilmIteminfo.enm}}</span>
                    <span class="movies-people">
                        <span class="people">{{FilmIteminfo.wish}}人想看</span>
                    </span>
                    <span class="movies-type">
                      {{FilmIteminfo.cat}}
                    </span>
                    <span class="movies-site">{{FilmIteminfo.src}}/100分钟</span>
                    <span class="movie-time">{{FilmIteminfo.rt}}上映</span>
                </div>
            </div>
    </div>
    <section class="section-expander" >
        <div class="text-expander-content-wrapper" >
            <div  :class="{active:infoExpander}" class="text-expander-content" >
                <p >{{FilmIteminfo.dra}}</p>
            </div>
            <div @click="infoExpander=!infoExpander" class="text-expander-button" >
                <i :class="{active:infoExpander}" class="iconfont .icon-jiantou-copy "></i>
            </div>
        </div>
    </section>
</div>
    
</template>

<script>
export default {
  props:['FilmIteminfo'],
  data() {
    return {
      bg:
        "http://p0.meituan.net/148.208/movie/2721b55eac3ca107bad2af0e18592003431446.jpg",
      styleObject: {
        background:
          "url(http://p0.meituan.net/148.208/movie/2721b55eac3ca107bad2af0e18592003431446.jpg) no-repeat",
        backgroundSize: "cover",
        filter: "blur(15px)",
        opacity: 0.55
      },
      info: null,
      id: "",
      infoExpander:false,//是否显示更多简介
    };
  },
  watch:{
    FilmIteminfo:{//解决异步
      handler(){
        this.bg=this.handleImg(this.FilmIteminfo.img);
        this.styleObject.background = 'url('+ this.bg +') no-repeat';
      }
    }
  },
  methods:{
    handleImg(imgUrl){
      let arr = imgUrl.split('/')
      return 'https://p0.meituan.net/128.180/movie/'+arr[arr.length-1];
    }
  }
}
</script>

<style lang="scss">
.film-intro {
  box-sizing: border-box;
  height: 5.013333rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  .movie-filter {
    height: 5.013333rem;
    width: 100%;
    background-color: #333;
    position: absolute;
    left: 0;
    top: 0;
  }
  .detail-bg {
    height: 5.013333rem;
    width: 100%;
  }
  .detail-content {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    padding: 19px 30px 19px 15px;
    box-sizing: border-box;
    height: 5.013333rem;
    align-items: center;
    width: 100%;
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item-left {
      width: 2.933333rem;
      height: 4rem;
      flex-shrink: 0;
      flex-grow: 0;
      img {
        border: solid 1px white;
        height: 4rem;
        width: 2.933333rem;
      }
    }
    .item-center {
      margin-top: -12px;
      color: white;
      display: flex;
      flex-direction: column;
      margin-left: 0.333333rem;
      flex-grow: 1;
      .movies-title {
        font-size: 17px;
        overflow: hidden;
      }
      .eng {
        font-size: 12px;
        color: #fff;
        opacity: 0.8;
      }
      .movies-people {
        margin-top: 6px;
        .people {
          font-size: 18px;
          color: #fc0;
          font-weight: 100;
        }
      }
      .movies-type,
      .movies-site,
      .movie-time {
        font-size: 12px;
        color: #a9b3c1;
        margin-top: 0.16rem;
      }
    }
  }
}
.section-expander{
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin: .2rem 0;
    position: relative;
    margin-top: 0 !important;
    padding: .3rem .3rem 0 .3rem;
    background: #fff;
    color: #555;
    div.text-expander-content-wrapper{
        cursor: pointer;
        background-color: white;
        font-size:.4rem;
        div.text-expander-content{
            max-height: 1.546667rem;
            margin: 0;
            line-height: .533333rem;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            overflow: hidden;
            p{
                margin: 0;
            }
        }
        div.text-expander-content.active{
            max-height: 100rem;
        }
        .text-expander-button{
            color: #aaa;
            text-align: center;
            height: .44rem;
            .iconfont{
                font-size: 1em;
                line-height: 1em;
                display: inline;
                vertical-align: middle;
                color: #aaa;
                text-align: center;
            }
        }
        .iconfont.active{
            display: block;
            transform: rotate(180deg);
        }
    }
}

</style>
