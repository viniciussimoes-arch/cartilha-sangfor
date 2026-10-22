/* =========================================================================
   CARTILHA COMERCIAL SANGFOR — BASE DE CONTEÚDO
   Edite este arquivo para atualizar produtos, dores, objeções e trocas.
   Feito para o time comercial: basta copiar um bloco e trocar o texto.
   Conteúdo baseado em material público da Sangfor (sangfor.com) e adaptado para vendas.
   ========================================================================= */

const PRODUTOS = [
  {
    nome: "Athena NGFW (Firewall de Nova Geração)",
    antigo: "antes chamado NGAF",
    cat: "sec",
    catLabel: "Segurança",
    oneliner: "O 'porteiro inteligente' da rede: barra ataques antes de entrarem na empresa.",
    oquee: "Firewall de nova geração com Inteligência Artificial que inspeciona todo o tráfego de entrada e saída da rede, bloqueando vírus, invasões e sites maliciosos.",
    pracliente: "A empresa fica protegida na 'porta de entrada' da internet, com menos equipamentos e custo menor do que soluções tradicionais.",
    resolve: ["Empresa sem proteção de perímetro moderna", "Ataques e invasões vindas da internet", "Muitos aparelhos de segurança diferentes e caros"],
    numeros: ["Bloqueia até 99% das ameaças no perímetro", "Até 50% de redução no custo total (TCO)", "Reduz o hardware de segurança em até 70%"],
    pralembrar: "É o produto 'porta de entrada'. Quase todo cliente precisa de firewall — ótimo ponto de partida da conversa."
  },
  {
    nome: "Athena EPP / Endpoint Secure",
    antigo: "proteção de endpoint + anti-ransomware",
    cat: "sec",
    catLabel: "Segurança",
    oneliner: "O 'guarda-costas' de cada computador e servidor contra vírus e ransomware.",
    oquee: "Proteção avançada para os dispositivos (PCs, notebooks, servidores) com antivírus de nova geração e detecção por IA, sem depender só de assinaturas antigas.",
    pracliente: "Protege os computadores da empresa contra ransomware (sequestro de dados) e consegue até recuperar arquivos caso sejam criptografados.",
    resolve: ["Medo de ransomware / sequestro de dados", "Antivírus antigo que não pega ameaças novas", "Falta de visão do que acontece nas máquinas"],
    numeros: ["Detecta ransomware em até 3 segundos", "99,83% de precisão de detecção", "Dados de mais de 12 milhões de endpoints"],
    pralembrar: "O argumento mais forte aqui é RANSOMWARE. Toda empresa teme. Use o '3 segundos' e 'recupera os arquivos'."
  },
  {
    nome: "Athena SASE (Acesso Seguro na Nuvem)",
    antigo: "antes Access Secure",
    cat: "sec",
    catLabel: "Segurança",
    oneliner: "Acesso seguro de qualquer lugar, para quem tem home office e filiais.",
    oquee: "Plataforma na nuvem que junta várias proteções (acesso Zero Trust, filtro web, firewall na nuvem, prevenção de vazamento) num único agente leve instalado no dispositivo.",
    pracliente: "Funcionários acessam sistemas com segurança de casa, da filial ou viajando — tudo controlado de um lugar só, sem VPN complicada.",
    resolve: ["Trabalho remoto / híbrido inseguro", "VPN lenta e difícil de gerenciar", "Muitas filiais para conectar com segurança"],
    numeros: ["Líder no Frost Radar SASE 2025", "No Gartner Magic Quadrant SASE 2026", "Mais de 70 pontos de presença (PoPs) no mundo"],
    pralembrar: "Fale de SASE quando o cliente mencionar HOME OFFICE, FILIAIS ou 'VPN ruim'."
  },
  {
    nome: "Athena XDR / Omni-Command",
    antigo: "detecção e resposta estendida",
    cat: "sec",
    catLabel: "Segurança",
    oneliner: "A 'central de monitoramento' que junta tudo num painel só.",
    oquee: "Plataforma que correlaciona os eventos de segurança da rede e dos dispositivos, dando uma visão única das ameaças e respondendo mais rápido.",
    pracliente: "Em vez de olhar vários sistemas separados, a equipe vê tudo num painel e reage mais rápido a incidentes.",
    resolve: ["Equipe pequena de TI sobrecarregada", "Alertas espalhados em vários sistemas", "Demora para responder a incidentes"],
    numeros: ["Visão unificada de rede + endpoint", "Resposta até 40% mais rápida", "Automação de investigação"],
    pralembrar: "Bom para clientes que JÁ TÊM vários produtos e reclamam de 'falta de visão' ou 'equipe sobrecarregada'."
  },
  {
    nome: "Athena MDR (Segurança como Serviço)",
    antigo: "monitoramento gerenciado 24/7",
    cat: "sec",
    catLabel: "Segurança",
    oneliner: "Um 'time de segurança terceirizado' que monitora a empresa 24h por dia.",
    oquee: "Serviço em que especialistas da Sangfor monitoram, investigam e ajudam a responder a ameaças 24/7, no lugar de uma equipe interna.",
    pracliente: "A empresa ganha uma equipe de especialistas vigiando dia e noite, sem precisar contratar e treinar gente.",
    resolve: ["Não tem equipe de segurança dedicada", "Custo imprevisível de incidentes", "Precisa de vigilância 24/7"],
    numeros: ["Monitoramento 24/7", "Entregue como serviço (previsível)", "Pacote amigável para pequenas e médias empresas"],
    pralembrar: "Perfeito para cliente SEM equipe de TI/segurança ou com equipe pequena. Vende tranquilidade."
  },
  {
    nome: "Sangfor HCI (Infraestrutura Hiperconvergente)",
    antigo: "virtualização — alternativa ao VMware",
    cat: "cloud",
    catLabel: "Nuvem/Infra",
    oneliner: "Substitui o VMware: junta servidores, armazenamento e rede num só sistema.",
    oquee: "Plataforma que une computação, armazenamento, rede e segurança num único sistema de software rodando em servidores comuns (x86).",
    pracliente: "O cliente moderniza o data center, reduz custo de licenças (ótimo pós-aumento de preços da VMware/Broadcom) e simplifica a operação.",
    resolve: ["Aumento de preço da VMware/Broadcom", "Data center complexo e caro de manter", "Licenciamento imprevisível e pacotes forçados"],
    numeros: ["Visionária no Gartner MQ Virtualização 2026", "Licença perpétua OU assinatura", "Caso real: 20–30% de redução de custo", "Migração assistida a partir da VMware"],
    pralembrar: "GANCHO DE OURO em 2026: 'Como estão os custos da VMware depois da Broadcom?' — abre a porta para o HCI."
  },
  {
    nome: "Sangfor IAG (Gestão de Acesso à Internet)",
    antigo: "controle de navegação e banda",
    cat: "net",
    catLabel: "Rede",
    oneliner: "Controla e otimiza o uso da internet pelos funcionários.",
    oquee: "Solução que gerencia o acesso à internet: controla sites, aplicativos, banda e dá relatórios de uso.",
    pracliente: "A empresa evita desperdício de internet, bloqueia conteúdo indevido e tem relatórios de produtividade e conformidade.",
    resolve: ["Internet lenta por mau uso", "Falta de controle do que os funcionários acessam", "Necessidade de relatórios de acesso"],
    numeros: ["Controle de aplicativos e banda", "Relatórios de uso detalhados", "Gestão centralizada"],
    pralembrar: "Produto de entrada simples e de valor rápido. Bom para começar relacionamento e depois expandir."
  },
  {
    nome: "Sangfor Agent Builder (IA)",
    antigo: "plataforma de agentes de IA sem código",
    cat: "ai",
    catLabel: "Inteligência Artificial",
    oneliner: "Cria assistentes de IA para a empresa — sem precisar programar.",
    oquee: "Plataforma corporativa que permite criar, publicar e gerenciar agentes de IA sem escrever código, combinando bases de conhecimento da própria empresa com uma interface simples.",
    pracliente: "A empresa transforma a IA numa ferramenta de produtividade do dia a dia, com controle e governança — qualquer área pode criar seu assistente.",
    resolve: ["Quer usar IA mas acha complexo/arriscado", "Precisa automatizar tarefas e conhecimento interno", "Quer IA com controle e governança"],
    numeros: ["Zero código (sem programar)", "Bases de conhecimento da empresa", "Gestão centralizada e controlada"],
    pralembrar: "Gancho moderno: clientes querem IA mas têm medo. Aqui o valor é 'IA fácil, controlada e segura'. Ótimo para abrir conversa de inovação."
  }
];

