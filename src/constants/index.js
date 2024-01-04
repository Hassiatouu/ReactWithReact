import { i1,i2 } from '../assets/images'


export const navigation = [
  { name: 'Learn', href: 'Learn' },
  { name: 'Reference', href: 'Reference' },
  { name: 'Community', href: 'Community' },
  { name: 'Blog', href: 'Blog' },
]


export const btn = [
  { text: 'Learn React',
    bg: 'bg-btn',
 },
  { text: 'API Reference',
    bg: 'bg-tranparent',
  },

]

export const divv = [
  {
    text1: 'Create user interfaces from components',
    text2: 'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.', 
    text3 :'Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.',
    bg: 'bg-main', 
    img: i1,
  },

  { 
    text1: 'Write components with code and markup',
    text2: 'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
    text3: 'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.',
    bg: 'bg-head',
    img: i2,
  },

]