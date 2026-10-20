/* Cartilha Comercial Sangfor — lógica de navegação, render e busca */

const app = document.getElementById("app");
const tabs = document.getElementById("tabs");
const search = document.getElementById("search");
let currentView = "inicio";

/* ---------- Logo: usa logo.png se existir; senão, texto "SANGFOR" ----------
   Começa mostrando o texto (fallback). Se a imagem carregar de verdade,
   troca pela imagem. Assim a cartilha nunca fica com um espaço vazio. */
(function setupLogo(){
  document.body.classList.add("no-logo-img"); // estado inicial: mostra texto
  ["logo-img","splash-logo-img"].forEach(id=>{
    const img = document.getElementById(id);
    if(!img) return;
    img.addEventListener("load", ()=>{
      if(img.naturalWidth > 0) document.body.classList.remove("no-logo-img");
    });
    img.addEventListener("error", ()=>{ img.style.display="none"; });
  });
})();

/* ---------- Renderizadores de cada aba ---------- */

function viewInicio() {
  return `
  <div class="hero">
    <div class="blob b1"></div><div class="blob b2"></div>
    <h1><span id="typed" data-text="Cartilha Comercial Sangfor"></span><span class="caret">|</span></h1>
    <p>Seu guia de bolso para vender melhor: produtos em linguagem simples, dores conectadas
    a soluções, trocas de concorrentes e respostas prontas para objeções.</p>
  </div>

  <div class="stat-grid">
    <div class="stat"><div class="big" data-count="3" data-suffix="s">0</div><div class="cap">para detectar ransomware (Endpoint)</div></div>
    <div class="stat"><div class="big" data-count="50" data-prefix="até " data-suffix="%">0</div><div class="cap">de redução no custo total (TCO)</div></div>
    <div class="stat"><div class="big" data-count="99" data-suffix="%">0</div><div class="cap">das ameaças barradas no perímetro</div></div>
    <div class="stat"><div class="big" data-count="3000" data-prefix="+" data-sep="true">0</div><div class="cap">pedidos de patente (inovação)</div></div>
  </div>

  <div class="callout">
    <b>Como usar esta cartilha em 3 passos:</b>
    <ol style="margin:8px 0 0">
      <li><b>Ouça a dor</b> do cliente → vá na aba <b>Dores → Solução</b>.</li>
      <li><b>Descubra o que ele já usa</b> → vá na aba <b>Trocar p/ Sangfor</b> para propor a migração certa.</li>
      <li><b>Se travar numa objeção</b> → vá na aba <b>Objeções</b> e use a frase pronta.</li>
    </ol>
  </div>

  <h2>Portfólio em uma linha</h2>
  <div class="grid">
    ${PRODUTOS.map(p => `
      <div class="card icon-${p.cat}">
        ${iconFor(p.cat)}
        <span class="pill ${p.cat}">${p.catLabel}</span>
        <h3>${p.nome}</h3>
        <p class="one">${p.oneliner}</p>
      </div>`).join("")}
  </div>`;
}

/* ---------- RECOMENDADOR INTERATIVO ---------- */
function viewRecomendador() {
  return `
  <h1>🎯 Recomendador de Solução</h1>
  <p class="lead">Responda 3 perguntas rápidas sobre o cliente e receba a solução Sangfor ideal,
  o que falar e as objeções que podem aparecer. Perfeito para montar a conversa em segundos.</p>

  <div class="card" style="padding:24px">
    <div class="label">1 · Qual a principal dor do cliente?</div>
    <div class="opts" id="opt-dor">
      ${REC_DORES.map((d,i)=>`<button class="opt" data-group="dor" data-val="${i}">${d.label}</button>`).join("")}
    </div>

    <div class="label" style="margin-top:18px">2 · Qual o porte da empresa?</div>
    <div class="opts" id="opt-porte">
      <button class="opt" data-group="porte" data-val="pequena">Pequena (até ~300 pessoas)</button>
      <button class="opt" data-group="porte" data-val="media">Média (~300 a 1.000)</button>
      <button class="opt" data-group="porte" data-val="grande">Grande / Data center</button>
    </div>

    <div class="label" style="margin-top:18px">3 · O cliente já usa alguma solução hoje? (opcional)</div>
    <div class="opts" id="opt-usa">
      <button class="opt" data-group="usa" data-val="">Não sei / nenhuma</button>
      <button class="opt" data-group="usa" data-val="vmware">VMware</button>
      <button class="opt" data-group="usa" data-val="firewall">Outro firewall (Fortinet, Palo Alto...)</button>
      <button class="opt" data-group="usa" data-val="antivirus">Antivírus tradicional</button>
      <button class="opt" data-group="usa" data-val="vpn">VPN antiga</button>
    </div>

    <button id="rec-go" class="cta" style="margin-top:22px">Gerar recomendação →</button>
  </div>

  <div id="rec-result" style="margin-top:22px"></div>`;
}