/* Casos de sucesso reais (material público Sangfor) — prova social para o cliente */
const CASOS = [
  {
    setor: "Segurança / Data Center",
    cliente: "Help AG (provedor de serviços de segurança)",
    desafio: "Substituir a VMware reduzindo custo sem perder desempenho do data center.",
    solucao: "Migração para Sangfor HCI.",
    resultado: "Redução de 20–30% no custo, menor despesa de gestão e melhor desempenho das máquinas virtuais com tecnologia de auto-tiering.",
    produtos: ["Sangfor HCI"]
  },
  {
    setor: "Consultoria (Singapura)",
    cliente: "Grande consultoria de gestão com +10 países",
    desafio: "Acesso remoto via VPN caro e complexo, com várias caixas de segurança por filial e risco de vazamento de dados.",
    solucao: "Sangfor Access Secure (SASE), substituindo firewall + VPN antigos.",
    resultado: "Prova de conceito concluída em semanas e produção em menos de um mês, com segurança unificada num só painel.",
    produtos: ["Athena SASE"]
  },
  {
    setor: "Resposta a Incidente",
    cliente: "Cliente vítima de infecção / ataque",
    desafio: "Rede infectada, sistemas e backups comprometidos.",
    solucao: "Equipe de resposta a incidentes da Sangfor.",
    resultado: "Em até 24 horas: ameaça identificada e contida, backups e sistemas recuperados, ambiente devolvido limpo e seguro.",
    produtos: ["Athena MDR", "Athena EPP"]
  },
  {
    setor: "Educação / Pesquisa",
    cliente: "IBA (universidade, Paquistão)",
    desafio: "Operação de TI e ambiente virtual para alunos e professores, incluindo computação de alto desempenho.",
    solucao: "Sangfor HCI + VDI (desktops virtuais).",
    resultado: "Operação de TI simplificada, melhor uso de recursos e ambiente virtual seguro e flexível para alunos e corpo docente.",
    produtos: ["Sangfor HCI"]
  }
];

/* =========================================================================
   CATÁLOGO DE MODELOS — FIREWALL (Athena NGFW / NGAF) família M-series
   Fonte: portal de parceiros Sangfor (PCPQ). Use o "Nº máx. de usuários"
   como critério comercial para recomendar o modelo pelo porte do cliente.
   OBS: preencha os campos "a confirmar" conforme receber as specs de cada modelo.
   ========================================================================= */
const CATALOGO_FW = [
  {
    modelo: "M5100-AC-I-S", porte: "Pequena empresa",
    usuarios: "600", netThroughput: "2 Gbps", appThroughput: "160 Mbps",
    bandwidth: "80 Mbps", ipsecVpn: "20 Mb", concurrent: "60.000",
    novo: "1.200/s", proxyUser: "500", endpointClient: "250",
    specsCompletas: true
  },
  { modelo: "M5200-AC-I", porte: "Pequena/Média empresa", usuarios: "a confirmar", specsCompletas: false },
  { modelo: "M5400-AC-I", porte: "Média empresa", usuarios: "a confirmar", specsCompletas: false },
  { modelo: "M5500-AC-I", porte: "Média empresa", usuarios: "a confirmar", specsCompletas: false },
  { modelo: "M5500-SK-AC-I", porte: "Média empresa", usuarios: "a confirmar", specsCompletas: false },
  { modelo: "M5600-AC-I", porte: "Média/Grande empresa", usuarios: "a confirmar", specsCompletas: false },
  { modelo: "M5800-SK-AC-I", porte: "Grande empresa", usuarios: "a confirmar", specsCompletas: false },
  { modelo: "M6000-AC-I", porte: "Grande empresa / Data center", usuarios: "a confirmar", specsCompletas: false }
];

/* Rótulos amigáveis das specs, para o time comercial entender */
const SPEC_LABELS = {
  usuarios: "Nº máx. de usuários",
  netThroughput: "Velocidade de rede (throughput)",
  appThroughput: "Velocidade de aplicação",
  bandwidth: "Banda",
  ipsecVpn: "VPN (IPSec)",
  concurrent: "Conexões simultâneas",
  novo: "Novas conexões",
  proxyUser: "Usuários de proxy",
  endpointClient: "Clientes de endpoint"
};

/* Números institucionais da Sangfor — reforçam confiança (combate objeção de marca) */
const INSTITUCIONAL = [
  {big:"+100.000", cap:"clientes no mundo"},
  {big:"100+", cap:"países e regiões (APAC, EMEA, LATAM)"},
  {big:"+7.000", cap:"funcionários globais"},
  {big:"25%", cap:"da receita reinvestida em P&D (2025)"},
  {big:"+3.000", cap:"pedidos de patente"},
  {big:"Zero", cap:"recalls de produto (2025)"}
];

