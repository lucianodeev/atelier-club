# ATELIÊ CLUB — checkout de pagamento único

Regras: somente compras avulsas. Nenhuma assinatura, renovação ou cobrança recorrente. Checkout Stripe deverá usar mode=payment e permanecer em modo de teste até aprovação explícita.

Antes de habilitar pagamento: confirmar custos de produção, frete, tributos e preços finais por país; provisionar banco independente; validar webhook assinado e idempotência; proteger acesso de operadores por país; testar reembolso e falha de pagamento.

O cliente pode retornar e fazer um novo pedido voluntariamente. O pagamento anterior nunca inicia uma cobrança futura.
