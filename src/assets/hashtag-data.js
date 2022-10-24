export default [{
  question: '照片的主題？',
  options: [{
    emoji: '🍔',
    name: '食物',
    value: [`美食`, `eat`, `yummy`, `foodie`, `foodporn`, `instafood`, `delicious`, `restaurante`, `restaurant`],
    children: [{
      question: '是哪一餐？',
      options: [
        { name: '早餐', value: ['breakfast', '早餐', 'breakfastideas', 'breakfasttime', 'breakfastlover'] },
        { name: '早午餐', value: ['Brunch', '早午餐', 'brunchtime', 'brunching'] },
        { name: '午餐', value: ['lunch', '午餐', 'ランチ', 'lunchtime'] },
        { name: '晚餐', value: ['dinner', '晚餐'] },
        { name: '宵夜', value: ['宵夜', '夜食'] },
      ]
    }, {
      question: '是哪種食物？',
      options: [
        {
          emoji: '🍜', name: '拉麵', value: ['🍜', 'ramen', '拉麵', '拉麺', 'noodles', 'ラーメン', 'ramennoodles', 'soup'],
          children: [{
            question: '拉麵相關 🍜',
            options: [
              { name: '二郎', value: ['二郎'] },
              { name: '泡系', value: ['泡系'] },
              { name: '沾醬', value: ['沾醬', 'つけめん'] },
              { name: '味噌', value: ['味噌', 'みそラーメン'] },
              { name: '醬油', value: ['醬油', '醤油', '醤油ラーメン'] },
              { emoji: '🏠', name: '家系', value: ['家系'] },
              { emoji: '🧂', name: '鹽味', value: ['鹽味', '塩ラーメン'] },
              { emoji: '🐷', name: '豚骨', value: ['豚骨', '豚骨ラーメン'] },
              { emoji: '🐟', name: '魚介', value: ['魚介', '魚介ラーメン'] },
              { emoji: '🐟', name: '煮干', value: ['煮干', '煮干ラーメン'] },
              { emoji: '🐔', name: '雞白湯', value: ['雞白湯', '鶏白湯', '鶏白湯ラーメン'] },
            ]
          }]
        },
        { emoji: '🍲', name: '火鍋', value: ['火鍋', 'hotpot', 'hotpot🍲'] },
        { emoji: '🍣', name: '壽司', value: ['sushi', '壽司'] },
        { emoji: '🥞', name: '鬆餅', value: ['Pancake', '蓬蓬鬆餅', '鬆餅', 'パンケーキ', 'Pancakes', 'TeamPancake', 'PancakeDay'] },
        { emoji: '🍕', name: '披薩', value: ['pizza', 'pizzagram', 'pizzeria'] },
        { emoji: '🍔', name: '漢堡', value: ['burger', '漢堡', '美式餐廳', 'hamburger', 'burgers'] },
        { emoji: '🍟', name: '薯條', value: ['fries', 'frenchfries', '炸物', '薯條'] },
        { emoji: '🍦', name: '冰淇淋', value: ['ice', '冰淇淋', '甜'] },
        { emoji: '🥗', name: '沙拉', value: ['salad', 'salads', '蔬食', '健康'] },
        // { emoji: '🍫', name: '巧克力', value: ['chocolate'] },
        // { emoji: '🍬', name: '糖果', value: ['candy'] },
        // { emoji: '🥪', name: '三明治', value: ['sandwich'] },
        // { emoji: '🍪', name: '餅乾', value: ['cookie'] },
        // { emoji: '🍩', name: '甜甜圈', value: ['doughnut'] },
        // { emoji: '🧁', name: '蛋糕', value: ['cake'] },
        // { emoji: '🍿', name: '爆米花', value: ['popcorn'] },
      ]
    }, {
      question: '食材',
      options: [
        { name: '干貝', value: ['干貝'] },
        { name: '叉燒', value: ['叉燒', 'チャーシュー'] },
        { emoji: '🧅', name: '洋蔥', value: ['洋蔥'] },
        { emoji: '🍙', name: '海苔', value: ['海苔', 'のり'] },
        { emoji: '🥚', name: '溏心蛋', value: ['味玉'] },
        { emoji: '🥚', name: '生蛋', value: ['月見'] },
        { emoji: '🥚', name: '溫泉蛋', value: ['温泉卵'] },
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
        { emoji: '🍵', name: '茶', value: ['tea', 'greentea', 'teadrink', '茶', '純茶', '茶飲'] },
        { emoji: '🍸', name: '雞尾酒', value: ['cocktail', '調酒'] },]
    }]
  }, {
    emoji: '🦭', name: '動物', value: ['animal', 'animals', 'animalphotography'],
    children: [{
      question: '是什麼動物？',
      options: [
        { emoji: '🐈', name: '貓咪', value: ['catmeow', 'catlove', 'cats', 'cat', 'meow', 'cutecat', 'kitty', 'catlover', 'cutecat', '貓', '貓咪日常'] },
        { emoji: '🐶', name: '狗勾', value: ['dogphotography', 'dogs', 'doglife', 'doglove', 'dog', 'happydog', 'cutedog', 'doggo', 'happycat', '狗'] },
        { emoji: '🦘', name: '袋鼠', value: ['kangaroo', 'kangarooisland', 'kangaroos'] },
        { emoji: '🐨', name: '無尾熊', value: ['koala', 'babykoala'] },
        // { emoji: '🦁', name: '獅子', value: ['lion'] },
        // { emoji: '🐘', name: '大象', value: ['elephant'] },
        // { emoji: '🐯', name: '老虎', value: ['tiger'] },
        // { emoji: '🐼', name: '熊貓', value: ['panda'] },
        // { emoji: '🐵', name: '猴子', value: ['monkey'] },
        // { emoji: '🐮', name: '牛', value: ['cow'] },
        // { emoji: '🐷', name: '豬', value: ['pig'] },
        // { emoji: '🐸', name: '青蛙', value: ['frog'] },
        // { emoji: '🐔', name: '雞', value: ['chicken'] },
        // { emoji: '🐧', name: '企鵝', value: ['penguin'] },
        // { emoji: '🐦', name: '鳥', value: ['bird'] },
        // { emoji: '🦆', name: '鴨子', value: ['duck'] },
        // { emoji: '🐺', name: '狼', value: ['wolf'] },
        // { emoji: '🐝', name: '蜜蜂', value: ['bee'] },
        // { emoji: '🐛', name: '蟲', value: ['bug'] },
        // { emoji: '🐌', name: '蝸牛', value: ['snail'] },
      ]
    },
    {
      question: '拍攝地點是？',
      options: [
        { emoji: '🎟', name: '動物園', value: ['zoo', 'zooanimal', 'zooanimals', 'zootography', '動物園'] },
      ]
    }]
  },
    // { emoji: '🤳', name: '自拍', value: 'selfie' },
    // { emoji: '🌅', name: '風景', value: 'landscape' },
    // { emoji: '🏢', name: '建築', value: 'architecture' },
  ],
}]