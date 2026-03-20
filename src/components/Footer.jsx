import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo.svg" alt="小微AI科技" className="footer-logo-img" />
              <span className="logo-text">小微AI科技</span>
            </Link>
            <p className="footer-desc">
              企业AI转型专家，助力企业智能化升级
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>产品服务</h4>
              <ul>
                <li><Link to="/products#product-1">大模型服务平台</Link></li>
                <li><Link to="/products#product-2">AI Agent开发平台</Link></li>
                <li><Link to="/products#product-3">AIGC内容创作</Link></li>
                <li><Link to="/products#product-4">智能知识库</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>关于我们</h4>
              <ul>
                <li><Link to="/about#top">公司介绍</Link></li>
                <li><Link to="/news#top">新闻动态</Link></li>
                <li><Link to="/careers#top">加入我们</Link></li>
                <li><Link to="/contact#top">联系我们</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>联系方式</h4>
              <ul>
                <li>电话：400-888-8888</li>
                <li>邮箱：contact@xiaowiai.com</li>
                <li>地址：深圳市金蝶软件园</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 小微AI科技 版权所有 | 粤ICP备12345678号</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
