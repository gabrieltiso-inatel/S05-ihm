export let resumes = JSON.parse(localStorage.getItem('resumes')) || [
    { 
        id: 1, 
        name: 'Resume 1', 
        content: 'Content of Resume 1',
        description: 'Currículo focado em desenvolvimento frontend, destacando experiência com React, Vue e Angular.',
        file: '../assets/resume1.pdf'
    },
    { 
        id: 2, 
        name: 'Resume 2', 
        content: 'Content of Resume 2',
        description: 'Currículo com ênfase em engenharia de software backend, incluindo projetos em Java e Python.',
        file: '../assets/resume1.pdf'
    },
    { 
        id: 3, 
        name: 'Resume 3', 
        content: 'Content of Resume 3',
        description: 'Currículo voltado para análise de dados e BI, com experiência em SQL, Power BI e Tableau.',
        file: '../assets/resume1.pdf'
    }
]

export let positions = [
    {
        id: 1,
        company: 'Huawei',
        title: 'Desenvolvedor Frontend',
        description: `Como Desenvolvedor Frontend na Huawei, você será responsável por projetar e implementar interfaces de usuário modernas e responsivas utilizando as mais recentes tecnologias web. Você irá colaborar de perto com designers de UX e engenheiros de backend para entregar experiências de usuário perfeitas para nossos produtos globais.

Principais Responsabilidades:
- Desenvolver e manter aplicações web de alta qualidade usando React, Vue ou Angular.
- Trabalhar em conjunto com designers UX/UI para transformar designs em interfaces funcionais.
- Otimizar aplicações para máxima velocidade e escalabilidade.
- Participar de revisões de código e contribuir com as melhores práticas.

Requisitos:
- Proficiência em HTML, CSS e JavaScript (ES6+).
- Experiência com pelo menos um framework frontend moderno.
- Familiaridade com APIs RESTful e controle de versão (Git).
- Forte capacidade de resolução de problemas e comunicação.

Um Dia no Trabalho:
Você começará o dia com uma reunião de alinhamento, colaborará com designers para aprimorar componentes de UI e passará a maior parte do tempo codificando novas funcionalidades ou corrigindo bugs. Também revisará pull requests e, ocasionalmente, apresentará seu trabalho para as partes interessadas.`,
        short_description: 'Desenvolva e construa interfaces modernas na Huawei.',
        image: '../assets/huawei.png'
    },
    {
        id: 2,
        company: 'Ericsson',
        title: 'Engenheiro de Software',
        description: `Junte-se à Ericsson como Engenheiro de Software para trabalhar em sistemas distribuídos que impulsionam a infraestrutura de telecomunicações mundial. Você irá desenvolver soluções de software escaláveis, participar de revisões de código e contribuir para a confiabilidade e desempenho das nossas plataformas principais.

Principais Responsabilidades:
- Projetar, implementar e manter sistemas backend distribuídos.
- Escrever código limpo, eficiente e bem documentado.
- Colaborar com equipes multidisciplinares para definir e entregar novas funcionalidades.
- Solucionar e resolver questões técnicas complexas.

Requisitos:
- Sólidos conhecimentos em Java, C++ ou Python.
- Experiência com sistemas distribuídos e tecnologias de nuvem.
- Compreensão de protocolos de rede e sistemas de banco de dados.
- Capacidade de trabalhar em um ambiente colaborativo e ágil.

Um Dia no Trabalho:
Seu dia envolverá o planejamento e codificação de novas funcionalidades, revisão de código de colegas e participação em discussões de arquitetura. Você também irá monitorar o desempenho do sistema e ajudar a resolver problemas de produção conforme surgirem.`,
        short_description: 'Desenvolva sistemas distribuídos na Ericsson.',
        image: '../assets/ericsson.png'
    },
    {
        id: 3,
        company: 'Nokia',
        title: 'Analista de Dados',
        description: `Como Analista de Dados na Nokia, você irá analisar grandes conjuntos de dados para extrair insights acionáveis que impulsionam decisões de negócios. Você trabalhará com equipes multidisciplinares para criar modelos de dados, desenvolver visualizações e apoiar estratégias orientadas por dados em toda a organização.

Principais Responsabilidades:
- Coletar, processar e analisar grandes volumes de dados de múltiplas fontes.
- Desenvolver dashboards e relatórios para visualizar métricas-chave.
- Identificar tendências e fornecer recomendações acionáveis.
- Colaborar com equipes de negócios e técnicas para apoiar iniciativas estratégicas.

Requisitos:
- Proficiência em SQL e ferramentas de visualização de dados (ex: Tableau, Power BI).
- Forte capacidade analítica e de resolução de problemas.
- Experiência com análise estatística e modelagem de dados.
- Excelentes habilidades de comunicação e apresentação.

Um Dia no Trabalho:
Você passará o dia coletando dados, construindo relatórios e se reunindo com stakeholders para entender suas necessidades. Também apresentará descobertas e ajudará as equipes a tomar decisões baseadas em dados.`,
        short_description: 'Analise dados e gere insights na Nokia.',
        image: '../assets/nokia.png'
    },
    {
        id: 4,
        company: 'Embraer',
        title: 'Engenheiro de Sistemas Embarcados',
        description: `Na Embraer, como Engenheiro de Sistemas Embarcados, você irá projetar, implementar e testar sistemas críticos para aeronaves, garantindo segurança e desempenho. Trabalhará em equipes multidisciplinares para desenvolver soluções inovadoras para a aviação.

Principais Responsabilidades:
- Desenvolver software embarcado para sistemas aeronáuticos.
- Realizar testes e validação de sistemas críticos.
- Colaborar com engenheiros de hardware e software.
- Documentar requisitos e especificações técnicas.

Requisitos:
- Experiência em C/C++ para sistemas embarcados.
- Conhecimento em protocolos de comunicação e RTOS.
- Atenção a detalhes e foco em segurança.
- Inglês técnico para leitura de documentação.

Um Dia no Trabalho:
Você participará de reuniões técnicas, escreverá código para sistemas embarcados, realizará testes em simuladores e colaborará com outras áreas para garantir a integração dos sistemas.`,
        short_description: 'Desenvolva sistemas embarcados para aeronaves na Embraer.',
        image: '../assets/embraer.png'
    },
    {
        id: 5,
        company: 'Vale',
        title: 'Especialista em Sustentabilidade de TI',
        description: `Na Vale, você será responsável por implementar e monitorar práticas de sustentabilidade em projetos de tecnologia da informação, promovendo eficiência energética e redução de impacto ambiental nos processos digitais da empresa.

Principais Responsabilidades:
- Avaliar e otimizar o consumo energético de data centers.
- Desenvolver relatórios de sustentabilidade em TI.
- Propor soluções inovadoras para redução de resíduos eletrônicos.
- Engajar equipes em práticas sustentáveis.

Requisitos:
- Formação em TI, Engenharia Ambiental ou áreas correlatas.
- Conhecimento em infraestrutura de TI e sustentabilidade.
- Habilidade em análise de dados e elaboração de relatórios.
- Perfil proativo e colaborativo.

Um Dia no Trabalho:
Você irá analisar indicadores de sustentabilidade, propor melhorias em processos de TI e apresentar resultados para gestores, além de participar de iniciativas de conscientização ambiental.`,
        short_description: 'Implemente práticas sustentáveis em TI na Vale.',
        image: '../assets/vale.png'
    },
    {
        id: 6,
        company: 'Wurth',
        title: 'Coordenador de Logística',
        description: `Como Coordenador de Logística na Wurth, você será responsável por planejar, coordenar e otimizar processos logísticos, garantindo eficiência na cadeia de suprimentos e satisfação dos clientes.

Principais Responsabilidades:
- Gerenciar operações de recebimento, armazenamento e distribuição.
- Otimizar rotas e processos logísticos.
- Liderar equipe de logística e promover treinamentos.
- Monitorar indicadores de desempenho e propor melhorias.

Requisitos:
- Experiência em logística e gestão de equipes.
- Conhecimento em sistemas de gestão logística (WMS, TMS).
- Habilidade em análise de dados e resolução de problemas.
- Boa comunicação e liderança.

Um Dia no Trabalho:
Você irá acompanhar operações diárias, analisar relatórios de desempenho, liderar reuniões com a equipe e implementar melhorias para garantir entregas eficientes.`,
        short_description: 'Coordene operações logísticas eficientes na Wurth.',
        image: '../assets/wurth.png'
    }
];

export let applications = JSON.parse(localStorage.getItem('applications')) || [];