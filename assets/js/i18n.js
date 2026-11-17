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
    ["Descargar CV en PDF", "Download CV as PDF", "Baixar CV em PDF"],
    ["Descargar CV", "Download CV", "Baixar CV"],
    ["Retrato de Matías Sandoval, Ingeniero en Informática",
      "Portrait of Matías Sandoval, Computer Engineer",
      "Retrato de Matías Sandoval, Engenheiro de Computação"],

    // ---------- Sobre mí ----------
    ["Cloud, datos y procesos que funcionan en producción",
      "Cloud, data and processes that work in production",
      "Cloud, dados e processos que funcionam em produção"],
    ["Huawei Cloud, ETL, arquitectura y disponibilización de datos",
      "Huawei Cloud, ETL, data architecture and data availability",
      "Huawei Cloud, ETL, arquitetura e disponibilização de dados"],
    ["Automatización & BI", "Automation & BI", "Automação & BI"],
    ["Coordinación técnica", "Technical coordination", "Coordenação técnica"],
    ["Puente entre áreas funcionales y equipos de desarrollo, con metodología SCRUM",
      "Bridge between business areas and development teams, using the SCRUM methodology",
      "Ponte entre áreas funcionais e equipes de desenvolvimento, com metodologia SCRUM"],
    ["Sector público", "Public sector", "Setor público"],
    ["Currículum y portfolio de Matías Sandoval, Ingeniero en Informática. Huawei Cloud, ingeniería de datos, PostgreSQL, ETL, BPMS, Power BI y coordinación técnica en proyectos del sector público.",
      "Résumé and portfolio of Matías Sandoval, Computer Engineer. Huawei Cloud, data engineering, PostgreSQL, ETL, BPMS, Power BI and technical coordination on public sector projects.",
      "Currículo e portfólio de Matías Sandoval, Engenheiro de Computação. Huawei Cloud, engenharia de dados, PostgreSQL, ETL, BPMS, Power BI e coordenação técnica em projetos do setor público."],
    ["Construyo soluciones de datos y automatización de procesos para el sector público: capas de datos y procesos ETL en Huawei Cloud, bases de datos PostgreSQL, procesos en plataformas BPMS y reportería en Power BI, coordinando equipos técnicos y áreas funcionales.",
      "I build data and process automation solutions for the public sector: data layers and ETL processes on Huawei Cloud, PostgreSQL databases, processes on BPMS platforms and Power BI reporting, coordinating technical teams and business areas.",
      "Construo soluções de dados e automação de processos para o setor público: camadas de dados e processos ETL na Huawei Cloud, bancos de dados PostgreSQL, processos em plataformas BPMS e relatórios no Power BI, coordenando equipes técnicas e áreas funcionais."],
    ["Implementación de BPMS y reportería en Power BI",
      "BPMS implementation and Power BI reporting",
      "Implementação de BPMS e relatórios no Power BI"],
    ["Implementación de BPMS y reportería en Power BI.",
      "BPMS implementation and Power BI reporting.",
      "Implementação de BPMS e relatórios no Power BI."],
    ["Ministerio de Economía, Ministerio de Defensa Nacional, Armada de Chile y JUNAEB",
      "Ministry of Economy, Ministry of National Defense, Chilean Navy and JUNAEB",
      "Ministério da Economia, Ministério da Defesa Nacional, Marinha do Chile e JUNAEB"],
    ["Ministerio de Economía, Ministerio de Defensa Nacional, Armada de Chile y JUNAEB.",
      "Ministry of Economy, Ministry of National Defense, Chilean Navy and JUNAEB.",
      "Ministério da Economia, Ministério da Defesa Nacional, Marinha do Chile e JUNAEB."],

    ["Ingeniero en Informática especializado en soluciones de datos y automatización de procesos para el sector público. Diseño capas de datos y procesos ETL en Huawei Cloud, implemento procesos en plataformas BPMS y construyo reportería en Power BI, coordinando equipos técnicos y áreas funcionales.",
      "Computer Engineer specializing in data solutions and process automation for the public sector. I design data layers and ETL processes on Huawei Cloud, implement processes on BPMS platforms and build reporting in Power BI, coordinating technical teams and business areas.",
      "Engenheiro de Computação especializado em soluções de dados e automação de processos para o setor público. Projeto camadas de dados e processos ETL na Huawei Cloud, implemento processos em plataformas BPMS e construo relatórios no Power BI, coordenando equipes técnicas e áreas funcionais."],
    ["En SPS Group he trabajado para el Ministerio de Economía, el Ministerio de Defensa Nacional, la Armada de Chile y JUNAEB, muchas veces en proyectos en paralelo. Entre los principales:",
      "At SPS Group I have worked for Chile's Ministry of Economy, Ministry of National Defense, Navy and JUNAEB, often on projects in parallel. Highlights include:",
      "Na SPS Group trabalhei para o Ministério da Economia, o Ministério da Defesa Nacional, a Marinha do Chile e a JUNAEB, muitas vezes em projetos em paralelo. Entre os principais:"],
    ["Observatorio de Datos Económicos (ODE):",
      "Economic Data Observatory (ODE):",
      "Observatório de Dados Econômicos (ODE):"],
    ["diseñé la solución de datos en Huawei Cloud que concentra información de instituciones como SII, Sercotec y DAES para estudios de políticas públicas para pymes, y capacité a más de 20 funcionarios para operarla de forma autónoma.",
      "I designed the data solution on Huawei Cloud that centralizes information from institutions such as SII, Sercotec and DAES for public policy studies on small businesses, and trained more than 20 public officials to run it on their own.",
      "projetei a solução de dados na Huawei Cloud que concentra informações de instituições como SII, Sercotec e DAES para estudos de políticas públicas para pequenas empresas, e capacitei mais de 20 servidores para operá-la de forma autônoma."],
    ["Plataforma Chile Emprende:",
      "Chile Emprende Platform:",
      "Plataforma Chile Emprende:"],
    ["coordiné a un equipo de 4 desarrolladores y fui responsable de los datos que permiten a las Mipymes postular a la oferta pública de fomento.",
      "I coordinated a team of 4 developers and was responsible for the data that lets small businesses apply for public development programs.",
      "coordenei uma equipe de 4 desenvolvedores e fui responsável pelos dados que permitem às MPMEs se candidatar à oferta pública de fomento."],
    ["Armada de Chile y Ministerio de Defensa:",
      "Chilean Navy and Ministry of Defense:",
      "Marinha do Chile e Ministério da Defesa:"],
    ["implementación de BPMS para optimizar procesos internos y de fiscalización.",
      "BPMS implementation to optimize internal and inspection processes.",
      "implementação de BPMS para otimizar processos internos e de fiscalização."],
    ["Mi foco es que la información sea confiable, trazable y esté disponible para quien tiene que tomar decisiones. Busco seguir creciendo en ingeniería de datos y cloud computing, en proyectos con impacto en el sector público o privado.",
      "My focus is on making information reliable, traceable and available to those who have to make decisions. I want to keep growing in data engineering and cloud computing, on projects with impact in the public or private sector.",
      "Meu foco é que a informação seja confiável, rastreável e esteja disponível para quem precisa tomar decisões. Busco continuar crescendo em engenharia de dados e cloud computing, em projetos com impacto no setor público ou privado."],

    // ---------- Experiencia ----------
    ["Trayectoria profesional", "Professional background", "Trajetória profissional"],
    ["Actual", "Current", "Atual"],
    ["Desarrollador Backend & Coordinador Técnico — Plataforma Chile Emprende",
      "Backend Developer & Technical Coordinator — Chile Emprende Platform",
      "Desenvolvedor Backend & Coordenador Técnico — Plataforma Chile Emprende"],
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
    ["Evolución desde ingeniería de datos en Huawei Cloud hasta implementación de BPMS y coordinación técnica.",
      "Progression from data engineering on Huawei Cloud to BPMS implementation and technical coordination.",
      "Evolução da engenharia de dados na Huawei Cloud à implementação de BPMS e à coordenação técnica."],
    ["Consultoría para el sector público, con proyectos en paralelo para distintos clientes. Progresión desde la ingeniería de datos en Huawei Cloud hacia la implementación de BPMS y la coordinación técnica.",
      "Consulting for the public sector, with parallel projects for different clients. Progression from data engineering on Huawei Cloud to BPMS implementation and technical coordination.",
      "Consultoria para o setor público, com projetos em paralelo para diferentes clientes. Progressão da engenharia de dados na Huawei Cloud para a implementação de BPMS e a coordenação técnica."],
    ["Aptitudes",
      "Skills",
      "Competências"],
    ["Aptitudes:",
      "Skills:",
      "Competências:"],
    ["Gestión de Datos y Soporte Operacional — Proyecto TNE",
      "Data Management and Operational Support — TNE Project",
      "Gestão de Dados e Suporte Operacional — Projeto TNE"],
    ["Cliente: Junta Nacional de Auxilio Escolar y Becas (JUNAEB)",
      "Client: National Board of School Aid and Scholarships (JUNAEB)",
      "Cliente: Junta Nacional de Auxílio Escolar e Bolsas (JUNAEB)"],
    ["Gestión y validación de información para los procesos operativos de la Tarjeta Nacional Estudiantil (TNE), en paralelo con el proyecto Argos de la Armada de Chile y con dedicación asignada según las prioridades de cada cliente.",
      "Management and validation of information for the operational processes of the National Student Card (TNE), in parallel with the Chilean Navy's Argos project, with time allocated according to each client's priorities.",
      "Gestão e validação de informações para os processos operacionais da Carteira Nacional Estudantil (TNE), em paralelo com o projeto Argos da Marinha do Chile e com dedicação definida conforme as prioridades de cada cliente."],
    ["Gestión y revisión de la información de los procesos de revalidación y reposición de la TNE.",
      "Management and review of information for TNE revalidation and replacement processes.",
      "Gestão e revisão das informações dos processos de revalidação e reposição da TNE."],
    ["Validación de registros y detección de inconsistencias en bases de datos, asegurando la calidad y trazabilidad de la información.",
      "Record validation and detection of database inconsistencies, ensuring information quality and traceability.",
      "Validação de registros e detecção de inconsistências em bancos de dados, garantindo a qualidade e a rastreabilidade das informações."],
    ["Preparación y organización de archivos MDB, Excel y CSV para su procesamiento y control operativo.",
      "Preparation and organization of MDB, Excel and CSV files for processing and operational control.",
      "Preparação e organização de arquivos MDB, Excel e CSV para processamento e controle operacional."],
    ["Control de correlativos y organización de lotes de procesamiento.",
      "Control of sequential numbering and organization of processing batches.",
      "Controle de numeração sequencial e organização de lotes de processamento."],
    ["Elaboración de reportes y resúmenes de seguimiento de los procesos.",
      "Preparation of reports and summaries to track the processes.",
      "Elaboração de relatórios e resumos de acompanhamento dos processos."],
    ["Calidad de datos",
      "Data quality",
      "Qualidade de dados"],
    ["Validación de datos",
      "Data validation",
      "Validação de dados"],
    ["Carga de datos",
      "Data loading",
      "Carga de dados"],
    ["Análisis de datos",
      "Data analysis",
      "Análise de dados"],
    ["Calidad de datos, Validación de datos, Carga de datos, Excel, Análisis de datos.",
      "Data quality, Data validation, Data loading, Excel, Data analysis.",
      "Qualidade de dados, Validação de dados, Carga de dados, Excel, Análise de dados."],
    ["Desarrollador BPMS & Coordinador Técnico — Proyecto Argos",
      "BPMS Developer & Technical Coordinator — Argos Project",
      "Desenvolvedor BPMS & Coordenador Técnico — Projeto Argos"],
    ["Cliente: Armada de Chile – Policía Marítima",
      "Client: Chilean Navy – Maritime Police",
      "Cliente: Marinha do Chile – Polícia Marítima"],
    ["Implementación y configuración de un BPMS de clase mundial para apoyar los procesos internos de la organización, enfocado en los procesos de fiscalización de la Policía Marítima. Proyecto desarrollado en paralelo con el proyecto TNE de JUNAEB.",
      "Implementation and configuration of a world-class BPMS to support the organization's internal processes, focused on the Maritime Police's inspection processes. Project carried out in parallel with JUNAEB's TNE project.",
      "Implementação e configuração de um BPMS de classe mundial para apoiar os processos internos da organização, com foco nos processos de fiscalização da Polícia Marítima. Projeto desenvolvido em paralelo com o projeto TNE da JUNAEB."],
    ["Diseño e implementación de los procesos de fiscalización, cubriendo todo el ciclo operativo: planificación, ejecución en terreno, registro, control y análisis.",
      "Design and implementation of the inspection processes, covering the full operational cycle: planning, field execution, recording, control and analysis.",
      "Projeto e implementação dos processos de fiscalização, cobrindo todo o ciclo operacional: planejamento, execução em campo, registro, controle e análise."],
    ["Modelado de procesos, formularios, flujos de trabajo y reglas de negocio.",
      "Modeling of processes, forms, workflows and business rules.",
      "Modelagem de processos, formulários, fluxos de trabalho e regras de negócio."],
    ["Coordinación del equipo de desarrollo: asignación de tareas, validación de avances y coherencia de la implementación.",
      "Coordination of the development team: task assignment, progress validation and implementation consistency.",
      "Coordenação da equipe de desenvolvimento: atribuição de tarefas, validação de avanços e coerência da implementação."],
    ["Levantamiento de requerimientos y análisis funcional junto a los equipos operativos y de gestión.",
      "Requirements gathering and functional analysis with the operations and management teams.",
      "Levantamento de requisitos e análise funcional junto às equipes operacionais e de gestão."],
    ["Integración de componentes de escritorio y móviles para el registro operativo en terreno.",
      "Integration of desktop and mobile components for operational recording in the field.",
      "Integração de componentes desktop e móveis para o registro operacional em campo."],
    ["Gestión de procesos de negocio",
      "Business process management",
      "Gestão de processos de negócio"],
    ["Levantamiento de requerimientos",
      "Requirements gathering",
      "Levantamento de requisitos"],
    ["BPMS, AuraQuantic, Gestión de procesos de negocio, Levantamiento de requerimientos, Coordinación técnica.",
      "BPMS, AuraQuantic, Business process management, Requirements gathering, Technical coordination.",
      "BPMS, AuraQuantic, Gestão de processos de negócio, Levantamento de requisitos, Coordenação técnica."],
    ["Desarrollador BPMS & Power BI",
      "BPMS & Power BI Developer",
      "Desenvolvedor BPMS & Power BI"],
    ["Cliente: Ministerio de Defensa Nacional – Subsecretaría",
      "Client: Ministry of National Defense – Undersecretariat",
      "Cliente: Ministério da Defesa Nacional – Subsecretaria"],
    ["Implementación de un BPMS de clase mundial para la optimización y mejora de los procesos internos de la Subsecretaría, complementada con reportería de gestión en Power BI. Proyecto desarrollado en paralelo con la plataforma Chile Emprende.",
      "Implementation of a world-class BPMS to optimize and improve the Undersecretariat's internal processes, complemented by management reporting in Power BI. Project carried out in parallel with the Chile Emprende platform.",
      "Implementação de um BPMS de classe mundial para a otimização e melhoria dos processos internos da Subsecretaria, complementada com relatórios de gestão no Power BI. Projeto desenvolvido em paralelo com a plataforma Chile Emprende."],
    ["Diseño, implementación y mantenimiento de procesos BPM: modelado de flujos, formularios, reglas de negocio y parametrización avanzada.",
      "Design, implementation and maintenance of BPM processes: modeling of workflows, forms, business rules and advanced configuration.",
      "Projeto, implementação e manutenção de processos BPM: modelagem de fluxos, formulários, regras de negócio e parametrização avançada."],
    ["Levantamiento y validación de requerimientos en reuniones directas con usuarios y áreas funcionales.",
      "Gathering and validating requirements in direct meetings with users and business areas.",
      "Levantamento e validação de requisitos em reuniões diretas com usuários e áreas funcionais."],
    ["Mejoras evolutivas y correctivas sobre los procesos existentes.",
      "Evolutionary and corrective improvements to existing processes.",
      "Melhorias evolutivas e corretivas nos processos existentes."],
    ["Desarrollo de 4 reportes en Power BI con los resúmenes de los procesos internos del proyecto.",
      "Development of 4 Power BI reports summarizing the project's internal processes.",
      "Desenvolvimento de 4 relatórios no Power BI com os resumos dos processos internos do projeto."],
    ["BPMS, AuraQuantic, Power BI, SQL Server, Gestión de procesos de negocio.",
      "BPMS, AuraQuantic, Power BI, SQL Server, Business process management.",
      "BPMS, AuraQuantic, Power BI, SQL Server, Gestão de processos de negócio."],
    ["Cliente: Ministerio de Economía, Fomento y Turismo – División de Empresas de Menor Tamaño",
      "Client: Ministry of Economy, Development and Tourism – Smaller Businesses Division",
      "Cliente: Ministério da Economia, Fomento e Turismo – Divisão de Empresas de Menor Porte"],
    ["Chile Emprende es la plataforma oficial del Estado que reúne en un solo lugar la oferta pública de apoyo, financiamiento y capacitación para Mipymes, cooperativas y emprendedores, con autenticación mediante Clave Única.",
      "Chile Emprende is the government's official platform that brings together in one place public support, funding and training programs for micro, small and medium-sized businesses, cooperatives and entrepreneurs, with Clave Única authentication.",
      "Chile Emprende é a plataforma oficial do Estado que reúne em um só lugar a oferta pública de apoio, financiamento e capacitação para micro, pequenas e médias empresas, cooperativas e empreendedores, com autenticação via Clave Única."],
    ["Coordinación de un equipo de 4 desarrolladores y nexo con la Subsecretaría en el levantamiento de requerimientos.",
      "Coordination of a team of 4 developers and liaison with the Undersecretariat for requirements gathering.",
      "Coordenação de uma equipe de 4 desenvolvedores e elo com a Subsecretaria no levantamento de requisitos."],
    ["Responsable de entregar los datos de las instituciones públicas que permiten a las Mipymes postular a los instrumentos de fomento.",
      "Responsible for delivering the public institutions' data that lets small businesses apply for development programs.",
      "Responsável por entregar os dados das instituições públicas que permitem às MPMEs se candidatar aos instrumentos de fomento."],
    ["Diseño del modelo de datos y de la lógica de recomendación personalizada de instrumentos.",
      "Design of the data model and the personalized program recommendation logic.",
      "Projeto do modelo de dados e da lógica de recomendação personalizada de instrumentos."],
    ["Automatización de los procesos ETL con Huawei Cloud, incluyendo flujos de scraping e integración de APIs.",
      "Automation of ETL processes with Huawei Cloud, including scraping flows and API integration.",
      "Automação dos processos ETL com Huawei Cloud, incluindo fluxos de scraping e integração de APIs."],
    ["Entrega de 6 dashboards en Power BI.",
      "Delivery of 6 Power BI dashboards.",
      "Entrega de 6 dashboards no Power BI."],
    ["Coordinación técnica, PostgreSQL, ETL, Huawei Cloud, Modelado de datos.",
      "Technical coordination, PostgreSQL, ETL, Huawei Cloud, Data modeling.",
      "Coordenação técnica, PostgreSQL, ETL, Huawei Cloud, Modelagem de dados."],
    ["Ingeniero de Datos — Observatorio de Datos Económicos (ODE)",
      "Data Engineer — Economic Data Observatory (ODE)",
      "Engenheiro de Dados — Observatório de Dados Econômicos (ODE)"],
    ["Implementación de una plataforma que concentra los datos para realizar estudios de políticas públicas orientadas a las pymes del país: el Observatorio de Datos Económicos (ODE), también llamado Sistema de Administración de Datos (SAD).",
      "Implementation of a platform that centralizes the data used for public policy studies on the country's small businesses: the Economic Data Observatory (ODE), also known as the Data Administration System (SAD).",
      "Implementação de uma plataforma que concentra os dados para estudos de políticas públicas voltadas às pequenas empresas do país: o Observatório de Dados Econômicos (ODE), também chamado de Sistema de Administração de Dados (SAD)."],
    ["Diseño de la solución de datos (ago. – dic. 2024)",
      "Data solution design (Aug – Dec 2024)",
      "Projeto da solução de dados (ago. – dez. 2024)"],
    ["Diseño de la capa de datos completa del ODE en Huawei Cloud.",
      "Design of the ODE's complete data layer on Huawei Cloud.",
      "Projeto da camada de dados completa do ODE na Huawei Cloud."],
    ["Recepción y almacenamiento de datos con API Gateway y RDS, automatizando la carga desde 6 fuentes institucionales (SII, Sercotec, DAES, entre otras).",
      "Data intake and storage with API Gateway and RDS, automating loads from 6 institutional sources (SII, Sercotec, DAES, among others).",
      "Recepção e armazenamento de dados com API Gateway e RDS, automatizando a carga de 6 fontes institucionais (SII, Sercotec, DAES, entre outras)."],
    ["Buckets OBS para recibir los archivos Excel de origen y guardar los logs de los procesos ETL.",
      "OBS buckets to receive the source Excel files and store the ETL process logs.",
      "Buckets OBS para receber os arquivos Excel de origem e guardar os logs dos processos ETL."],
    ["Orquestación ETL en DataArts Studio (DataArts Factory), conectando todos los servicios de la solución.",
      "ETL orchestration in DataArts Studio (DataArts Factory), connecting all the services in the solution.",
      "Orquestração ETL no DataArts Studio (DataArts Factory), conectando todos os serviços da solução."],
    ["Capacitación presencial en el Ministerio (ene. – jul. 2025)",
      "On-site training at the Ministry (Jan – Jul 2025)",
      "Capacitação presencial no Ministério (jan. – jul. 2025)"],
    ["Capacitación a más de 20 funcionarios en Huawei Cloud y SQL.",
      "Trained more than 20 public officials in Huawei Cloud and SQL.",
      "Capacitação de mais de 20 servidores em Huawei Cloud e SQL."],
    ["Formación para crear sus propios procesos ETL y cargar datos de distintas instituciones públicas, dejando la operación del ODE en manos del Ministerio.",
      "Taught them to build their own ETL processes and load data from different public institutions, handing over the ODE's operation to the Ministry.",
      "Formação para criarem seus próprios processos ETL e carregarem dados de diferentes instituições públicas, deixando a operação do ODE nas mãos do Ministério."],
    ["Portal de Datos",
      "Data Portal",
      "Portal de Dados"],
    ["Integración de los datos del ODE al Portal de Datos en Power BI.",
      "Integration of ODE data into the Power BI Data Portal.",
      "Integração dos dados do ODE ao Portal de Dados no Power BI."],
    ["Entrega de 7 reportes y 3 conjuntos de datos, entre ellos 4 reportes del Portal, uno por institución.",
      "Delivered 7 reports and 3 datasets, including 4 Portal reports, one per institution.",
      "Entrega de 7 relatórios e 3 conjuntos de dados, entre eles 4 relatórios do Portal, um por instituição."],
    ["Capacitación técnica",
      "Technical training",
      "Capacitação técnica"],
    ["Huawei Cloud, ETL, SQL, Arquitectura de datos, Capacitación técnica.",
      "Huawei Cloud, ETL, SQL, Data architecture, Technical training.",
      "Huawei Cloud, ETL, SQL, Arquitetura de dados, Capacitação técnica."],

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
    ["Observatorio de Datos Económicos (ODE)", "Economic Data Observatory (ODE)",
      "Observatório de Dados Econômicos (ODE)"],
    ["Plataforma Chile Emprende", "Chile Emprende Platform", "Plataforma Chile Emprende"],
    ["Ver sitio", "View site", "Ver site"],
    ["Proyectos para el sector público con impacto verificable.",
      "Public sector projects with verifiable impact.",
      "Projetos para o setor público com impacto verificável."],
    ["Solución de datos en Huawei Cloud que concentra información de instituciones públicas (SII, Sercotec, Corfo, DAES, Cooperativas) para estudios de políticas públicas orientadas a las pymes, con procesos ETL y APIs de carga automatizada. Incluyó la capacitación de más de 20 funcionarios del Ministerio de Economía.",
      "Data solution on Huawei Cloud that centralizes information from public institutions (SII, Sercotec, Corfo, DAES, Cooperativas) for public policy studies on small businesses, with ETL processes and automated loading APIs. It included training more than 20 Ministry of Economy officials.",
      "Solução de dados na Huawei Cloud que concentra informações de instituições públicas (SII, Sercotec, Corfo, DAES, Cooperativas) para estudos de políticas públicas voltadas às pequenas empresas, com processos ETL e APIs de carga automatizada. Incluiu a capacitação de mais de 20 servidores do Ministério da Economia."],
    ["Plataforma oficial del Estado que reúne la oferta pública de apoyo, financiamiento y capacitación para Mipymes, con autenticación Clave Única. Coordiné al equipo técnico y diseñé el modelo de datos, la lógica de recomendación y los procesos ETL.",
      "The government's official platform bringing together public support, funding and training programs for small businesses, with Clave Única authentication. I coordinated the technical team and designed the data model, the recommendation logic and the ETL processes.",
      "Plataforma oficial do Estado que reúne a oferta pública de apoio, financiamento e capacitação para MPMEs, com autenticação Clave Única. Coordenei a equipe técnica e projetei o modelo de dados, a lógica de recomendação e os processos ETL."],
    ["Proyecto Argos — Armada de Chile",
      "Argos Project — Chilean Navy",
      "Projeto Argos — Marinha do Chile"],
    ["Implementación de un BPMS para los procesos de fiscalización de la Policía Marítima, desde la planificación y la ejecución en terreno hasta el registro, control y análisis, con componentes de escritorio y móviles.",
      "BPMS implementation for the Maritime Police's inspection processes, from planning and field execution to recording, control and analysis, with desktop and mobile components.",
      "Implementação de um BPMS para os processos de fiscalização da Polícia Marítima, do planejamento e da execução em campo ao registro, controle e análise, com componentes desktop e móveis."],
    ["BPMS — Ministerio de Defensa Nacional",
      "BPMS — Ministry of National Defense",
      "BPMS — Ministério da Defesa Nacional"],
    ["Implementación de un BPMS para optimizar los procesos internos de la Subsecretaría, con 4 reportes de gestión en Power BI.",
      "BPMS implementation to optimize the Undersecretariat's internal processes, with 4 management reports in Power BI.",
      "Implementação de um BPMS para otimizar os processos internos da Subsecretaria, com 4 relatórios de gestão no Power BI."],
    ["BPMS, AuraQuantic, Gestión de procesos.",
      "BPMS, AuraQuantic, Process management.",
      "BPMS, AuraQuantic, Gestão de processos."],

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
    ["Datos de contacto disponibles a solicitud, ya que pueden no estar actualizados.",
      "Contact details available on request, as they may not be up to date.",
      "Dados de contato disponíveis mediante solicitação, pois podem não estar atualizados."],
    ["Coordinadora de proyectos", "Project Coordinator", "Coordenadora de projetos"],
    ["Conversemos", "Let's talk", "Vamos conversar"],
    ["Email", "Email", "E-mail"],
    ["Ubicación", "Location", "Localização"],
    ["Matías Sandoval — Ingeniero en Informática", "Matías Sandoval — Computer Engineer",
      "Matías Sandoval — Engenheiro de Computação"],
    ["Para oportunidades laborales, escríbeme a mi correo o contáctame por LinkedIn.",
      "For job opportunities, email me or reach out on LinkedIn.",
      "Para oportunidades de trabalho, escreva para o meu e-mail ou fale comigo pelo LinkedIn."],
    ["BPMS · AuraQuantic · Modelado de procesos, formularios y reglas de negocio",
      "BPMS · AuraQuantic · Modeling of processes, forms and business rules",
      "BPMS · AuraQuantic · Modelagem de processos, formulários e regras de negócio"],

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
    ["Puente entre áreas funcionales y equipos de desarrollo, con metodología SCRUM.",
      "Bridge between business areas and development teams, using the SCRUM methodology.",
      "Ponte entre áreas funcionais e equipes de desenvolvimento, com metodologia SCRUM."],
    ["Experiencia profesional", "Professional experience", "Experiência profissional"],
    ["Tecnologías:", "Technologies:", "Tecnologias:"],
    ["Conocimientos y tecnologías", "Skills and technologies", "Conhecimentos e tecnologias"],
    ["ETL · Data Lakes · Modelado de datos · Arquitectura de datos · Automatización de ingesta y validación · Seguridad y gobierno de datos",
      "ETL · Data Lakes · Data modeling · Data architecture · Ingestion and validation automation · Data security and governance",
      "ETL · Data Lakes · Modelagem de dados · Arquitetura de dados · Automação de ingestão e validação · Segurança e governança de dados"],
    ["Bases de datos", "Databases", "Bancos de dados"],
    ["Desarrollo de software", "Software development", "Desenvolvimento de software"],
    ["Automatización", "Automation", "Automação"],
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
      "Inglês internacional — nível intermediário avançado (certificação Duoc UC)"]
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
