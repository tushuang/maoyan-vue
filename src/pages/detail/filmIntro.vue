<template>
    <div class="filmIntro">
        <film-intro :FilmIteminfo="FilmIteminfo"></film-intro>
        <film-actor :FilmIteminfo="FilmIteminfo"></film-actor>

    </div>
</template>
<script>
import FilmIntro from '@c/common/detail/film-intro'
import FilmActor from '@c/common/detail/film-actor'
export default {

    components:{
         FilmIntro,
         FilmActor
    },
    data(){
        return {
             id:'',
             FilmIteminfo:{},
        }
    },
    methods:{
        getId(){
            this.id = this.$route.params.id
        },
    },
    created(){
        this.getId();
        this.$http({
             url:'/my/ajax/detailmovie?movieId='+this.id
            }
        )
        .then(res=>{
           this.FilmIteminfo=res.detailMovie;
        })
        console.log(this.$route)
        this.$bus.$emit('changeTitle')
    }
}
</script>
<style>

</style>
