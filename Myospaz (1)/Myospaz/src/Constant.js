
const Products = {
  corporate: [
    {
      id: 1,
      title: "DTrack- PDM",
      shortDescription: "Product Data Management system for managing product-related data throughout the lifecycle.",
      description: `Product Data Management (PDM) is a system used to manage and organize product-related data throughout the product lifecycle. In this PDM system, users can create new projects, upload individual files and full assembly files, and track all changes made to those files. The system ensures that all components are properly linked within the assembly, helping maintain version control and data integrity. It also allows you to manage users and assign leads, ensuring clear ownership and collaboration across engineering teams

      Key benefits include:
      - 40% reduction in time spent searching for files
      - 30% faster time-to-market for new products
      - Complete audit trail of all changes
      - Role-based access control for security

      Implementing our PDM system can transform your product development process, reducing errors and improving efficiency across your organization.`,
      icon: "bi-database",
      features: [
        "Centralized product data repository",
        "Version control and audit trails",
        "CAD/PLM integration",
        "Customizable workflows",
        "Advanced search capabilities",
        "Role-based access control"
      ],
      specifications: {
        version: "3.2.1",
        updated: "March 2023",
        compatibility: "Windows, macOS, Linux"
      },
      testimonials: [
        {
          quote: "DTrack has drastically reduced our product data confusion and improved release cycles!",
          author: "G-Square"
        },
        {
          quote: "The version control and CAD integration are game-changers for us.",
          author: "Jay Engineering"
        }
      ]
    },
    {
      id: 2,
      title: "OptiTrack - PMS",
      shortDescription: "A Production Management System designed to streamline operations, boost productivity, and ensure seamless coordination.",
      description: `OptiTrack is a comprehensive Production Management System (PMS) built to monitor, control, and optimize your entire production and inspection workflow.
    
        Key features include:
      -Real-time reporting
      -Work order management
      -Production tracking
      -Product approval/rejection
      -Machine maintenance 
      -Dispatch tracking
      -App based Analytics on mobile
      -Audit Trails
        
        With OptiTrack, manufacturers can gain complete visibility into their operations, reduce downtime, and improve overall productivity through smarter, more connected workflows.`,
      icon: "bi-gear-fill",
      features: [
        "Real-time process monitoring",
        "Automated reporting & analytics",
        "Seamless cross-department coordination",
        "Deviation and issue alerts",
        "Inspection and quality tracking",
        "Production workflow optimization"
      ],
      specifications: {
        version: "1.0.0",
        updated: "April 2025",
        compatibility: "Web-based, all modern browsers"
      },
      testimonials: [
        {
          quote: "The PMS from MyosPaz brought complete transparency to our production cycle. We’re now more efficient than ever!",
          author: "Bhor Engineering"
        },
        {
          quote: "Tracking production orders and managing resources became seamless with this system.",
          author: "Yashwant Engineering"
        },
      ]
    },
    {
      id: 3,
      title: "MyosPaz - ERP for Schools/Colleges",
      shortDescription: "A robust ERP solution tailored for educational institutions to streamline operations and manage information efficiently.",
      description: `In today's competitive landscape, managing information methodically is a growing challenge for educational enterprises. Disorganized data can lead to operational inefficiencies and setbacks.
    
      MyosPaz addresses this with a powerful ERP solution designed specifically for schools and colleges. It empowers institutions with a unified platform to manage administration, academics, finance, and more—ultimately enabling better decision-making and business growth.
      
      Key features include:
      - Centralized academic and administrative data
      - Student and faculty management
      - Automated fee and finance tracking
      - Timetable and exam management
      - Reports and analytics for performance monitoring
   
    
    With MyosPaz, educational organizations gain the clarity and control needed to thrive in a rapidly evolving environment.`,
      icon: "bi-building",
      features: [
        "Student and staff database management",
        "Attendance and timetable scheduling",
        "Exam and result automation",
        "Finance and fee tracking",
        "Performance and analytics dashboard",
       
      ],
      specifications: {
        version: "3.2.0",
        updated: "March 2025",
        compatibility: "Web-based, all platforms"
      },

      testimonials: [
        {
          quote: "MyosPaz’s ERP simplified management across our schools – Vedant Public School (Pune), Poha, and Karanja.",
          author: "Geetai Humankind Development Sources"
        },
        {
          quote: "Communication between parents, teachers, and students has improved drastically with the ERP platform.",
          author: "Sunflower Public School"
        },
        {
          quote: "It’s the most user-friendly and comprehensive college management tool we’ve come across.",
          author: "KBGATS, Amkheda"
        }
      ]          
    },
    
    {
      id: 4,
      title: "TMS - Task Management System",
      shortDescription: "Organize, prioritize, and track tasks with ease to boost team productivity.",
      description: `The Task Management System (TMS) by Myospaz Software Technologies is designed to help teams and individuals manage their daily tasks and workflows efficiently.
    
    It supports assigning, tracking, and collaborating on tasks to ensure deadlines are met and responsibilities are clear.
    
      Key offerings include:
      - Task creation and assignment
      - Status tracking and updates
      - Priority and deadline management
      - Team collaboration tools
      - Notifications and reminders
      - Dashboard and reporting
    
    With TMS, organizations can ensure accountability, streamline workflows, and keep everyone on the same page.`,
      icon: "bi-list-check",
      features: [
        "Task creation and assignment",
        "Deadline and priority setting",
        "Progress tracking dashboard",
        "Team notifications and reminders",
        "Collaborative commenting and updates",
        "Exportable task reports"
      ],
      specifications: {
        version: "2.0.0",
        updated: "April 2025",
        compatibility: "Web and mobile supported"
      }
    },

    {
      id: 5,
      title: "HRMS - Human Resource Management System",
      shortDescription: "A comprehensive tool to streamline and automate HR processes for organizations of all sizes.",
      description: `Myospaz Software Technologies presents an intelligent HRMS solution tailored for modern workforce management.
    
    Our platform simplifies every aspect of human resources—from recruitment to retirement—empowering HR teams and employees with digital tools for efficiency and transparency.
    
    Key offerings include:
    - Employee onboarding and document management
    - Attendance and leave tracking
    - Payroll automation and tax calculation
    - Performance appraisal and feedback system
    - Recruitment tracking and applicant database
    - HR analytics and compliance reporting
    
    Whether you're a startup or an enterprise, our HRMS is designed to scale with your business, improve compliance, and enhance employee engagement.`,
      icon: "bi-people",
      features: [
        "Centralized employee database",
        "Automated payroll and payslip generation",
        "Leave and attendance management with calendar view",
        "Self-service employee portal",
        "Performance management and KPIs tracking",
        "Secure document storage and access"
      ],
      specifications: {
        version: "2.0.1",
        updated: "April 2025",
        compatibility: "Web-based, mobile responsive, supports all modern browsers"
      }
    },

    {
  id: 6,
  title: "MMS - Marketing Management System",
  shortDescription:
    "A smart platform to plan, execute, and analyze marketing campaigns for maximum ROI and brand visibility.",
  description: `Myospaz Software Technologies introduces the Marketing Management System (MMS) — a powerful, data-driven tool designed to optimize marketing operations, enhance collaboration, and boost campaign performance.

With MMS, marketing teams can seamlessly manage campaigns, monitor leads, analyze customer engagement, and generate actionable insights — all from one unified dashboard.

Key offerings include:
- Campaign creation, scheduling, and tracking
- Lead management and customer segmentation
- Multi-channel marketing (email, SMS, social media)
- Real-time analytics and performance dashboards
- Budget tracking and ROI calculation
- Integration with CRM and sales systems

MMS empowers marketing teams with automation, transparency, and intelligence to make data-backed decisions and drive sustained business growth.`,
  icon: "bi-graph-up-arrow",
  features: [
    "Centralized campaign management dashboard",
    "Lead and contact tracking with detailed analytics",
    "Automation of email, SMS, and social media marketing",
    "Customizable reporting and ROI insights",
    "Integration with CRM and tele-calling systems",
    "User access control and activity tracking"
  ],
  specifications: {
    version: "3.1.0",
    updated: "October 2025",
    compatibility:
      "Web-based, mobile-friendly interface compatible with Chrome, Edge, and Firefox"
  }
}

    
    
        
  ],        
  others: [
    {
      id: 7,
      title: "Mobile App Development",
      shortDescription: "Expert native and hybrid mobile apps tailored for Android, iOS, and other platforms.",
      description: `Myospaz Software Technologies specializes in delivering high-quality mobile application development services with a strong focus on both native and hybrid technologies.
    
    Our expert team is proficient in building custom mobile apps for Android, iPhone, iPad, Windows, and other platforms—based on client-specific requirements and within a rapid turnaround time.
    
    Key offerings include:
    - Native and hybrid app development
    - Seamless API integration
    - Custom UI/UX tailored for each platform
    - Rapid development lifecycle
    - App store deployment and compliance
    - Post-launch support and maintenance
    
    Whether you're launching a startup app or enhancing enterprise mobility, MyosPaz ensures reliable, scalable, and user-centric mobile solutions.`,
      icon: "bi-phone",
      features: [
        "Native development for Android and iOS",
        "Hybrid app solutions",
        "Custom UI/UX for mobile platforms",
        "Fast turnaround time",
        "App store deployment & compliance",
        "Post-launch support"
      ],
      specifications: {
        version: "Varies by project",
        updated: "Ongoing",
        compatibility: "iOS, Android, Windows, and more"
      },
      testimonials: [
        {
          quote: "MyosPaz’s PMS app streamlined our production processes and increased operational efficiency.",
          author: "Bhor Engineering"
        },
        {
          quote: "Our delivery process is now seamless thanks to MyosPaz’s eFood and Delivery app.",
          author: "Aqua Splash"
        },
        {
          quote: "Aaple Shivane made it easy for our community to find local job opportunities with just a few clicks.",
          author: "Aaple Shivane"
        },
       
      ]
    },
    {
      id: 8,
      title: "E-Commerce Solutions",
      shortDescription: "Robust and scalable E-Commerce platforms tailored to dynamic market demands.",
      description: `As the E-Commerce industry continues to grow rapidly, Myospaz Software Technologies delivers agile and effective solutions to keep up with evolving market needs.
    
    In today’s competitive landscape, it takes deep insight and technical agility to understand and meet shifting consumer expectations. MyosPaz excels at navigating these challenges by providing customized, scalable, and future-ready E-Commerce platforms.
    
    Key offerings include:
    - Custom storefront development
    - Secure payment gateway integration
    - Inventory and order management systems
    - Mobile-friendly and responsive design
    - SEO optimization and analytics
    - Multi-vendor and B2B/B2C solutions
    
    With MyosPaz, businesses can launch powerful online stores that offer seamless user experiences and drive measurable growth.`,
      icon: "bi-cart-fill",
      features: [
        "Custom E-Commerce store development",
        "Secure payment integrations",
        "Inventory and order management",
        "Mobile-first responsive design",
        "SEO and performance optimization",
        "Multi-vendor and scalable architecture"
      ],
      specifications: {
        version: "Custom per project",
        updated: "April 2025",
        compatibility: "Web, Mobile (iOS & Android)"
      }
    },
    {
      id: 9,
      title: "Customized Website Development",
      shortDescription: "Tailored web solutions to match your business vision and goals.",
      description: `At Myospaz Software Technologies, we specialize in developing fully customized websites that align with your unique business requirements and brand identity.
    
    Whether it’s a corporate site, a portfolio, or a complex web portal, we craft responsive and scalable solutions with intuitive user experiences.
    
    Key offerings include:
    - Unique UI/UX design
    - Responsive and mobile-first development
    - CMS integration
    - Custom web functionalities
    - SEO-friendly structure
    - Fast loading and secure architecture
    
    Our team ensures every website is designed to engage your audience and convert visitors into customers.`,
      icon: "bi-window",
      features: [
        "Fully custom UI/UX design",
        "Responsive and cross-browser compatible",
        "CMS and admin panel integration",
        "Custom features as per business needs",
        "SEO-optimized and secure",
        "Performance-focused development"
      ],
      specifications: {
        version: "Custom per project",
        updated: "April 2025",
        compatibility: "Web, all major browsers"
      },
      testimonials: [
        {
          quote: "The website developed by MyosPaz has helped us professionally showcase our legacy and wide service offerings in the power sector.",
          author: "Ramelex Pvt. Ltd."
        },
        {
          quote: "The platform is simple, effective, and connects job seekers with real opportunities in our area.",
          author: "Aaple Shivane"
        },
        {
          quote: "The certification platform built by MyosPaz has made issuing and managing digital certificates seamless for our team.",
          author: "IROEP"
        },
        {
          quote: "MyosPaz designed a beautiful and responsive food ordering site that boosted our online orders significantly.",
          author: "Aqua Splash"
        },
        {
          quote: "Our learners now receive their certificates instantly and securely, improving our credibility and service quality.",
          author: "AIQM"
        },
        
       
      ]
    
    },
    {
      id: 10,
      title: "Social Media Marketing",
      shortDescription: "Boost your brand presence and engage your audience through targeted social strategies.",
      description: `Myospaz Software Technologies offers comprehensive Social Media Marketing (SMM) services to help businesses grow their digital footprint and connect with their audience across platforms.
    
    We create impactful strategies that drive engagement, build brand loyalty, and generate leads.
    
    Key offerings include:
    - Content creation and scheduling
    - Campaign planning and execution
    - Platform-specific strategy (Facebook, Instagram, LinkedIn, etc.)
    - Paid advertising and promotions
    - Audience analytics and reporting
    - Influencer and community marketing
    
    Our marketing experts ensure your brand stays active, relevant, and engaging in the ever-evolving social space.`,
      icon: "bi-megaphone-fill",
      features: [
        "Platform-specific social media strategies",
        "Creative content development",
        "Ad campaign management",
        "Community engagement",
        "Performance tracking and reporting",
        "Brand visibility enhancement"
      ],
      specifications: {
        version: "Strategy-based",
        updated: "April 2025",
        compatibility: "Facebook, Instagram, LinkedIn, Twitter, YouTube"
      }
    },

    {
      id: 11,
      title: "Hotel Management System",
      shortDescription: "Streamlined solution for efficient hotel operations, from booking to billing.",
      description: `Myospaz Software Technologies offers a powerful Hotel Management System that simplifies the day-to-day operations of hotels and hospitality businesses.
    
    Our solution enables real-time management of bookings, customer service, and backend operations for a seamless guest experience.
    
    Key offerings include:
    - Room booking and reservation management
    - Front desk operations
    - Billing and invoicing
    - Housekeeping and staff coordination
    - Reporting and analytics
    
    Designed for small hotels to large chains, our system helps improve efficiency, reduce errors, and enhance guest satisfaction.`,
      icon: "bi-building",
      features: [
        "Online and offline room booking",
        "Front desk and housekeeping management",
        "Integrated billing and invoicing",
        "Staff and task scheduling",
        "Customer feedback tracking",
        "Data-driven performance reports"
      ],
      specifications: {
        version: "1.3.0",
        updated: "April 2025",
        compatibility: "Web-based, all modern browsers"
      }
    },
    
  ]
};

const services = {
  corporate: Products.corporate.map(product => ({
    id: product.id,
    title: product.title,
    description: product.shortDescription,
    icon: product.icon
  })),
  others: Products.others.map(product => ({
    id: product.id,
    title: product.title,
    description: product.shortDescription,
    icon: product.icon
  }))
};

export { Products, services };