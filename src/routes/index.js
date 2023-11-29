import { HeaderOnly } from '~/components/Layout'
import Following from '~/pages/Following'
import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Search from '~/pages/Search'
import Upload from '~/pages/Upload'

const publicRoutes = [
    { path: '/', components: Home },
    { path: '/following', components: Following },
    { path: '/profile', components: Profile },
    { path: '/upload', components: Upload, layout: HeaderOnly },
    { path: '/search', components: Search, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
