import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import './NewsDetail.css'

function NewsDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const newsData = {
    1: {
      title: '小微AI科技入选"2024中国AI企业50强"',
      date: '2024-12-15',
      category: '公司获奖',
      icon: '🏆',
      content: `
        <p>近日，由中国人工智能产业发展联盟主办的《2024中国人工智能企业50强》榜单正式发布，小微AI科技凭借在大模型和Agent领域的技术创新和商业落地能力，成功入选榜单，排名第18位。</p>
        
        <h3>评选背景</h3>
        <p>本次评选历时三个月，从技术创新能力、商业落地能力、团队实力、发展潜力等多个维度对企业进行综合评估。评选委员会由来自清华大学、北京大学、中科院等顶尖院校的AI专家组成。</p>
        
        <h3>入选理由</h3>
        <p>评选委员会表示，小微AI科技在大模型应用落地方面表现突出，其AI Agent开发平台已服务超过3000家企业客户，帮助企业平均提升运营效率40%以上。同时，公司在AIGC、智能知识库等领域的产品也获得了市场的高度认可。</p>
        
        <h3>公司回应</h3>
        <p>小微AI科技CEO张明表示："入选AI企业50强是对我们团队努力的认可。我们将继续深耕企业AI领域，让更多企业享受到AI技术带来的红利。未来，我们将加大研发投入，推出更多创新产品，助力中国企业智能化转型。"</p>
        
        <h3>关于榜单</h3>
        <p>中国AI企业50强榜单是业内最具权威性的AI企业评选之一，旨在发掘和表彰在人工智能领域做出突出贡献的企业，推动中国AI产业健康发展。</p>
      `
    },
    2: {
      title: 'AI Agent开发平台2.0正式发布',
      date: '2024-11-20',
      category: '产品发布',
      icon: '🚀',
      content: `
        <p>2024年11月20日，小微AI科技正式发布AI Agent开发平台2.0版本，这是继1.0版本发布一年后的重大升级，带来了多项革命性的新功能。</p>
        
        <h3>核心新功能</h3>
        <p><strong>多Agent协作：</strong>支持多个Agent协同工作，可模拟真实团队协作场景，让复杂任务处理更加高效。</p>
        <p><strong>可视化编排：</strong>零代码拖拽式界面，让非技术人员也能快速构建AI Agent，降低使用门槛。</p>
        <p><strong>记忆系统：</strong>Agent具备长期记忆能力，能够记住用户偏好和历史交互，提供更个性化的服务。</p>
        <p><strong>工具生态：</strong>内置100+常用工具插件，支持自定义工具扩展，让Agent能力无限延展。</p>
        
        <h3>性能提升</h3>
        <p>相比1.0版本，2.0版本在响应速度上提升了60%，准确率提升了25%，同时支持更大规模的并发请求处理。</p>
        
        <h3>客户反馈</h3>
        <p>某知名电商公司技术负责人表示："新版本的可视化编排功能让我们的运营团队也能参与Agent构建，大大提高了效率。多Agent协作功能让我们的智能客服系统更加智能，客户满意度提升了30%。"</p>
      `
    },
    3: {
      title: '2024年度技术开放日圆满举办',
      date: '2024-10-08',
      category: '公司活动',
      icon: '🎤',
      content: `
        <p>2024年10月8日，以"AI赋能，智创未来"为主题的2024年度技术开放日在深圳总部成功举办，吸引了超过500位企业客户和技术爱好者参与。</p>
        
        <h3>活动亮点</h3>
        <p><strong>主题演讲：</strong>CEO张明分享了"企业AI转型的实践与思考"，深入浅出地讲解了AI技术在企业中的应用场景和落地方法。</p>
        <p><strong>产品演示：</strong>现场展示了最新的AI Agent开发平台、智能知识库等产品，让参会者亲身体验AI技术的魅力。</p>
        <p><strong>技术分享：</strong>技术团队带来了大模型微调、RAG技术、多模态AI等前沿话题的深度分享。</p>
        
        <h3>圆桌论坛</h3>
        <p>来自金融、制造、零售等行业的企业代表就"AI如何赋能行业转型"展开热烈讨论，分享了各自企业的AI实践经验和心得。</p>
        
        <h3>参会反馈</h3>
        <p>参会者纷纷表示，本次开放日内容丰富、干货满满，对AI技术有了更深入的了解，也为企业的AI转型提供了宝贵的参考。</p>
      `
    },
    4: {
      title: '与某知名银行达成AI战略合作',
      date: '2024-09-15',
      category: '战略合作',
      icon: '🤝',
      content: `
        <p>2024年9月15日，小微AI科技与国内知名银行签署战略合作协议，双方将在智能客服、智能风控、智能投顾等领域展开深度合作，共同推动金融行业智能化转型。</p>
        
        <h3>合作内容</h3>
        <p><strong>智能客服：</strong>部署AI智能客服系统，为客户提供7×24小时的智能咨询服务，预计可处理80%以上的常规咨询。</p>
        <p><strong>智能风控：</strong>基于大模型的风控系统，实时监测交易风险，提升风控效率和准确率。</p>
        <p><strong>智能投顾：</strong>AI投资顾问系统，为客户提供个性化的投资建议和资产配置方案。</p>
        
        <h3>合作意义</h3>
        <p>此次合作是小微AI科技在金融领域的重大突破，标志着公司的AI产品获得了头部金融机构的认可。双方将共同探索AI在金融场景的更多应用可能。</p>
        
        <h3>未来展望</h3>
        <p>双方计划在未来三年内，将AI技术逐步应用到更多业务场景，打造金融行业AI应用的标杆案例。</p>
      `
    },
    5: {
      title: '2024夏季团建活动圆满结束',
      date: '2024-08-20',
      category: '公司活动',
      icon: '🏖️',
      content: `
        <p>2024年8月20日-22日，公司组织全体员工前往三亚开展为期三天的夏季团建活动，通过沙滩拓展、团队竞赛等活动，增强了团队凝聚力。</p>
        
        <h3>活动精彩瞬间</h3>
        <p><strong>沙滩拓展：</strong>团队协作完成各种挑战项目，增进了同事之间的默契和信任。</p>
        <p><strong>海上运动：</strong>冲浪、帆船、潜水等丰富的海上项目，让大家在紧张的工作之余放松身心。</p>
        <p><strong>篝火晚会：</strong>夜晚的沙滩篝火晚会，大家载歌载舞，度过了一个难忘的夜晚。</p>
        
        <h3>团队竞赛</h3>
        <p>各部门组成的队伍在沙滩排球、拔河等项目中展开激烈角逐，展现了小微AI人积极向上的精神风貌。</p>
        
        <h3>员工感言</h3>
        <p>研发部员工小王表示："这次团建让我认识了很多平时不怎么交流的同事，团队氛围更加融洽了。回来后工作更有干劲了！"</p>
      `
    },
    6: {
      title: '荣获"最具创新力AI企业"称号',
      date: '2024-07-10',
      category: '公司获奖',
      icon: '🥇',
      content: `
        <p>2024年7月10日，在第七届中国人工智能大会上，小微AI科技凭借在大模型应用领域的持续创新，荣获"最具创新力AI企业"称号。</p>
        
        <h3>大会背景</h3>
        <p>中国人工智能大会是国内人工智能领域最具影响力的学术盛会之一，汇聚了国内外顶尖AI专家学者和行业领袖。</p>
        
        <h3>获奖理由</h3>
        <p>评委会认为，小微AI科技在过去一年中推出了多项创新产品，包括AI Agent开发平台、智能知识库等，这些产品在技术上具有突破性，在商业上也取得了显著成果。</p>
        
        <h3>创新亮点</h3>
        <p>公司的多Agent协作技术、RAG知识库技术处于行业领先水平，已申请相关专利20余项。同时，公司积极参与开源社区建设，回馈行业发展。</p>
        
        <h3>未来规划</h3>
        <p>公司将继续加大研发投入，计划在2025年推出更多创新产品，保持在AI应用领域的领先地位。</p>
      `
    },
    7: {
      title: '2024年度员工大会顺利召开',
      date: '2024-06-01',
      category: '公司活动',
      icon: '📊',
      content: `
        <p>2024年6月1日，以"凝心聚力，共创辉煌"为主题的2024年度员工大会在深圳总部召开，全体员工齐聚一堂，共同回顾过去、展望未来。</p>
        
        <h3>年度回顾</h3>
        <p>CEO张明回顾了过去一年的成绩：服务企业客户突破10000家，营收增长150%，团队规模扩大至500人，产品线从3个扩展到6个。</p>
        
        <h3>战略发布</h3>
        <p>大会发布了新年度战略规划：聚焦大模型应用，深耕垂直行业，打造行业标杆案例，实现营收翻番目标。</p>
        
        <h3>表彰环节</h3>
        <p>大会对优秀团队和个人进行了表彰，颁发了"最佳团队奖"、"技术创新奖"、"最佳新人奖"等多个奖项。</p>
        
        <h3>员工福利升级</h3>
        <p>公司宣布了多项员工福利升级措施，包括增加培训预算、优化晋升通道、改善办公环境等，让员工有更好的发展平台。</p>
      `
    },
    8: {
      title: '智能知识库产品正式上线',
      date: '2024-05-15',
      category: '产品发布',
      icon: '📚',
      content: `
        <p>2024年5月15日，基于RAG技术的智能知识库产品正式上线，支持多格式文档解析、向量检索、知识图谱等功能。</p>
        
        <h3>产品特点</h3>
        <p><strong>多格式支持：</strong>支持PDF、Word、Excel、PPT等20+种文档格式，一键导入企业知识资产。</p>
        <p><strong>智能解析：</strong>AI自动提取文档关键信息，构建结构化知识库。</p>
        <p><strong>向量检索：</strong>基于语义理解的智能检索，让查找更精准、更高效。</p>
        <p><strong>知识图谱：</strong>自动构建知识关联，呈现知识脉络，助力深度学习。</p>
        
        <h3>应用场景</h3>
        <p>产品适用于企业内部知识管理、客户服务知识库、培训资料库等多种场景，帮助企业实现知识资产化、智能化。</p>
        
        <h3>客户案例</h3>
        <p>某大型制造企业使用智能知识库后，新员工培训周期缩短了50%，知识检索效率提升了80%，获得了客户的高度评价。</p>
      `
    }
  }

  const news = newsData[id]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (!news) {
    return (
      <div className="news-detail-page">
        <div className="container">
          <div className="not-found">
            <h2>新闻不存在</h2>
            <button onClick={() => navigate('/news')}>返回新闻列表</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="news-detail-page">
      <section className="detail-header">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/news')}>
            返回新闻动态
          </button>
          <div className="news-meta">
            <span className="news-icon">{news.icon}</span>
            <span className="news-category">{news.category}</span>
            <span className="news-date">{news.date}</span>
          </div>
          <h1>{news.title}</h1>
        </div>
      </section>

      <section className="detail-content">
        <div className="container">
          <div className="content-body" dangerouslySetInnerHTML={{ __html: news.content }} />
        </div>
      </section>

      <section className="detail-cta">
        <div className="container">
          <CTAButton variant="primary" size="large" to="/contact#top">
            联系我们
          </CTAButton>
        </div>
      </section>
    </div>
  )
}

export default NewsDetail
