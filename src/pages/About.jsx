import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import './About.css'

function About() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  const milestones = [
    { year: '2019', title: '公司成立', desc: '在深圳成立，专注AI技术研发' },
    { year: '2020', title: '产品上线', desc: '首款AI产品正式发布，服务首批客户' },
    { year: '2021', title: 'A轮融资', desc: '完成A轮融资，估值突破10亿' },
    { year: '2022', title: '规模化', desc: '服务企业客户突破5000家' },
    { year: '2023', title: '大模型战略', desc: '发布自研大模型，全面拥抱AI时代' },
    { year: '2024', title: '行业领先', desc: '入选中国AI企业50强' },
  ]

  const teamMembers = [
    { name: '张明', title: '创始人&CEO', desc: '前腾讯AI Lab主任，清华博士', icon: '👨‍💼' },
    { name: '李华', title: 'CTO', desc: '前阿里达摩院技术总监，MIT博士后', icon: '👨‍💻' },
    { name: '王芳', title: 'COO', desc: '前华为云运营总监，北大MBA', icon: '👩‍💼' },
    { name: '陈强', title: '首席科学家', desc: '前Google Brain研究员，斯坦福博士', icon: '👨‍🔬' },
  ]

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header" id="top">
        <div className="container">
          <h1>关于我们</h1>
          <p>让AI触手可及，赋能每一家企业</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>小微AI科技</h2>
              <p className="intro-slogan">让AI成为企业增长的新引擎</p>
              <p className="intro-desc">
                小微AI科技成立于2019年，是一家专注于企业级AI产品研发与服务的科技公司。我们致力于将前沿的大模型、Agent、AIGC等技术转化为可落地的企业解决方案，帮助客户实现智能化转型。
              </p>
              <p className="intro-desc">
                公司总部位于深圳金蝶软件园，在北京、上海、杭州设有研发中心，团队规模超过500人，其中研发人员占比超过60%。
              </p>
            </div>
            <div className="intro-stats">
              <div className="stat-box">
                <span className="stat-num">500+</span>
                <span className="stat-label">团队规模</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">10000+</span>
                <span className="stat-label">服务企业</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">50+</span>
                <span className="stat-label">专利技术</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">99.9%</span>
                <span className="stat-label">服务可用性</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="container">
          <h2 className="section-title">发展历程</h2>
          <div className="timeline">
            {milestones.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="container">
          <h2 className="section-title">核心团队</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-icon">{member.icon}</div>
                <h3>{member.name}</h3>
                <p className="team-title">{member.title}</p>
                <p className="team-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-text">
              <h2>期待与您携手共创AI未来</h2>
              <p>联系我们，开启企业智能化之旅</p>
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

export default About
