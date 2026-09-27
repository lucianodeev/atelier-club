import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

const products=[
 {icon:'☕',title:'Canecas personalizadas',desc:'Sua marca em presentes e objetos para o dia a dia.'},
 {icon:'📔',title:'Planners profissionais',desc:'Papelaria personalizada para organizar sua rotina.'},
 {icon:'🎁',title:'Kits para equipes',desc:'Presentes corporativos e conjuntos sob encomenda.'}
];
const mugCatalog=[{"name":"Amor","image":"/catalogo/caneca-1.svg","desc":"Para alguém especial"},{"name":"Família","image":"/catalogo/caneca-2.svg","desc":"Memórias em família"},{"name":"Pets","image":"/catalogo/caneca-3.svg","desc":"Seu melhor amigo"},{"name":"Profissões","image":"/catalogo/caneca-4.svg","desc":"Sua marca aqui"},{"name":"Viagem","image":"/catalogo/caneca-5.svg","desc":"Colecione momentos"},{"name":"Aniversário","image":"/catalogo/caneca-6.svg","desc":"Celebre a vida"}];
const indicativePrices={Brasil:'R$ 49,90',Portugal:'€ 17,90'};
const whatsapp=(import.meta.env.VITE_ATELIER_WHATSAPP||'').replace(/\D/g,'');
function Landing(){
 const [country,setCountry]=useState('Portugal');
 const [product,setProduct]=useState('Kits para equipes');
 const [quantity,setQuantity]=useState('');
 const [details,setDetails]=useState('');
 const [destination,setDestination]=useState('');
 const [deadline,setDeadline]=useState('');
 const [reply,setReply]=useState('');
 const [feedback,setFeedback]=useState('');
 const request=async(e)=>{
  e.preventDefault();
  const message='ATELIÊ CLUB — Pedido de orçamento\nPaís: '+country+'\nProduto: '+product+'\nQuantidade: '+(quantity||'A definir')+'\nDestino (cidade/código postal): '+destination+'\nPrazo desejado: '+(deadline||'A combinar')+'\nContato: '+reply+'\nDetalhes: '+(details||'A definir')+'\nReferência indicativa (caneca, sem frete): '+(product==='Canecas personalizadas'?indicativePrices[country]:'Sob orçamento')+'\nValor final a confirmar antes do pagamento.';
  if(!whatsapp){setFeedback('WhatsApp comercial ainda não configurado. Nenhum pedido foi enviado.');return;}
  window.open('https://wa.me/'+whatsapp+'?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
  setFeedback('O WhatsApp foi aberto. Confirme o envio da mensagem para concluir sua solicitação.');
 };
 return <>
  <header className="lpHeader"><a className="brand" href="#inicio">ATELIÊ <span>CLUB</span><small>PERSONALIZAÇÃO SOB ENCOMENDA</small></a><a className="lpNav" href="#orcamento">Pedir orçamento ↗</a></header>
  <main id="inicio">
   <section className="lpHero"><div className="lpHeroText"><div className="eyebrow">BRASIL E PORTUGAL · SOB ENCOMENDA</div><h1>Pequenos detalhes.<br/><em>Uma marca</em><br/>inesquecível.</h1><p>Canecas, planners e kits personalizados para profissionais, consultórios e empresas. Você escolhe, nós preparamos uma proposta para o seu pedido.</p><a className="primary" href="#orcamento">Solicitar orçamento →</a><div className="lpNote">Sem assinatura · Sem mensalidade · Pedido avulso</div></div><div className="lpHeroArt" aria-label="Ilustração de caneca, planner e presente"><div className="lpHeroArtInner"><span>☕</span><div>ATELIÊ<br/>CLUB</div><small>✦ FEITO PARA A SUA MARCA ✦</small></div></div></section>
   <div className="benefits"><span>✦ Personalizado para sua marca</span><span>✦ Produção sob encomenda</span><span>✦ Brasil e Portugal</span></div>
   <section className="section" id="produtos"><div className="eyebrow">NOSSA SELEÇÃO</div><h2>O que podemos criar?</h2><p className="lpIntro">Escolha uma ideia e receba uma proposta conforme quantidade, personalização e destino.</p><p className="lpNote">Canecas: preço indicativo de {indicativePrices[country]} por unidade, sem frete. Preço de referência para pedidos individuais. Valor final e prazo sujeitos à confirmação do orçamento e disponibilidade do fornecedor. Planners e kits: sob orçamento.</p><div className="lpGrid">{products.map(p=><article className="lpCard" key={p.title}><div className="lpIcon" aria-hidden="true">{p.icon}</div><h3>{p.title}</h3><p>{p.desc}</p><a href="#orcamento" onClick={()=>setProduct(p.title)}>Quero orçamento →</a></article>)}</div></section>
   <section className="section" id="catalogo"><div className="eyebrow">CATÁLOGO ILUSTRATIVO</div><h2>Canecas para várias ocasiões</h2><p className="lpIntro">Escolha um estilo para presentear, divulgar sua marca ou criar algo só seu. As imagens são exemplos ilustrativos; modelos, cores e personalização dependem de confirmação.</p><div className="lpGrid">{mugCatalog.map(item=><article className="lpCard" key={item.name}><img src={item.image} alt={'Exemplo ilustrativo de caneca personalizada: '+item.name} loading="lazy" style={{width:'100%',aspectRatio:'1/1',objectFit:'contain',borderRadius:'16px'}}/><h3>{item.name}</h3><p>{item.desc}</p><a href="#orcamento" onClick={()=>{setProduct('Canecas personalizadas');setDetails('Tema: '+item.name+' — '+item.desc)}}>Personalizar esta ideia →</a></article>)}</div><p className="lpNote">Portugal: referência €17,90 por unidade. Brasil: referência R$49,90. Frete à parte; orçamento final antes do pagamento.</p></section>
   <section className="lpHow"><div className="section"><div className="eyebrow">SIMPLES DO INÍCIO AO FIM</div><h2>Como funciona</h2><div className="lpSteps"><div><b>01</b><h3>Conte sua ideia</h3><p>Selecione o produto, a quantidade e o país.</p></div><div><b>02</b><h3>Receba uma proposta</h3><p>Confirmamos personalização, produção, frete e prazo.</p></div><div><b>03</b><h3>Aprove e encomende</h3><p>O pedido segue para produção somente após sua aprovação e confirmação do pagamento.</p></div></div></div></section>
   <section className="section lpFormSection" id="orcamento"><div><div className="eyebrow">VAMOS CRIAR?</div><h2>Peça seu orçamento</h2><p>Sem compromisso. Os valores e prazos dependem da personalização, quantidade e endereço de entrega.</p><p className="lpPrivacy">Não envie dados de pacientes ou informações sensíveis.</p></div><form onSubmit={request}><label>País<select value={country} onChange={e=>setCountry(e.target.value)}><option>Portugal</option><option>Brasil</option></select></label><label>Produto<select value={product} onChange={e=>setProduct(e.target.value)}>{products.map(p=><option key={p.title}>{p.title}</option>)}</select></label><label>Quantidade aproximada<input required min="1" type="number" inputMode="numeric" value={quantity} onChange={e=>setQuantity(e.target.value)} placeholder="Ex.: 20"/></label><label>Cidade e código postal para estimar frete<input required value={destination} onChange={e=>setDestination(e.target.value)} placeholder="Ex.: Lisboa 1000-001 ou São Paulo 01310-100"/></label><label>Prazo desejado<input value={deadline} onChange={e=>setDeadline(e.target.value)} placeholder="Ex.: até 20 de outubro"/></label><label>Seu e-mail ou contato<input required value={reply} onChange={e=>setReply(e.target.value)} placeholder="Para responder ao orçamento"/></label><label>Detalhes da personalização<textarea value={details} onChange={e=>setDetails(e.target.value)} rows="3" placeholder="Cores, nome, logo, prazo desejado..."/></label><button className="primary" type="submit">{whatsapp?'Continuar pedido no WhatsApp →':'WhatsApp em configuração'}</button>{feedback&&<p className="warning" role="status">{feedback}</p>}{!whatsapp&&<p className="lpPrivacy">WhatsApp comercial ainda não configurado. Nenhum pedido será enviado.</p>}</form></section>
  </main><footer><div><strong>ATELIÊ CLUB</strong><p>Personalização para profissionais e empresas.</p></div><div><p>Pedidos avulsos. Sem assinaturas ou cobranças recorrentes.</p><p>Valores e entregas confirmados antes do pagamento.</p></div></footer>
 </>;
}
createRoot(document.getElementById('root')).render(<Landing/>);
