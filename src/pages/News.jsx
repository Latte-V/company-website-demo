import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import './News.css'

function News() {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState('全部')

  useEffect(() => {
    if (location.hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  const newsList = [
    {
      id: 1,
      date: '2024-12-15',
      category: '公司获奖',
      title: '小微AI科技入选"2024中国AI企业50强"',
      desc: '在最新发布的《2024中国人工智能企业50强》榜单中，小微AI科技凭借在大模型和Agent领域的技术创新和商业落地能力，成功入选榜单，排名第18位。',
      icon: '🏆'
    },
    {
      id: 2,
      date: '2024-11-20',
      category: '产品发布',
      title: 'AI Agent开发平台2.0正式发布',
      desc: '全新升级的AI Agent开发平台2.0版本正式上线，新增多Agent协作、可视化编排、记忆系统等核心功能，让企业零代码构建智能Agent成为现实。',
      icon: '🚀'
    },
    {
      id: 3,
      date: '2024-10-08',
      category: '公司活动',
      title: '2024年度技术开放日圆满举办',
      desc: '以"AI赋能，智创未来"为主题的2024年度技术开放日在深圳总部成功举办，吸引了超过500位企业客户和技术爱好者参与，共同探讨AI技术应用趋势。',
      icon: '🎤'
    },
    {
      id: 4,
      date: '2024-09-15',
      category: '战略合作',
      title: '与某知名银行达成AI战略合作',
      desc: '小微AI科技与国内知名银行签署战略合作协议，将在智能客服、智能风控、智能投顾等领域展开深度合作，共同推动金融行业智能化转型。',
      icon: '🤝'
    },
    {
      id: 5,
      date: '2024-08-20',
      category: '公司活动',
      title: '2024夏季团建活动圆满结束',
      desc: '公司组织全体员工前往三亚开展为期三天的夏季团建活动，通过沙滩拓展、团队竞赛等活动，增强了团队凝聚力，展现了小微AI人积极向上的精神风貌。',
      icon: '🏖️'
    },
    {
      id: 6,
      date: '2024-07-10',
      category: '公司获奖',
      title: '荣获"最具创新力AI企业"称号',
      desc: '在第七届中国人工智能大会上，小微AI科技凭借在大模型应用领域的持续创新，荣获"最具创新力AI企业"称号，这是对公司技术实力的又一次认可。',
      icon: '🥇'
    },
    {
      id: 7,
      date: '2024-06-01',
      category: '公司活动',
      title: '2024年度员工大会顺利召开',
      desc: '以"凝心聚力，共创辉煌"为主题的2024年度员工大会在深圳总部召开，CEO张明回顾了过去一年的成绩，并发布了新年度战略规划。',
      icon: '📊'
    },
    {
      id: 8,
      date: '2024-05-15',
      category: '产品发布',
      title: '智能知识库产品正式上线',
      desc: '基于RAG技术的智能知识库产品正式上线，支持多格式文档解析、向量检索、知识图谱等功能，帮助企业构建专属知识库，让知识触手可及。',
      icon: '📚'
    }
  ]

  const categories = ['全部', '公司获奖', '产品发布', '公司活动', '战略合作']

  const filteredNews = activeCategory === '全部' 
    ? newsList 
    : newsList.filter(news => news.category === activeCategory)

  return (
    <div className="news-page">
      {/* Page Header */}
      <section className="page-header" id="top">
        <div className="container">
          <h1>新闻动态</h1>
          <p>了解小微AI科技最新资讯</p>
        </div>
      </section>

      {/* News List */}
      <section className="news-list">
        <div className="container">
          <div className="news-filter">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="news-grid">
            {filteredNews.map((news) => (
              <div className="news-card" key={news.id}>
                <div className="news-header">
                  <span className="news-icon">{news.icon}</span>
                  <span className="news-category">{news.category}</span>
                </div>
                <div className="news-date">{news.date}</div>
                <h3>{news.title}</h3>
                <p>{news.desc}</p>
                <Link to={`/news/${news.id}`} className="news-link">阅读全文 →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="news-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-text">
              <h2>想要了解更多企业AI解决方案？</h2>
              <p>联系我们，获取专属方案</p>
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

export default News
