import './style.css'
import {
  Aperture,
  BriefcaseBusiness,
  Check,
  CloudRain,
  Copy,
  Drumstick,
  Feather,
  Heart,
  House,
  LayoutGrid,
  Quote,
  Search,
  SearchX,
  Shuffle,
  Sparkles,
  Sun,
  Moon,
  TrendingUp,
  Waves
} from 'lucide'
import { createIcons } from 'lucide'
import { categories, copyItems } from './content.js'

const iconSet = {
  Aperture,
  BriefcaseBusiness,
  Check,
  CloudRain,
  Copy,
  Drumstick,
  Feather,
  Heart,
  House,
  LayoutGrid,
  Quote,
  Search,
  SearchX,
  Shuffle,
  Sparkles,
  Sun,
  Moon,
  TrendingUp,
  Waves
}

const categoryMap = new Map(categories.map((category) => [category.id, category]))
const favoriteStoreKey = 'wordium-favorites'
const themeStoreKey = 'wordium-theme'
const validItemIds = new Set(copyItems.map((item) => item.id))
const storedFavorites = JSON.parse(localStorage.getItem(favoriteStoreKey) || '[]')

const state = {
  category: 'all',
  view: 'all',
  query: '',
  favorites: new Set(storedFavorites.map(String).filter((id) => validItemIds.has(id)))
}

const elements = {
  categoryScroll: document.querySelector('#category-scroll'),
  copyGrid: document.querySelector('#copy-grid'),
  searchInput: document.querySelector('#search-input'),
  allCount: document.querySelector('#all-count'),
  favoriteCount: document.querySelector('#favorite-count'),
  resultCount: document.querySelector('#result-count'),
  feedTitle: document.querySelector('#feed-title'),
  feedKicker: document.querySelector('#feed-kicker'),
  feedDescription: document.querySelector('#feed-description'),
  emptyState: document.querySelector('#empty-state'),
  trendingTags: document.querySelector('#trending-tags'),
  toast: document.querySelector('#toast')
}

let toastTimer

function refreshIcons() {
  createIcons({ icons: iconSet, attrs: { 'stroke-width': 1.7 } })
}

function formatCount(value) {
  if (value >= 10000) return `${(value / 10000).toFixed(1)}w`
  if (value >= 1000) return `${(value / 1000).toFixed(1)}k`
  return String(value)
}

function renderCategories() {
  elements.categoryScroll.innerHTML = categories.map((category) => {
    const count = category.id === 'all'
      ? copyItems.length
      : copyItems.filter((item) => item.category === category.id).length

    return `
      <button
        class="category-chip ${state.category === category.id ? 'active' : ''}"
        type="button"
        data-category="${category.id}"
        style="--category-color: ${category.color}"
      >
        <i data-lucide="${category.icon}" aria-hidden="true"></i>
        <span>${category.name}</span>
        <b>${count}</b>
      </button>
    `
  }).join('')
}

function renderTrendingTags() {
  const counts = copyItems.reduce((map, item) => map.set(item.tag, (map.get(item.tag) || 0) + item.copies), new Map())
  const tags = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 7)
  elements.trendingTags.innerHTML = tags
    .map(([tag]) => `<button class="trending-tag" type="button" data-tag="${tag}"># ${tag}</button>`)
    .join('')
}

function getFilteredItems() {
  const normalizedQuery = state.query.trim().toLocaleLowerCase('zh-CN')

  return copyItems.filter((item) => {
    const category = categoryMap.get(item.category)
    const matchesCategory = state.category === 'all' || item.category === state.category
    const matchesView = state.view !== 'favorites' || state.favorites.has(item.id)
    const matchesQuery = !normalizedQuery || `${item.text} ${item.tag} ${category.name}`.toLocaleLowerCase('zh-CN').includes(normalizedQuery)
    return matchesCategory && matchesView && matchesQuery
  })
}

