<template>
  <div class="container">
    <CategorySelector :data="selector" v-model="selected" />
    <div class="block">
      <div class="block-title">小精靈結果（{{result.split('#').length-1}}）</div>
      <p class="result">
        {{result}}
      </p>
      <div class="copy-btn" @click="copyResult">
        複製
      </div>
    </div>
  </div>
</template>
<script>
import CategorySelector from './CategorySelector.vue'
export default {
  components: {
    CategorySelector
  },
  data() {
    return {
      selected: [],
      metro: {
        '板南線': ["頂埔", "永寧", "土城", "海山", "亞東醫院", "府中", "板橋", "新埔", "江子翠", "龍山寺", "西門", "台北車站", "善導寺", "忠孝新生", "忠孝復興", "忠孝敦化", "國父紀念館", "市政府", "永春", "後山埤", "昆陽", "南港", "南港展覽館"],
        '文湖線': ["木柵", "萬芳社區", "萬芳醫院", "辛亥", "麟光", "六張犁", "科技大樓", "大安", "忠孝復興", "南京復興", "中山國中", "松山機場", "大直", "劍南路", "西湖", "港墘", "文德", "內湖", "大湖公園", "葫洲", "東湖", "南港軟體園區", "南港展覽館"],
        '淡水信義線': ["象山", "台北101", "信義安和", "大安", "大安森林公園", "東門", "中正紀念堂", "台大醫院", "台北車站", "中山", "雙連", "民權西路", "圓山", "劍潭", "士林", "芝山", "明德", "石牌", "唭哩岸", "奇岩", "北投", "新北投", "復興崗", "忠義", "關渡", "竹圍", "紅樹林", "淡水"],
        '松山新店線': ["新店", "新店區公所", "七張", "小碧潭", "大坪林", "景美", "萬隆", "公館", "台電大樓", "古亭", "中正紀念堂", "小南門", "西門", "北門", "中山", "松江南京", "南京復興", "台北小巨蛋", "南京三民", "松山"],
        '中和新蘆線': ["南勢角", "景安", "永安市場", "頂溪", "古亭", "東門", "忠孝新生", "松江南京", "行天宮", "中山國小", "民權西路", "大橋頭", "台北橋", "菜寮", "三重", "先嗇宮", "頭前庄", "新莊", "輔大", "丹鳳", "迴龍", "三重國小", "三和國中", "徐匯中學", "三民高中", "蘆洲"],
        '環狀線': ["大坪林", "十四張", "秀朗橋", "景平", "景安", "中和", "橋和", "中原", "板新", "板橋", "新埔民生", "頭前庄", "幸福", "新北產業園區"]
      }
    }
  },
  computed: {
    selector() {
      let result = [{
        question: '照片的主題？',
        options: [{
          emoji: '🍔',
          name: '食物',
          value: [`美食`, `eat`, `yummy`, `foodie`, `foodporn`, `instafood`, `delicious`, `restaurante`, `restaurant`],
          children: [{
            question: '是哪一餐？',
            options: [
              { emoji: '🌅', name: '早餐', value: ['breakfast', '早餐', '早午餐'] },
              { emoji: '🌇', name: '午餐', value: ['lunch', '午餐'] },
              { emoji: '🌃', name: '晚餐', value: ['dinner', '晚餐'] },
              { emoji: '🌃', name: '宵夜', value: ['宵夜', '夜食'] },
            ]
          }, {
            question: '是哪種食物？',
            options: [
              { emoji: '🍣', name: '壽司', value: ['sushi', '壽司'] },
              { emoji: '🥞', name: '鬆餅', value: ['pancake', '蓬蓬鬆餅', '鬆餅', 'パンケーキ', 'pancakes'] },
              { emoji: '🍜', name: '拉麵', value: ['ramen', '拉麵', '拉麺', 'noodles', 'ラーメン', 'ramennoodles', 'soup'] },
              { emoji: '🍕', name: '披薩', value: ['pizza', 'pizzagram', 'pizzeria'] },
              // { emoji: '🍔', name: '漢堡', value: ['burger'] },
              // { emoji: '🍟', name: '薯條', value: ['fries'] },
              // { emoji: '🍦', name: '冰淇淋', value: ['ice'] },
              // { emoji: '🍫', name: '巧克力', value: ['chocolate'] },
              // { emoji: '🍬', name: '糖果', value: ['candy'] },
              // { emoji: '🥗', name: '沙拉', value: ['salad'] },
              // { emoji: '🥪', name: '三明治', value: ['sandwich'] },
              // { emoji: '🍪', name: '餅乾', value: ['cookie'] },
              // { emoji: '🍩', name: '甜甜圈', value: ['doughnut'] },
              // { emoji: '🧁', name: '蛋糕', value: ['cake'] },
              // { emoji: '🍿', name: '爆米花', value: ['popcorn'] },
            ]
          }]
        }, {
          emoji: '🍹',
          name: '飲料',
          value: ['drink', 'drinks', 'drinking'],
          children: [{
            question: '是哪種飲料？',
            options: [
              { emoji: '🧋', name: '珍珠奶茶', value: ['bubbletea', '珍奶', '珍珠奶茶', 'milktea', 'bubbledrink', 'bobamilktea'] },
              { emoji: '🍹', name: '酒', value: ['wine'] },
              { emoji: '🍺', name: '啤酒', value: ['beer'] },
              { emoji: '☕', name: '咖啡', value: ['coffee', 'coffeetime', 'coffeegram'] },
              { emoji: '🍾', name: '香檳', value: ['champagne'] },
              { emoji: '🍷', name: '紅酒', value: ['redwine'] },
              { emoji: '🍸', name: '雞尾酒', value: ['cocktail'] },]
          }]
        },
          // { emoji: '🤳', name: '自拍', value: 'selfie' },
          // { emoji: '🌅', name: '風景', value: 'landscape' },
          // { emoji: '🦭', name: '動物', value: 'animal' },
          // { emoji: '🏢', name: '建築', value: 'architecture' },
        ],
      }]
      result.push({
        question: '在台北捷運站附近拍攝的嗎？',
        options: Object.entries(this.metro).map(([name, value]) => ({
          name,
          value: [name],
          children: [{ question: `是「${name}」的哪一站？`, options: value.map(x => ({ name: x, value: [x] })) }]
        }))
      })
      return result
    },
    result() {
      let tags = ['love']
      tags.push(this.selected)

      let includeFood = this.selected.includes('美食')
      Object.entries(this.metro).flat(2).forEach(x => {
        if (this.selected.includes(x)) {
          if (includeFood) {
            tags.push('捷運景點')
            tags.push(`${x}美食`)
          } else {
            tags.push('捷運景點')
            tags.push(`${x}景點`)
          }
        }
      })
      if (tags.length < 30) {
        // 熱門
        tags.push(['followback', 'life', 'yolo', 'happy', 'instalike', 'like4like', 'likeforlike'].sort(() => Math.random() - 0.5))
        // 較不熱門
        tags.push(['likeforfollow', 'followme', 'follow', 'me', 'lifestyle', 'follow4follow', 'followforfollow', 'tagsforlikes', 'f4f', 'instapic'].sort(() => Math.random() - 0.5))
      }
      tags = [...new Set(tags.flat(1))].filter(x => x != '').slice(0, 30).sort()

      return '#' + tags.join(' #')
    }
  },
  methods: {
    async copyResult() {
      await navigator.clipboard.writeText(this.result)
    }
  }
}
</script>

<style lang="sass">
.block
  border-radius: 8px
  padding: 16px
  margin: 8px 0
  background-color: #fff
  .block-title
    font-weight: bold
    margin-bottom: 8px
  .result
    line-height: 1.5
  .copy-btn
    text-align: center
    border-radius: 5px
    padding: 5px 10px
    background-color: rgba(0, 0, 0, 0.05)
    cursor: pointer
    border: 1px solid transparent
    &:hover
      border: 1px solid rgba(0, 0, 0, 0.05)
      background-color: rgba(0, 0, 0, 0.075)
    &:active
      background-color: rgba(0, 0, 0, 0.1)
</style>