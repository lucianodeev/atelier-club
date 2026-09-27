import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

const products=[
 {icon:'☕',title:'Canecas personalizadas',desc:'Sua marca em presentes e objetos para o dia a dia.'},
 {icon:'📔',title:'Planners profissionais',desc:'Papelaria personalizada para organizar sua rotina.'},
 {icon:'🎁',title:'Kits para equipes',desc:'Presentes corporativos e conjuntos sob encomenda.'}
];
const contactEmail=import.meta.env.VITE_ATELIER_CONTACT_EMAIL?.trim();
function Landing(){
 const [country,setCountry]=useState('Portugal');
 const [product,setProduct]=useState('Kits para equipes');
 const [quantity,setQuantity]=useState('');
 const [details,setDetails]=useState('');
 const [reply,setReply]=useState('');
 const [feedback,setFeedback]=useState('');
 const request=async(e)=>{
  e.preventDefault();
  const message='ATELIÊ CLUB — Pedido de orçamento\\nPaís: '+country+'\\nProduto: '+product+'\\nQuantidade: '+(quantity||'A definir')+'\\nContato: '+reply+'\\nDetalhes: '+(details||'A definir');
  if(contactEmail){window.location.href='mailto:'+encodeURIComponent(contactEmail)+'?subject='+encodeURIComponent('Orçamento ATELIÊ CLUB')+'&body='+encodeURIComponent(message);setFeedback('Seu aplicativo de e-mail foi aberto. Confirme o envio por lá.');return;}
  try{await navigator.clipboard.writeText(message);setFeedback('Solicitação copiada. O canal comercial ainda está sendo configurado; nenhum pedido foi enviado.');}
  catch{setFeedback('O canal comercial ainda está sendo configurado. Nenhum pedido foi enviado.');}
 };
 return <>
  <header className="lpHeader"><a className="brand" href="#inicio">ATELIÊ <span>CLUB</span><small>PERSONALIZAÇÃO SOB ENCOMENDA</small></a><a className="lpNav" href="#orcamento">Pedir orçamento ↗</a></header>
  <main id="inicio">
   <section className="lpHero"><div className="lpHeroText"><div className="eyebrow">BRASIL E PORTUGAL · SOB ENCOMENDA</div><h1>Pequenos detalhes.<br/><em>Uma marca</em><br/>inesquecível.</h1><p>Canecas, planners e kits personalizados para profissionais, consultórios e empresas. Você escolhe, nós preparamos uma proposta para o seu pedido.</p><a className="primary" href="#orcamento">Solicitar orçamento →</a><div className="lpNote">Sem assinatura · Sem mensalidade · Pedido avulso</div></div><div className="lpHeroArt" aria-label="Ilustração de caneca, planner e presente"><div className="lpHeroArtInner"><span>☕</span><div>ATELIÊ<br/>CLUB</div><small>✦ FEITO PARA A SUA MARCA ✦</small></div></div></section>
   <div className="benefits"><span>✦ Personalizado para sua marca</span><span>✦ Produção sob encomenda</span><span>✦ Brasil e Portugal</span></div>
   <section className="section" id="produtos"><div className="eyebrow">NOSSA SELEÇÃO</div><h2>O que podemos criar?</h2><p className="lpIntro">Escolha uma ideia e receba uma proposta conforme quantidade, personalização e destino.</p><div className="lpGrid">{products.map(p=><article className="lpCard" key={p.title}><div className="lpIcon" aria-hidden="true">{p.icon}</div><h3>{p.title}</h3><p>{p.desc}</p><a href="#orcamento" onClick={()=>setProduct(p.title)}>Quero orçamento →</a></article>)}</div></section>
   <section className="lpHow"><div className="section"><div className="eyebrow">SIMPLES DO INÍCIO AO FIM</div><h2>Como funciona</h2><div className="lpSteps"><div><b>01</b><h3>Conte sua ideia</h3><p>Selecione o produto, a quantidade e o país.</p></div><div><b>02</b><h3>Receba uma proposta</h3><p>Confirmamos personalização, produção, frete e prazo.</p></div><div><b>03</b><h3>Aprove e encomende</h3><p>O pedido segue para produção somente após sua aprovação e confirmação do pagamento.</p></div></div></div></section>
   <section className="section lpFormSection" id="orcamento"><div><div className="eyebrow">VAMOS CRIAR?</div><h2>Peça seu orçamento</h2><p>Sem compromisso. Os valores e prazos dependem da personalização, quantidade e endereço de entrega.</p><p className="lpPrivacy">Não envie dados de pacientes ou informações sensíveis.</p></div><form onSubmit={request}><label>País<select value={country} onChange={e=>setCountry(e.target.value)}><option>Portugal</option><option>Brasil</option></select></label><label>Produto<select value={product} onChange={e=>setProduct(e.target.value)}>{products.map(p=><option key={p.title}>{p.title}</option>)}</select></label><label>Quantidade aproximada<input inputMode="numeric" value={quantity} onChange={e=>setQuantity(e.target.value)} placeholder="Ex.: 20"/></label><label>Seu e-mail ou contato<input required value={reply} onChange={e=>setReply(e.target.value)} placeholder="Para responder ao orçamento"/></label><label>Detalhes da personalização<textarea value={details} onChange={e=>setDetails(e.target.value)} rows="3" placeholder="Cores, nome, logo, prazo desejado..."/></label><button className="primary" type="submit">{contactEmail?'Preparar e-mail de orçamento':'Copiar solicitação'}</button>{feedback&&<p className="warning" role="status">{feedback}</p>}{!contactEmail&&<p className="lpPrivacy">Canal comercial ainda não configurado. O formulário não envia pedidos automaticamente.</p>}</form></section>
  </main><footer><div><strong>ATELIÊ CLUB</strong><p>Personalização para profissionais e empresas.</p></div><div><p>Pedidos avulsos. Sem assinaturas ou cobranças recorrentes.</p><p>Valores e entregas confirmados antes do pagamento.</p></div></footer>
 </>;
}
createRoot(document.getElementById('root')).render(<Landing/>);
