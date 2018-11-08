
import BetterScroll from 'better-scroll'
console.log('scrollfail')
const scroll = ({el})=>{
    console.log('scroll')
    new BetterScroll(el,{
        probeType:2,
        click:true
    }) 
}
console.log( scroll )
export default scroll