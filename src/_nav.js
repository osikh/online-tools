export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Hash',
  },
  {
    component: 'CNavGroup',
    name: 'SHA1',
    to: '/sha1',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'SHA1',
        to: '/sha1/sha1',
      },
      {
        component: 'CNavItem',
        name: 'SHA1 File',
        external: true,
        href: '#',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
    ],
  },
]