const DORES = [
  {
    dor: "\"Tenho muito medo de ransomware / sequestro de dados\"",
    sinais: ["Já ouviu caso de empresa parada", "Dados críticos", "Setor regulado (saúde, finanças)"],
    pain: "Um ataque de ransomware pode parar a empresa por dias e custar caro em resgate, multas e reputação.",
    sol: "Athena EPP / Endpoint Secure detecta e mata o ransomware em até 3 segundos e consegue recuperar arquivos já criptografados. Para proteção total, combine com Athena NGFW + MDR.",
    say: "\"E se eu te dissesse que dá para detectar um ransomware em 3 segundos e ainda recuperar os arquivos que ele chegou a criptografar? É exatamente isso que a Sangfor faz.\"",
    tags: ["Athena EPP", "Athena NGFW", "Athena MDR"]
  },
  {
    dor: "\"A conta da VMware explodiu depois da Broadcom\"",
    sinais: ["Reclamação de licença", "Renovação cara chegando", "Data center próprio"],
    pain: "Depois da compra pela Broadcom, muitos clientes viram o custo de licenciamento da VMware subir muito, com modelo menos previsível.",
    sol: "Sangfor HCI substitui a VMware juntando computação, armazenamento, rede e segurança num só sistema, com licenciamento mais previsível e menor custo total.",
    say: "\"Vários clientes nossos trocaram a VMware pela Sangfor justamente por causa do aumento. Posso te mostrar uma comparação de custo lado a lado?\"",
    tags: ["Sangfor HCI"]
  },
  {
    dor: "\"Meu antivírus não me dá segurança, parece ultrapassado\"",
    sinais: ["Antivírus antigo baseado em assinatura", "Já teve infecção", "Sem visibilidade das máquinas"],
    pain: "Antivírus tradicionais dependem de uma 'lista' de ameaças conhecidas e deixam passar vírus novos e ataques sofisticados.",
    sol: "Athena EPP usa IA para pegar ameaças desconhecidas (não só as da lista), com detecção e resposta modernas.",
    say: "\"Seu antivírus de hoje só conhece ameaças antigas. O da Sangfor usa IA para pegar o que é novo — inclusive o que ninguém viu ainda.\"",
    tags: ["Athena EPP"]
  },
  {
    dor: "\"Meu pessoal trabalha de casa e a VPN é um problema\"",
    sinais: ["Home office / híbrido", "Várias filiais", "VPN lenta/instável"],
    pain: "VPNs tradicionais são lentas, difíceis de gerenciar e abrem brechas de segurança no trabalho remoto.",
    sol: "Athena SASE entrega acesso seguro de qualquer lugar num agente leve só, sem a dor de cabeça da VPN tradicional.",
    say: "\"Em vez de brigar com a VPN, imagine um acesso seguro, rápido e controlado de um painel só — de casa, da filial ou viajando. Isso é o SASE da Sangfor.\"",
    tags: ["Athena SASE"]
  },
  {
    dor: "\"Minha equipe de TI é pequena e vive apagando incêndio\"",
    sinais: ["1-2 pessoas de TI", "Sem especialista de segurança", "Muitos alertas"],
    pain: "Equipes enxutas não dão conta de monitorar segurança 24/7 nem de investigar cada alerta.",
    sol: "Athena MDR coloca especialistas da Sangfor monitorando 24/7, e o Athena XDR junta tudo num painel para responder mais rápido.",
    say: "\"Você não precisa contratar um time de segurança. A gente entrega esse time como serviço, vigiando sua empresa 24 horas por dia.\"",
    tags: ["Athena MDR", "Athena XDR"]
  },
  {
    dor: "\"Tenho vários produtos de segurança que não conversam entre si\"",
    sinais: ["Firewall de uma marca, antivírus de outra", "Sem visão unificada", "Demora para responder"],
    pain: "Produtos de marcas diferentes não se integram, criando pontos cegos e respostas lentas a ataques.",
    sol: "O ecossistema Sangfor (NGFW + EPP + XDR) foi feito para trabalhar junto, com visão única e resposta automática.",
    say: "\"Quando firewall e antivírus são da mesma família e conversam entre si, um ataque é bloqueado em segundos, sem depender de alguém cruzar as informações na mão.\"",
    tags: ["Athena NGFW", "Athena EPP", "Athena XDR"]
  },
  {
    dor: "\"A internet da empresa vive lenta e não sei o que estão acessando\"",
    sinais: ["Reclamação de lentidão", "Sem controle de navegação", "Precisa de relatórios"],
    pain: "Sem controle, a banda é consumida com uso indevido e não há relatórios de acesso para gestão e conformidade.",
    sol: "Sangfor IAG controla aplicativos e banda, bloqueia conteúdo indevido e entrega relatórios de uso.",
    say: "\"Dá para ver exatamente quem usa o quê, liberar o que importa para o trabalho e recuperar a velocidade da internet — com relatório na mão.\"",
    tags: ["Sangfor IAG"]
  }
];

const TROCAS = [
  {
    usa: "VMware / vSphere / vSAN",
    contexto: "Virtualização / data center",
    gancho: "Pergunte: \"Como ficaram seus custos de licença depois da Broadcom? Já te empurraram para pacotes grandes de assinatura?\"",
    oferta: "Sangfor HCI",
    porque: "Junta computação, armazenamento, rede e segurança num sistema só, com menor custo total e recuperação de desastres embutida. Diferencial-chave: oferece licenciamento PERPÉTUO ou por ASSINATURA (a VMware hoje força assinatura em pacotes grandes). Nomeada Visionária no Gartner Magic Quadrant de Virtualização de Servidores 2026 e tem migração automática das máquinas VMware (com configurações e políticas de segurança).",
    say: "\"Diferente da VMware, você escolhe entre licença perpétua ou assinatura — sem ser forçado a pacote gigante. A migração é assistida e a economia costuma pagar o projeto. Caso real: um cliente reduziu de 20 a 30% o custo. Posso montar essa comparação para você?\""
  },
  {
    usa: "Fortinet / Palo Alto / SonicWall / Cisco (firewall)",
    contexto: "Firewall de perímetro",
    gancho: "Pergunte: \"Quantas caixinhas e licenças separadas você mantém hoje para segurança?\"",
    oferta: "Athena NGFW",
    porque: "Firewall + proteção web + visibilidade num só equipamento, reduzindo hardware em até 70% e o custo total em até 50%, com IA integrada.",
    say: "\"Em vez de empilhar vários aparelhos e licenças, você tem tudo num só, mais barato de manter e mais fácil de operar.\""
  },
  {
    usa: "McAfee / Symantec / Kaspersky / antivírus tradicional",
    contexto: "Proteção de endpoint",
    gancho: "Pergunte: \"Seu antivírus hoje consegue recuperar arquivos se um ransomware passar?\"",
    oferta: "Athena EPP / Endpoint Secure",
    porque: "Detecção por IA (não só assinaturas), para ameaças novas, com anti-ransomware que age em 3 segundos e recupera arquivos.",
    say: "\"Antivírus tradicional só conhece o que já é conhecido. O da Sangfor pega o novo e ainda reverte o estrago do ransomware.\""
  },
  {
    usa: "VPN tradicional / acesso remoto antigo",
    contexto: "Trabalho remoto e filiais",
    gancho: "Pergunte: \"Seus usuários reclamam da VPN? Quanto tempo o TI gasta com isso?\"",
    oferta: "Athena SASE",
    porque: "Substitui a VPN por acesso seguro na nuvem, com Zero Trust e um agente leve só, gerenciado de um painel central.",
    say: "\"Troque a dor de cabeça da VPN por um acesso seguro e rápido de qualquer lugar, controlado de um lugar só.\""
  },
  {
    usa: "Sem monitoramento / só o próprio TI reativo",
    contexto: "Operação de segurança",
    gancho: "Pergunte: \"Quem cuida da sua segurança às 3h da manhã?\"",
    oferta: "Athena MDR",
    porque: "Especialistas da Sangfor monitorando 24/7 como serviço — sem custo de montar e treinar equipe interna.",
    say: "\"Você ganha um time de segurança sem contratar ninguém: a gente vigia, investiga e ajuda a responder, dia e noite.\""
  },
  {
    usa: "Cliente que só tem firewall Sangfor",
    contexto: "Expansão dentro da base (upsell)",
    gancho: "Pergunte: \"Seus computadores e servidores têm a mesma proteção da sua rede?\"",
    oferta: "Athena EPP + Athena XDR",
    porque: "Completa o ecossistema: firewall e endpoint da mesma família conversam entre si e bloqueiam ataques em segundos, com visão única.",
    say: "\"Você já confia na Sangfor na porta de entrada. Levar a mesma inteligência para os computadores fecha o ciclo e tudo passa a se defender junto.\""
  }
];

