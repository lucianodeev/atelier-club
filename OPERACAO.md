# Operação simplificada do ATELIÊ CLUB

## Fluxo pretendido

1. Cliente escolhe um produto com preço final validado e personalização, informa endereço, frete e paga ao ATELIÊ CLUB no Stripe Checkout.
2. O backend valida o webhook Stripe assinado (`checkout.session.completed`, observando `payment_status=paid`; pagamentos assíncronos só após confirmação), registra o pedido uma única vez e envia automaticamente um aviso com ficha do pedido para as **duas pessoas cadastradas** em `FULFILLMENT_EMAILS`. Não incluir dados clínicos.
3. Uma das pessoas assume o pedido e encaminha para a gráfica parceira, acompanha produção e **envia ao cliente utilizando sua própria conta de transporte**, informando código de rastreio e comprovante de envio. O cliente compra do ATELIÊ CLUB, que mantém a responsabilidade comercial e o suporte.
4. Cliente recebe email de confirmação, depois atualização de envio com rastreio. Admin vê pagamento, responsável, custo e margem. A outra pessoa vê que o pedido já foi assumido, evitando duplicidade.
5. Pagamento aos operadores e à gráfica ocorre fora do checkout do cliente, conforme contratos e faturas; **não usar Stripe Connect** nesta fase.

## Condições antes de habilitar vendas

- Confirmar dados comerciais, endereço, email de suporte e políticas; preço de produção, preço final, custos de transporte e impostos para PT/BR. Evitar checkout com frete desconhecido.
- Cadastrar emails reais das duas pessoas e definir quem assume, prazo e método de entrega. Confirmar com elas o acesso e o tratamento dos dados de envio do cliente.
- Implementar banco persistente, controle de acesso individual, histórico de status e notificações; jamais enviar pedidos ainda não pagos à gráfica.
- Configurar Stripe **test mode** primeiro, testar pagamento, webhook, email, tomada de responsabilidade e rastreamento. Não ativar live sem validação.
- Assinaturas físicas: definir quantitativos e frete mensal por região; não ativar assinatura antes de saber o custo de cada caixa.

## Limites

O frontend atual é uma demonstração: não tem checkout, backend, notificações nem rastreamento operacionais. Este documento descreve o fluxo a implementar, não confirma que vendas já funcionam.
