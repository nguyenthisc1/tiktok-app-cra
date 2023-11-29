import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </>
    )
}
