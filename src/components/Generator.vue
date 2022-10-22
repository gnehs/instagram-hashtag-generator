<template>
  <div class="container">
    <div class="block">
      <div class="block-title">照片的主題？</div>
      <CategorySelector :data="theme" v-model="themeSelected" />
    </div>
    <div class="block" v-if="themeSelected.includes('food')">
      <div class="block-title">是哪種食物？</div>
      <CategorySelector :data="food" v-model="foodSelected" />
    </div>
    <div class="block" v-if="themeSelected.includes('food')">
      <div class="block-title">是哪一餐？</div>
      <CategorySelector :data="foodTime" v-model="foodTimeSelected" />
    </div>
    <div class="block" v-if="themeSelected.includes('drink')">
      <div class="block-title">是哪種飲料？</div>
      <CategorySelector :data="drink" v-model="drinkSelected" />
    </div>
    <div class="block">
      <div class="block-title">在台北捷運站附近拍攝的嗎？</div>
      <CategorySelector :data="taipeiMetro" v-model="taipeiMetroSelected" radio />
    </div>
    <div class="block" v-if="taipeiMetroStation.length">
      <div class="block-title">是哪站？</div>
      <CategorySelector :data="taipeiMetroStation" v-model="taipeiMetroStationSelected" />
    </div>
    <div class="block">
      <div class="block-title">小精靈結果（{{result.length}}）</div>
      {{'#'+result.join(' #')}}
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
      theme: [
        { emoji: '🍰', name: '食物', value: 'food' },
        { emoji: '🧋', name: '飲料', value: 'drink' },
        { emoji: '😀', name: '自拍', value: 'selfie' },
        { emoji: '🌅', name: '風景', value: 'landscape' },
        { emoji: '🦭', name: '動物', value: 'animal' },
        { emoji: '🏢', name: '建築', value: 'architecture' },
      ],
      themeSelected: [],
      food: [
        { emoji: '🍣', name: '壽司', value: ['sushi', '壽司'] },
        { emoji: '🥞', name: '鬆餅', value: ['pancake', '蓬蓬鬆餅', '鬆餅', 'パンケーキ', 'pancakes'] },
        { emoji: '🍜', name: '拉麵', value: ['ramen', '拉麵', '拉麺', 'noodles', 'ラーメン', 'ramennoodles', 'soup'] },
        { emoji: '🍕', name: '披薩', value: 'pizza' },
        { emoji: '🍔', name: '漢堡', value: 'burger' },
        { emoji: '🍟', name: '薯條', value: 'fries' },
        { emoji: '🍦', name: '冰淇淋', value: 'ice' },
        { emoji: '🍫', name: '巧克力', value: 'chocolate' },
        { emoji: '🍬', name: '糖果', value: 'candy' },
        { emoji: '🥗', name: '沙拉', value: 'salad' },
        { emoji: '🥪', name: '三明治', value: 'sandwich' },
        { emoji: '🍪', name: '餅乾', value: 'cookie' },
        { emoji: '🍩', name: '甜甜圈', value: 'doughnut' },
        { emoji: '🧁', name: '蛋糕', value: 'cake' },
        { emoji: '🍿', name: '爆米花', value: 'popcorn' },
      ],
      foodSelected: [],
      foodTime: [
        { emoji: '🌅', name: '早餐', value: ['breakfast', '早餐', '早午餐'] },
        { emoji: '🌇', name: '午餐', value: ['lunch', '午餐', 'ランチ'] },
        { emoji: '🌃', name: '晚餐', value: ['dinner', '晚餐', '夕食'] },
        { emoji: '🌃', name: '宵夜', value: ['宵夜', '夜食'] },
      ],
      foodTimeSelected: [],
      drink: [
        { emoji: '🧋', name: '珍珠奶茶', value: ['bubbletea', '珍奶', '珍珠奶茶'] },
        { emoji: '🍹', name: '酒', value: 'wine' },
        { emoji: '🍺', name: '啤酒', value: 'beer' },
        { emoji: '☕', name: '咖啡', value: 'coffee' },
        { emoji: '🍾', name: '香檳', value: 'champagne' },
        { emoji: '🍷', name: '紅酒', value: 'redwine' },
        { emoji: '🍸', name: '雞尾酒', value: 'cocktail' },
      ],
      drinkSelected: [],
      taipeiMetro: [
        { emoji: '❌', name: '不是', value: '' },
        { emoji: '🚇', name: '板南線', value: '板南線' },
        { emoji: '🚇', name: '文湖線', value: '文湖線' },
        { emoji: '🚇', name: '淡水信義線', value: '淡水信義線' },
        { emoji: '🚇', name: '松山新店線', value: '松山新店線' },
        { emoji: '🚇', name: '中和新蘆線', value: '中和新蘆線' },
        { emoji: '🚇', name: '環狀線', value: '環狀線' },
      ],
      taipeiMetroSelected: [''],
      taipeiMetroStationSelected: [],
    }
  },
  computed: {
    taipeiMetroStation() {
      let stations = {
        '文湖線': ['動物園', '木柵', '萬芳社區', '萬芳醫院', '辛亥', '麟光', '六張犁', '科技大樓', '大安', '忠孝復興', '南京復興', '中山國中', '松山機場', '大直', '劍南路', '西湖', '港墘', '文德', '內湖', '大湖公園', '葫洲', '東湖', '南港軟體園區', '南港展覽館',],
        '淡水信義線': ['象山', '台北101', '信義安和', '大安', '大安森林公園', '東門', '中正紀念堂', '台大醫院', '台北車站', '中山', '雙連', '民權西路', '圓山', '劍潭', '士林', '芝山', '明德', '石牌', '唭哩岸', '奇岩', '北投', '新北投', '復興崗', '忠義', '關渡', '竹圍', '紅樹林', '淡水',],
        '松山新店線': ['新店', '新店區公所', '七張', '小碧潭', '大坪林', '景美', '萬隆', '公館', '台電大樓', '古亭', '中正紀念堂', '小南門', '西門', '北門', '中山', '松江南京', '南京復興', '台北小巨蛋', '南京三民', '松山',],
        '中和新蘆線': ['南勢角', '景安', '永安市場', '頂溪', '古亭', '東門', '忠孝新生', '松江南京', '行天宮', '中山國小', '民權西路', '大橋頭', '台北橋', '菜寮', '三重', '先嗇宮', '頭前庄', '新莊', '輔大', '丹鳳', '迴龍', '三重國小', '三和國中', '徐匯中學', '三民高中', '蘆洲',],
        '板南線': ["頂埔", "永寧", "土城", "海山", "亞東醫院", "府中", "板橋", "新埔", "江子翠", "龍山寺", "西門", "台北車站", "善導寺", "忠孝新生", "忠孝復興", "忠孝敦化", "國父紀念館", "市政府", "永春", "後山埤", "昆陽", "南港", "南港展覽館",],
        '環狀線': ['大坪林', '十四張', '秀朗橋', '景平', '景安', '中和', '橋和', '中原', '板新', '板橋', '新埔民生', '頭前庄', '幸福', '新北產業園區',]
      }
      if (stations[this.taipeiMetroSelected[0]])
        return stations[this.taipeiMetroSelected[0]].map(x => ({ emoji: '🚇', name: x, value: x }))
      else
        return []
    },
    result() {
      let tags = ['love']
      tags.push(this.themeSelected)
      tags.push(this.taipeiMetroSelected)
      if (this.themeSelected.includes('food')) {
        tags.push(this.foodSelected)
        tags.push(this.foodTimeSelected)
        tags.push(`美食`)
        tags.push(`eat`)
        tags.push(`yummy`)
        tags.push(`foodie`)
        tags.push(`foodporn`)
        tags.push(`instafood`)
        tags.push(`delicious`)
        tags.push(`restaurante`)
        tags.push(`restaurant`)
      }
      if (this.themeSelected.includes('drink')) {
        tags.push(this.drinkSelected)
      }
      if (this.taipeiMetroSelected[0] != '') {
        let station
        if (this.taipeiMetroStationSelected[0]) {
          station = this.taipeiMetroStationSelected
          tags.push(station)
        }
        if (this.themeSelected.includes('food')) {
          tags.push(this.taipeiMetroStationSelected.map(x => x + '美食'))
          tags.push(`台北美食`)
          if (station)
            tags.push(`${station}美食`)
        }
      }
      if (tags.length < 30) {
        tags.push(['followback', 'life', 'instalike', 'like4like', 'likeforlike', 'yolo'].sort(() => Math.random() - 0.5))
      }
      tags = tags.flat(2).filter(x => x != '').slice(0, 30).sort()

      return tags
    }
  }
}
</script>

<style lang="sass">
.block
  border: 1px solid rgba(0, 0, 0, 0.05)
  border-radius: 5px
  padding: 10px
  margin: 5px 0
  .block-title
    font-weight: bold
    margin-bottom: 4px
</style>