import BLOG from 'blog.config'
import dynamic from 'next/dynamic'

// import TwikooCommentCounter from '@/components/TwikooCommentCounter'
// import { DebugPanel } from '@/components/DebugPanel'
// import { ThemeSwitch } from '@/components/ThemeSwitch'
// import { Fireworks } from '@/components/Fireworks'
// import { Nest } from '@/components/Nest'
// import { FlutteringRibbon } from '@/components/FlutteringRibbon'
// import { Ribbon } from '@/components/Ribbon'
// import { Sakura } from '@/components/Sakura'
// import { StarrySky } from '@/components/StarrySky'

const TwikooCommentCounter = dynamic(
  () => import('@/components/TwikooCommentCounter'),
  { ssr: false }
)
const DebugPanel = dynamic(() => import('@/components/DebugPanel'), {
  ssr: false
})
const ThemeSwitch = dynamic(() => import('@/components/ThemeSwitch'), {
  ssr: false
})
const Fireworks = dynamic(() => import('@/components/Fireworks'), {
  ssr: false
})
const Nest = dynamic(() => import('@/components/Nest'), { ssr: false })
const FlutteringRibbon = dynamic(
  () => import('@/components/FlutteringRibbon'),
  { ssr: false }
)
const Ribbon = dynamic(() => import('@/components/Ribbon'), { ssr: false })
const Sakura = dynamic(() => import('@/components/Sakura'), { ssr: false })
const StarrySky = dynamic(() => import('@/components/StarrySky'), {
  ssr: false
})
const MusicPlayer = dynamic(() => import('@/components/Player'), { ssr: false })
const VConsole = dynamic(() => import('@/components/VConsole'), { ssr: false })
const CustomContextMenu = dynamic(
  () => import('@/components/CustomContextMenu'),
  { ssr: false }
)

/**
 * 各种第三方组件
 * @param {*} props
 * @returns
 */
const ExternalPlugin = props => {
  return (
    <>
      {JSON.parse(BLOG.THEME_SWITCH) && <ThemeSwitch />}
      {JSON.parse(BLOG.DEBUG) && <DebugPanel />}
      {JSON.parse(BLOG.FIREWORKS) && <Fireworks />}
      {JSON.parse(BLOG.SAKURA) && <Sakura />}
      {JSON.parse(BLOG.STARRY_SKY) && <StarrySky />}
      {JSON.parse(BLOG.MUSIC_PLAYER) && <MusicPlayer />}
      {JSON.parse(BLOG.NEST) && <Nest />}
      {JSON.parse(BLOG.FLUTTERINGRIBBON) && <FlutteringRibbon />}
      {JSON.parse(BLOG.COMMENT_TWIKOO_COUNT_ENABLE) && (
        <TwikooCommentCounter {...props} />
      )}
      {JSON.parse(BLOG.RIBBON) && <Ribbon />}
      {JSON.parse(BLOG.CUSTOM_RIGHT_CLICK_CONTEXT_MENU) && (
        <CustomContextMenu {...props} />
      )}
      <VConsole />
    </>
  )
}

export default ExternalPlugin