function gerarRecomendacao(){
  const dorIdx = REC_STATE.dor, porte = REC_STATE.porte, usa = REC_STATE.usa;
  const box = document.getElementById("rec-result");
  if(dorIdx==null || !porte){
    box.innerHTML = `<div class="callout"><b>Falta escolher:</b> selecione ao menos a <b>dor principal</b> e o <b>porte</b> do cliente.</div>`;
    return;
  }
  const dor = REC_DORES[dorIdx];
  // modelo de firewall sugerido por porte
  const modeloPorPorte = { pequena:"M5100-AC-I-S / M5200-AC-I", media:"M5400 a M5600-AC-I", grande:"M5800-SK-AC-I / M6000-AC-I" };
  const porteLabel = { pequena:"Pequena empresa", media:"Média empresa", grande:"Grande empresa / Data center" };

  // objeções sugeridas (sempre as mais comuns + a de marca)
  const objSugeridas = OBJECOES.filter(o=>["Preço","Status quo","Confiança"].includes(o.tipo));

  let trocaBloco = "";
  if(usa){
    const t = TROCAS.find(x => x.usa.toLowerCase().includes(usa) ||
      (usa==="firewall" && x.usa.includes("Fortinet")) ||
      (usa==="antivirus" && x.usa.includes("McAfee")) ||
      (usa==="vpn" && x.usa.includes("VPN")) ||
      (usa==="vmware" && x.usa.includes("VMware")));
    if(t){
      trocaBloco = `
      <div class="block" style="border-left-color:var(--blue)">
        <p class="q"><span class="ico">🔄</span><span>Estratégia de troca — cliente usa ${t.usa}</span></p>
        <div class="box pain"><span class="bt">🎣 Gancho de abertura</span>${copyable(t.gancho)}</div>
        <div class="box sol"><span class="bt">✅ Ofereça</span><b>${t.oferta}</b> — ${t.porque}</div>
        <div class="box say"><span class="bt">🎤 O que dizer</span>${copyable(t.say)}</div>
      </div>`;
    }
  }

  box.innerHTML = `
    <div class="hero" style="padding:26px 28px">
      <h1 style="font-size:24px">✅ Recomendação pronta</h1>
      <p>Para um cliente <b style="color:#fff">${porteLabel[porte]}</b> com a dor
      <b style="color:#fff">"${dor.label}"</b>.</p>
    </div>

    <div class="block">
      <p class="q"><span class="ico">⭐</span><span>Solução principal: ${dor.sol}</span></p>
      <div class="box sol"><span class="bt">Por que essa solução</span>${dor.porque}</div>
      <div class="box say"><span class="bt">🎤 Pitch de abertura (copie e use)</span>${copyable(dor.pitch)}</div>
      ${dor.fw ? `<div class="box pain"><span class="bt">🧰 Modelo de firewall sugerido (porte ${porteLabel[porte]})</span>${modeloPorPorte[porte]}</div>` : ""}
      <div class="tagrow">Produtos: ${dor.produtos.map(p=>`<span class="t">${p}</span>`).join("")}</div>
    </div>

    ${trocaBloco}

    <h2>🛡️ Objeções que podem aparecer</h2>
    ${objSugeridas.map(o=>`
      <div class="block">
        <p class="q"><span class="ico">🛡️</span><span>${o.obj} <span style="color:var(--muted);font-weight:500">· ${o.tipo}</span></span></p>
        <div class="box say"><span class="bt">🎤 Responda assim</span>${copyable(o.say)}</div>
      </div>`).join("")}

    <div class="callout"><b>Dica:</b> use o botão 🖥️ (topo) para entrar no <b>Modo Apresentação</b> e mostrar esta recomendação ao cliente em tela cheia.</div>`;
  box.scrollIntoView({behavior:"smooth"});
  lancarConfete();   // 🎉 celebra a recomendação gerada
}

