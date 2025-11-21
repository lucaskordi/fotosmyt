# Como Forçar Redirecionamento para /checkout com PIX

## Problema
A Yampi não redireciona automaticamente para páginas customizadas quando o pagamento é via PIX, apenas para cartão e boleto.

## Solução Implementada

### 1. Página de Status de Pagamento (`/payment-status`)
- Página intermediária que verifica o status do pagamento
- Faz polling a cada 10 segundos
- Redireciona automaticamente para `/checkout` quando o pagamento é confirmado

### 2. API de Verificação (`/api/check-payment`)
- Endpoint que consulta a API da Yampi para verificar o status do pedido
- Retorna se o pagamento foi confirmado ou está pendente

### 3. Webhook da Yampi (`/api/webhook/yampi`)
- Recebe notificações da Yampi quando o pagamento é confirmado
- Pode ser usado para atualizar status no banco de dados (opcional)

## Como Configurar

### Passo 1: Configurar URL de Retorno no Yampi
1. Acesse o painel da Yampi
2. Vá em Configurações > Integrações
3. Configure a URL de retorno após pagamento:
   ```
   https://seudominio.com/payment-status?order={order_id}
   ```
   O Yampi substituirá `{order_id}` pelo ID do pedido

### Passo 2: Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
YAMPI_API_KEY=sua_chave_api_aqui
YAMPI_STORE_ID=seu_store_id_aqui
```

**Como obter:**
- **API Key**: Painel Yampi > Configurações > API > Criar nova chave
- **Store ID**: Está na URL do seu painel ou nas configurações da loja

### Passo 3: Configurar Webhook (Opcional)
1. No painel Yampi, vá em Configurações > Webhooks
2. Adicione um novo webhook:
   - URL: `https://seudominio.com/api/webhook/yampi`
   - Eventos: `order.paid`, `order.completed`

## Como Funciona

### Fluxo com PIX:
1. Cliente clica em "Comprar" → vai para checkout Yampi
2. Cliente escolhe PIX e faz o pagamento
3. Yampi redireciona para `/payment-status?order=123`
4. A página verifica o status a cada 10 segundos
5. Quando confirmado, redireciona para `/checkout`

### Fluxo com Cartão/Boleto:
1. Cliente clica em "Comprar" → vai para checkout Yampi
2. Cliente paga
3. Yampi redireciona diretamente para `/checkout` (funciona nativamente)

## Testando

1. Faça uma compra de teste via PIX
2. Após o pagamento, você será redirecionado para `/payment-status`
3. A página ficará verificando até confirmar o pagamento
4. Quando confirmado, será redirecionado para `/checkout`

## Notas Importantes

- O polling verifica a cada 10 segundos para não sobrecarregar a API
- Se a API não estiver configurada, a página mostrará "Aguardando Pagamento"
- O cliente pode fechar a página e voltar depois - o redirecionamento funcionará quando o pagamento for confirmado
- Para produção, considere usar um banco de dados para armazenar o status dos pedidos