const OBJECOES = [
  {
    obj: "\"É muito caro / não tenho orçamento\"",
    tipo: "Preço",
    resposta: "Reposicione para CUSTO TOTAL, não preço de etiqueta. A Sangfor costuma reduzir o custo total em até 50% juntando funções num produto só e cortando hardware em até 70%. E um único ransomware custa muito mais que a solução.",
    say: "\"Entendo. Vamos olhar o custo de 3 anos, não só a compra. Quando a gente soma licenças, hardware e o risco de um ataque, a Sangfor normalmente sai mais barata. Posso te mostrar os números?\""
  },
  {
    obj: "\"Já tenho fornecedor / já uso outra marca\"",
    tipo: "Status quo",
    resposta: "Não ataque o concorrente de frente. Pergunte o que incomoda hoje (custo, suporte, complexidade) e mostre o diferencial exato naquele ponto. Ofereça uma prova de conceito (POC) sem compromisso.",
    say: "\"Ótimo que já tem uma solução. Só por curiosidade: tem algo que te incomoda hoje em custo ou suporte? Muitos clientes chegaram à Sangfor justamente por isso — e a troca foi mais simples do que imaginavam.\""
  },
  {
    obj: "\"Sangfor é marca chinesa, tenho receio\"",
    tipo: "Confiança",
    resposta: "Valide a preocupação e traga fatos: +100.000 clientes em 100+ países, reconhecimento do Gartner (Magic Quadrant SASE e Virtualização 2026) e Frost & Sullivan, +3.000 patentes, 25% da receita em P&D e certificações independentes (CyberRatings, OPSWAT Gold). Ofereça referências e POC.",
    say: "\"Compreendo a preocupação. A Sangfor tem mais de 100 mil clientes em 100 países, é reconhecida pelo Gartner e pela Frost & Sullivan e tem certificações independentes de segurança. Posso te passar clientes de referência e montar um teste sem compromisso.\""
  },
  {
    obj: "\"E o suporte? E se der problema?\"",
    tipo: "Suporte",
    resposta: "Destaque suporte local e serviços (inclusive MDR 24/7). Reforce que a solução integrada tem um único ponto de contato, em vez de várias marcas jogando a culpa entre si.",
    say: "\"Com várias marcas, quando dá problema cada um culpa o outro. Com a Sangfor é um só responsável, com suporte próximo — e, se quiser, a gente ainda monitora tudo 24/7 com o serviço gerenciado.\""
  },
  {
    obj: "\"Trocar dá muito trabalho / tenho medo da migração\"",
    tipo: "Migração",
    resposta: "Reduza o risco percebido: existe caminho de migração (ex: VMware → HCI), apoio da equipe e POC. Proponha começar por um projeto-piloto pequeno.",
    say: "\"A gente não vira tudo de uma vez. Começamos com um piloto pequeno, você vê funcionando e aí expande. Nossa equipe conduz a migração junto com você.\""
  },
  {
    obj: "\"Não é a hora / vamos deixar para depois\"",
    tipo: "Urgência",
    resposta: "Crie urgência com risco real (ransomware não espera orçamento) ou com gatilho financeiro (renovação cara da VMware/licença chegando). Agende um próximo passo concreto.",
    say: "\"Faz sentido planejar. Só lembrando que ataque não espera o orçamento, e quanto mais perto da sua renovação, menor a margem de negociação. Que tal já deixarmos um teste agendado para você decidir com dados?\""
  },
  {
    obj: "\"Preciso pensar / falar com a diretoria\"",
    tipo: "Decisão",
    resposta: "Facilite a venda interna dele: ofereça um resumo de 1 página com benefícios e custo, identifique quem decide e proponha uma reunião com esse decisor.",
    say: "\"Perfeito. Deixa eu te ajudar a levar isso para dentro: preparo um resumo de uma página com custo e benefício que você apresenta para a diretoria. Faz sentido a gente marcar 15 minutos com quem decide?\""
  }
];

const DIFERENCIAIS = [
  {t:"Tudo integrado (ecossistema)", d:"Firewall, endpoint e XDR da mesma família conversam entre si e se defendem juntos, em vez de produtos soltos de marcas diferentes."},
  {t:"Anti-ransomware em 3 segundos", d:"Detecta e neutraliza ransomware em até 3 segundos e consegue recuperar arquivos criptografados — argumento emocional e forte."},
  {t:"Menor custo total (TCO)", d:"Até 50% de redução no custo total e até 70% menos hardware, ao juntar várias funções num produto só."},
  {t:"Alternativa real à VMware", d:"Com o aumento de preços pós-Broadcom, o Sangfor HCI é Visionário no Gartner Magic Quadrant de Virtualização de Servidores 2026 e oferece licença perpétua OU assinatura — flexibilidade que a VMware hoje não dá."},
  {t:"Escala e confiança global", d:"Mais de 100.000 clientes em 100+ países, 7.000+ funcionários e 25% da receita reinvestida em P&D — fatos que derrubam a objeção de marca."},
  {t:"Reconhecimento independente", d:"Gartner Magic Quadrant (SASE), Frost & Sullivan, CyberRatings e certificação OPSWAT Gold dão credibilidade contra a objeção de confiança."},
  {t:"Inovação e patentes", d:"Mais de 3.000 pedidos de patente e forte uso de IA em todo o portfólio."},
  {t:"Segurança como serviço (MDR)", d:"Para quem não tem equipe, a Sangfor entrega monitoramento 24/7 como serviço — vende tranquilidade."},
  {t:"Simplicidade de operação", d:"Painéis únicos e gestão centralizada facilitam a vida de equipes de TI enxutas."}
];

/* =========================================================================
   ÍCONES SVG ANIMADOS por categoria de produto (sem imagens externas).
   São desenhos vetoriais leves; a animação vem do CSS.
   ========================================================================= */
const ICONS = {
  // Firewall / rede-perímetro (segurança)
  sec: `<svg viewBox="0 0 64 64" class="picon"><defs></defs>
    <path class="shield" d="M32 4 L56 14 V32 C56 46 45 56 32 60 C19 56 8 46 8 32 V14 Z"/>
    <path class="check" d="M22 32 l7 7 l14 -15" fill="none"/>
    <circle class="pulse" cx="32" cy="30" r="26" fill="none"/>
  </svg>`,
  // Nuvem / infraestrutura
  cloud: `<svg viewBox="0 0 64 64" class="picon">
    <path class="cloudbody" d="M20 44 h26 a10 10 0 0 0 0 -20 a14 14 0 0 0 -27 -3 a9 9 0 0 0 1 23 Z"/>
    <circle class="orbit" cx="32" cy="34" r="27" fill="none"/>
    <rect class="server" x="24" y="30" width="16" height="4" rx="1"/>
    <rect class="server" x="24" y="37" width="16" height="4" rx="1"/>
  </svg>`,
  // Rede / IAG
  net: `<svg viewBox="0 0 64 64" class="picon">
    <circle class="node n1" cx="32" cy="14" r="5"/>
    <circle class="node n2" cx="14" cy="46" r="5"/>
    <circle class="node n3" cx="50" cy="46" r="5"/>
    <circle class="node n4" cx="32" cy="36" r="6"/>
    <path class="wire" d="M32 20 L32 30 M27 40 L17 44 M37 40 L47 44" fill="none"/>
  </svg>`,
  // IA / Agent Builder
  ai: `<svg viewBox="0 0 64 64" class="picon">
    <rect class="chip" x="18" y="18" width="28" height="28" rx="6"/>
    <circle class="core" cx="32" cy="32" r="6"/>
    <path class="leg" d="M24 18 V10 M32 18 V10 M40 18 V10 M24 46 V54 M32 46 V54 M40 46 V54 M18 24 H10 M18 32 H10 M18 40 H10 M46 24 H54 M46 32 H54 M46 40 H54" fill="none"/>
  </svg>`
};
function iconFor(cat){ return ICONS[cat] || ICONS.sec; }

/* =========================================================================
   LOGOS/MARCAS das empresas do grupo (monograma estilizado em SVG).
   Como não temos os arquivos oficiais, geramos um "selo" com a inicial e a
   cor de cada empresa — visual consistente e profissional. Troque por imagens
   reais depois (basta colocar arquivos e referenciar).
   ========================================================================= */
const GRUPO_CORES = {
  "GPS IT":"#1573c4", "EDS":"#2a9e5a", "EDX":"#0d8f82",
  "Beyond":"#6a3fb0", "Pointer":"#1f5fb0", "Bora":"#e08a1e", "Volund":"#c0392b"
};
/* Nome-base do arquivo de logo de cada empresa (coloque na pasta "logos/").
   Aceita .png OU .jpg automaticamente — a cartilha tenta um e, se falhar, tenta o outro.
   Ex.: logos/gps-it.png ou logos/gps-it.jpg. Se nenhum existir, aparece o emblema. */
const GRUPO_LOGO = {
  "GPS IT":"logos/gps-it", "EDS":"logos/eds", "EDX":"logos/edx",
  "Beyond":"logos/beyond", "Pointer":"logos/pointer",
  "Bora":"logos/bora", "Volund":"logos/volund"
};

/* Gera a marca da empresa: tenta o logo real (imagem) e, se falhar, cai no
   emblema estilizado (SVG). A troca é feita em JS pelo evento de erro da imagem. */
