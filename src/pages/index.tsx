import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '~/components/layout'
import utilStyles from '~/styles/utils.module.css'
import styled from 'styled-components'
import { getSortedPostsData } from '~/lib/posts'
import Date from '~/components/date'

const Test = styled.div`
  background: red;
`
// export async function getServerSideProps(context) {
export const getStaticProps: GetStaticProps = async context => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

type Props = {
  allPostsData: {
    id: string
    title: string
    date: string
  }[]
}
export default function Home({ allPostsData }: Props) {
// export default Home = ({ allPostsData }: Props) => {
  console.log(process.env.TEST ?? 'test')
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Test>
        testtesttest
      </Test>
      <section className={utilStyles.headingMd}>
          <Link href="/posts/first-post">
            <a>[Your Self Introduction]</a>
          </Link>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/[id]`} as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {/* <Date dateString={date} /> */}
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
