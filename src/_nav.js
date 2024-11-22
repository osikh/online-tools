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
    name: 'Authentication',
  },
  {
    component: 'CNavItem',
    name: 'Password Generator',
    to: '/password-generator',
    icon: 'cil-lock-locked'
  },
  {
    component: 'CNavItem',
    name: 'Authenticator',
    to: '/authenticator',
    icon: 'cil-shield-alt'
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
  {
    component: 'CNavTitle',
    name: 'Fake Data',
  },
  {
    component: 'CNavItem',
    name: 'Fake Person',
    to: '/fake-person',
    icon: 'cil-shield-alt'
  },
  {
    component: 'CNavGroup',
    name: 'Fake Person',
    to: '/fake-person',
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
