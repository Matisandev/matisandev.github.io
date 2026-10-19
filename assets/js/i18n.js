/*
 * Traducción del sitio y del CV en PDF (ES · EN · PT).
 * El HTML se escribe en español; este archivo traduce cada texto y atributo visible
 * buscando el texto en español (normalizado) en STRINGS. Lo que no está en STRINGS
 * (nombres propios, tecnologías, correos) se deja tal cual.
 */
(function () {
  "use strict";

  var LANGS = ["es", "en", "pt"];
  var HTML_LANG = { es: "es", en: "en", pt: "pt-BR" };
  var CV_FILES = {
    es: "Matias_Sandoval_CV.pdf",
    en: "Matias_Sandoval_CV_EN.pdf",
    pt: "Matias_Sandoval_CV_PT.pdf"
  };

  /* [español, inglés, portugués] */
  var ENTRIES = [
    // ---------- Metadatos y navegación ----------
    ["Matías Sandoval — Ingeniero en Informática | Cloud · Data · Automatización",
      "Matías Sandoval — Computer Engineer | Cloud · Data · Automation",
      "Matías Sandoval — Engenheiro de Computação | Cloud · Data · Automação"],
    ["Currículum y portfolio de Matías Sandoval, Ingeniero en Informática en Santiago de Chile. Huawei Cloud, ingeniería de datos, PostgreSQL, AuraQuantic (BPM), Power BI y coordinación técnica.",
      "Résumé and portfolio of Matías Sandoval, Computer Engineer in Santiago, Chile. Huawei Cloud, data engineering, PostgreSQL, AuraQuantic (BPM), Power BI and technical coordination.",
      "Currículo e portfólio de Matías Sandoval, Engenheiro de Computação em Santiago, Chile. Huawei Cloud, engenharia de dados, PostgreSQL, AuraQuantic (BPM), Power BI e coordenação técnica."],
    ["Saltar al contenido", "Skip to content", "Pular para o conteúdo"],
    ["Cambiar a modo claro", "Switch to light mode", "Mudar para o modo claro"],
    ["Cambiar a modo oscuro", "Switch to dark mode", "Mudar para o modo escuro"],
    ["Cambiar tema", "Change theme", "Mudar tema"],
    ["Cambiar idioma", "Change language", "Mudar idioma"],
    ["Idioma", "Language", "Idioma"],
    ["Abrir menú de navegación", "Open navigation menu", "Abrir menu de navegação"],
    ["Navegación principal", "Main navigation", "Navegação principal"],
    ["Sobre mí", "About me", "Sobre mim"],
    ["Experiencia", "Experience", "Experiência"],
    ["Proyectos", "Projects", "Projetos"],
    ["Formación", "Education", "Formação"],
    ["Contacto", "Contact", "Contato"],
    ["Redes y contacto", "Social and contact", "Redes e contato"],

    // ---------- Hero ----------
    ["Ingeniero en Informática", "Computer Engineer", "Engenheiro de Computação"],
    ["Cloud · Data · Software · Automatización", "Cloud · Data · Software · Automation",
      "Cloud · Data · Software · Automação"],
    ["Construyo soluciones de datos y automatización de procesos: arquitecturas y pipelines en Huawei Cloud, bases de datos PostgreSQL, procesos BPM en AuraQuantic y visualización en Power BI, coordinando equipos técnicos y áreas funcionales.",
      "I build data and process automation solutions: architectures and pipelines on Huawei Cloud, PostgreSQL databases, BPM processes in AuraQuantic and Power BI visualization, coordinating technical teams and business areas.",
      "Construo soluções de dados e automação de processos: arquiteturas e pipelines na Huawei Cloud, bancos de dados PostgreSQL, processos BPM no AuraQuantic e visualização no Power BI, coordenando equipes técnicas e áreas funcionais."],
    ["Descargar CV en PDF", "Download CV as PDF", "Baixar CV em PDF"],
    ["Retrato de Matías Sandoval, Ingeniero en Informática",
      "Portrait of Matías Sandoval, Computer Engineer",
      "Retrato de Matías Sandoval, Engenheiro de Computação"],

    // ---------- Sobre mí ----------
    ["Cloud, datos y procesos que funcionan en producción",
      "Cloud, data and processes that work in production",
      "Cloud, dados e processos que funcionam em produção"],
    ["Soy Ingeniero en Informática y trabajo en tecnología cloud y gestión de datos, implementando soluciones escalables con Huawei Cloud y PostgreSQL, apoyado en servicios como RDS, DataArts Studio y API Gateway.",
      "I am a Computer Engineer working in cloud technology and data management, implementing scalable solutions with Huawei Cloud and PostgreSQL, backed by services such as RDS, DataArts Studio and API Gateway.",
      "Sou Engenheiro de Computação e trabalho com tecnologia cloud e gestão de dados, implementando soluções escaláveis com Huawei Cloud e PostgreSQL, apoiado em serviços como RDS, DataArts Studio e API Gateway."],
    ["He participado en proyectos de datos abiertos para el sector público: construcción de pipelines ETL, disponibilización de información y capacitación de equipos técnicos para operar plataformas cloud. Actualmente diseño e implemento soluciones BPM en AuraQuantic, modelando procesos, formularios y reglas de negocio, con visualización en Power BI y coordinación técnica del equipo de desarrollo.",
      "I have taken part in open data projects for the public sector: building ETL pipelines, making information available and training technical teams to operate cloud platforms. I currently design and implement BPM solutions in AuraQuantic, modeling processes, forms and business rules, with Power BI visualization and technical coordination of the development team.",
      "Participei de projetos de dados abertos para o setor público: construção de pipelines ETL, disponibilização de informações e capacitação de equipes técnicas para operar plataformas cloud. Atualmente projeto e implemento soluções BPM no AuraQuantic, modelando processos, formulários e regras de negócio, com visualização no Power BI e coordenação técnica da equipe de desenvolvimento."],
    ["Mi foco está en que la información sea confiable, trazable y esté disponible para quien tiene que tomar decisiones.",
      "My focus is on making information reliable, traceable and available to those who have to make decisions.",
      "Meu foco é que a informação seja confiável, rastreável e esteja disponível para quem precisa tomar decisões."],
    ["Huawei Cloud, ETL, arquitectura y disponibilización de datos",
      "Huawei Cloud, ETL, data architecture and data availability",
      "Huawei Cloud, ETL, arquitetura e disponibilização de dados"],
    ["Automatización & BI", "Automation & BI", "Automação & BI"],
    ["BPM en AuraQuantic y reportería en Power BI", "BPM in AuraQuantic and reporting in Power BI",
      "BPM no AuraQuantic e relatórios no Power BI"],
    ["Coordinación técnica", "Technical coordination", "Coordenação técnica"],
    ["Puente entre áreas funcionales y equipos de desarrollo, con metodología SCRUM",
      "Bridge between business areas and development teams, using the SCRUM methodology",
      "Ponte entre áreas funcionais e equipes de desenvolvimento, com metodologia SCRUM"],
    ["Sector público", "Public sector", "Setor público"],
    ["Proyectos ODE y Chile Emprende con el Ministerio de Economía",
      "ODE and Chile Emprende projects with the Ministry of Economy",
      "Projetos ODE e Chile Emprende com o Ministério da Economia"],

    // ---------- Experiencia ----------
    ["Trayectoria profesional", "Professional background", "Trajetória profissional"],
    ["Evolución desde ingeniería de datos en Huawei Cloud hasta desarrollo BPM y coordinación técnica.",
      "Progression from data engineering on Huawei Cloud to BPM development and technical coordination.",
      "Evolução da engenharia de dados na Huawei Cloud ao desenvolvimento BPM e à coordenação técnica."],
    ["Progresión de ingeniero de datos a desarrollador AuraQuantic y coordinador técnico, en proyectos de datos abiertos y automatización de procesos.",
      "Progression from data engineer to AuraQuantic developer and technical coordinator, on open data and process automation projects.",
      "Progressão de engenheiro de dados a desenvolvedor AuraQuantic e coordenador técnico, em projetos de dados abertos e automação de processos."],
    ["Desarrollador AuraQuantic", "AuraQuantic Developer", "Desenvolvedor AuraQuantic"],
    ["Actual", "Current", "Atual"],
    ["Diseño y desarrollo integral de la solución BPM en AuraQuantic, cubriendo planificación, ejecución en terreno, registro, control y análisis. Modelado de procesos, formularios, flujos y reglas de negocio; coordinación técnica del equipo de desarrollo; parametrización continua de la plataforma e integración de componentes de escritorio y móviles para la captura de datos operacionales.",
      "End-to-end design and development of the BPM solution in AuraQuantic, covering planning, field execution, recording, control and analysis. Modeling of processes, forms, workflows and business rules; technical coordination of the development team; ongoing platform configuration and integration of desktop and mobile components to capture operational data.",
      "Projeto e desenvolvimento integral da solução BPM no AuraQuantic, abrangendo planejamento, execução em campo, registro, controle e análise. Modelagem de processos, formulários, fluxos e regras de negócio; coordenação técnica da equipe de desenvolvimento; parametrização contínua da plataforma e integração de componentes desktop e móveis para a captura de dados operacionais."],
    ["Desarrollador AuraQuantic / Power BI", "AuraQuantic / Power BI Developer", "Desenvolvedor AuraQuantic / Power BI"],
    ["Desarrollo e implementación de soluciones BPM en AuraQuantic durante todo el ciclo de vida del proyecto: levantamiento y validación de requerimientos con usuarios y áreas funcionales, modelado de flujos y formularios, parametrización avanzada, mejoras evolutivas y correctivas, integración de datos y apoyo a la visualización de información con Power BI.",
      "Development and implementation of BPM solutions in AuraQuantic throughout the project lifecycle: gathering and validating requirements with users and business areas, modeling workflows and forms, advanced configuration, evolutionary and corrective improvements, data integration and support for information visualization with Power BI.",
      "Desenvolvimento e implementação de soluções BPM no AuraQuantic durante todo o ciclo de vida do projeto: levantamento e validação de requisitos com usuários e áreas funcionais, modelagem de fluxos e formulários, parametrização avançada, melhorias evolutivas e corretivas, integração de dados e apoio à visualização de informações com Power BI."],
    ["Desarrollador Backend & Coordinador Técnico — Plataforma Chile Emprende",
      "Backend Developer & Technical Coordinator — Chile Emprende Platform",
      "Desenvolvedor Backend & Coordenador Técnico — Plataforma Chile Emprende"],
    ["Diseño del modelo de datos y de la lógica backend para la recomendación inteligente de instrumentos de apoyo estatal en una plataforma web para empresas de menor tamaño, con autenticación Clave Única y gestión centralizada de datos (ODE/SAD). Nexo entre la Unidad de Empresas de Menor Tamaño del Ministerio de Economía y el equipo de desarrollo: traducción de requerimientos a especificaciones técnicas, coordinación de tareas, flujos de ingesta vía scraping e integración de APIs, y visualización en Power BI.",
      "Design of the data model and backend logic for the smart recommendation of government support programs on a web platform for smaller businesses, with Clave Única authentication and centralized data management (ODE/SAD). Liaison between the Smaller Businesses Unit of the Ministry of Economy and the development team: translating requirements into technical specifications, coordinating tasks, ingestion flows via scraping and API integration, and Power BI visualization.",
      "Projeto do modelo de dados e da lógica backend para a recomendação inteligente de instrumentos de apoio estatal em uma plataforma web para empresas de menor porte, com autenticação Clave Única e gestão centralizada de dados (ODE/SAD). Elo entre a Unidade de Empresas de Menor Porte do Ministério da Economia e a equipe de desenvolvimento: tradução de requisitos em especificações técnicas, coordenação de tarefas, fluxos de ingestão via scraping e integração de APIs, e visualização no Power BI."],
    ["Ingeniero de Datos — apoyo externo por proyecto", "Data Engineer — external project-based support",
      "Engenheiro de Dados — apoio externo por projeto"],
    ["Habilitación de datos para el portal de datos abiertos «Chile Emprende» sobre Huawei Cloud. Optimización de bases de datos PostgreSQL para visualización, usando RDS, DataArts Migration y DataArts Factory para el procesamiento y carga de datos estructurados, además de la automatización de flujos de ingesta y validación.",
      "Data enablement for the «Chile Emprende» open data portal on Huawei Cloud. Optimization of PostgreSQL databases for visualization, using RDS, DataArts Migration and DataArts Factory to process and load structured data, as well as automation of ingestion and validation flows.",
      "Habilitação de dados para o portal de dados abertos «Chile Emprende» na Huawei Cloud. Otimização de bancos de dados PostgreSQL para visualização, usando RDS, DataArts Migration e DataArts Factory para o processamento e carga de dados estruturados, além da automação de fluxos de ingestão e validação."],
    ["Ingeniero de Datos — proyecto Observatorio de Datos Económicos (ODE)",
      "Data Engineer — Economic Data Observatory (ODE) project",
      "Engenheiro de Dados — projeto Observatório de Dados Econômicos (ODE)"],
    ["Desarrollo cloud sobre Huawei Cloud con DataArts Studio, DataLake Insight, API Gateway, RDS, MRS y OBS: construcción de infraestructura de datos e integración de servicios, creación y administración de Data Lakes, despliegue de APIs para automatizar la carga de datos y uso de servicios de seguridad y gobierno de datos.",
      "Cloud development on Huawei Cloud with DataArts Studio, DataLake Insight, API Gateway, RDS, MRS and OBS: building data infrastructure and integrating services, creating and managing Data Lakes, deploying APIs to automate data loading and using data security and governance services.",
      "Desenvolvimento cloud na Huawei Cloud com DataArts Studio, DataLake Insight, API Gateway, RDS, MRS e OBS: construção de infraestrutura de dados e integração de serviços, criação e administração de Data Lakes, implantação de APIs para automatizar a carga de dados e uso de serviços de segurança e governança de dados."],
    ["Ministerio de Economía, Gobierno de Chile", "Ministry of Economy, Government of Chile",
      "Ministério da Economia, Governo do Chile"],
    ["Consultor Semi Senior Externo", "External Mid-level Consultant", "Consultor Pleno Externo"],
    ["Asesoría en terreno para la implementación del proyecto ODE: pipelines ETL y arquitectura cloud con DataArts Studio, DataLake Insight, API Gateway, RDS, MRS y OBS para integrar y automatizar la ingesta de datos de instituciones públicas (SII, Sercotec, Corfo, DAES, Cooperativas). Capacitación presencial a funcionarios en el uso de la plataforma ODE y fundamentos de SQL, además del apoyo al despliegue en producción y la documentación técnica del flujo de datos.",
      "On-site advisory for the implementation of the ODE project: ETL pipelines and cloud architecture with DataArts Studio, DataLake Insight, API Gateway, RDS, MRS and OBS to integrate and automate data ingestion from public institutions (SII, Sercotec, Corfo, DAES, Cooperativas). In-person training for public officials on using the ODE platform and SQL fundamentals, as well as support for the production rollout and technical documentation of the data flow.",
      "Assessoria em campo para a implementação do projeto ODE: pipelines ETL e arquitetura cloud com DataArts Studio, DataLake Insight, API Gateway, RDS, MRS e OBS para integrar e automatizar a ingestão de dados de instituições públicas (SII, Sercotec, Corfo, DAES, Cooperativas). Capacitação presencial de servidores no uso da plataforma ODE e fundamentos de SQL, além do apoio à implantação em produção e à documentação técnica do fluxo de dados."],
    ["Experiencia previa", "Previous experience", "Experiência anterior"],
    ["Administrador web y estratega de marketing — ElPet", "Web administrator and marketing strategist — ElPet",
      "Administrador web e estrategista de marketing — ElPet"],
    ["Actualización de contenidos en WordPress, SEO y campañas en Google Ads; creación de SKUs, control de inventario e implementación del sistema de ventas Gesnex con capacitación al equipo.",
      "WordPress content updates, SEO and Google Ads campaigns; SKU creation, inventory control and rollout of the Gesnex sales system, including team training.",
      "Atualização de conteúdos no WordPress, SEO e campanhas no Google Ads; criação de SKUs, controle de estoque e implementação do sistema de vendas Gesnex com capacitação da equipe."],
    ["Asistente informático y comercial — UltraPC DHC", "IT and sales assistant — UltraPC DHC",
      "Assistente de informática e comercial — UltraPC DHC"],
    ["Migración a base de datos empresarial con SQL y apoyo técnico al ecommerce.",
      "Migration to a business database with SQL and technical support for the e-commerce store.",
      "Migração para banco de dados empresarial com SQL e apoio técnico ao e-commerce."],
    ["Analista de datos comerciales — CSBYTE", "Sales data analyst — CSBYTE", "Analista de dados comerciais — CSBYTE"],
    ["Recopilación de datos comerciales y análisis de mercado con Python y SQL, con métricas en Excel.",
      "Collection of sales data and market analysis with Python and SQL, with metrics in Excel.",
      "Coleta de dados comerciais e análise de mercado com Python e SQL, com métricas no Excel."],
    ["Administrador Ecommerce y Marketing Digital — CSBYTE", "E-commerce and Digital Marketing Administrator — CSBYTE",
      "Administrador de E-commerce e Marketing Digital — CSBYTE"],
    ["Administración de tiendas en PrestaShop y WooCommerce, contenido audiovisual publicitario y asesoría en computación.",
      "Management of PrestaShop and WooCommerce stores, advertising audiovisual content and computer consulting.",
      "Administração de lojas em PrestaShop e WooCommerce, conteúdo audiovisual publicitário e assessoria em informática."],

    // ---------- Stack ----------
    ["Tecnologías", "Technologies", "Tecnologias"],
    ["Stack y competencias", "Stack and skills", "Stack e competências"],
    ["Herramientas y prácticas que uso a diario en proyectos de datos, cloud y automatización.",
      "Tools and practices I use every day in data, cloud and automation projects.",
      "Ferramentas e práticas que uso no dia a dia em projetos de dados, cloud e automação."],
    ["Datos y bases de datos", "Data and databases", "Dados e bancos de dados"],
    ["Modelado de datos", "Data modeling", "Modelagem de dados"],
    ["Arquitectura de datos", "Data architecture", "Arquitetura de dados"],
    ["Desarrollo", "Development", "Desenvolvimento"],
    ["Procesos y BI", "Processes and BI", "Processos e BI"],
    ["Análisis de requerimientos", "Requirements analysis", "Análise de requisitos"],

    // ---------- Proyectos ----------
    ["Proyectos destacados", "Featured projects", "Projetos em destaque"],
    ["Trabajos profesionales y personales con impacto verificable.",
      "Professional and personal work with verifiable impact.",
      "Trabalhos profissionais e pessoais com impacto verificável."],
    ["Observatorio de Datos Económicos (ODE)", "Economic Data Observatory (ODE)",
      "Observatório de Dados Econômicos (ODE)"],
    ["Infraestructura de datos en Huawei Cloud para integrar información de instituciones públicas (SII, Sercotec, Corfo, DAES, Cooperativas), con pipelines ETL, Data Lakes y APIs de carga automatizada. Incluyó capacitación a funcionarios del Ministerio de Economía.",
      "Data infrastructure on Huawei Cloud to integrate information from public institutions (SII, Sercotec, Corfo, DAES, Cooperativas), with ETL pipelines, Data Lakes and automated loading APIs. It included training for Ministry of Economy officials.",
      "Infraestrutura de dados na Huawei Cloud para integrar informações de instituições públicas (SII, Sercotec, Corfo, DAES, Cooperativas), com pipelines ETL, Data Lakes e APIs de carga automatizada. Incluiu capacitação de servidores do Ministério da Economia."],
    ["Plataforma Chile Emprende", "Chile Emprende Platform", "Plataforma Chile Emprende"],
    ["Plataforma web para empresas de menor tamaño que integra datos de múltiples instituciones públicas y recomienda instrumentos de apoyo estatal, con autenticación Clave Única. Participé en el modelo de datos, la lógica backend y la coordinación técnica.",
      "Web platform for smaller businesses that integrates data from multiple public institutions and recommends government support programs, with Clave Única authentication. I worked on the data model, the backend logic and technical coordination.",
      "Plataforma web para empresas de menor porte que integra dados de múltiplas instituições públicas e recomenda instrumentos de apoio estatal, com autenticação Clave Única. Participei do modelo de dados, da lógica backend e da coordenação técnica."],
    ["Plataforma de contenido sobre patinaje: disciplinas, tutoriales, guías de seguridad y lugares donde patinar, con soporte multiidioma.",
      "Skating content platform: disciplines, tutorials, safety guides and places to skate, with multi-language support.",
      "Plataforma de conteúdo sobre patinação: modalidades, tutoriais, guias de segurança e lugares para patinar, com suporte a vários idiomas."],
    ["Ver sitio", "View site", "Ver site"],
    ["En desarrollo", "In development", "Em desenvolvimento"],

    // ---------- Formación ----------
    ["Educación y certificaciones", "Education and certifications", "Educação e certificações"],
    ["Ingeniería en Informática", "Computer Engineering", "Engenharia de Computação"],
    ["Formación completada. Arquitectura y calidad de software, integración de servicios, modelado y programación de bases de datos, y gestión de proyectos informáticos.",
      "Degree completed. Software architecture and quality, service integration, database modeling and programming, and IT project management.",
      "Formação concluída. Arquitetura e qualidade de software, integração de serviços, modelagem e programação de bancos de dados, e gestão de projetos de TI."],
    ["Pedagogía en Educación Física", "Physical Education Teaching", "Licenciatura em Educação Física"],
    ["Universidad Metropolitana de Ciencias de la Educación · 2018 — 2020 (incompleta)",
      "Universidad Metropolitana de Ciencias de la Educación · 2018 — 2020 (not completed)",
      "Universidad Metropolitana de Ciencias de la Educación · 2018 — 2020 (incompleta)"],
    ["Base en comunicación, planificación y trabajo con equipos, que hoy aplico en la capacitación de usuarios y en la coordinación entre áreas técnicas y funcionales.",
      "A foundation in communication, planning and teamwork that I now apply to user training and to coordination between technical and business areas.",
      "Base em comunicação, planejamento e trabalho em equipe, que hoje aplico na capacitação de usuários e na coordenação entre áreas técnicas e funcionais."],
    ["Certificaciones", "Certifications", "Certificações"],
    ["Inglés internacional — nivel intermedio alto", "International English — upper-intermediate level",
      "Inglês internacional — nível intermediário avançado"],
    ["Programación de software", "Software programming", "Programação de software"],
    ["Calidad de software", "Software quality", "Qualidade de software"],
    ["Arquitectura de software", "Software architecture", "Arquitetura de software"],
    ["Análisis y planificación de proyectos informáticos", "IT project analysis and planning",
      "Análise e planejamento de projetos de TI"],
    ["Gestión de proyectos informáticos", "IT project management", "Gestão de projetos de TI"],
    ["Análisis y desarrollo de modelo de datos", "Data model analysis and development",
      "Análise e desenvolvimento de modelo de dados"],
    ["Desarrollo de apps Android con Kotlin y Jetpack Compose", "Android app development with Kotlin and Jetpack Compose",
      "Desenvolvimento de apps Android com Kotlin e Jetpack Compose"],
    ["Manejo de Python", "Python proficiency", "Domínio de Python"],
    ["Curso de WordPress 2024", "WordPress Course 2024", "Curso de WordPress 2024"],
    ["Ver certificación de Inglés internacional en Duoc UC", "View International English certification from Duoc UC",
      "Ver certificação de Inglês internacional na Duoc UC"],
    ["Ver certificación de Programación de software en Duoc UC", "View Software programming certification from Duoc UC",
      "Ver certificação de Programação de software na Duoc UC"],
    ["Ver certificación de Calidad de software en Duoc UC", "View Software quality certification from Duoc UC",
      "Ver certificação de Qualidade de software na Duoc UC"],
    ["Ver certificación de Arquitectura de software en Duoc UC", "View Software architecture certification from Duoc UC",
      "Ver certificação de Arquitetura de software na Duoc UC"],
    ["Ver certificación de Análisis y planificación de proyectos informáticos en Duoc UC",
      "View IT project analysis and planning certification from Duoc UC",
      "Ver certificação de Análise e planejamento de projetos de TI na Duoc UC"],
    ["Ver certificación de Gestión de proyectos informáticos en Duoc UC",
      "View IT project management certification from Duoc UC",
      "Ver certificação de Gestão de projetos de TI na Duoc UC"],
    ["Ver certificación de Análisis y desarrollo de modelo de datos en Duoc UC",
      "View Data model analysis and development certification from Duoc UC",
      "Ver certificação de Análise e desenvolvimento de modelo de dados na Duoc UC"],
    ["Ver certificación de desarrollo Android en Udemy", "View Android development certification from Udemy",
      "Ver certificação de desenvolvimento Android na Udemy"],
    ["Ver certificación de Python en Udemy", "View Python certification from Udemy",
      "Ver certificação de Python na Udemy"],
    ["Ver certificación de WordPress en Udemy", "View WordPress certification from Udemy",
      "Ver certificação de WordPress na Udemy"],

    // ---------- Referencias y contacto ----------
    ["Referencias", "References", "Referências"],
    ["Referencia laboral", "Professional reference", "Referência profissional"],
    ["Coordinadora de proyectos", "Project Coordinator", "Coordenadora de projetos"],
    ["Conversemos", "Let's talk", "Vamos conversar"],
    ["Para oportunidades o consultas sobre cloud, ingeniería de datos, BPM y BI, escríbeme por WhatsApp, correo o LinkedIn.",
      "For opportunities or questions about cloud, data engineering, BPM and BI, reach me on WhatsApp, email or LinkedIn.",
      "Para oportunidades ou dúvidas sobre cloud, engenharia de dados, BPM e BI, fale comigo pelo WhatsApp, e-mail ou LinkedIn."],
    ["Email", "Email", "E-mail"],
    ["Ubicación", "Location", "Localização"],
    ["Santiago, Región Metropolitana, Chile", "Santiago, Metropolitan Region, Chile",
      "Santiago, Região Metropolitana, Chile"],
    ["Matías Sandoval — Ingeniero en Informática", "Matías Sandoval — Computer Engineer",
      "Matías Sandoval — Engenheiro de Computação"],

    // ---------- Solo en el CV en PDF ----------
    ["Matías Sandoval — Currículum Vitae", "Matías Sandoval — Curriculum Vitae", "Matías Sandoval — Currículo"],
    ["Currículum de Matías Sandoval, Ingeniero en Informática. Cloud · Data · Software · Automatización.",
      "Résumé of Matías Sandoval, Computer Engineer. Cloud · Data · Software · Automation.",
      "Currículo de Matías Sandoval, Engenheiro de Computação. Cloud · Data · Software · Automação."],
    ["Teléfono", "Phone", "Telefone"],
    ["Portfolio", "Portfolio", "Portfólio"],
    ["Huawei Cloud, ETL, arquitectura y disponibilización de datos.",
      "Huawei Cloud, ETL, data architecture and data availability.",
      "Huawei Cloud, ETL, arquitetura e disponibilização de dados."],
    ["BPM en AuraQuantic y reportería en Power BI.", "BPM in AuraQuantic and reporting in Power BI.",
      "BPM no AuraQuantic e relatórios no Power BI."],
    ["Puente entre áreas funcionales y equipos de desarrollo, con metodología SCRUM.",
      "Bridge between business areas and development teams, using the SCRUM methodology.",
      "Ponte entre áreas funcionais e equipes de desenvolvimento, com metodologia SCRUM."],
    ["Proyectos ODE y Chile Emprende con el Ministerio de Economía.",
      "ODE and Chile Emprende projects with the Ministry of Economy.",
      "Projetos ODE e Chile Emprende com o Ministério da Economia."],
    ["Experiencia profesional", "Professional experience", "Experiência profissional"],
    ["Diseño y desarrollo integral de la solución BPM en AuraQuantic, cubriendo planificación, ejecución en terreno, registro, control y análisis.",
      "End-to-end design and development of the BPM solution in AuraQuantic, covering planning, field execution, recording, control and analysis.",
      "Projeto e desenvolvimento integral da solução BPM no AuraQuantic, abrangendo planejamento, execução em campo, registro, controle e análise."],
    ["Modelado de procesos, formularios, flujos y reglas de negocio.",
      "Modeling of processes, forms, workflows and business rules.",
      "Modelagem de processos, formulários, fluxos e regras de negócio."],
    ["Coordinación técnica del equipo de desarrollo.", "Technical coordination of the development team.",
      "Coordenação técnica da equipe de desenvolvimento."],
    ["Parametrización continua de la plataforma.", "Ongoing platform configuration.",
      "Parametrização contínua da plataforma."],
    ["Integración de componentes de escritorio y móviles para la captura de datos operacionales.",
      "Integration of desktop and mobile components to capture operational data.",
      "Integração de componentes desktop e móveis para a captura de dados operacionais."],
    ["Tecnologías:", "Technologies:", "Tecnologias:"],
    ["Desarrollo e implementación de soluciones BPM en AuraQuantic durante todo el ciclo de vida del proyecto.",
      "Development and implementation of BPM solutions in AuraQuantic throughout the project lifecycle.",
      "Desenvolvimento e implementação de soluções BPM no AuraQuantic durante todo o ciclo de vida do projeto."],
    ["Levantamiento y validación de requerimientos con usuarios y áreas funcionales.",
      "Gathering and validating requirements with users and business areas.",
      "Levantamento e validação de requisitos com usuários e áreas funcionais."],
    ["Modelado de flujos y formularios, y parametrización avanzada.",
      "Modeling of workflows and forms, and advanced configuration.",
      "Modelagem de fluxos e formulários, e parametrização avançada."],
    ["Mejoras evolutivas y correctivas.", "Evolutionary and corrective improvements.",
      "Melhorias evolutivas e corretivas."],
    ["Integración de datos y apoyo a la visualización de información con Power BI.",
      "Data integration and support for information visualization with Power BI.",
      "Integração de dados e apoio à visualização de informações com Power BI."],
    ["Diseño del modelo de datos y de la lógica backend para la recomendación inteligente de instrumentos de apoyo estatal en una plataforma web para empresas de menor tamaño, con autenticación Clave Única y gestión centralizada de datos (ODE/SAD).",
      "Design of the data model and backend logic for the smart recommendation of government support programs on a web platform for smaller businesses, with Clave Única authentication and centralized data management (ODE/SAD).",
      "Projeto do modelo de dados e da lógica backend para a recomendação inteligente de instrumentos de apoio estatal em uma plataforma web para empresas de menor porte, com autenticação Clave Única e gestão centralizada de dados (ODE/SAD)."],
    ["Nexo entre la Unidad de Empresas de Menor Tamaño del Ministerio de Economía y el equipo de desarrollo.",
      "Liaison between the Smaller Businesses Unit of the Ministry of Economy and the development team.",
      "Elo entre a Unidade de Empresas de Menor Porte do Ministério da Economia e a equipe de desenvolvimento."],
    ["Traducción de requerimientos a especificaciones técnicas y coordinación de tareas.",
      "Translating requirements into technical specifications and coordinating tasks.",
      "Tradução de requisitos em especificações técnicas e coordenação de tarefas."],
    ["Flujos de ingesta vía scraping e integración de APIs.", "Ingestion flows via scraping and API integration.",
      "Fluxos de ingestão via scraping e integração de APIs."],
    ["Visualización en Power BI.", "Power BI visualization.", "Visualização no Power BI."],
    ["Habilitación de datos para el portal de datos abiertos «Chile Emprende» sobre Huawei Cloud.",
      "Data enablement for the «Chile Emprende» open data portal on Huawei Cloud.",
      "Habilitação de dados para o portal de dados abertos «Chile Emprende» na Huawei Cloud."],
    ["Optimización de bases de datos PostgreSQL para visualización.",
      "Optimization of PostgreSQL databases for visualization.",
      "Otimização de bancos de dados PostgreSQL para visualização."],
    ["Procesamiento y carga de datos estructurados con RDS, DataArts Migration y DataArts Factory.",
      "Processing and loading of structured data with RDS, DataArts Migration and DataArts Factory.",
      "Processamento e carga de dados estruturados com RDS, DataArts Migration e DataArts Factory."],
    ["Automatización de flujos de ingesta y validación.", "Automation of ingestion and validation flows.",
      "Automação de fluxos de ingestão e validação."],
    ["Desarrollo cloud sobre Huawei Cloud con DataArts Studio, DataLake Insight, API Gateway, RDS, MRS y OBS.",
      "Cloud development on Huawei Cloud with DataArts Studio, DataLake Insight, API Gateway, RDS, MRS and OBS.",
      "Desenvolvimento cloud na Huawei Cloud com DataArts Studio, DataLake Insight, API Gateway, RDS, MRS e OBS."],
    ["Construcción de infraestructura de datos e integración de servicios.",
      "Building data infrastructure and integrating services.",
      "Construção de infraestrutura de dados e integração de serviços."],
    ["Creación y administración de Data Lakes.", "Creating and managing Data Lakes.",
      "Criação e administração de Data Lakes."],
    ["Despliegue de APIs para automatizar la carga de datos.", "Deploying APIs to automate data loading.",
      "Implantação de APIs para automatizar a carga de dados."],
    ["Uso de servicios de seguridad y gobierno de datos.", "Use of data security and governance services.",
      "Uso de serviços de segurança e governança de dados."],
    ["Asesoría en terreno para la implementación del proyecto ODE.",
      "On-site advisory for the implementation of the ODE project.",
      "Assessoria em campo para a implementação do projeto ODE."],
    ["Pipelines ETL y arquitectura cloud para integrar y automatizar la ingesta de datos de instituciones públicas (SII, Sercotec, Corfo, DAES, Cooperativas).",
      "ETL pipelines and cloud architecture to integrate and automate data ingestion from public institutions (SII, Sercotec, Corfo, DAES, Cooperativas).",
      "Pipelines ETL e arquitetura cloud para integrar e automatizar a ingestão de dados de instituições públicas (SII, Sercotec, Corfo, DAES, Cooperativas)."],
    ["Capacitación presencial a funcionarios en el uso de la plataforma ODE y fundamentos de SQL.",
      "In-person training for public officials on using the ODE platform and SQL fundamentals.",
      "Capacitação presencial de servidores no uso da plataforma ODE e fundamentos de SQL."],
    ["Apoyo al despliegue en producción y documentación técnica del flujo de datos.",
      "Support for the production rollout and technical documentation of the data flow.",
      "Apoio à implantação em produção e documentação técnica do fluxo de dados."],
    ["Conocimientos y tecnologías", "Skills and technologies", "Conhecimentos e tecnologias"],
    ["ETL · Data Lakes · Modelado de datos · Arquitectura de datos · Automatización de ingesta y validación · Seguridad y gobierno de datos",
      "ETL · Data Lakes · Data modeling · Data architecture · Ingestion and validation automation · Data security and governance",
      "ETL · Data Lakes · Modelagem de dados · Arquitetura de dados · Automação de ingestão e validação · Segurança e governança de dados"],
    ["Bases de datos", "Databases", "Bancos de dados"],
    ["Desarrollo de software", "Software development", "Desenvolvimento de software"],
    ["Automatización", "Automation", "Automação"],
    ["AuraQuantic · BPM · Modelado de procesos, formularios y reglas de negocio",
      "AuraQuantic · BPM · Modeling of processes, forms and business rules",
      "AuraQuantic · BPM · Modelagem de processos, formulários e regras de negócio"],
    ["Gestión de procesos", "Process management", "Gestão de processos"],
    ["Análisis de requerimientos · SCRUM · Coordinación técnica · Capacitación de usuarios",
      "Requirements analysis · SCRUM · Technical coordination · User training",
      "Análise de requisitos · SCRUM · Coordenação técnica · Capacitação de usuários"],
    ["Otras competencias técnicas", "Other technical skills", "Outras competências técnicas"],
    ["Educación", "Education", "Educação"],
    ["Pedagogía en Educación Física (incompleta)", "Physical Education Teaching (not completed)",
      "Licenciatura em Educação Física (incompleta)"],
    ["Validar certificado", "Verify certificate", "Validar certificado"],
    ["Información adicional", "Additional information", "Informações adicionais"],
    ["Idiomas", "Languages", "Idiomas"],
    ["Inglés internacional — nivel intermedio alto (certificación Duoc UC)",
      "International English — upper-intermediate level (Duoc UC certification)",
      "Inglês internacional — nível intermediário avançado (certificação Duoc UC)"],
    ["Proyectos ODE y Chile Emprende con el Ministerio de Economía, Gobierno de Chile.",
      "ODE and Chile Emprende projects with the Ministry of Economy, Government of Chile.",
      "Projetos ODE e Chile Emprende com o Ministério da Economia, Governo do Chile."]
  ];

  var STRINGS = {};
  ENTRIES.forEach(function (entry) {
    STRINGS[entry[0]] = { en: entry[1], pt: entry[2] };
  });

  var MONTHS = {
    en: { Ene: "Jan", Feb: "Feb", Mar: "Mar", Abr: "Apr", May: "May", Jun: "Jun", Jul: "Jul", Ago: "Aug", Sep: "Sep", Oct: "Oct", Nov: "Nov", Dic: "Dec" },
    pt: { Ene: "Jan", Feb: "Fev", Mar: "Mar", Abr: "Abr", May: "Mai", Jun: "Jun", Jul: "Jul", Ago: "Ago", Sep: "Set", Oct: "Out", Nov: "Nov", Dic: "Dez" }
  };
  var PRESENT = { en: "Present", pt: "Atual" };
  var DATE_RANGE = /^(Ene|Feb|Mar|Abr|May|Jun|Jul|Ago|Sep|Oct|Nov|Dic) \d{4} — /;

  function normalize(text) {
    return text.replace(/\s+/g, " ").trim();
  }

  /* Traduce un texto en español; devuelve null si no hay traducción. */
  function lookup(spanish, lang) {
    var key = normalize(spanish);
    if (!key || lang === "es") return null;
    if (STRINGS[key]) return STRINGS[key][lang];
    if (DATE_RANGE.test(key)) {
      return key
        .replace(/\b(Ene|Feb|Mar|Abr|May|Jun|Jul|Ago|Sep|Oct|Nov|Dic)(?= \d{4})/g, function (month) {
          return MONTHS[lang][month];
        })
        .replace("Actualidad", PRESENT[lang]);
    }
    return null;
  }

  function t(spanish, lang) {
    return lookup(spanish, lang || current) || spanish;
  }

  var ATTRIBUTES = ["aria-label", "alt", "title"];
  var originalText = new WeakMap();
  var originalAttrs = new WeakMap();
  var current = "es";

  function translateText(root, lang) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentNode;
        if (!parent || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(parent.nodeName)) return NodeFilter.FILTER_REJECT;
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var node;
    while ((node = walker.nextNode())) {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      var source = originalText.get(node);
      var translated = lookup(source, lang);
      if (translated) {
        var lead = source.match(/^\s*/)[0];
        var trail = source.match(/\s*$/)[0];
        node.nodeValue = lead + translated + trail;
      } else {
        node.nodeValue = source;
      }
    }
  }

  function translateAttributes(root, lang) {
    var selector = ATTRIBUTES.map(function (name) { return "[" + name + "]"; }).join(",") +
      ',meta[name="description"]';
    Array.prototype.forEach.call(root.querySelectorAll(selector), function (element) {
      var names = element.nodeName === "META" ? ["content"] : ATTRIBUTES;
      if (!originalAttrs.has(element)) {
        var stored = {};
        names.forEach(function (name) {
          if (element.hasAttribute(name)) stored[name] = element.getAttribute(name);
        });
        originalAttrs.set(element, stored);
      }
      var originals = originalAttrs.get(element);
      Object.keys(originals).forEach(function (name) {
        element.setAttribute(name, lookup(originals[name], lang) || originals[name]);
      });
    });
  }

  function updateCvLinks(lang) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-cv-pdf]"), function (link) {
      link.setAttribute("href", "assets/docs/" + CV_FILES[lang]);
      link.setAttribute("download", CV_FILES[lang]);
    });
  }

  function apply(lang) {
    if (LANGS.indexOf(lang) === -1) lang = "es";
    current = lang;
    document.documentElement.setAttribute("lang", HTML_LANG[lang]);
    translateText(document.documentElement, lang);
    translateAttributes(document, lang);
    updateCvLinks(lang);
    document.dispatchEvent(new CustomEvent("site:languagechange", { detail: { lang: lang } }));
  }

  function requestedLang() {
    var match = /[?&]lang=(es|en|pt)\b/.exec(window.location.search);
    return match ? match[1] : null;
  }

  window.SiteI18n = {
    langs: LANGS,
    t: t,
    apply: apply,
    requestedLang: requestedLang,
    current: function () { return current; }
  };
})();
