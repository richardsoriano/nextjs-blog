import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

const DUMMY_DATA = [
  {
    slug: '1getting-started-nextjs',
    title: '1 Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    except: '1 NextJS kicks butt',
    date: '2021-01-01',
  },
  {
    slug: '2getting-started-nextjs',
    title: '2 Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    except: '2 NextJS kicks butt',
    date: '2022-02-12',
  },
  {
    slug: '3getting-started-nextjs',
    title: '3 Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    except: '3 NextJS kicks butt',
    date: '2023-03-13',
  },
  {
    slug: '4getting-started-nextjs',
    title: '4 Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    except: '4 NextJS kicks butt',
    date: '2024-04-14',
  },
]

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </Fragment>
  )
}
