import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import './Careers.css'

function Careers() {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState('全部')
  const [selectedJob, setSelectedJob] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    if (location.hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  const handleApply = (job) => {
    setSelectedJob(job)
  }

  const handleCloseModal = () => {
    setSelectedJob(null)
    setFormData({ name: '', phone: '', email: '', experience: '' })
    setSubmitStatus(null)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setTimeout(() => {
        handleCloseModal()
      }, 2000)
    }, 1500)
  }

  const jobs = [
    {
      id: 1,
      title: '大模型算法工程师',
      category: '研发',
      location: '深圳',
      experience: '3-5年',
      education: '硕士及以上',
      salary: '40-70K',
      tags: ['大模型', 'NLP', 'PyTorch'],
      desc: '负责大语言模型的预训练、微调、推理优化等工作，推动大模型技术在企业场景的落地应用。'
    },
    {
      id: 2,
      title: 'AI Agent开发工程师',
      category: '研发',
      location: '深圳/北京',
      experience: '2-4年',
      education: '本科及以上',
      salary: '30-50K',
      tags: ['Agent', 'LangChain', 'Python'],
      desc: '负责AI Agent平台的核心功能开发，设计和实现多Agent协作框架，打造企业级AI员工解决方案。'
    },
    {
      id: 3,
      title: '前端开发工程师',
      category: '研发',
      location: '深圳',
      experience: '2-4年',
      education: '本科及以上',
      salary: '25-40K',
      tags: ['React', 'TypeScript', 'Node.js'],
      desc: '负责公司AI产品的前端开发，打造极致的用户体验，推动前端技术栈的持续演进。'
    },
    {
      id: 4,
      title: '产品经理（AI方向）',
      category: '产品',
      location: '深圳',
      experience: '3-5年',
      education: '本科及以上',
      salary: '30-50K',
      tags: ['AI产品', 'B端产品', '需求分析'],
      desc: '负责AI产品线的规划与设计，深入理解客户需求，推动产品从0到1的落地和持续迭代。'
    },
    {
      id: 5,
      title: '解决方案架构师',
      category: '解决方案',
      location: '深圳/上海',
      experience: '5-8年',
      education: '本科及以上',
      salary: '50-80K',
      tags: ['架构设计', '技术咨询', 'AI落地'],
      desc: '负责企业级AI解决方案的架构设计，为客户提供端到端的技术咨询和实施服务。'
    },
    {
      id: 6,
      title: '客户成功经理',
      category: '客户成功',
      location: '深圳/北京/上海',
      experience: '2-4年',
      education: '本科及以上',
      salary: '20-35K',
      tags: ['客户关系', '项目交付', 'SaaS'],
      desc: '负责客户项目的全生命周期管理，确保客户成功使用产品，提升客户满意度和续费率。'
    }
  ]

  const benefits = [
    { icon: '💰', title: '有竞争力的薪酬', desc: '行业领先的薪资水平，期权激励' },
    { icon: '🏥', title: '完善的保险', desc: '五险一金+补充商业保险' },
    { icon: '🌴', title: '弹性工作', desc: '弹性打卡，远程办公支持' },
    { icon: '📚', title: '学习成长', desc: '培训预算，技术分享，图书角' },
    { icon: '🎉', title: '丰富活动', desc: '团建旅游，生日会，节日福利' },
    { icon: '☕', title: '办公环境', desc: '免费下午茶，健身房，休闲区' }
  ]

  const categories = ['全部', '研发', '产品', '解决方案', '客户成功']

  const filteredJobs = activeCategory === '全部' 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory)

  return (
    <div className="careers-page">
      {/* Page Header */}
      <section className="page-header" id="top">
        <div className="container">
          <h1>加入我们</h1>
          <p>与优秀的人一起，做有挑战的事</p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="careers-benefits">
        <div className="container">
          <h2 className="section-title">为什么选择小微AI</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="careers-jobs">
        <div className="container">
          <h2 className="section-title">热招职位</h2>
          <div className="jobs-filter">
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
          <div className="jobs-list">
            {filteredJobs.map((job) => (
              <div className="job-card" key={job.id}>
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-salary">{job.salary}</span>
                </div>
                <div className="job-meta">
                  <span>📍 {job.location}</span>
                  <span>📋 {job.experience}</span>
                  <span>🎓 {job.education}</span>
                </div>
                <p className="job-desc">{job.desc}</p>
                <div className="job-tags">
                  {job.tags.map((tag, index) => (
                    <span className="job-tag" key={index}>{tag}</span>
                  ))}
                </div>
                <div className="job-footer">
                  <button className="apply-btn" onClick={() => handleApply(job)}>投递简历</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="careers-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-text">
              <h2>没有找到合适的职位？</h2>
              <p>发送简历至 hr@xiaowiai.com，我们会为您匹配合适的机会</p>
            </div>
            <CTAButton variant="primary" size="large" to="/contact#top">
              联系我们
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {selectedJob && (
        <div className="apply-modal-overlay" onClick={handleCloseModal}>
          <div className="apply-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <h2>投递简历</h2>
            <p className="modal-job-title">{selectedJob.title}</p>
            
            {submitStatus === 'success' ? (
              <div className="apply-success">
                <span className="success-icon">✓</span>
                <p>投递成功！我们会尽快与您联系</p>
              </div>
            ) : (
              <form className="apply-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>姓名 *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="请输入您的姓名" required />
                </div>
                <div className="form-group">
                  <label>手机号 *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="请输入您的手机号" required />
                </div>
                <div className="form-group">
                  <label>邮箱 *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="请输入您的邮箱" required />
                </div>
                <div className="form-group">
                  <label>工作经历</label>
                  <textarea name="experience" value={formData.experience} onChange={handleChange} placeholder="请简要描述您的工作经历" rows="3"></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? '提交中...' : '提交简历'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Careers