/* ---------- SIMULADOR DE ECONOMIA (ROI) ---------- */
function viewRoi() {
  return `
  <h1>💰 Simulador de Economia (ROI)</h1>
  <p class="lead">Estime a economia do cliente ao trocar para a Sangfor. Ótimo contra a objeção "é caro":
  mostre o impacto no bolso em 3 anos. Os percentuais são estimativas comerciais baseadas em material
  público da Sangfor (ex.: até 50% de redução de TCO) — ajuste conforme a proposta real.</p>

  <div class="card" style="padding:24px">
    <div class="label">1 · Qual área o cliente quer avaliar?</div>
    <div class="opts" id="roi-area">
      <button class="opt sel" data-group="roi-area" data-val="fw" data-eco="40">🛡️ Firewall / Segurança de rede</button>
      <button class="opt" data-group="roi-area" data-val="hci" data-eco="30">☁️ Virtualização (trocar VMware)</button>
      <button class="opt" data-group="roi-area" data-val="epp" data-eco="25">💻 Endpoint / Antivírus</button>
    </div>

    <div class="roi-fields">
      <div>
        <div class="label">2 · Gasto ANUAL atual com a solução de hoje (R$)</div>
        <input id="roi-gasto" class="roi-input" type="number" min="0" step="1000" placeholder="Ex: 120000" />
        <div class="hintline">Some licenças + suporte + hardware por ano. Não sabe? Use uma estimativa.</div>
      </div>
      <div>
        <div class="label">3 · Economia estimada com a Sangfor</div>
        <input id="roi-pct" class="roi-input" type="number" min="0" max="90" step="5" value="40" />
        <div class="hintline">Já preenchemos uma estimativa pela área. Você pode ajustar (%).</div>
      </div>
    </div>

    <button id="roi-go" class="cta" style="margin-top:20px">Calcular economia →</button>
  </div>

  <div id="roi-result" style="margin-top:22px"></div>`;
}

function calcularRoi(){
  const box = document.getElementById("roi-result");
  const gasto = parseFloat((document.getElementById("roi-gasto")||{}).value);
  const pct = parseFloat((document.getElementById("roi-pct")||{}).value);
  if(!gasto || gasto<=0 || isNaN(pct)){
    box.innerHTML = `<div class="callout"><b>Falta um dado:</b> informe o <b>gasto anual atual</b> (um número maior que zero) e a <b>economia estimada (%)</b>.</div>`;
    return;
  }
  const fmt = v => v.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
  const economiaAno = gasto * (pct/100);
  const novoGasto = gasto - economiaAno;
  const economia3 = economiaAno * 3;

  box.innerHTML = `
    <div class="hero" style="padding:26px 28px">
      <h1 style="font-size:24px">💰 Economia estimada</h1>
      <p>Com cerca de <b style="color:#fff">${pct}%</b> de redução sobre um gasto anual de
      <b style="color:#fff">${fmt(gasto)}</b>.</p>
    </div>
    <div class="stat-grid">
      <div class="stat"><div class="big" data-count="${Math.round(economiaAno)}" data-money="true">0</div><div class="cap">economia por ANO</div></div>
      <div class="stat"><div class="big" data-count="${Math.round(economia3)}" data-money="true">0</div><div class="cap">economia em 3 ANOS</div></div>
      <div class="stat"><div class="big" data-count="${Math.round(novoGasto)}" data-money="true">0</div><div class="cap">novo gasto anual (estimado)</div></div>
    </div>
    <div class="block">
      <p class="q"><span class="ico">🎤</span><span>Como usar isso na conversa</span></p>
      <div class="box say"><span class="bt">Frase pronta</span>${copyable(`Olhando o seu gasto atual, a estimativa é economizar cerca de ${fmt(economiaAno)} por ano — algo em torno de ${fmt(economia3)} em três anos. Em vez de olhar só o preço de compra, vale enxergar esse retorno. Posso detalhar numa proposta?`)}</div>
      <div class="box pain"><span class="bt">⚠️ Importante</span>Valor estimado para apoiar a conversa. A economia real depende da proposta fechada, do cenário e dos descontos. Use como ordem de grandeza, não como garantia.</div>
    </div>
    <div class="callout"><b>Dica:</b> exporte esta tela em <b>📄 PDF</b> (botão no topo) e leve a estimativa para o cliente.</div>`;
  animateCounters();
  box.scrollIntoView({behavior:"smooth"});
  lancarConfete();
}

function viewProdutos() {
  return `
  <h1>📦 Produtos Sangfor</h1>
  <p class="lead">Cada produto explicado em linguagem simples: o que é, o que resolve e o que falar para o cliente.</p>
  <div class="grid">
    ${PRODUTOS.map(p => `
      <div class="card icon-${p.cat}" data-search="${txt(p.nome+' '+p.oneliner+' '+p.oquee+' '+p.resolve.join(' '))}">
        ${iconFor(p.cat)}
        <span class="pill ${p.cat}">${p.catLabel}</span>
        <h3>${p.nome}</h3>
        <p class="one">${p.antigo}</p>
        <div class="label">O que é</div>
        <div>${p.oquee}</div>
        <div class="label">O que significa para o cliente</div>
        <div>${p.pracliente}</div>
        <div class="label">Resolve quando o cliente...</div>
        <ul>${p.resolve.map(r=>`<li>${r}</li>`).join("")}</ul>
        <div class="label">Números de impacto</div>
        <div>${p.numeros.map(n=>`<span class="badge">${n}</span>`).join("")}</div>
        <div class="label">💡 Para o vendedor lembrar</div>
        <div style="font-style:italic;color:var(--muted)">${p.pralembrar}</div>
      </div>`).join("")}
  </div>`;
}

