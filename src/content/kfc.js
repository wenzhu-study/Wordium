import { kfcEmotionCopy } from './kfc/emotion.js'
import { kfcOfficialCopy } from './kfc/official.js'
import { kfcFictionCopy } from './kfc/fiction.js'
import { kfcEverydayCopy } from './kfc/everyday.js'

export const kfcCopy = [
  ...kfcEmotionCopy,
  ...kfcOfficialCopy,
  ...kfcFictionCopy,
  ...kfcEverydayCopy
]
