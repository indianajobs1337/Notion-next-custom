import { Moon, Sun } from '@/components/HeroIcons'
import { useGlobal } from '@/lib/global'
import { saveDarkModeToCookies } from '@/themes/theme'
import { Switch } from '@headlessui/react'
import { useImperativeHandle } from 'react'

/**
 * 深色模式按钮
 */
const DarkModeButton = props => {
  const { cRef, className } = props
  const { isDarkMode, updateDarkMode } = useGlobal(true)

  /**
   * 对外暴露方法
   */
  useImperativeHandle(cRef, () => {
    return {
      handleChangeDarkMode: () => {
        handleChangeDarkMode()
      }
    }
  })

  // 用户手动设置主题
  const handleChangeDarkMode = () => {
    const newStatus = !isDarkMode
    saveDarkModeToCookies(newStatus)
    updateDarkMode(newStatus)
    const htmlElement = document.getElementsByTagName('html')[0]
    htmlElement.classList?.remove(newStatus ? 'light' : 'dark')
    htmlElement.classList?.add(newStatus ? 'dark' : 'light')
  }

  return (
    <>
      <Moon />
      <div>
        <Switch
          checked={isDarkMode}
          onChange={() => {
            handleChangeDarkMode()
          }}
          className={`${
            isDarkMode ? 'bg-[#18171d] border-[rgb(55_65_81)]' : ' bg-white'
          } relative inline-flex h-5 w-10 items-center rounded-full border-[1px]`}
        >
          <span
            className={`${
              isDarkMode
                ? 'translate-x-1 bg-white'
                : 'translate-x-6 bg-[#e5e7eb] border-[]'
            } inline-block h-3 w-3 transform rounded-full  transition`}
          />
        </Switch>
      </div>
      <Sun />
    </>
  )
}
export default DarkModeButton
