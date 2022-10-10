import { Layout } from 'antd'

// const { Header, Footer, Sider, Content } = Layout
import Header from './components/Header'
import Sider from 'antd/lib/layout/Sider'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Content />
      </Layout>
      <Footer />
    </Layout>
  )
}

export default App
