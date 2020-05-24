import i18n from '@/lang'
const { messages, locale } = i18n
const lang = messages[locale].steps as any

const steps = [
  {
    element: '#hamburger-container',
    popover: {
      title: 'Hamburger',
      description: lang.Hamburger,
      position: 'bottom'
    }
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: 'Breadcrumb',
      description: lang.Breadcrumb,
      position: 'bottom'
    }
  },
  {
    element: '#header-search',
    popover: {
      title: 'Page Search',
      description: lang.Search,
      position: 'left'
    }
  },
  {
    element: '#screenfull',
    popover: {
      title: 'Screenfull',
      description: lang.Screenfull,
      position: 'left'
    }
  },
  {
    element: '#size-select',
    popover: {
      title: 'Switch Size',
      description: lang.Size,
      position: 'left'
    }
  },
  {
    element: '#tags-view-container',
    popover: {
      title: 'Tags view',
      description: lang.Tags,
      position: 'bottom'
    },
    padding: 0
  }
]

export default steps
