import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import './Contact.css'

function Contact() {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: '您好！我是小微AI智能客服，很高兴为您服务。请问有什么可以帮助您的吗？' }
  ])
  const [chatInput, setChatInput] = useState('')
  const chatEndRef = useRef(null)

  useEffect(() => {
    if (location.hash === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (!chatInput.trim()) return

    setChatMessages(prev => [...prev, { type: 'user', text: chatInput }])
    const userMessage = chatInput
    setChatInput('')

    // 模拟AI回复
    setTimeout(() => {
      let reply = '感谢您的咨询！'
      if (userMessage.includes('价格') || userMessage.includes('费用')) {
        reply = '我们的产品价格根据具体需求和规模定制，您可以留下联系方式，我们的销售顾问会在24小时内与您沟通详细方案和报价。'
      } else if (userMessage.includes('演示') || userMessage.includes('试用')) {
        reply = '我们提供免费的产品演示和试用服务，您可以填写页面左侧的表单，或拨打400-888-8888预约演示。'
      } else if (userMessage.includes('功能') || userMessage.includes('特点')) {
        reply = '我们的AI产品涵盖大模型服务、Agent开发、AIGC内容创作等多个领域，支持私有化部署和定制开发，欢迎了解详情！'
      } else if (userMessage.includes('联系') || userMessage.includes('电话')) {
        reply = '您可以直接拨打400-888-8888联系我们，工作日9:00-18:00有专人接听。也可以填写表单，我们会主动联系您。'
      } else {
        reply = '感谢您的咨询！如需了解更多详情，欢迎拨打400-888-8888或填写左侧表单，我们的顾问将尽快与您联系。'
      }
      setChatMessages(prev => [...prev, { type: 'bot', text: reply }])
    }, 800)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', phone: '', company: '', message: '' })
      
      // 3秒后清除成功提示
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1500)
  }

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>联系我们</h1>
          <p>期待与您的合作，我们将竭诚为您服务</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>留下您的信息</h2>
              <p className="form-desc">
                填写以下表单，我们的专业顾问将在24小时内与您联系
              </p>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  提交成功！我们将尽快与您联系。
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">姓名 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">电话 *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="请输入您的联系电话"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">公司名称</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="请输入您的公司名称"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">留言</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="请输入您的需求或问题"
                    rows="4"
                  ></textarea>
                </div>

                <CTAButton 
                  type="button"
                  variant="primary" 
                  size="large"
                  onClick={handleSubmit}
                >
                  {isSubmitting ? '提交中...' : '提交信息'}
                </CTAButton>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">📞</div>
                <h3>电话咨询</h3>
                <p>400-888-8888</p>
                <span>工作日 9:00-18:00</span>
              </div>

              <div className="info-card">
                <div className="info-icon">📧</div>
                <h3>邮箱联系</h3>
                <p>contact@xiaowiai.com</p>
                <span>24小时内回复</span>
              </div>

              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>公司地址</h3>
                <p>深圳市金蝶软件园</p>
                <span>A栋12层</span>
              </div>

              <div className="info-card clickable" onClick={() => setIsChatOpen(true)}>
                <div className="info-icon">💬</div>
                <h3>在线客服</h3>
                <p>点击开始对话</p>
                <span>7×24小时在线</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="chat-modal-overlay" onClick={() => setIsChatOpen(false)}>
          <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
            <div className="chat-header">
              <div className="chat-header-info">
                <span className="chat-avatar">🤖</span>
                <div>
                  <h4>小微AI智能客服</h4>
                  <span className="chat-status">在线</span>
                </div>
              </div>
              <button className="chat-close" onClick={() => setIsChatOpen(false)}>×</button>
            </div>
            <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.type}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form className="chat-input-form" onSubmit={handleChatSubmit}>
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="请输入您的问题..."
              />
              <button type="submit">发送</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact
