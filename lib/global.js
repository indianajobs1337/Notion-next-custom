import BLOG from '@/blog.config'
import { THEMES } from '@/themes/theme'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { createContext, useContext, useEffect, useState } from 'react'
import { generateLocaleDict } from './lang'
import { getQueryVariable } from './utils'

const GlobalContext = createContext()

/**
 * 全局变量Provider，包括语言本地化、样式主题、搜索词
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function GlobalContextProvider({ children }) {
  const router = useRouter()
  const [locale, updateLocale] = useState(generateLocaleDict(BLOG.LANG)) // 默认语言
  const [theme, setTheme] = useState(BLOG.THEME) // 默认博客主题
  const [isDarkMode, updateDarkMode] = useState(BLOG.APPEARANCE === 'dark') // 默认深色模式
  const [onLoading, setOnLoading] = useState(false) // 抓取文章数据
  //   const [onReading, setOnReading] = useState(false) // 网页资源加载

  useEffect(() => {
    const handleStart = url => {
      NProgress.start()
      const { theme } = router.query
      if (theme && !url.includes(`theme=${theme}`)) {
        const newUrl = `${url}${url.includes('?') ? '&' : '?'}theme=${theme}`
        router.push(newUrl)
      }
      setOnLoading(true)
    }
    const handleStop = () => {
      NProgress.done()
      setOnLoading(false)
    }
    const queryTheme = getQueryVariable('theme') || BLOG.THEME
    setTheme(queryTheme)
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeError', handleStop)
    router.events.on('routeChangeComplete', handleStop)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  // 切换主题
  function switchTheme() {
    const currentIndex = THEMES.indexOf(theme)
    const newIndex = currentIndex < THEMES.length - 1 ? currentIndex + 1 : 0
    const newTheme = THEMES[newIndex]
    const query = { ...router.query, theme: newTheme }
    router.push({ pathname: router.pathname, query })
    return newTheme
  }

  return (
    <GlobalContext.Provider
      value={{
        onLoading,
        setOnLoading,
        locale,
        updateLocale,
        isDarkMode,
        updateDarkMode,
        theme,
        setTheme,
        switchTheme
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)
