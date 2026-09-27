# ATELIÊ CLUB — Operação Brasil / Portugal

## Roteamento obrigatório
- País de entrega BR -> operador BR, moeda BRL, produção e envio nacionais.
- País de entrega PT -> operador PT, moeda EUR, produção e envio nacionais.
- País diferente de BR/PT -> bloquear checkout físico até configurar mercado e frete.
- Não inferir país só pelo seletor da loja: validar país do endereço no backend e associar pedido ao operador correto **apenas após confirmação do webhook de pagamento**.
- Cada operador acessa somente pedidos do seu país e assume responsabilidade de produção e despacho. Admin global acompanha ambos. Não divulgar dados do outro país.
- O operador providencia envio pela própria conta de transporte e informa transportadora e código de rastreio. O ATELIÊ CLUB continua responsável perante o consumidor.
- Frete deve ser cobrado no checkout ou estar explicitamente incluído no preço, nunca surpreender cliente após o pagamento.

## Referências públicas de mercado — setembro de 2026
- PT caneca personalizada avulsa: €9,90 (sadodtf.pt/produto/caneca-personalizada-7); €11 (centrosarcoiris.pt, preçário 2025).
- BR caneca personalizada avulsa: R$23,80 (bbell.com.br/caneca-personalizada); R$36,85 (printi.com.br/caneca-personalizada).
- PT agenda personalizada: €19,90 (art-chill.com).
- BR agenda personalizada: R$48,90 (Elo7 1F0C40D) e R$129 (papelarpapelaria.com.br).
- PT cartões de emoções: €16,90 (darty.pt, Happy Gang) e €32 (licencaparasentir.pt).
- BR baralho de emoções: R$44,70 (Elo7 2159801) e R$79,90 (Elo7 1D041FB).

## Preços candidatos, NÃO ativar cobrança até confirmar custo, frete e impostos
| Produto | PT EUR | BR BRL |
|---|---:|---:|
| Caneca | 16,90 | 49,90 |
| Agenda | 29,90 | 99,90 |
| Cartões de emoções | 29,90 | 89,90 |
| Pasta | orçamento | orçamento |
| Kit | orçamento | orçamento |

## Regra financeira
Receita do pedido - custo de produção - embalagem - frete - taxas de pagamento - remuneração do operador - tributos e demais despesas = resultado. Só vender quando margem e custo de transporte forem conhecidos.

## Estado
Documento de especificação. Backend, roteamento, notificações e checkout ainda precisam ser implementados e testados. Não ativar pagamentos live.
