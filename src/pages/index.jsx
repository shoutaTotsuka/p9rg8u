import Head from 'next/head'
import Image from 'next/image'
// import Link from 'next/link'
import Layout, { siteTitle } from '~/components/layout'
// import utilStyles from '~/styles/utils.module.css'
// import { getSortedPostsData } from '~/lib/posts'
// import fetchContents from '~/lib/contentful'
// import Date from '~/components/date'


export const getStaticProps = async context => {
  // const allPostsData = getSortedPostsData()
  // const articlesData = await fetchContents()
  const allPostsData = []
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <>
    {/* <img
      src='/images/profile.gif'
      width={'100px'}
      height={'100px'}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    /> */}
    </>
  )
}
