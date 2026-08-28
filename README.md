GUIA DA ELETROQUÍMICA — como usar
====================================

COMO ABRIR
----------
Dê duplo clique em "index.html" (pasta raiz). Ele abre html/index.html, que é a página inicial.

ESTRUTURA DE PASTAS
--------------------
site-eletroquimica/
  index.html          -> redireciona para html/index.html
  html/
    index.html          -> Página inicial
    glossario.html        -> Página 1 - Glossário
    aplicacoes.html         -> Página 2 - Aplicações
    enem.html                -> Página 3 - Eletroquímica no ENEM
    preparacao.html           -> Página 4 - Preparação para a prática
    registro.html              -> Página 5 - Registro (fotos + vídeo)
    desafio.html                -> Página 6 - Desafio final
  css/
    style.css            -> visual do site (cores, fontes, layout)
  js/
    script.js             -> só marca o menu ativo, nada além disso
  images/
    fotos-pilha/            -> coloque aqui as fotos do experimento

FOTOS E VÍDEO JÁ ADICIONADOS
------------------------------
As 3 fotos e os 2 clipes de vídeo enviados já estão no site:
- images/fotos-pilha/foto1-montagem-eletrodos.jpg
- images/fotos-pilha/foto2-conexao-multimetro.jpg
- images/fotos-pilha/foto3-leitura-tensao.jpg
- images/video/clipe1-pilha-limao.mp4 (~6s)
- images/video/clipe2-pilha-limao.mp4 (~15s)
- images/capa.jpg (usada na página inicial)

IMPORTANTE: o trabalho pede um vídeo de 2 a 4 minutos explicando o experimento
(de onde vêm os elétrons, qual metal oxida, qual reduz, função do limão).
Os dois clipes que estão no site são só os registros rápidos da leitura do
multímetro — ainda falta gravar o vídeo explicativo completo. Quando ele
estiver pronto, salve-o em images/video/ e adicione outro bloco de vídeo em
html/registro.html (tem um exemplo comentado logo depois dos dois clipes,
mostrando também a opção de usar um link do YouTube em vez de arquivo local).

PERSONALIZAÇÃO
---------------
- Nomes da equipe: aparecem em ".subtitulo" no topo de cada página (7 arquivos em html/)
- Cores: no início de css/style.css
