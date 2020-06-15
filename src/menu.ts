import routes from './routes'

export const menuItems = [
  {
    name: 'Home',
    url: routes.home,
  },
  {
    name: 'Shop',
    subMenu: [
      {
        name: 'Shop Full Width',
        url: '/shop-full-width',
      },
      {
        name: 'Shop Sidebar',
        url: '/shop-sidebar',
      },
    ],
  },
  {
    name: 'Products',
    subMenu: [
      {
        name: 'Teapot',
        url: '/product/abc49425-8762-4c08-9103-c2f1db6546fd',
      },
      {
        name: 'Mega 2 Seater Sofa',
        url: '/product/384e7b73-b656-42bc-8a0c-d7081844ae21',
      },
      {
        name: 'Nippers',
        url: '/product/b44bbc5f-b1b0-4e04-b207-3812597b726e',
      },
      {
        name: 'Sled Mini Sideboard',
        url: '/product/b44bbc5f-b1b0-4e04-b207-3812597b72',
      },
      {
        name: 'Mega Table Lamp',
        url: '/product/c9089876-b68c-455a-9b0c-c9dc3bca5877',
      },
    ],
  },
  {
    name: 'Contact',
    url: routes.contact,
  },
]
