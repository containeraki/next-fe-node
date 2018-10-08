// This is the Link API
import Link from 'next/link';
import Header from './components/Header';
import Layout from './components/Layout';

const PostLink = (props) => (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )


const Index = () => (
    <Layout>

    <h1>News Listing</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
 
    </Layout>
)

export default Index