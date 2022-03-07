import AllPosts from '../../components/posts/all-posts'

const DUMMY_DATA = [
  {
    slug: '1getting-started-nextjs',
    title: '1 Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: '1 NextJS kicks butt',
    date: '2021-01-01',
  },
  {
    slug: '2getting-started-nextjs',
    title: '2 Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: '2 NextJS kicks butt',
    date: '2022-02-12',
  },
  {
    slug: '3getting-started-nextjs',
    title: '3 Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: '3 NextJS kicks butt',
    date: '2023-03-13',
  },
  {
    slug: '4getting-started-nextjs',
    title: '4 Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: '4 NextJS kicks butt',
    date: '2024-04-14',
  },
]
export default function AllPostsPage(props) {
  return <AllPosts posts={DUMMY_DATA} />
}