function marcaEmpresa(nome){
  const cor = GRUPO_CORES[nome] || "#1573c4";
  const ini = nome.replace(/[^A-Za-z]/g,"").slice(0,2).toUpperCase();
  const cor2 = "#16b3c9";
  const base = GRUPO_LOGO[nome] || "";
  const emblema = `<svg class="emblem" viewBox="0 0 64 64" aria-label="${nome}">
    <defs><linearGradient id="g-${ini}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${cor}"/><stop offset="1" stop-color="${cor2}"/>
    </linearGradient></defs>
    <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#g-${ini})"/>
    <rect x="4" y="4" width="56" height="56" rx="16" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="1.5"/>
    <text x="32" y="41" text-anchor="middle" font-family="Poppins,Arial" font-size="24" font-weight="800" fill="#fff">${ini}</text>
  </svg>`;
  /* A imagem tenta .png; se falhar, tenta .jpg; se falhar de novo, some e fica o emblema.
     Ao carregar, mostra a imagem e esconde o emblema (o SVG logo após). */
  return `<span class="marca" data-nome="${nome}">
    <img class="marca-logo" src="${base}.png" alt="${nome}" data-base="${base}" data-try="jpg" hidden
         onload="this.hidden=false;this.parentElement.querySelector('.emblem').style.display='none'"
         onerror="if(this.dataset.try==='jpg'){this.dataset.try='';this.src=this.dataset.base+'.jpg';}else{this.remove();}" />
    ${emblema}
  </span>`;
}

/* =========================================================================
   RECOMENDADOR — opções de dor e o que recomendar para cada uma.
   "fw:true" significa que a solução envolve firewall (mostra modelo por porte).
   ========================================================================= */
const REC_DORES = [
  {
    label: "Medo de ransomware / sequestro de dados",
    sol: "Athena EPP + NGFW (proteção anti-ransomware)",
    porque: "O Endpoint detecta e mata ransomware em até 3 segundos e recupera arquivos; o firewall barra a ameaça na entrada. Juntos, cobrem endpoint e rede.",
    pitch: "Imagina detectar um ransomware em 3 segundos e ainda recuperar os arquivos que ele chegou a criptografar. É exatamente isso que a Sangfor faz, protegendo os computadores e a rede ao mesmo tempo.",
    produtos: ["Athena EPP", "Athena NGFW", "Athena MDR"], fw:true
  },
  {
    label: "Conta da VMware ficou cara (pós-Broadcom)",
    sol: "Sangfor HCI (alternativa à VMware)",
    porque: "Junta computação, armazenamento, rede e segurança num só sistema, com licença perpétua OU assinatura e migração assistida. Casos reais mostram 20–30% de economia.",
    pitch: "Diferente da VMware, com a Sangfor você escolhe entre licença perpétua ou assinatura, sem pacote gigante forçado. A migração é assistida e a economia costuma pagar o projeto.",
    produtos: ["Sangfor HCI"], fw:false
  },
  {
    label: "Antivírus atual é fraco / ultrapassado",
    sol: "Athena EPP / Endpoint Secure",
    porque: "Usa IA para pegar ameaças desconhecidas, não só as da lista de assinaturas, com resposta moderna e anti-ransomware.",
    pitch: "Seu antivírus de hoje só conhece ameaças antigas. O da Sangfor usa IA para pegar o que é novo, inclusive o que ninguém viu ainda.",
    produtos: ["Athena EPP"], fw:false
  },
  {
    label: "Trabalho remoto / filiais / VPN ruim",
    sol: "Athena SASE (acesso seguro na nuvem)",
    porque: "Substitui a VPN por acesso seguro na nuvem num agente leve só, com Zero Trust e gestão centralizada.",
    pitch: "Em vez de brigar com a VPN, imagine um acesso seguro e rápido de casa, da filial ou viajando, controlado de um painel só. Isso é o SASE da Sangfor.",
    produtos: ["Athena SASE"], fw:false
  },
  {
    label: "Equipe de TI pequena / sem segurança 24/7",
    sol: "Athena MDR + XDR",
    porque: "Especialistas da Sangfor monitoram 24/7 como serviço, e o XDR junta tudo num painel para resposta rápida.",
    pitch: "Você não precisa contratar um time de segurança. A gente entrega esse time como serviço, vigiando sua empresa 24 horas por dia.",
    produtos: ["Athena MDR", "Athena XDR"], fw:false
  },
  {
    label: "Proteger a rede / firewall na entrada",
    sol: "Athena NGFW (firewall de nova geração)",
    porque: "Firewall com IA que barra até 99% das ameaças no perímetro, juntando várias funções num só equipamento e reduzindo custo.",
    pitch: "A porta de entrada da sua empresa merece um porteiro inteligente: o firewall da Sangfor usa IA para barrar as ameaças antes de entrarem, com menos equipamentos e custo menor.",
    produtos: ["Athena NGFW"], fw:true
  },
  {
    label: "Quer usar IA com segurança e controle",
    sol: "Sangfor Agent Builder",
    porque: "Plataforma sem código para criar assistentes de IA usando o conhecimento da empresa, com governança e controle.",
    pitch: "Dá para colocar IA para trabalhar na sua empresa de forma simples, segura e controlada, criando assistentes sem precisar programar.",
    produtos: ["Sangfor Agent Builder"], fw:false
  }
];

/* Estado das respostas do recomendador (preenchido conforme o usuário clica) */
const REC_STATE = { dor:null, porte:null, usa:"" };

/* =========================================================================
   BATTLECARDS — Sangfor vs. cada concorrente, lado a lado.
   Linguagem comercial. "Nunca ataque o concorrente de frente": use como
   argumento de valor, sempre validando o que o cliente tem hoje.
   Baseado em material público (sangfor.com) e análises de mercado 2026.
   ========================================================================= */