function renderCards() {
  const items = getFilteredItems()
  const activeCategory = categoryMap.get(state.category)

  elements.resultCount.textContent = items.length
  elements.favoriteCount.textContent = state.favorites.size
  elements.allCount.textContent = copyItems.length
  elements.emptyState.hidden = items.length > 0
  elements.copyGrid.hidden = items.length === 0

  if (state.view === 'favorites') {
    elements.feedTitle.textContent = '我的收藏'
    elements.feedKicker.textContent = 'SAVED WORDS'
    elements.feedDescription.textContent = '那些被你留下的句子，会在需要表达的时候重新出现。'
  } else if (state.query) {
    elements.feedTitle.textContent = `“${state.query}”的结果`
    elements.feedKicker.textContent = 'SEARCH RESULTS'
    elements.feedDescription.textContent = `正在全部分类中寻找与“${state.query}”有关的表达。`
  } else {
    elements.feedTitle.textContent = state.category === 'all' ? '全部灵感' : activeCategory.name
    elements.feedKicker.textContent = state.category === 'all' ? 'CURATED FOR YOU' : 'MOOD COLLECTION'
    elements.feedDescription.textContent = activeCategory.description
  }

  elements.copyGrid.innerHTML = items.map((item) => {
    const category = categoryMap.get(item.category)
    const isFavorite = state.favorites.has(item.id)
    const isLong = item.text.length > 58
    const isFormatted = item.category === 'moments'
    const textMarkup = isFormatted
      ? item.text.split('\n').map((line, index) => `<span class="copy-line copy-line--${index === 0 ? 'lead' : 'support'}">${line}</span>`).join('')
      : item.text

    return `
      <article
        class="copy-card category-${item.category} ${isLong ? 'long' : ''} ${isFormatted ? 'formatted' : ''}"
        data-copy-id="${item.id}"
        tabindex="0"
        role="button"
        aria-label="复制文案：${item.text}"
        style="--category-color: ${category.color}"
      >
        <div class="card-top">
          <span class="card-category"><span></span>${category.name}</span>
          <button
            class="favorite-button ${isFavorite ? 'active' : ''}"
            type="button"
            data-favorite-id="${item.id}"
            data-tooltip="${isFavorite ? '取消收藏' : '收藏'}"
            aria-label="${isFavorite ? '取消收藏' : '收藏'}"
          ><i data-lucide="heart" aria-hidden="true"></i></button>
        </div>
        <p class="card-text">${textMarkup}</p>
        <div class="card-bottom">
          <span class="card-tag"># ${item.tag}</span>
          <div class="card-actions">
            <span class="copy-count"><i data-lucide="trending-up" aria-hidden="true"></i>${formatCount(item.copies)}</span>
            <button class="copy-button" type="button" data-copy-button="${item.id}" data-tooltip="复制" aria-label="复制文案">
              <i data-lucide="copy" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </article>
    `
  }).join('')

  refreshIcons()
}

function renderViewControls() {
  document.querySelectorAll('[data-view]').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === state.view)
  })
  document.querySelectorAll('[data-mobile-view]').forEach((button) => {
    button.classList.toggle('active', button.dataset.mobileView === state.view)
  })
}

function render() {
  renderCategories()
  renderCards()
  renderViewControls()
  refreshIcons()
}

function showToast(message = '已复制到剪贴板') {
  elements.toast.querySelector('span:last-child').textContent = message
  elements.toast.classList.add('show')
  window.clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => elements.toast.classList.remove('show'), 2200)
}

async function copyText(text, message) {
  let copied = false
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      copied = true
    }
  } catch {
    copied = false
  }

  if (!copied) {
    const handleCopy = (event) => {
      event.clipboardData.setData('text/plain', text)
      event.preventDefault()
    }
    document.addEventListener('copy', handleCopy)
    copied = document.execCommand('copy')
    document.removeEventListener('copy', handleCopy)
  }

  showToast(copied ? message : '复制失败，请重试')
}

