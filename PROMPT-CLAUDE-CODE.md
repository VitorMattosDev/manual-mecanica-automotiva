Você vai redigir por completo o "Manual de Mecânica e Manutenção Automotiva", um book Quarto já estruturado neste repositório. Leia o ROADMAP.md primeiro — ele é a fonte de verdade do projeto.

CONTEXTO
- O capítulo `capitulos/02-motor.qmd` já está pronto e é a REFERÊNCIA CANÔNICA de tom, formato e uso de figuras. Estude-o e replique o padrão em todos os outros capítulos.
- Os demais capítulos são stubs com tópicos previstos e precisam ser escritos por inteiro.
- Público: iniciantes totais. Tom didático, com analogias do cotidiano, explicando o "porquê".
- Idioma: pt-BR.

MODO DE TRABALHO — AUTÔNOMO
Trabalhe de forma contínua, sem pausar para pedir minha aprovação. Considere PRÉ-APROVADO:
- Escrever e editar qualquer arquivo .qmd, .svg, .scss e .yml deste projeto.
- Criar arquivos SVG novos em `figuras/`.
- Rodar comandos de leitura/validação (quarto render, conferência de SVG, etc.).
- Fazer git add e git commit a cada capítulo concluído.
Não me peça confirmação entre capítulos nem antes de cada commit. Só pare se encontrar um erro que realmente bloqueie o progresso (ex.: dependência ausente que você não consegue instalar) — nesse caso, descreva o problema e o que tentou.

TAREFA, NA ORDEM DO ROADMAP (capítulos 1, 3–17; o 2 já está pronto)
Para cada capítulo:
1. Escreva o conteúdo completo seguindo o padrão do cap. 2: abertura situando o capítulo, seções com explicação conceitual antes do detalhe, callouts didáticos (incluindo as classes .dica/.atencao/.perigo do estilo.scss), e uma seção "## Resumo" ao final.
2. Crie as figuras previstas para o capítulo (ver tabela do ROADMAP):
   - SVG técnico para cortes/esquemas/layouts, com a paleta do estilo.scss.
   - Mermaid inline para fluxos de diagnóstico (especialmente o cap. 10).
   - Para fotos reais indispensáveis, NÃO invente imagem: insira um placeholder em comentário HTML descrevendo o que buscar e a licença (ex.: Wikimedia Commons / CC).
3. Confira cada SVG renderizando-o para PNG e ajuste se algo ficar ilegível ou sobreposto.
4. Referencie cada figura no texto com @fig-... e adicione legenda.
5. Faça commit do capítulo com mensagem no formato: `cap NN: <título do capítulo>`.

VALIDAÇÃO FINAL
- Rode `quarto install chrome-headless-shell` e depois `quarto render` para garantir HTML + PDF sem erros. (O chrome-headless-shell é obrigatório: sem ele o mermaid trava o render do PDF no Ubuntu.)
- Corrija o que quebrar e refaça o render.
- Marque os itens do checklist no fim do ROADMAP.md conforme concluir.
- Ao final, faça um commit `docs: manual completo` e me dê um resumo do que foi escrito, quantas figuras foram geradas e quais placeholders de foto ficaram pendentes.

Comece agora pelo capítulo 1.
