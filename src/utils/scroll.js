
import BetterScroll from 'better-scroll'

const scroll = ({
    el,
    handler
})=>{
    let scroll = new BetterScroll(el,{
        probeType:2,
        click:true,
        pullUpLoad:{    // 配置上拉加载
            threshold:50 // 距离底部多少距离
        }
    })
    scroll.on('pullingUp',async ()=>{
        await handler()
        scroll.finishPullUp() // 解决拉到刷新
        scroll.refresh()   // 从重新计算
    })

}
export default scroll