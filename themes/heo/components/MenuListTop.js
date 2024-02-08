import { MenuItemDrop } from './MenuItemDrop'

export const MenuListTop = props => {
  // Ссылки в хедере.
  /*
    Чтобы изменить url ссылки - меняем значения ключей to и slug
    Имя ссылки - меняем значения ключей name и title
    Остальное не важно
  */
  const links = [
    {
      to: '/',
      slug: '/',
      name: 'Home',
      title: 'Home',
      icon: 'fas fa-home',
      id: '88b55837-84a9-44c8-8bee-0e6709724308',
      date: { start_date: '2023-03-23' },
      type: 'Menu',
      summary: '跳转到首页’/’ 的菜单',
      status: 'Published',
      publishDate: 1679529600000,
      publishTime: 'Mar 23, 2023',
      lastEditedTime: 'Jul 24, 2023',
      fullWidth: false,
      pageIcon: '',
      pageCover: '',
      pageCoverThumbnail: '',
      tagItems: [],
      password: '',
      show: true
    },
    {
      to: '/links',
      slug: '/links',
      title: 'Links',
      name: 'Links',
      icon: 'fas fa-link',
      id: '201507c2-2b50-4168-ad95-70a5fdbe2f14',
      date: {
        start_date: '2023-03-23'
      },
      type: 'Menu',
      summary: '跳转到’/links’页面的菜单',
      status: 'Published',
      publishDate: 1679529600000,
      publishTime: 'Mar 23, 2023',
      lastEditedTime: 'Jul 24, 2023',
      fullWidth: false,
      pageIcon: '',
      pageCover: '',
      pageCoverThumbnail: '',
      tagItems: [],
      password: '',
      show: true
    },
    {
      title: 'Sites',
      name: 'Sites',
      icon: 'fas fa-folder',
      id: '6bdc1665-ca55-4710-ad0f-6abad04716ae',
      date: {
        start_date: '2023-03-23'
      },
      type: 'Menu',
      summary: '菜单slug留空即可，用户展开子菜单',
      status: 'Published',
      publishDate: 1679529600000,
      publishTime: 'Mar 23, 2023',
      lastEditedTime: 'Jul 25, 2023',
      fullWidth: false,
      pageIcon: '',
      pageCover: '',
      pageCoverThumbnail: '',
      tagItems: [],
      to: {},
      password: '',
      show: true,
      subMenus: [
        {
          id: 'd0b21834-46c5-44a3-957c-75fce6001d0f',
          date: {
            start_date: '2023-03-23'
          },
          type: 'SubMenu',
          slug: 'https://blog.51sec.org',
          summary: 'SubMenu是子菜单，挂在上一个Menu中',
          title: 'Blog',
          status: 'Published',
          publishDate: 1679529600000,
          publishTime: 'Mar 23, 2023',
          lastEditedTime: 'Jul 25, 2023',
          fullWidth: false,
          pageIcon: '',
          pageCover: '',
          pageCoverThumbnail: '',
          tagItems: [],
          to: 'https://blog.51sec.org',
          name: 'Blog',
          password: '',
          show: true,
          target: '_blank'
        },
        {
          id: '4ac37746-c0c2-4e70-9c17-3ab5c242e4c8',
          date: {
            start_date: '2023-03-23'
          },
          type: 'SubMenu',
          slug: 'https://nav.51sec.org',
          title: 'Navigation',
          status: 'Published',
          publishDate: 1679529600000,
          publishTime: 'Mar 23, 2023',
          lastEditedTime: 'Jul 25, 2023',
          fullWidth: false,
          pageIcon: '',
          pageCover: '',
          pageCoverThumbnail: '',
          tagItems: [],
          to: 'https://nav.51sec.org',
          name: 'Navigation',
          password: '',
          show: true,
          target: '_blank'
        },
        {
          id: 'f17a70fe-e757-4e4b-9014-726e0503ffb2',
          date: {
            start_date: '2023-03-23'
          },
          type: 'SubMenu',
          slug: 'https://youtube.com/netsec',
          title: 'YouTube',
          status: 'Published',
          publishDate: 1679529600000,
          publishTime: 'Mar 23, 2023',
          lastEditedTime: 'Jul 25, 2023',
          fullWidth: false,
          pageIcon: '',
          pageCover: '',
          pageCoverThumbnail: '',
          tagItems: [],
          to: 'https://youtube.com/netsec',
          name: 'YouTube',
          password: '',
          show: true,
          target: '_blank'
        },
        {
          id: 'dacf907f-ecc6-45d6-bbcc-5066de49d64e',
          date: {
            start_date: '2023-03-23'
          },
          type: 'SubMenu',
          slug: 'https://sites.51sec.org',
          title: 'Sites',
          status: 'Published',
          publishDate: 1679529600000,
          publishTime: 'Mar 23, 2023',
          lastEditedTime: 'Jul 25, 2023',
          fullWidth: false,
          pageIcon: '',
          pageCover: '',
          pageCoverThumbnail: '',
          tagItems: [],
          to: 'https://sites.51sec.org',
          name: 'Sites',
          password: '',
          show: true,
          target: '_blank'
        },
        {
          id: 'f5c58dd8-220c-4a30-8a37-64dd0e982227',
          date: {
            start_date: '2023-03-23'
          },
          type: 'SubMenu',
          slug: 'https://itprosec.com',
          title: 'ITPROSEC',
          status: 'Published',
          publishDate: 1679529600000,
          publishTime: 'Mar 23, 2023',
          lastEditedTime: 'Jul 25, 2023',
          fullWidth: false,
          pageIcon: '',
          pageCover: '',
          pageCoverThumbnail: '',
          tagItems: [],
          to: 'https://itprosec.com',
          name: 'ITPROSEC',
          password: '',
          show: true,
          target: '_blank'
        }
      ]
    },
    {
      id: '9560538f-e8aa-4979-ba6e-f896b4be685a',
      icon: 'fas fa-info',
      date: {
        start_date: '2023-03-23'
      },
      type: 'Menu',
      slug: 'https://www.youtube.com/netsec',
      summary: '普通菜单 跳转到指定路径',
      title: 'About Me',
      status: 'Published',
      publishDate: 1679529600000,
      publishTime: 'Mar 23, 2023',
      lastEditedTime: 'Jul 25, 2023',
      fullWidth: false,
      pageIcon: '',
      pageCover: '',
      pageCoverThumbnail: '',
      tagItems: [],
      to: 'https://www.youtube.com/netsec',
      name: 'About Me',
      password: '',
      show: true,
      target: '_blank'
    },
    {
      id: 'd81ce488-c4ba-4924-8b3f-a22b087abf94',
      icon: 'fas fa-search',
      date: {
        start_date: '2021-07-02'
      },
      type: 'Menu',
      slug: '/search',
      tags: ['Text'],
      summary: '跳转到’/search’搜索页的菜单',
      title: 'Search',
      status: 'Published',
      publishDate: 1625184000000,
      publishTime: 'Jul 2, 2021',
      lastEditedTime: 'Jul 24, 2023',
      fullWidth: false,
      pageIcon: '🗒️',
      pageCover: '',
      pageCoverThumbnail: '',
      tagItems: [
        {
          name: 'Text',
          color: 'brown'
        }
      ],
      to: '/search',
      name: 'Search',
      password: '',
      show: true
    },
    {
      id: 'ea934ee5-8341-4a49-845f-cfb8f333f8fb',
      icon: 'fa-regular fa-comments',
      date: {
        start_date: '2020-07-01'
      },
      type: 'Menu',
      slug: '/message',
      summary:
        '更多帮助请访问手册 → https://tangly1024.com/article/notion-next-secondary-menu',
      title: 'Guestbook',
      status: 'Published',
      publishDate: 1593561600000,
      publishTime: 'Jul 1, 2020',
      lastEditedTime: 'Jul 25, 2023',
      fullWidth: false,
      pageIcon: '🗒️',
      pageCover: 'https://source.unsplash.com/random/720x480/?encryption',
      pageCoverThumbnail:
        'https://source.unsplash.com/random/720x480/?encryption',
      tagItems: [],
      to: '/message',
      name: 'Guestbook',
      password: '',
      show: true
    },
    {
      id: '7ac7ea58-4cbd-4fc8-8463-31c97b7a3b1e',
      icon: 'fas fa-archive',
      date: {
        start_date: '2020-07-01'
      },
      type: 'Menu',
      slug: '#',
      title: 'Others',
      status: 'Published',
      publishDate: 1593561600000,
      publishTime: 'Jul 1, 2020',
      lastEditedTime: 'Jul 25, 2023',
      fullWidth: false,
      pageIcon: '',
      pageCover: '',
      pageCoverThumbnail: '',
      tagItems: [],
      to: '#',
      name: 'Others',
      password: '',
      show: true,
      subMenus: [
        {
          id: '5c0bf0b4-6d8b-4660-8d82-770e364878d3',
          icon: 'fas fa-clock-rotate-left',
          date: {
            start_date: '2020-07-01'
          },
          type: 'SubMenu',
          slug: '/archive',
          title: 'Archives',
          status: 'Published',
          publishDate: 1593561600000,
          publishTime: 'Jul 1, 2020',
          lastEditedTime: 'Jul 25, 2023',
          fullWidth: false,
          pageIcon: '🗒️',
          pageCover: '',
          pageCoverThumbnail: '',
          tagItems: [],
          to: '/archive',
          name: 'Archives',
          password: '',
          show: true
        },
        {
          id: '83088825-d84c-4045-b4ec-6c9213363867',
          icon: 'fas fa-th',
          date: {
            start_date: '2020-07-01'
          },
          type: 'SubMenu',
          slug: '/category',
          title: 'Categories',
          status: 'Published',
          publishDate: 1593561600000,
          publishTime: 'Jul 1, 2020',
          lastEditedTime: 'Jul 25, 2023',
          fullWidth: false,
          pageIcon: '🗒️',
          pageCover: '',
          pageCoverThumbnail: '',
          tagItems: [],
          to: '/category',
          name: 'Categories',
          password: '',
          show: true
        },
        {
          id: '3fde6abb-9bb1-4924-8ac9-b79b458567f8',
          icon: 'fas fa-tag',
          date: {
            start_date: '2020-07-01'
          },
          type: 'SubMenu',
          slug: '/tag',
          title: 'Tags',
          status: 'Published',
          publishDate: 1593561600000,
          publishTime: 'Jul 1, 2020',
          lastEditedTime: 'Jul 25, 2023',
          fullWidth: false,
          pageIcon: '🗒️',
          pageCover: '',
          pageCoverThumbnail: '',
          tagItems: [],
          to: '/tag',
          name: 'Tags',
          password: '',
          show: true
        }
      ]
    }
  ]
  console.log(links)

  if (!links || links.length === 0) {
    return null
  }

  return (
    <>
      <nav
        id="nav-mobile"
        className="leading-8 justify-center font-light w-full flex"
      >
        {links?.map(
          link =>
            link && link.show && <MenuItemDrop key={link?.id} link={link} />
        )}
      </nav>
    </>
  )
}
