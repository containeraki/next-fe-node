import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const LogHeader = () => (
    <div className='header'>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Link href="/logs"><a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/logs">HCN Logging Platform</a></Link>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
        <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">Sign out</a>
            </li>
        </ul>
        </nav>

        <style jsx>{`
                .header {
                    font: 20px Helvetica,Arial,sans-serif;
                    color: brown;
                    opacity: initial;
                    padding: 5px 19px 4px 2px;
                    margin: 9px 9px 11px 0px;
                }
                 a {
                    text-decoration: none;
                }

                a:hover {
                    opacity: 0.6;
                }
        `}</style>
    </div>
)

export default LogHeader