# ATELIÊ CLUB

Loja independente de produtos personalizados e clube de assinaturas para profissionais e clínicas, Brasil e Portugal.

## Estado

**Protótipo visual no GitHub. Não está pronto para receber pagamentos nem pedidos.** Os preços são ilustrativos; fotos finais, custo de produção, prazos e fretes exigem confirmação. Não confundir os botões demonstrativos com checkout ativo.

## Executar

```bash
npm install
npm run dev
npm run build
```

Stack: React + Vite, CSS responsivo. Nenhuma chave secreta no frontend.

## Próxima fase obrigatória antes de publicar comercialmente

1. Backend com autenticação de clientes e admin, banco de dados com permissões por usuário, storage privado para logos e arte.
2. Catálogo real, custos, fotos de amostras, variantes, pesos e zonas de frete PT/BR. Regras de aprovação da arte, SLA de gráficas e rastreamento.
3. Stripe Checkout e Billing com credenciais exclusivamente de teste inicialmente. Sessões criadas no servidor, valores validados no servidor, webhooks com assinatura verificada, idempotência e status de pagamento confiável. **Nunca ativar live automaticamente.**
4. Pedidos especiais por formulário persistente e notificações ao administrador. Nunca solicitar ou aceitar dados identificáveis de pacientes.
5. Políticas e identificação do comerciante, IVA/tributação, cancelamento e devolução de bens personalizados, LGPD/RGPD, termos da assinatura, consentimento e emails transacionais revisados conforme países atendidos.
6. Testes de compra única, renovação, falha de pagamento, cancelamento, upload, isolamento de dados, reembolso, frete e entrega; publicar apenas após validação.

**Não existe portal para gráficas.** O administrador exporta a ficha técnica e encaminha o pedido diretamente às gráficas parceiras.
