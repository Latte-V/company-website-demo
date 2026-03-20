import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import { products, features } from '../data/products'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Banner Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-particles"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-title">
            <span className="title-gradient">企业AI转型</span>
            <br />
            <span>一站式解决方案</span>
          </h1>
          <p className="hero-subtitle">
            基于大模型、Agent、知识图谱等AI技术，为企业提供安全、稳定、高效的智能化服务
          </p>
          <div className="hero-buttons">
            <CTAButton variant="primary" size="large" to="/contact#top">
              免费试用
            </CTAButton>
            <CTAButton variant="outline" size="large" to="/contact#top">
              了解更多
            </CTAButton>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10000+</span>
              <span className="stat-label">企业客户</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">服务可用性</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">7×24</span>
              <span className="stat-label">技术支持</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">为什么选择我们</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="products-preview">
        <div className="container">
          <h2 className="section-title">核心产品</h2>
          <p className="section-subtitle">
            全栈AI产品矩阵，覆盖大模型、Agent、AIGC等核心场景
          </p>
          <div className="products-grid">
            {products.slice(0, 3).map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-icon">{product.icon}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to={`/products#product-${product.id}`} className="product-link">
                  了解详情 →
                </Link>
              </div>
            ))}
          </div>
          <div className="products-cta">
            <Link to="/products#top" className="view-all-btn">
              查看全部产品
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>准备好开启AI转型之旅了吗？</h2>
            <p>立即联系我们，获取专属解决方案</p>
            <CTAButton variant="primary" size="large" to="/contact#top">
              立即咨询
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


