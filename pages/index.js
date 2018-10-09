import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Main from '../components'


function getLogs () {
  return [
    { id: '1', title: 'ABC'},
    { id: '2', title: 'HHHH'},
    { id: '2', title: 'JJJJJ'},
  ]
}


export default () => (
  <Layout>
    <h1>My Logs</h1>
    <Main />
    <ul>
      {getLogs().map((log) => (
        <li key={log.id}>
          <Link href={`/l/${log.id}`}>
            <a>{log.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)