const BATTLECARDS = [
  {
    vs: "VMware (Broadcom)",
    area: "Virtualização / Data Center",
    produto: "Sangfor HCI",
    quando: "Cliente usa vSphere/vSAN e sentiu o aumento de preço pós-Broadcom.",
    linhas: [
      { ponto: "Licenciamento", concorrente: "Só assinatura, em pacotes grandes obrigatórios", sangfor: "Perpétuo OU assinatura (você escolhe)" },
      { ponto: "Custo total (TCO)", concorrente: "Subiu bastante após a Broadcom", sangfor: "Menor; casos reais de 20–30% de economia" },
      { ponto: "Arquitetura", concorrente: "Vários módulos e licenças separadas", sangfor: "Computação + storage + rede + segurança num stack só" },
      { ponto: "Migração", concorrente: "—", sangfor: "Migração assistida a partir da VMware (VMs e políticas)" },
      { ponto: "Reconhecimento", concorrente: "Líder consolidado", sangfor: "Visionária no Gartner MQ Virtualização 2026" }
    ],
    vencer: "Foque no bolso e na previsibilidade: 'você escolhe como licenciar e não é forçado a pacote gigante'.",
    cuidado: "VMware tem ecossistema maduro e muita integração de terceiros. Para ambientes muito grandes/complexos, proponha um piloto para provar a paridade.",
    say: "Depois da Broadcom, muita gente está revendo a VMware na renovação. Com a Sangfor você escolhe licença perpétua ou assinatura e a economia costuma pagar o projeto. Topa uma comparação lado a lado?"
  },
  {
    vs: "Nutanix",
    area: "Virtualização / HCI",
    produto: "Sangfor HCI",
    quando: "Cliente avalia HCI e colocou a Nutanix na mesa como alternativa à VMware.",
    linhas: [
      { ponto: "Posicionamento", concorrente: "HCI premium, forte em multicloud híbrido", sangfor: "HCI full-stack com segurança integrada" },
      { ponto: "Custo", concorrente: "Costuma ter custo elevado", sangfor: "Custo-benefício competitivo para a região" },
      { ponto: "Segurança", concorrente: "Depende de camadas adicionais", sangfor: "Segurança embutida no mesmo fabricante" },
      { ponto: "Suporte local", concorrente: "Varia por região", sangfor: "Suporte local próximo e serviços (MDR)" }
    ],
    vencer: "Destaque o conjunto 'infra + segurança do mesmo fabricante' e o custo-benefício.",
    cuidado: "Nutanix é forte tecnicamente e bem avaliada. Não desmereça; posicione pela simplicidade de ter tudo num fornecedor só.",
    say: "A Nutanix é boa, sem dúvida. A vantagem da Sangfor é entregar infraestrutura e segurança do mesmo fabricante, com um custo mais amigável e suporte próximo."
  },
  {
    vs: "Fortinet (FortiGate)",
    area: "Firewall / Segurança de rede",
    produto: "Athena NGFW",
    quando: "Cliente usa FortiGate e quer renovar ou expandir a segurança de perímetro.",
    linhas: [
      { ponto: "Funções core", concorrente: "NAT, IPS, roteamento, filtro de URL", sangfor: "As mesmas funções (substituição 1-para-1 na maioria dos casos)" },
      { ponto: "Integração com endpoint", concorrente: "Fabric (requer licenças do ecossistema)", sangfor: "Firewall + Endpoint da Sangfor se defendem juntos nativamente" },
      { ponto: "Anti-ransomware", concorrente: "Proteção de rede", sangfor: "Rede + endpoint com bloqueio de ransomware em 3s" },
      { ponto: "Custo total", concorrente: "Bom custo no mid-market", sangfor: "Menos hardware (até -70%) e TCO até -50%" }
    ],
    vencer: "Mostre a sinergia firewall+endpoint do mesmo fabricante e o anti-ransomware em 3s.",
    cuidado: "Fortinet é muito popular e tem ótimo desempenho por preço. Reconheça isso e diferencie pela integração e pelo anti-ransomware.",
    say: "O FortiGate é uma boa caixa. A diferença é que, na Sangfor, firewall e proteção dos computadores são do mesmo fabricante e reagem juntos, bloqueando ransomware em segundos."
  },
  {
    vs: "Palo Alto Networks",
    area: "Firewall / Segurança de rede",
    produto: "Athena NGFW",
    quando: "Cliente tem (ou cotou) Palo Alto e o preço/complexidade é um ponto sensível.",
    linhas: [
      { ponto: "Posicionamento", concorrente: "Premium, forte em prevenção de ameaças", sangfor: "Proteção forte com IA e custo bem menor" },
      { ponto: "Preço", concorrente: "Geralmente o mais caro do mercado", sangfor: "Custo total significativamente menor" },
      { ponto: "Operação", concorrente: "Pode exigir equipe mais especializada", sangfor: "Gestão simplificada; bom para equipes enxutas" },
      { ponto: "Integração", concorrente: "Ecossistema amplo", sangfor: "Ecossistema Sangfor integrado (NGFW+EPP+XDR)" }
    ],
    vencer: "O gancho é custo-benefício: 'proteção de alto nível sem o preço premium'.",
    cuidado: "Palo Alto tem forte reputação em prevenção de ameaças. Não negue a qualidade; compare pelo custo-benefício e pela simplicidade.",
    say: "O Palo Alto é excelente e tem preço premium. A Sangfor entrega proteção com IA de alto nível por um custo bem menor e mais fácil de operar. Vale comparar os números."
  },
  {
    vs: "McAfee / Symantec / Kaspersky",
    area: "Antivírus / Endpoint",
    produto: "Athena EPP",
    quando: "Cliente usa antivírus tradicional baseado em assinaturas.",
    linhas: [
      { ponto: "Detecção", concorrente: "Depende de lista de assinaturas conhecidas", sangfor: "IA detecta ameaças novas e desconhecidas" },
      { ponto: "Ransomware", concorrente: "Proteção limitada contra variantes novas", sangfor: "Detecta e mata em 3s + recupera arquivos" },
      { ponto: "Resposta", concorrente: "Muitas vezes manual", sangfor: "Detecção e resposta (EDR) modernas" },
      { ponto: "Integração", concorrente: "Produto isolado", sangfor: "Integra com firewall e XDR da Sangfor" }
    ],
    vencer: "Pergunte: 'seu antivírus recupera arquivos se um ransomware passar?' — e mostre o diferencial.",
    cuidado: "São marcas conhecidas e de confiança do cliente. Posicione como evolução ('nova geração'), não como 'o seu é ruim'.",
    say: "Seu antivírus de hoje conhece o que já é conhecido. O da Sangfor usa IA para pegar o que é novo e ainda reverte o estrago de um ransomware. É a evolução natural."
  }
];

/* =========================================================================
   LINHA DO TEMPO DA VENDA — o ciclo completo, etapa a etapa.
   Para cada etapa: objetivo, o que fazer, erros a evitar, uma frase pronta,
   e atalho para a aba da cartilha que ajuda naquele momento.
   ========================================================================= */
const JORNADA = [
  {
    icone: "🔎", fase: "1. Prospecção",
    objetivo: "Encontrar e abordar o cliente certo.",
    fazer: [
      "Pesquise o cliente: setor, tamanho, o que já usa.",
      "Use um gancho relevante (ex.: custo da VMware, medo de ransomware).",
      "Faça o primeiro contato com foco em marcar uma conversa, não em vender."
    ],
    evitar: "Sair falando de produto antes de entender o cliente.",
    say: "Oi [nome], tudo bem? Trabalho com soluções de segurança e infraestrutura e, vendo o perfil da [empresa], acho que posso te trazer algumas ideias úteis. Teria 15 minutos esta semana?",
    atalho: "diferenciais", atalhoLabel: "⭐ Diferenciais"
  },
  {
    icone: "🎯", fase: "2. Qualificação",
    objetivo: "Entender a dor, o orçamento e quem decide.",
    fazer: [
      "Descubra a principal dor e o que o cliente já usa hoje.",
      "Identifique quem decide e se há orçamento/prazo.",
      "Use o Recomendador para já mapear a solução ideal."
    ],
    evitar: "Gastar energia com quem não decide ou não tem necessidade real.",
    say: "Para eu te ajudar de verdade: hoje, o que mais te preocupa em segurança ou infraestrutura? E como costuma ser a decisão desse tipo de projeto aí?",
    atalho: "recomendador", atalhoLabel: "🎯 Recomendador"
  },
  {
    icone: "💡", fase: "3. Apresentação da solução",
    objetivo: "Conectar a dor do cliente à solução Sangfor.",
    fazer: [
      "Mostre a solução que resolve a dor principal (uma, não o portfólio todo).",
      "Prove com números e reconhecimento (Gartner, 3s anti-ransomware).",
      "Use o Modo Apresentação para mostrar ao cliente."
    ],
    evitar: "Despejar todos os produtos e recursos de uma vez.",
    say: "Pelo que você me contou, o ponto mais crítico é [dor]. É exatamente aí que a Sangfor é mais forte — deixa eu te mostrar como resolvemos isso na prática.",
    atalho: "dores", atalhoLabel: "💢 Dores → Solução"
  },
  {
    icone: "📊", fase: "4. Proposta e valor",
    objetivo: "Mostrar o retorno, não só o preço.",
    fazer: [
      "Apresente o custo em 3 anos, não só a compra.",
      "Use o Simulador de ROI para mostrar a economia.",
      "Compare com o concorrente usando os Battlecards."
    ],
    evitar: "Entrar na guerra de preço sem mostrar o valor/retorno.",
    say: "Em vez de olhar só o preço de compra, vamos ver o retorno: a estimativa é economizar [valor] em 3 anos. Posso detalhar numa proposta objetiva?",
    atalho: "roi", atalhoLabel: "💰 Simulador ROI"
  },
  {
    icone: "🛡️", fase: "5. Tratamento de objeções",
    objetivo: "Remover as barreiras para a decisão.",
    fazer: [
      "Ouça a objeção inteira antes de responder.",
      "Valide a preocupação e use a resposta pronta certa.",
      "Reduza o risco: ofereça uma prova de conceito (POC)."
    ],
    evitar: "Discutir ou menosprezar a objeção do cliente.",
    say: "Entendo totalmente sua preocupação. Deixa eu te mostrar como outros clientes resolveram isso — e, se fizer sentido, a gente faz um teste sem compromisso.",
    atalho: "objecoes", atalhoLabel: "🛡️ Objeções"
  },
  {
    icone: "🤝", fase: "6. Fechamento",
    objetivo: "Conduzir à decisão com um próximo passo claro.",
    fazer: [
      "Resuma o valor combinado e confirme o entendimento.",
      "Proponha um próximo passo concreto (POC, pedido, reunião com decisor).",
      "Facilite a venda interna dele (resumo de 1 página)."
    ],
    evitar: "Terminar a conversa sem um próximo passo agendado.",
    say: "Faz sentido para você? Então proponho o seguinte próximo passo: [POC/proposta/assinatura] até [data]. Posso já deixar agendado?",
    atalho: "pitch", atalhoLabel: "🎤 Pitch Rápido"
  },
  {
    icone: "🌱", fase: "7. Pós-venda e expansão",
    objetivo: "Garantir sucesso e abrir novas vendas (upsell).",
    fazer: [
      "Acompanhe a implantação e o sucesso do cliente.",
      "Peça indicações e um caso de sucesso.",
      "Ofereça os produtos complementares do ecossistema Sangfor."
    ],
    evitar: "Sumir após a venda — é aqui que nasce a próxima.",
    say: "Que bom que está funcionando bem! Já que você confia na Sangfor nesse ponto, faz sentido levar a mesma proteção para [outra área]? E você conhece alguém que também teria esse desafio?",
    atalho: "troca", atalhoLabel: "🔄 Trocar p/ Sangfor"
  }
];

