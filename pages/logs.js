import {Component} from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import LogHeader from './components/LogHeader'
import LogFooter from './components/LogFooter'

import Head from 'next/head'


export default class extends Component {
  static async getInitialProps ({ req, query }) {
    const isServer = !!req

    console.log('getInitialProps called:', isServer ? 'server' : 'client')

    if (isServer) {
      // When being rendered server-side, we have access to our data in query that we put there in routes/item.js,
      // saving us an http call. Note that if we were to try to require('../operations/get-item') here,
      // it would result in a webpack error.
      return { item: JSON.stringify(query.itemData, null, 4) }
    } else {
      // On the client, we should fetch the data remotely
      const res = await fetch('http://localhost:3002/_data/logs', {headers: {'Accept': 'application/json'}})
      let json = await res.json()
      return { item: json }
    }
  }

  render () {
      const data = JSON.parse(this.props.item);
      const request = JSON.parse(data.request);
    return (
    
    <div>
    
        <Head>
            <title>HCN Logs</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="/static/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </Head>
            
        <LogHeader />

        <span class="border">
        <h3 className='h3'>All Logs</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">SR #</th>
                <th scope="col">Tajawal UID</th>
                <th scope="col">IP</th>
                <th scope="col">Supplier</th>
                <th scope="col">Current Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td><a href="/logs">VVVBBBR13333</a></td>
                <td>196.566.6.7</td>
                <td>Travelutionary</td>
                <td>Confimed</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td><a href="/logs">VVVBBBR13333</a></td>
                <td>167.555.1.2</td>
                <td>B2B</td>
                <td>Confirmation Pending</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td><a href="/logs">VVVBBBR13333</a></td>
                <td>187.55.66.11</td>
                <td>Agoda</td>
                <td>Cancelled</td>
                </tr>
            </tbody>
            </table>
            </span>    
        
        <span class="border">
        <h3 className='h3'>Logs Request - VVVBBBR13333</h3>
                <div class="shadow-lg p-3 mb-5 bg-white rounded">
                    <pre><code>
                        {
                            this.props.item
                        }
                        </code></pre>
                </div>
        </span>

        <LogFooter/>

        <style jsx>{`                        
                    .h3 {
                            color: #007bff;
                        }
        `}</style>
    
    </div>
    )
  }
}