
import { INCREASE , DECREASE , RESET , GETBARDATA } from '../actions/actionType'
//初始化state

const initialState = {
    number : 1,
    data : {},
    text : [
        {title : '习近平普京向中俄执政党交往活动致贺信' , tips:'关键词：习大大' , context : '新华社俄罗斯喀山3月23日电 中俄执政党对话机制第六次会议和第五届中俄政党论坛23日在俄罗斯喀山举行。中共中央总书记习近平和俄罗斯联邦总统普京分别致贺信。习近平在贺信中对会议和论坛召开表示热烈祝贺。他指出，坚持战略协作精神和世代友好理念，坚定不移深化中俄全面战略协作伙伴关系，是我和普京总统达成的重要共识。中国共产党和统一俄罗斯党保持密切的机制化交往，对加强两党自身建设、增进双边战略互信、助推两国务实合作、维护世界和平发展发挥了积极作用。' },
        {title : '新华社用"罕见"点赞里皮:国足不二选择' , tips:'关键词：里皮' , context : '在世预赛生死战中，意大利名帅里皮率领国足将士1球小胜强敌韩国队，在12强赛中一扫颓势。接手国家队仅仅两场比赛，球迷看到，在里皮治下，国脚们脚底不软了，气势上来了，久违的“恐韩症”在如此大赛氛围中，也被打破了。这一刻，高薪聘请的里皮团队没有让中国足球失望。上任5个月以来，里皮究竟给这支国家队带来怎样的变化？3月23日晚，新华社连发评论文章，从战术、精神和管理层面分析“里家军”新貌，称中韩之战不论斗志还是比赛过程，国足都展现出十分罕见的水平。'},
        {title : '解放军首参加巴基斯坦阅兵式 先进武器亮相' , tips:'关键词：巴铁' , context : '据央视网报道。3月23日是巴基斯坦的国庆日，当天，巴基斯坦在首都伊斯兰堡举行了国庆日阅兵。参加阅兵式的包括巴基斯坦陆海空三军、准军事部队、警察、边境兵团、突击部队和骑兵等。分列式后，阅兵式还举行了装备展示、飞行表演和花车游行等活动。从黎明报网站、国家电视台等巴基斯坦媒体公布的照片和视频可以看出，在本次阅兵式上，巴基斯坦陆海空三军展示了大量的现役先进武器，其中有不少中国武器的身影。'}
    ]
}


//加减
export const count = ( state=initialState , action ) =>{
    switch( action.type ){
        case INCREASE : 
            return Object.assign({} , state , { number : state.number + action.amount })
        case DECREASE :
            return Object.assign({} , state , { number : (state.number - action.amount ) == -1 ? 0 : state.number - action.amount })
        case RESET :
            return Object.assign( {} , state , { number : 0 } )
        case GETBARDATA :
            return Object.assign({} , state , { data : action.date })
        default :
            return state
    }
}