/* =========================================================================
   GRUPO EXTREME — empresas do grupo e o que cada uma faz.
   Usado pela aba "Grupo Extreme" para o time comercial conhecer o portfólio
   completo e saber o que indicar (cross-sell). Ajuste conforme informações oficiais.
   ========================================================================= */
const GRUPO = [
  { nome:"GPS IT", icone:"🛡️", cor:"sec",
    foco:"Infraestrutura, conectividade, cibersegurança e serviços gerenciados (NOC/SOC 24x7).",
    vende:["Data Center & Cloud","Redes (Cisco/Meraki)","Firewall & SOC (Sangfor)","Resposta a incidentes 24/7"],
    nota:"Parceira Premier Cisco no RJ, Sangfor e +15 fabricantes. Show room na América Latina." },
  { nome:"EDS", icone:"🏛️", cor:"cloud",
    foco:"Transformação digital para governo e setor público.",
    vende:["Projetos de governo digital","Modernização do setor público"],
    nota:"Porta de entrada em órgãos públicos — base ideal para cross-sell de infra/segurança da GPS IT." },
  { nome:"EDX", icone:"⚙️", cor:"ai",
    foco:"Jornadas digitais e automação de processos com ServiceNow.",
    vende:["Automação de processos (ServiceNow)","Jornadas digitais"],
    nota:"Cliente que automatiza processos costuma precisar de infra e segurança robustas." },
  { nome:"Beyond", icone:"💡", cor:"net",
    foco:"Inovação e desenvolvimento de software customizado.",
    vende:["Desenvolvimento sob medida","Projetos de inovação"],
    nota:"Aplicações customizadas rodam melhor sobre infra/HCI confiável da GPS IT." },
  { nome:"Pointer", icone:"📈", cor:"cloud",
    foco:"Performance e monitoramento técnico.",
    vende:["Monitoramento técnico","Performance de ambientes"],
    nota:"Combina com NOC/SOC 24x7 da GPS IT para uma oferta de observabilidade completa." },
  { nome:"Bora", icone:"🚀", cor:"net",
    foco:"Empresa do grupo Extreme (frente de negócios digitais).",
    vende:["Soluções digitais do grupo"],
    nota:"Mapear sobreposição e indicação cruzada com a base da GPS IT." },
  { nome:"Volund", icone:"🔧", cor:"ai",
    foco:"Empresa do grupo Extreme (frente de tecnologia/serviços).",
    vende:["Serviços de tecnologia do grupo"],
    nota:"Mapear sinergia com os serviços gerenciados da GPS IT." }
];

/* Fatos do grupo para a aba Grupo Extreme (números de contexto) */
const GRUPO_FATOS = [
  { big:"R$600M", cap:"faturamento atual do grupo" },
  { big:"R$1,5BI", cap:"meta até 2028 (cross-sell é chave)" },
  { big:"7", cap:"empresas no grupo Extreme" },
  { big:"+1.500", cap:"colaboradores" }
];

/* =========================================================================
   CROSS-SELL — "o cliente de X pode comprar Y da GPS IT".
   O coração do Projeto 1: ajuda o time a vender a GPS IT/Sangfor dentro da
   base das outras empresas do grupo, mirando a meta de R$1,5BI.
   ========================================================================= */
const CROSSSELL = [
  {
    origem:"EDS (Governo / setor público)",
    perfil:"Órgãos públicos, ambientes críticos, alta exigência de disponibilidade e conformidade.",
    oferecer:["Sangfor NGFW + SOC 24/7","Sangfor HCI (base de infraestrutura)","Resposta a incidentes 24/7"],
    gancho:"Ambiente público é alvo nº1 de ransomware e exige continuidade. Leve a segurança e a infra da GPS IT para sustentar os projetos digitais da EDS.",
    say:"Já que vocês modernizaram o ambiente com a EDS, faz todo sentido proteger e sustentar isso com o SOC 24/7 e a infraestrutura da GPS IT. Posso te mostrar como blindamos ambientes críticos?"
  },
  {
    origem:"EDX (Automação / ServiceNow)",
    perfil:"Empresas automatizando processos — dependem de infra e rede estáveis.",
    oferecer:["Monitoramento NOC 24x7","Redes Cisco/Meraki","Sangfor NGFW"],
    gancho:"Processo automatizado que cai por falha de rede/infra gera prejuízo. Ofereça a sustentação da GPS IT.",
    say:"Automação só entrega valor se a base não cai. Com o NOC 24x7 e a rede da GPS IT, garantimos que seus processos automatizados fiquem sempre no ar."
  },
  {
    origem:"Beyond (Software customizado)",
    perfil:"Clientes com aplicações sob medida que precisam rodar com desempenho e segurança.",
    oferecer:["Sangfor HCI (virtualização)","Cloud / Data Center","Firewall de aplicação (NGFW/WAF)"],
    gancho:"Aplicação customizada precisa de infra confiável e proteção. Posicione HCI + segurança da GPS IT.",
    say:"Sua aplicação merece uma base à altura. Com o HCI e a segurança da GPS IT, ela roda rápida, segura e com recuperação garantida."
  },
  {
    origem:"Pointer (Monitoramento / performance)",
    perfil:"Clientes focados em performance e observabilidade do ambiente.",
    oferecer:["SOC + NOC 24x7","Sangfor XDR (visão unificada)"],
    gancho:"Monitorar performance + segurança no mesmo pacote é um diferencial. Una Pointer + GPS IT.",
    say:"Já que você acompanha de perto a performance, que tal somar a visão de segurança? Com o SOC e o XDR da GPS IT, você enxerga tudo num painel só."
  },
  {
    origem:"Qualquer cliente do grupo",
    perfil:"Base instalada das 7 empresas — oportunidade de indicação cruzada.",
    oferecer:["Diagnóstico de segurança gratuito","Show room GPS IT (experiência ao vivo)"],
    gancho:"Ofereça um diagnóstico ou uma visita ao show room como porta de entrada de baixo atrito.",
    say:"Temos um show room único na América Latina onde você experimenta a solução ao vivo. Topa conhecer? É uma ótima forma de ver o valor na prática, sem compromisso."
  }
];

