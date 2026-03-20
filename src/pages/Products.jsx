import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import { products } from '../data/products'
import './Products.css'

function Products() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }, 100)
        }
      }
    }
  }, [location])

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="page-header" id="top">
        <div className="container">
          <h1>产品服务</h1>
          <p>全栈AI产品矩阵，助力企业智能化升级</p>
        </div>
      </section>

      {/* Products List */}
      <section className="products-list">
        <div className="container">
          <div className="products-grid-full">
            {products.map((product) => (
              <div className="product-card-full" key={product.id} id={`product-${product.id}`}>
                <div className="product-header">
                  <div className="product-icon-large">{product.icon}</div>
                  <h3>{product.name}</h3>
                </div>
                <p className="product-desc">{product.description}</p>
                <div className="product-features">
                  {product.features.map((feature, index) => (
                    <span className="feature-tag" key={index}>
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="product-actions">
                  <CTAButton variant="primary" size="small" to="/contact#top">
                    立即试用
                  </CTAButton>
                  <CTAButton variant="secondary" size="small" to="/contact#top">
                    了解详情
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-text">
              <h2>需要定制AI解决方案？</h2>
              <p>联系我们，为您量身打造专属AI产品</p>
            </div>
            <CTAButton variant="primary" size="large" to="/contact#top">
              立即咨询
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