function copyById(id) {
  const item = copyItems.find((entry) => entry.id === id)
  if (item) copyText(item.text)
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id)
    showToast('已从收藏中移除')
  } else {
    state.favorites.add(id)
    showToast('已收藏这句话')
  }
  localStorage.setItem(favoriteStoreKey, JSON.stringify([...state.favorites]))
  renderCards()
}

function setView(view) {
  state.view = view
  if (view === 'favorites') state.category = 'all'
  render()
  document.querySelector('.feed').scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function selectRandom() {
  const pool = getFilteredItems().length ? getFilteredItems() : copyItems
  const item = pool[Math.floor(Math.random() * pool.length)]
  state.category = item.category
  state.view = 'all'
  state.query = ''
  elements.searchInput.value = ''
  render()
  window.setTimeout(() => {
    const card = document.querySelector(`[data-copy-id="${item.id}"]`)
    card?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    card?.classList.add('is-highlighted')
    window.setTimeout(() => card?.classList.remove('is-highlighted'), 1000)
  }, 30)
  copyText(item.text, '随机灵感已复制')
}

document.addEventListener('click', (event) => {
  const categoryButton = event.target.closest('[data-category]')
  if (categoryButton) {
    state.category = categoryButton.dataset.category
    state.view = 'all'
    render()
    return
  }

  const favoriteButton = event.target.closest('[data-favorite-id]')
  if (favoriteButton) {
    event.stopPropagation()
    toggleFavorite(favoriteButton.dataset.favoriteId)
    return
  }

  const copyButton = event.target.closest('[data-copy-button]')
  if (copyButton) {
    event.stopPropagation()
    copyById(copyButton.dataset.copyButton)
    return
  }

  const card = event.target.closest('[data-copy-id]')
  if (card) {
    copyById(card.dataset.copyId)
    return
  }

  const viewButton = event.target.closest('[data-view], [data-mobile-view]')
  if (viewButton) {
    setView(viewButton.dataset.view || viewButton.dataset.mobileView)
    return
  }

  const tagButton = event.target.closest('[data-tag]')
  if (tagButton) {
    state.query = tagButton.dataset.tag
    state.category = 'all'
    state.view = 'all'
    elements.searchInput.value = state.query
    render()
    return
  }

  if (event.target.closest('.random-button, [data-mobile-random]')) selectRandom()
})

document.addEventListener('keydown', (event) => {
  const card = event.target.closest('[data-copy-id]')
  if (card && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault()
    copyById(card.dataset.copyId)
  }

  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault()
    document.querySelector('.search-field').classList.add('search-open')
    elements.searchInput.focus()
  }

  if (event.key === 'Escape' && document.activeElement === elements.searchInput) {
    elements.searchInput.blur()
    document.querySelector('.search-field').classList.remove('search-open')
  }
})

elements.searchInput.addEventListener('input', (event) => {
  state.query = event.target.value
  state.category = 'all'
  state.view = 'all'
  render()
})

document.querySelector('.search-field').addEventListener('click', () => {
  document.querySelector('.search-field').classList.add('search-open')
})

document.querySelector('.theme-button').addEventListener('click', () => {
  const isLight = document.documentElement.dataset.theme === 'light'
  const nextTheme = isLight ? 'dark' : 'light'
  document.documentElement.dataset.theme = nextTheme
  localStorage.setItem(themeStoreKey, nextTheme)
  document.querySelector('.theme-button').innerHTML = `<i data-lucide="${isLight ? 'sun' : 'moon'}" aria-hidden="true"></i>`
  refreshIcons()
})

document.querySelector('#clear-filter').addEventListener('click', () => {
  state.category = 'all'
  state.view = 'all'
  state.query = ''
  elements.searchInput.value = ''
  render()
})

const savedTheme = localStorage.getItem(themeStoreKey)
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme
  if (savedTheme === 'light') document.querySelector('.theme-button').innerHTML = '<i data-lucide="moon" aria-hidden="true"></i>'
}

renderTrendingTags()
render()