/* =========================================================================
   GLOSSÁRIO — termos técnicos em linguagem simples (para o time não travar).
   ========================================================================= */
const GLOSSARIO = [
  { t:"NGFW / NGAF", d:"Firewall de nova geração: o 'porteiro inteligente' da rede, que inspeciona o tráfego e barra ameaças com IA." },
  { t:"Firewall", d:"Barreira que controla o que entra e sai da rede da empresa, bloqueando acessos indevidos." },
  { t:"Ransomware", d:"Vírus que 'sequestra' os dados (criptografa) e exige resgate. A maior dor de segurança das empresas hoje." },
  { t:"Endpoint", d:"Qualquer dispositivo final: computador, notebook, servidor. 'Endpoint Security' protege esses aparelhos." },
  { t:"EDR / EPP", d:"Proteção moderna de endpoint: detecta e responde a ameaças (EDR) além do antivírus tradicional (EPP)." },
  { t:"SASE", d:"Segurança de acesso na nuvem: junta várias proteções num só agente, ideal para home office e filiais." },
  { t:"ZTNA / Zero Trust", d:"'Confiança zero': ninguém acessa nada sem ser verificado, mesmo dentro da rede. Mais seguro que VPN." },
  { t:"SD-WAN", d:"Tecnologia que conecta filiais pela internet de forma inteligente, otimizando banda e custo (ex: Meraki MX)." },
  { t:"HCI", d:"Infraestrutura hiperconvergente: junta servidores, armazenamento e rede num só sistema. Alternativa à VMware." },
  { t:"VMware / Broadcom", d:"Software líder de virtualização; após a compra pela Broadcom, ficou mais caro — abre espaço para o Sangfor HCI." },
  { t:"XDR", d:"Central que junta os alertas de rede e dispositivos num painel só, para responder a ataques mais rápido." },
  { t:"SOC", d:"Centro de operações de segurança: equipe que monitora e responde a ameaças (a GPS IT tem SOC 24x7)." },
  { t:"NOC", d:"Centro de operações de rede: equipe que monitora a infraestrutura 24x7 para evitar quedas." },
  { t:"MDR", d:"Segurança como serviço: especialistas monitoram a empresa 24/7, sem ela precisar montar equipe própria." },
  { t:"TCO", d:"Custo total de propriedade: o gasto real em alguns anos (licença + hardware + suporte), não só o preço de compra." },
  { t:"POC", d:"Prova de conceito: um teste da solução no cliente, sem compromisso, para provar o valor antes da compra." },
  { t:"Data Center", d:"Local (físico ou em nuvem) onde ficam os servidores e sistemas da empresa." },
  { t:"VPN", d:"Túnel de acesso remoto à rede da empresa. Tecnologia mais antiga que o SASE/ZTNA." },
  { t:"Cross-sell", d:"Vender um produto adicional a quem já é cliente (ex: cliente da EDS comprar segurança da GPS IT)." },
  { t:"Cloud Computing", d:"Uso de servidores e serviços pela internet, sem precisar de equipamento próprio." }
];

/* =========================================================================
   FAQ COMERCIAL — perguntas que o cliente sempre faz, com resposta pronta.
   ========================================================================= */
const FAQ = [
  { p:"A Sangfor é confiável? É marca chinesa.", r:"Sim. É reconhecida pelo Gartner (Magic Quadrant) e Frost & Sullivan, tem +100.000 clientes em 100+ países, +3.000 patentes e certificações independentes (CyberRatings, OPSWAT). Posso passar clientes de referência e fazer um teste sem compromisso." },
  { p:"Por que trocar minha VMware?", r:"Depois da Broadcom, o licenciamento ficou mais caro e menos flexível. O Sangfor HCI oferece licença perpétua OU assinatura, migração assistida e, em casos reais, 20–30% de economia — com infra e segurança no mesmo sistema." },
  { p:"Qual a diferença para o Fortinet / Palo Alto?", r:"Entregamos as mesmas funções essenciais, com um diferencial: firewall e proteção de endpoint do mesmo fabricante se defendem juntos, bloqueando ransomware em 3 segundos — normalmente com custo total menor." },
  { p:"Vocês dão suporte? E se der problema?", r:"Sim — a GPS IT tem NOC e SOC 24x7, equipe de projetos e engenharia, e abertura de chamado direto com o fabricante. Um único responsável, sem marcas jogando a culpa entre si." },
  { p:"Quanto tempo leva para implementar?", r:"Depende do escopo, mas trabalhamos com implementação ágil e provas de conceito que ficam prontas em semanas. Dá para começar com um piloto e expandir." },
  { p:"Vocês só vendem ou acompanham depois?", r:"Acompanhamos. Nosso modelo é consultoria + implementação + suporte contínuo, para garantir a sustentação e a evolução tecnológica do ambiente." },
  { p:"Posso ver a solução funcionando antes de comprar?", r:"Sim! Temos um show room único na América Latina onde você experimenta as soluções ao vivo, além de provas de conceito no seu próprio ambiente." },
  { p:"A GPS IT é grande o suficiente para meu projeto?", r:"Somos uma integradora desde 2007, com +1000 projetos entregues, e agora fazemos parte do Grupo Extreme (R$600M, +1.500 colaboradores). Temos porte e experiência para ambientes críticos, inclusive setor público." }
];

/* =========================================================================
   CHECKLIST DE REUNIÃO — o que fazer antes, durante e depois da conversa.
   ========================================================================= */
const CHECKLIST = {
  antes: [
    "Pesquisar o cliente (setor, tamanho, o que já usa)",
    "Definir a hipótese de dor principal",
    "Usar o Recomendador para preparar o pitch",
    "Preparar 1 caso de sucesso do mesmo setor",
    "Revisar objeções prováveis e as respostas",
    "Testar o acesso à cartilha no celular (modo offline)"
  ],
  durante: [
    "Abrir com pergunta (ouvir a dor antes de falar de produto)",
    "Descobrir o que o cliente já usa hoje",
    "Conectar a dor a UMA solução (não despejar o portfólio)",
    "Provar com números (3s anti-ransomware, ROI, Gartner)",
    "Tratar objeções com a frase pronta",
    "Oferecer prova de conceito (POC) ou visita ao show room"
  ],
  depois: [
    "Enviar o resumo/proposta (one-pager em PDF)",
    "Registrar o próximo passo com data",
    "Agendar follow-up",
    "Se fechou: iniciar onboarding e pensar em cross-sell",
    "Se não fechou: anotar o motivo e manter contato"
  ]
};

/* =========================================================================
   SHOW ROOM VIRTUAL — estações da experiência (versão digital do show room físico).
   ========================================================================= */
const SHOWROOM = [
  { icone:"🛡️", cor:"sec", titulo:"Estação de Cibersegurança", desc:"Firewall Sangfor NGFW, Endpoint e SOC 24x7 em ação. Veja a defesa em camadas protegendo a empresa.",
    demo:"Simulação: um ataque de ransomware sendo detectado e bloqueado em 3 segundos.", linkDemo:true },
  { icone:"☁️", cor:"cloud", titulo:"Estação de Infraestrutura", desc:"Sangfor HCI substituindo a VMware: computação, armazenamento e rede num só sistema, com recuperação de desastres.",
    demo:"Painel de virtualização e migração assistida a partir da VMware." },
  { icone:"🔗", cor:"net", titulo:"Estação de Redes & SD-WAN", desc:"Conectividade Cisco e Meraki, com SD-WAN ligando filiais de forma inteligente.",
    demo:"Case real de SD-WAN com Meraki MX conectando múltiplas unidades." },
  { icone:"🖥️", cor:"ai", titulo:"Estação de Monitoramento (NOC/SOC)", desc:"Central de operações 24x7: monitoramento proativo de rede e resposta a incidentes.",
    demo:"Visão de um painel de operações com alertas e resposta em tempo real." }
];
