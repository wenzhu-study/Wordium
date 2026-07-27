import { momentsCopy } from './content/moments.js'
import { emoCopy } from './content/emo.js'
import { abstractCopy } from './content/abstract.js'
import { kfcCopy } from './content/kfc.js'
import { loveCopy } from './content/love.js'
import { workCopy } from './content/work.js'
import { literaryCopy } from './content/literary.js'

export const categories = [
  {
    id: 'all',
    name: '全部',
    icon: 'layout-grid',
    color: '#f2f0eb',
    description: '从日常、情绪到荒诞与文学，收集不同心境下真正值得复制的表达。'
  },
  {
    id: 'moments',
    name: '朋友圈',
    icon: 'aperture',
    color: '#84d5ca',
    description: '轻松、鲜活、有排版感的生活碎片，允许颜文字、符号、停顿和一点小古怪。'
  },
  {
    id: 'emo',
    name: 'EMO',
    icon: 'cloud-rain',
    color: '#8eb7e8',
    description: '深情、克制、细腻；写失去、错过、沉默和无法重来的余痛，让情绪慢慢落下来。'
  },
  {
    id: 'abstract',
    name: '抽象',
    icon: 'waves',
    color: '#c5a5f4',
    description: '认真地胡说八道，让逻辑突然拐弯，用荒诞、反差和意外制造真正的笑点。'
  },
  {
    id: 'kfc',
    name: '疯狂星期四',
    icon: 'drumstick',
    color: '#ff8b7b',
    description: '用长篇铺垫、跨类型叙事和出其不意的结尾，把星期四写成一场无法预测的事故。'
  },
  {
    id: 'love',
    name: '恋爱',
    icon: 'heart',
    color: '#f39cc2',
    description: '覆盖酸甜苦辣：心动、甜蜜、争吵、异地、失落、遗憾、和好与终于学会相爱。'
  },
  {
    id: 'work',
    name: '职场',
    icon: 'briefcase-business',
    color: '#edc96f',
    description: '不想上班、不想社交，也看不懂老板；用抽象幽默消解会议、加班和人际关系的枯燥。'
  },
  {
    id: 'literary',
    name: '文学',
    icon: 'feather',
    color: '#a9cf88',
    description: '有文化感但不堆辞藻，以山水、时序、人间和思考写出耐读、含蓄而有余韵的句子。'
  }
]

const collections = [
  ['moments', momentsCopy],
  ['emo', emoCopy],
  ['abstract', abstractCopy],
  ['kfc', kfcCopy],
  ['love', loveCopy],
  ['work', workCopy],
  ['literary', literaryCopy]
]

export const copyItems = collections.flatMap(([category, items], categoryIndex) =>
  items.map((item, index) => ({
    id: `${category}-${String(index + 1).padStart(2, '0')}`,
    category,
    copies: item.copies ?? 1600 + ((index * 1379 + categoryIndex * 911) % 10400),
    featured: index < 2,
    ...item
  }))
)
