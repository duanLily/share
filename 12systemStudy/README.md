# 前端系统学习文件
 ## 导读记录
  ### 软件项目开发   流程
    项目定义 --> 需求分析 --> 开发阶段 --> 维护、结束
    1、需求分析  项目预算 计划 分工 沟通及时充分具体否？
    2、目标    资源、工期
    3、范围
    4、可行性分析
    5、预期结果 
         
    角色             困惑                 问题根源
    开发             部署                 自动化
    测试             环境                 标准化
    运维             沟通                 规范化
    产品             效率                 文档化
         
    项目收尾，遵循流程，文档归档，项目总结，形成组织资产，资源要及时回收，避免浪费。

  ### 解决方案 DevOps 流程 （敏捷流程）
    1、对组织人员培训，转变思维向自动化/规范化转型
    2、配合效率工具（自动化）对流程进行简化/标准化
    3、全员参与并实践
 
    版本管理、自动化、文档管理、缺陷控制都是围绕敏捷流程展开
 
    项目 --> 版本控制（gitlab/github） --> 打包编译  使程序运行在不同环境，进行发布
    部署到云平台上去  腾讯云、阿里云、dockerhub   huawei 
 
    开发 --> docker --> 缺陷控制 --> 文档管理 --> 测试
 
  ### 快速提升
    1、成为两（多）方面的专家
    2、勇于承担挑战，合理分配自己的时间
    3、参加交流会/技术分享大会，了解最新的知识架构
     
    练手项目 
    找准资源，规划成片的学习时间
    从大纲、目标清晰的了解自己将要学习的知识，并重点看感兴趣的
    学会使用社区的力量
    
    初级：
    系统学习： demi 等外文软件
    临摹开始；w3cschool  菜鸟教程
     
    折腾博客（Hexo,Jekyll,Wordpress）
      
    中级： 
    从兴趣入手，定向发展（算法：Leetcode，基础知识：印尼中文）  补足自己的不足之处
    加入开源社区，github上的开源项目（Docker、Nodejs、AI等）
    着眼中国与世界（活动日历Google，微软，AWS，TED）  着手于前沿科技技术、扩展视野

  ### 前端面试要点
    1、简历通发？
    2、对公司职位和业务进行了解
    3、模拟自测/面试

    （忌：盲目跟风、夸大其词、自负、细节决定成败）
    （专业技能太空泛，渲染机制、dom.....,项目描述是否具体，自己的收获等等）
    jobDescrip --> 简历 --> 面试 --> 总结（项目总结，面试总结（面试失败原因，提高部分））
  
    内推/校招/实习
    同学/师兄（姐）/朋友关系介绍
    职业猎头
  
    选择行业和公司 （前景、同行评价（薪酬、晋升、转行）、看生态）
                （定位(高薪水/高福利/高自由) 了解企业、公司团队文化  从现在的产品、岗位，了解预期的需求和发展）
                
  ### 自我提升
    todo List 
    设置待办事项与学习提醒
    加入社区/写博客/组建团队，总结分享我的知识
  
    及时调整计划，抓重避轻
    暗示自己（志同道合、加油）
    培养兴趣爱好，对自己好一点
  
  ### 工作痛点及方案
    接口测试、文档管理、缺陷管理、版本管理
    把握项目全生命周期，培养整体意识
    推动全员参与，分享总结
  
    选择行业看生态  面试准备不同简历，还要模拟一面二面 看公司产品、需求的长远发展，了解团队文化
 ## 需求分析
   项目全局思维，需求分析重难点
   案例项目需求分析，业务拆解、功能拆解
   需求分析的工具及使用场景
   
   需求分析工具：Axure,Ps,墨刀，蓝湖
   思维导图：Xmind,MindNode(Mac),MindManager
   流程图：Visio（win）/OmniGraffle(Mac)/processOn
  
 
 ##  
   
   yarn 相对于 npm 来说有很多新特性： 离线安装......
   
 ## docker 
    可以把容器和应用打包成一个镜像，这个镜像就可以在任何有docker服务的地方运行。

    docker-compose
   ### Docker主要特性
    文件、资源、网络隔离
    变更管理、日志记录
    写时复制
 ## 接口测试工具
    Postman
    接口性能测试
    代理类测试
