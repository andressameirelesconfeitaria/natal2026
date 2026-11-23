# Catálogo Natal 2026 — Andressa Meireles Confeitaria

Este repositório contém **somente a publicação independente do catálogo de Natal 2026**. A loja principal, pronta-entrega, kits de festa e páginas do ateliê não estão incluídos.

## O que está incluído

- Página inicial do catálogo de Natal 2026 (`index.html`).
- 22 produtos, opções, preços, descrições e fotos que estavam no pacote recebido.
- Detalhes de produto, sacola, formulário de encomenda e envio da solicitação pelo WhatsApp.
- PDF do cardápio para download (`catalogos/cardapio-natal-2026.pdf`).
- Cabeçalho otimizado para desktop e celular, sem a navegação de início/voltar.
- Atalho fixo do WhatsApp durante a navegação e link adicional no rodapé.
- CSS, JavaScript e ícone 3D local do WhatsApp (`assets/`).
- Todas as 48 fotos/imagens do catálogo estão na pasta `imagens/` incluindo as novas imagens secundárias do empadão e do pudim, e são chamadas por caminhos relativos locais (por exemplo, `imagens/natal-bolinho-de-bacalhau-2.jpg`). Não há fallback para Unsplash, Imgur ou qualquer hospedagem externa de imagens. Se algum arquivo local faltar, a imagem não será substituída por uma foto da internet.
- O ícone 3D do WhatsApp também é local: `assets/whatsapp-3d.svg`.

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub, por exemplo `natal-2026`.
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório — incluindo `index.html`, `assets`, `imagens`, `catalogos` e `.nojekyll`. Não envie apenas o HTML: a pasta `imagens/` é necessária para carregar as fotos.
3. Abra **Settings → Pages** no repositório.
4. Em **Build and deployment**, selecione **Deploy from a branch**, branch `main` e pasta `/ (root)`, depois salve.
5. Quando o GitHub mostrar o endereço publicado, abra no celular e teste imagens, filtros, PDF, opções, sacola e envio para WhatsApp.

O endereço costuma seguir este formato (substitua pelos dados reais do seu repositório):

`https://SEU-USUARIO.github.io/natal-2026/`

## Usar o link no site principal

Depois da publicação, coloque o endereço real do GitHub Pages no botão/aba “Natal 2026” do seu site principal. Este pacote está separado e não substitui nem altera os arquivos da loja principal.

## Observações

- O catálogo, preços e fotos foram mantidos a partir do ZIP original recebido.
- O endereço do WhatsApp de pedidos é o que já estava configurado no projeto: **(21) 98154-1545**.
- O pedido é montado no navegador e enviado ao WhatsApp para confirmação. A publicação não processa pagamentos nem confirma disponibilidade automaticamente.
- O fluxo mantém a data-limite de pedidos configurada no projeto original: **22/12/2026**, sujeita à disponibilidade da agenda.
- Após definir o endereço final, pode-se ajustar os metadados sociais/canônicos para esse domínio, caso deseje usar domínio próprio.
