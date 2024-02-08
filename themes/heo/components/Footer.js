import SocialButton from './SocialButton'
// import DarkModeButton from '@/components/DarkModeButton'

const Footer = () => {
  return (
    <footer className="relative z-10 flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm">
      {/* 颜色过度区 */}
      <div
        id="color-transition"
        className="h-32 bg-gradient-to-b from-[#f7f9fe] to-white  dark:bg-[#1a191d] dark:from-inherit dark:to-inherit"
      ></div>

      {/* 社交按钮 */}
      <div className="w-full h-24">
        <SocialButton />
      </div>
    </footer>
  )
}

export default Footer
