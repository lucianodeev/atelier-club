# ATELIÊ CLUB — pedidos avulsos

## Modelo comercial aprovado
- Apenas compra avulsa de produtos físicos personalizados; **sem assinatura, mensalidade, renovação ou cobrança recorrente**.
- O cliente escolhe produto e quantidade, informa personalização e país de entrega (Brasil ou Portugal), revisa o preço total e paga uma vez.
- Cada novo pedido exige uma nova compra voluntária. Não armazenar cartão por padrão para futuras cobranças.
- Os preços e custos exibidos inicialmente são ilustrativos e exigem validação com fornecedores e operadores antes da ativação do pagamento.

## Fluxo operacional previsto
1. Validar catálogo, personalização, preço, produção e frete do país antes do checkout.
2. Criar pedido pendente no backend com identificador único; abrir checkout Stripe **mode=payment**, nunca subscription; não aceitar preço enviado pelo navegador como autoridade.
3. Confirmar o pagamento exclusivamente por webhook Stripe com assinatura validada, idempotência e conferência de moeda, valor e identificador do pedido.
4. Só após pagamento confirmado, disponibilizar pedido ao operador autorizado do país de entrega, com os dados mínimos necessários para produzir e enviar.
5. Operador informa produção, transportadora e rastreamento; administrador acompanha pedidos, custos e margem. Nunca expor pedidos do outro país.
6. Tratar cancelamentos, reembolsos, chargebacks, falhas de produção e dados pessoais conforme as políticas legais aplicáveis.

## Pendências que impedem cobranças reais
- Escolher/provisionar banco independente; Render e Supabase gratuitos atingiram limite nesta conta.
- Implementar backend, autenticação e autorização dos portais; o protótipo atual usa Supabase e precisa ser adaptado se escolher outro provedor.
- Confirmar fornecedores, custos e fretes reais no Brasil e em Portugal, dados dos operadores e responsabilidade fiscal.
- Configurar Stripe em modo de teste, checkout único, webhook e testes de pedidos repetidos, duplicados, cancelados e recusados.
- Validar segurança, privacidade, termos e política de reembolso antes de ativar pagamentos reais.