function viewCatalogo() {
  const guia = `
    <h2>Guia rápido: qual firewall oferecer (por porte do cliente)</h2>
    <p class="lead" style="margin-bottom:12px">Família <b>M-series</b> (Athena NGFW / NGAF). Regra comercial simples: quanto mais usuários o cliente tem, maior o modelo.</p>
    <div class="tablewrap">
      <table>
        <thead><tr><th>Modelo</th><th>Porte do cliente</th><th>Nº máx. de usuários</th><th>Specs detalhadas</th></tr></thead>
        <tbody>
          ${CATALOGO_FW.map(m => `
            <tr>
              <td><strong>${m.modelo}</strong></td>
              <td>${m.porte}</td>
              <td>${m.usuarios}</td>
              <td>${m.specsCompletas ? "✅ disponível abaixo" : "⏳ a confirmar"}</td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>`;

  const detalhados = CATALOGO_FW.filter(m => m.specsCompletas).map(m => {
    const linhas = Object.keys(SPEC_LABELS)
      .filter(k => m[k])
      .map(k => `<tr><td>${SPEC_LABELS[k]}</td><td><strong>${m[k]}</strong></td></tr>`).join("");
    return `
      <div data-search="${txt(m.modelo+' '+m.porte+' '+m.usuarios)}">
        <h3 style="margin:22px 0 8px">${m.modelo} <span style="color:var(--muted);font-weight:500;font-size:15px">· ${m.porte}</span></h3>
        <div class="tablewrap">
          <table>
            <thead><tr><th>Especificação</th><th>Valor</th></tr></thead>
            <tbody>${linhas}</tbody>
          </table>
        </div>
      </div>`;
  }).join("");

  return `
  <h1>🧰 Catálogo de Modelos</h1>
  <p class="lead">Modelos do portal de parceiros, traduzidos para linguagem comercial. Use o número de usuários para recomendar o modelo certo pelo tamanho da empresa.</p>
  ${guia}
  <h2>Especificações detalhadas</h2>
  ${detalhados}
  <div class="callout">
    <b>Como vender sem ser técnico:</b> pergunte <i>"quantas pessoas usam a rede na empresa?"</i> e indique o modelo pela coluna de usuários. As specs técnicas ficam para o pré-vendas técnico — você foca no porte e no valor.
    <br><br><b>⏳ Faltam specs?</b> Os modelos marcados como "a confirmar" serão preenchidos conforme as specs do portal forem enviadas.
  </div>`;
}

function viewDores() {
  return `
  <h1>💢 Dores → Solução</h1>
  <p class="lead">Ouviu uma dessas frases do cliente? Aqui está a solução Sangfor e exatamente o que dizer.</p>
  ${DORES.map(d => `
    <div class="block" data-search="${txt(d.dor+' '+d.pain+' '+d.sol+' '+d.tags.join(' '))}">
      <p class="q"><span class="ico">💢</span><span>${d.dor}</span></p>
      <div class="box pain"><span class="bt">A dor por trás</span>${d.pain}</div>
      <div class="box sol"><span class="bt">✅ Solução Sangfor</span>${d.sol}</div>
      <div class="box say"><span class="bt">🎤 O que dizer</span>${copyable(d.say)}</div>
      <div class="tagrow">Produtos: ${d.tags.map(t=>`<span class="t">${t}</span>`).join("")}</div>
    </div>`).join("")}`;
}

function viewTroca() {
  return `
  <h1>🔄 Trocar o Concorrente por Sangfor</h1>
  <p class="lead">Descubra o que o cliente já usa e proponha a migração certa, com o gancho de abertura e a frase de venda.</p>
  ${TROCAS.map(t => `
    <div class="block" data-search="${txt(t.usa+' '+t.oferta+' '+t.porque+' '+t.contexto)}">
      <p class="q"><span class="ico">🔄</span><span>Cliente usa: ${t.usa} <span style="color:var(--muted);font-weight:500">(${t.contexto})</span></span></p>
      <div class="box pain"><span class="bt">🎣 Gancho de abertura</span>${copyable(t.gancho)}</div>
      <div class="box sol"><span class="bt">✅ Ofereça</span><b>${t.oferta}</b> — ${t.porque}</div>
      <div class="box say"><span class="bt">🎤 O que dizer</span>${copyable(t.say)}</div>
    </div>`).join("")}`;
}

function viewObjecoes() {
  return `
  <h1>🛡️ Objeções e Respostas</h1>
  <p class="lead">Quando o cliente travar, respire e use a estratégia + a frase pronta abaixo.</p>
  ${OBJECOES.map(o => `
    <div class="block" data-search="${txt(o.obj+' '+o.tipo+' '+o.resposta)}">
      <p class="q"><span class="ico">🛡️</span><span>${o.obj} <span style="color:var(--muted);font-weight:500">· ${o.tipo}</span></span></p>
      <div class="box sol"><span class="bt">Como reagir</span>${o.resposta}</div>
      <div class="box say"><span class="bt">🎤 O que dizer</span>${copyable(o.say)}</div>
    </div>`).join("")}`;
}

function viewPitch() {
  return `
  <h1>🎤 Pitch Rápido (roteiro de 5 passos)</h1>
  <p class="lead">Um roteiro simples para conduzir qualquer conversa comercial do começo ao próximo passo.</p>
  <div class="step"><div class="n">1</div><div>
    <h4>Abra com uma pergunta, não com produto</h4>
    <p>Descubra a dor e o que ele já usa hoje antes de falar de solução.</p>
    <div class="ex">"Me conta: hoje, o que mais te tira o sono em segurança ou infraestrutura?"</div>
  </div></div>
  <div class="step"><div class="n">2</div><div>
    <h4>Conecte a dor a UMA solução</h4>
    <p>Não despeje o portfólio todo. Escolha o produto que resolve a dor principal (use a aba Dores → Solução).</p>
    <div class="ex">"Pelo que você descreveu, o ponto mais crítico é o ransomware — e é exatamente aí que a gente é mais forte."</div>
  </div></div>
  <div class="step"><div class="n">3</div><div>
    <h4>Prove com números e reconhecimento</h4>
    <p>Use os dados de impacto (3 segundos, até 50% de economia) e os selos (Gartner, Frost & Sullivan).</p>
    <div class="ex">"A gente detecta ransomware em 3 segundos e é reconhecida pelo Gartner. Não é promessa, é resultado testado."</div>
  </div></div>
  <div class="step"><div class="n">4</div><div>
    <h4>Trate a objeção na hora</h4>
    <p>Se vier um "é caro" ou "já tenho fornecedor", vá direto na aba Objeções e use a frase pronta.</p>
    <div class="ex">"Entendo. Vamos olhar o custo de 3 anos, não só a compra — normalmente a Sangfor sai mais barata."</div>
  </div></div>
  <div class="step"><div class="n">5</div><div>
    <h4>Feche com um próximo passo concreto</h4>
    <p>Sempre saia da conversa com algo agendado: uma POC, uma demo ou uma reunião com o decisor.</p>
    <div class="ex">"Que tal agendarmos um teste sem compromisso para você decidir com dados? Tenho quinta ou sexta."</div>
  </div></div>`;
}

function viewCasos() {
  return `
  <h1>🏆 Casos de Sucesso</h1>
  <p class="lead">Prova social para usar na conversa: resultados reais de clientes Sangfor. Baseados em material público (sangfor.com).</p>
  ${CASOS.map(c => `
    <div class="block" data-search="${txt(c.setor+' '+c.cliente+' '+c.desafio+' '+c.resultado+' '+c.produtos.join(' '))}">
      <p class="q"><span class="ico">🏆</span><span>${c.cliente} <span style="color:var(--muted);font-weight:500">· ${c.setor}</span></span></p>
      <div class="box pain"><span class="bt">Desafio</span>${c.desafio}</div>
      <div class="box say"><span class="bt">Solução Sangfor</span>${c.solucao}</div>
      <div class="box sol"><span class="bt">✅ Resultado</span>${c.resultado}</div>
      <div class="tagrow">Produtos: ${c.produtos.map(p=>`<span class="t">${p}</span>`).join("")}</div>
    </div>`).join("")}
  <div class="callout">
    <b>Dica:</b> escolha o caso do setor mais próximo do seu cliente. "Uma empresa como a sua, do mesmo ramo, teve esse resultado" vale mais que qualquer folheto.
  </div>`;
}

function viewBattlecards() {
  return `
  <h1>⚔️ Battlecards Competitivos</h1>
  <p class="lead">Sangfor vs. os principais concorrentes, lado a lado. <b>Regra de ouro:</b> nunca ataque o
  concorrente de frente — reconheça o valor dele e posicione a Sangfor pelo diferencial certo.</p>
  ${BATTLECARDS.map(b => `
    <div class="block bc" data-search="${txt(b.vs+' '+b.area+' '+b.produto+' '+b.quando)}">
      <p class="q"><span class="ico">⚔️</span><span>Sangfor <span style="color:var(--muted)">vs</span> ${b.vs}
        <span style="color:var(--muted);font-weight:500">· ${b.area}</span></span></p>
      <div class="bc-meta">
        <span class="t">🎯 Nossa oferta: <b>${b.produto}</b></span>
        <span class="t">📌 Use quando: ${b.quando}</span>
      </div>
      <div class="tablewrap" style="margin:10px 0">
        <table>
          <thead><tr><th>Critério</th><th>${b.vs}</th><th>✅ Sangfor</th></tr></thead>
          <tbody>
            ${b.linhas.map(l=>`<tr><td><strong>${l.ponto}</strong></td><td>${l.concorrente}</td><td class="win">${l.sangfor}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="box sol"><span class="bt">🏆 Como vencer</span>${b.vencer}</div>
      <div class="box pain"><span class="bt">⚠️ Cuidado (seja justo)</span>${b.cuidado}</div>
      <div class="box say"><span class="bt">🎤 O que dizer</span>${copyable(b.say)}</div>
    </div>`).join("")}`;
}

function viewDiferenciais() {
  return `
  <h1>⭐ Diferenciais da Sangfor</h1>
  <p class="lead">Os motivos para o cliente escolher a Sangfor — use como munição em qualquer conversa.</p>
  <div class="grid">
    ${DIFERENCIAIS.map(d => `
      <div class="card" data-search="${txt(d.t+' '+d.d)}">
        <h3>⭐ ${d.t}</h3>
        <div>${d.d}</div>
      </div>`).join("")}
  </div>
  <h2>A Sangfor em números (reforço de confiança)</h2>
  <p class="lead" style="margin-bottom:12px">Use estes dados contra a objeção "não conheço / tenho receio da marca".</p>
  <div class="stat-grid">
    ${INSTITUCIONAL.map(i => `
      <div class="stat" data-search="${txt(i.big+' '+i.cap)}">
        <div class="big">${i.big}</div><div class="cap">${i.cap}</div>
      </div>`).join("")}
  </div>`;
}

const VIEWS = {
  inicio: viewInicio, recomendador: viewRecomendador, roi: viewRoi,
  produtos: viewProdutos, catalogo: viewCatalogo, dores: viewDores,
  troca: viewTroca, objecoes: viewObjecoes, pitch: viewPitch,
  casos: viewCasos, battlecards: viewBattlecards, diferenciais: viewDiferenciais
};

/* ---------- Infra ---------- */

function txt(s){ return s.toLowerCase().replace(/"/g,"&quot;"); }

/* Envolve uma frase com botão "copiar". Guarda o texto em data-copy. */
let _copyId = 0;
function copyable(text){
  const clean = String(text).replace(/^["']|["']$/g,"");
  const id = "cp"+(_copyId++);
  return `<span class="copyable">
    <span class="copytext say-quote">${text}</span>
    <button class="copybtn" data-copy="${encodeURIComponent(clean)}" title="Copiar frase">📋 Copiar</button>
  </span>`;
}

function render(view){
  currentView = view;
  app.innerHTML = `<div class="view">${VIEWS[view]()}</div>`;
  window.scrollTo({top:0,behavior:"smooth"});
  applySearch();
  animateCounters();
  setupScrollReveal();
  setupTilt();
  typeTitle();
}

/* ---------- Efeito de digitação no título da home ---------- */
function typeTitle(){
  const el = document.getElementById("typed");
  if(!el) return;
  const full = el.dataset.text || "";
  if(prefersReduced()){ el.textContent = full; return; }
  let i = 0;
  el.textContent = "";
  (function step(){
    if(i <= full.length){ el.textContent = full.slice(0,i); i++; setTimeout(step, 55); }
  })();
}

/* ---------- Scroll reveal: elementos aparecem ao rolar ---------- */
let _io = null;
function setupScrollReveal(){
  const alvos = app.querySelectorAll(".card, .block, .step, .stat, .tablewrap");
  if(prefersReduced()){ alvos.forEach(el=>el.classList.add("revealed")); return; }
  if(_io) _io.disconnect();
  _io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("revealed"); _io.unobserve(en.target); } });
  }, {threshold:.08});
  alvos.forEach(el=>{ el.classList.add("reveal"); _io.observe(el); });
}

/* ---------- Card tilt 3D: cards inclinam seguindo o mouse ---------- */
function setupTilt(){
  if(prefersReduced() || matchMedia("(pointer: coarse)").matches) return; // sem tilt no toque
  app.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("mousemove", e=>{
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left)/r.width - .5;
      const py = (e.clientY - r.top)/r.height - .5;
      card.style.transform = `perspective(800px) rotateY(${px*8}deg) rotateX(${ -py*8}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", ()=>{ card.style.transform=""; });
  });
}
function prefersReduced(){ return matchMedia("(prefers-reduced-motion: reduce)").matches; }

/* ---------- Contadores animados ---------- */
function animateCounters(){
  app.querySelectorAll("[data-count]").forEach(el=>{
    if(el.dataset.done) return;           // evita reanimar
    el.dataset.done = "1";
    const target = parseFloat(el.dataset.count);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const sep = el.dataset.sep === "true";
    const money = el.dataset.money === "true";
    const dur = 1100; const start = performance.now();
    function fmt(n){
      if(money) return Math.round(n).toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
      return sep ? Math.round(n).toLocaleString("pt-BR") : Math.round(n);
    }
    function tick(now){
      const p = Math.min((now-start)/dur,1);
      const eased = 1-Math.pow(1-p,3);
      el.textContent = prefix + fmt(target*eased) + suffix;
      if(p<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ---------- Modo claro/escuro ---------- */
const themeBtn = document.getElementById("theme");
function applyTheme(dark){
  document.body.classList.toggle("dark", dark);
  themeBtn.textContent = dark ? "☀️" : "🌙";
  try{ localStorage.setItem("cartilha-tema", dark ? "dark" : "light"); }catch(e){}
}
themeBtn.addEventListener("click", ()=>applyTheme(!document.body.classList.contains("dark")));
(function initTheme(){
  let saved=null; try{ saved=localStorage.getItem("cartilha-tema"); }catch(e){}
  const prefereEscuro = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved ? saved==="dark" : prefereEscuro);
})();

tabs.addEventListener("click", e => {
  const btn = e.target.closest(".tab");
  if(!btn) return;
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  btn.classList.add("active");
  render(btn.dataset.view);
});

/* ---------- Busca ---------- */
function applySearch(){
  const q = search.value.trim().toLowerCase();
  const items = app.querySelectorAll("[data-search]");
  if(!items.length) return;
  let visible = 0;
  items.forEach(el=>{
    const match = !q || el.getAttribute("data-search").includes(q);
    el.classList.toggle("hide", !match);
    if(match) visible++;
  });
  const old = app.querySelector(".nores");
  if(old) old.remove();
  if(q && visible===0){
    const div = document.createElement("div");
    div.className="nores";
    div.textContent = "Nenhum resultado para \""+search.value+"\" nesta aba. Tente outra aba.";
    app.appendChild(div);
  }
}
search.addEventListener("input", applySearch);

/* ---------- Recomendador: seleção de opções + gerar ---------- */
app.addEventListener("click", e => {
  const opt = e.target.closest(".opt");
  if(opt){
    const group = opt.dataset.group;
    // marca só uma opção por grupo
    opt.parentElement.querySelectorAll(".opt").forEach(o=>o.classList.remove("sel"));
    opt.classList.add("sel");
    if(group==="dor") REC_STATE.dor = parseInt(opt.dataset.val,10);
    else if(group==="porte") REC_STATE.porte = opt.dataset.val;
    else if(group==="usa") REC_STATE.usa = opt.dataset.val;
    return;
  }
  if(e.target.id==="rec-go"){ gerarRecomendacao(); return; }

  // ---------- ROI: ao escolher a área, preenche o % estimado ----------
  const roiArea = e.target.closest('[data-group="roi-area"]');
  if(roiArea){
    const pctInput = document.getElementById("roi-pct");
    if(pctInput && roiArea.dataset.eco) pctInput.value = roiArea.dataset.eco;
    return;
  }
  if(e.target.id==="roi-go"){ calcularRoi(); return; }

  // ---------- Copiar frase ----------
  const cp = e.target.closest(".copybtn");
  if(cp){
    const texto = decodeURIComponent(cp.dataset.copy);
    copiarTexto(texto, cp);
  }
});

function copiarTexto(texto, btn){
  const done = ()=>{
    const orig = btn.textContent;
    btn.textContent = "✅ Copiado!";
    btn.classList.add("ok");
    setTimeout(()=>{ btn.textContent = orig; btn.classList.remove("ok"); }, 1600);
  };
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(texto).then(done).catch(()=>fallbackCopy(texto,done));
  } else { fallbackCopy(texto,done); }
}
function fallbackCopy(texto, done){
  const ta = document.createElement("textarea");
  ta.value = texto; ta.style.position="fixed"; ta.style.opacity="0";
  document.body.appendChild(ta); ta.select();
  try{ document.execCommand("copy"); done(); }catch(e){}
  document.body.removeChild(ta);
}

/* ---------- Exportar PDF (via impressão do navegador → Salvar como PDF) ---------- */
const pdfBtn = document.getElementById("pdf");
const viewTitles = {
  inicio:"Início", recomendador:"Recomendação de Solução", produtos:"Produtos Sangfor",
  catalogo:"Catálogo de Modelos", dores:"Dores e Soluções", troca:"Trocar por Sangfor",
  objecoes:"Objeções e Respostas", pitch:"Pitch Rápido", casos:"Casos de Sucesso",
  battlecards:"Battlecards Competitivos", diferenciais:"Diferenciais"
};
pdfBtn.addEventListener("click", ()=>{
  // garante que nada esteja escondido pela busca ao imprimir
  const prevSearch = search.value; search.value = ""; applySearch();
  const titulo = "Cartilha Sangfor — " + (viewTitles[currentView] || "");
  const prevTitle = document.title;
  document.title = titulo;
  document.body.classList.add("printing");
  // aguarda o navegador aplicar os estilos antes de abrir o diálogo
  setTimeout(()=>{
    window.print();
    document.body.classList.remove("printing");
    document.title = prevTitle;
    search.value = prevSearch; applySearch();
  }, 120);
});

/* ---------- Modo apresentação (tela cheia) ---------- */
const presentBtn = document.getElementById("present");
presentBtn.addEventListener("click", ()=>{
  const on = document.body.classList.toggle("present");
  presentBtn.textContent = on ? "🔙" : "🖥️";
  presentBtn.title = on ? "Sair da apresentação" : "Modo apresentação (tela cheia)";
  if(on && document.documentElement.requestFullscreen){
    document.documentElement.requestFullscreen().catch(()=>{});
  } else if(!on && document.fullscreenElement && document.exitFullscreen){
    document.exitFullscreen().catch(()=>{});
  }
});
// ESC/fim de tela cheia sincroniza o botão
document.addEventListener("fullscreenchange", ()=>{
  if(!document.fullscreenElement && document.body.classList.contains("present")){
    document.body.classList.remove("present");
    presentBtn.textContent="🖥️"; presentBtn.title="Modo apresentação (tela cheia)";
  }
});

/* ---------- Tela de abertura (splash) ---------- */
(function splash(){
  const el = document.getElementById("splash");
  if(!el) return;
  const hide = ()=>{ el.classList.add("gone"); setTimeout(()=>el.remove(), 600); };
  // some após a animação (ou já direto se o usuário prefere menos movimento)
  setTimeout(hide, prefersReduced() ? 200 : 1800);
})();

/* ---------- Fundo animado (partículas conectadas) ---------- */
(function animatedBg(){
  const canvas = document.getElementById("bg");
  if(!canvas || prefersReduced()) return;
  const ctx = canvas.getContext("2d");
  let w,h,pts,raf;
  function resize(){ w=canvas.width=innerWidth; h=canvas.height=innerHeight;
    const n = Math.min(70, Math.floor(w*h/22000));
    pts = Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}));
  }
  function color(){ return document.body.classList.contains("dark") ? "42,154,224" : "21,115,196"; }
  function frame(){
    ctx.clearRect(0,0,w,h);
    const c = color();
    for(const p of pts){
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>w)p.vx*=-1; if(p.y<0||p.y>h)p.vy*=-1;
    }
    for(let i=0;i<pts.length;i++){
      for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.hypot(dx,dy);
        if(d<120){ ctx.strokeStyle=`rgba(${c},${(1-d/120)*.16})`; ctx.lineWidth=1;
          ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke(); }
      }
      ctx.fillStyle=`rgba(${c},.5)`; ctx.beginPath(); ctx.arc(pts[i].x,pts[i].y,1.6,0,7); ctx.fill();
    }
    raf=requestAnimationFrame(frame);
  }
  addEventListener("resize", resize); resize(); frame();
})();

/* ---------- Confete (celebração) ---------- */
function lancarConfete(){
  const canvas = document.getElementById("confetti");
  if(!canvas || prefersReduced()) return;
  const ctx = canvas.getContext("2d");
  canvas.width=innerWidth; canvas.height=innerHeight;
  const cores=["#1573c4","#16b3c9","#2a9ae0","#36b54a","#7bc62d","#44d15c"];
  const peças = Array.from({length:140},()=>({
    x:innerWidth/2+(Math.random()-.5)*200, y:innerHeight*0.3,
    vx:(Math.random()-.5)*9, vy:Math.random()*-9-3,
    s:6+Math.random()*6, c:cores[Math.floor(Math.random()*cores.length)],
    rot:Math.random()*6, vr:(Math.random()-.5)*.3, a:1
  }));
  let raf, t=0;
  function frame(){
    ctx.clearRect(0,0,canvas.width,canvas.height); t++;
    let vivos=0;
    for(const p of peças){
      p.vy+=0.25; p.x+=p.vx; p.y+=p.vy; p.rot+=p.vr;
      if(t>60) p.a-=0.02;
      if(p.a>0 && p.y<canvas.height+20){
        vivos++;
        ctx.save(); ctx.globalAlpha=Math.max(0,p.a); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
        ctx.fillStyle=p.c; ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*0.6); ctx.restore();
      }
    }
    if(vivos>0) raf=requestAnimationFrame(frame); else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  frame();
}

/* ---------- Início ---------- */
render("inicio");
