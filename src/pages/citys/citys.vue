<template>
    <div class="citys-warp">
        <div id="citys">
             <citys-list></citys-list>
        </div>
    </div>
    
</template>

<script>

import citysCrosswise from '@c/common/citys-box/citys-crosswise'
import citysList from '@c/common/citys-box/citys-list'
export default {
    components:{
        citysCrosswise,
        citysList
    }
}
</script>

<style lang="scss">
    #citys{
        margin-top:-1.36rem;
        background: #ebebeb;
        font-size: .373333rem;
        color: #333;
        height: 100%;
    }
    .mint-indexlist{
        height:100%;
    }
    .mint-indexlist-content{
        height: 100%;
    }
    .mint-indexlist-nav{
        background: #ebebeb;
        border: none;
        color: #333;
        font-size: .213333rem;
    }
    .mint-indexsection-index{
        background: #ebebeb;
    }
    .mint-cell{
        border-bottom: 0.026667rem solid #c8c7cc;
        background: #f5f5f5;
        padding-left: .266667rem;
    }
</style>
