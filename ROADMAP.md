# ROADMAP — Manual de Mecânica e Manutenção Automotiva

Documento de orientação para a redação completa do manual. Define o padrão de qualidade, a estratégia de figuras e a ordem de execução. O capítulo 2 (`capitulos/02-motor.qmd`) é a **referência canônica de tom e formato** — todos os demais devem seguir o mesmo padrão.

## Público e tom

- **Público:** iniciantes totais / hobbistas. Nenhum conhecimento prévio pressuposto.
- **Tom:** didático, acolhedor, com analogias do cotidiano (seringa, manivela, etc.). Explicar o *porquê*, não só o *como*.
- **Linguagem:** português (pt-BR). Frases curtas. Evitar jargão sem explicar na primeira ocorrência.

## Padrão de cada capítulo

Cada `.qmd` deve conter, nesta ordem:

1. Título com `{#sec-...}` (manter os IDs já definidos nos stubs).
2. Parágrafo de abertura que situa o capítulo no todo.
3. Seções com `##`, explicação conceitual antes de detalhes.
4. Pelo menos uma **figura** (SVG técnico ou fluxograma mermaid) onde agregar.
5. Callouts didáticos: `.callout-note`, `.callout-tip`, `.callout-important` e as classes próprias `.dica`, `.atencao`, `.perigo` (definidas em `estilo.scss`).
6. Seção final **## Resumo** com 4–6 bullets.

## Estratégia de figuras

- **SVG técnico** (em `figuras/`): cortes esquemáticos, layouts de sistema, diagramas de peças. Leves, vetoriais, versionáveis. Paleta consistente com `estilo.scss` (vermelho `#c0392b` como primária; cinzas para metal; verde/laranja/vermelho para estados).
- **Mermaid** (inline no `.qmd`): fluxos de diagnóstico e árvores de decisão.
- **Fotos reais:** NÃO gerar. Onde forem indispensáveis, inserir um placeholder em comentário HTML indicando o que buscar (ex.: `<!-- TODO foto: vela de ignição com depósito de carbono — buscar em Wikimedia Commons, licença CC -->`).
- Sempre referenciar a figura no texto via `@fig-...` e dar legenda.
- Conferir cada SVG renderizando para PNG antes de finalizar o capítulo.

## Ordem de execução

| # | Capítulo | Figuras previstas |
|---|----------|-------------------|
| 1 | Visão geral | SVG: fluxo de energia tanque→rodas; mermaid: mapa dos sistemas |
| 2 | O motor | ✅ **concluído** (referência) |
| 3 | Arrefecimento e lubrificação | SVG: circuito de arrefecimento; SVG: circuito de óleo |
| 4 | Combustível | SVG: percurso tanque→injetor |
| 5 | Transmissão | SVG: embreagem; SVG: conjunto de marchas |
| 6 | Freios, suspensão, direção | SVG: freio a disco; SVG: amortecedor/mola |
| 7 | Sistema elétrico | SVG: circuito bateria-alternador-arranque |
| 8 | Ouvindo o carro | SVG: cores de vazamento; tabela de ruídos |
| 9 | Luzes do painel | SVG: símbolos por cor/prioridade |
| 10 | Diagnóstico por sintoma | mermaid: 1 fluxograma por sintoma (não liga, superaquece, freio mole, perda de potência, fumaça) |
| 11 | OBD-II | SVG: conector OBD-II; exemplo de código |
| 12 | Ferramentas e segurança | SVG: uso correto de cavalete; kit de ferramentas |
| 13 | Troca de óleo | SVG: passo a passo da drenagem |
| 14 | Pneus | SVG: leitura de desgaste; esquema de rodízio |
| 15 | Manutenção de freios | SVG: pastilha nova vs. gasta |
| 16 | Fluidos, correias, velas | SVG: pontos de verificação no cofre |
| 17 | Cronograma | tabela por km/tempo |

## Publicação (GitHub Pages)

- Workflow em `.github/workflows/publish.yml`.
- **Crítico:** o passo `quarto install chrome-headless-shell` precisa rodar antes do `quarto render`, senão o mermaid trava o render do PDF no runner Ubuntu (Chromium headless ausente). A ferramenta correta é `chrome-headless-shell`, não `chromium`.
- Render gera HTML em `_book/` e o PDF acompanha.

## Checklist de conclusão

- [ ] 17 capítulos redigidos no padrão do cap. 2
- [ ] Todas as figuras SVG conferidas visualmente
- [ ] Fluxogramas mermaid validados
- [ ] Placeholders de foto marcados onde necessário
- [ ] `quarto render` sem erros (HTML + PDF)
- [ ] Publicado no GitHub Pages
