---
title: Heurísticas de Nielsen
---

# Aplicação das heurísticas de Nielsen

As 10 heurísticas de Nielsen foram aplicadas ao site, com as perguntas do Guia (veja o [checklist de heurísticas](../../checklist/heuristicas.md)). O site **atende parcialmente** H1, H2, H3, H5, H6, H7, H8, H9 e H10 e **não atende** à H4.

<div class="heur-list" markdown="1">

<div class="heur r-part" markdown="1">
<div class="heur-head">
<p>H1. Visibilidade do status do sistema</p>
<span class="res res-part">Parcial</span>
</div>

Existe um problema na integração da plataforma do Detran Digital com o gov.br: ao fazer login, o usuário pode não conseguir entrar mesmo assim, sem receber nenhum retorno de status do sistema.

<div class="heur-probs" markdown="1">
Problemas relacionados: [P05](problemas.md#p05){ .rel-tag }
</div>
</div>
<div class="heur r-part" markdown="1">
<div class="heur-head">
<p>H2. Correspondência entre o sistema e o mundo real</p>
<span class="res res-part">Parcial</span>
</div>

Na área de serviços de Habilitação, o site utiliza jargões técnicos burocráticos como “Renach” ou “PID” sem uma explicação clara ao lado, em vez de adotar termos que o cidadão usa no dia a dia, como “Registro da Carteira” ou “Carteira Internacional”. Além disso, alguns processos do sistema não seguem sequências naturais.

<div class="heur-probs" markdown="1">
Problemas relacionados: [P08](problemas.md#p08){ .rel-tag }
</div>
</div>
<div class="heur r-part" markdown="1">
<div class="heur-head">
<p>H3. Controle e liberdade do usuário</p>
<span class="res res-part">Parcial</span>
</div>

Algumas ações não possuem um recurso claro de “Desfazer”, por exemplo, na Transferência de Veículo.

<div class="heur-probs" markdown="1">
Problemas relacionados: [P11](problemas.md#p11){ .rel-tag }
</div>
</div>
<div class="heur r-fail" markdown="1">
<div class="heur-head">
<p>H4. Consistência e padrões</p>
<span class="res res-fail">Não atende</span>
</div>

A identidade visual da página inicial pública (portal.detran.df.gov.br) difere drasticamente do layout interno após o login (Detran Digital). Posição de menus, estilo de botões e tipografia mudam completamente, parecendo que você foi redirecionado para o site de outra instituição.

<div class="heur-probs" markdown="1">
Problemas relacionados: [P06](problemas.md#p06){ .rel-tag } [P08](problemas.md#p08){ .rel-tag }
</div>
</div>
<div class="heur r-part" markdown="1">
<div class="heur-head">
<p>H5. Prevenção de erros</p>
<span class="res res-part">Parcial</span>
</div>

O sistema não apresenta uma mensagem de confirmação ao fazer logoff no Detran Digital e não possui textos descritivos de erros de preenchimento em alguns formulários, mas possui mecanismos para evitar que um usuário envie algo sem passar pela verificação.

<div class="heur-probs" markdown="1">
Problemas relacionados: [P07](problemas.md#p07){ .rel-tag } [P09](problemas.md#p09){ .rel-tag }
</div>
</div>
<div class="heur r-part" markdown="1">
<div class="heur-head">
<p>H6. Reconhecimento em vez de memorização</p>
<span class="res res-part">Parcial</span>
</div>

Na maioria dos formulários com mais de uma etapa, é possível consultar respostas anteriores, mas falha em mostrar um histórico visível e claro.

<div class="heur-probs" markdown="1">
Sem problema registrado na tabela.
</div>
</div>
<div class="heur r-part" markdown="1">
<div class="heur-head">
<p>H7. Flexibilidade e eficiência de uso</p>
<span class="res res-part">Parcial</span>
</div>

Não foi possível encontrar atalhos de teclado para navegar até seções mais frequentes, e não há atalhos para exclusão em massa, mas existe uma seção de serviços frequentes de fácil acesso.

<div class="heur-probs" markdown="1">
Problemas relacionados: [P08](problemas.md#p08){ .rel-tag }
</div>
</div>
<div class="heur r-part" markdown="1">
<div class="heur-head">
<p>H8. Estética e design minimalista</p>
<span class="res res-part">Parcial</span>
</div>

Os ícones estão distribuídos pela página de forma centralizada, clara e de fácil acesso, mas o baixo contraste detectado pelas ferramentas de avaliação automática prejudica o design.

<div class="heur-probs" markdown="1">
Problemas relacionados: [P01](problemas.md#p01){ .rel-tag }
</div>
</div>
<div class="heur r-part" markdown="1">
<div class="heur-head">
<p>H9. Ajudar o usuário a reconhecer, diagnosticar e corrigir erros</p>
<span class="res res-part">Parcial</span>
</div>

Em campos como o de Transferência de Veículo, o erro de preenchimento não possui instrução alguma: o sistema destaca em vermelho o campo com erro, mas apresenta um erro genérico, sem especificação, ao enviar as informações. Em outros formulários, por exemplo o de login normal (sem ser com gov.br) do Detran Digital, a instrução do erro aparece.

<div class="heur-probs" markdown="1">
Problemas relacionados: [P07](problemas.md#p07){ .rel-tag }
</div>
</div>
<div class="heur r-part" markdown="1">
<div class="heur-head">
<p>H10. Ajuda e documentação</p>
<span class="res res-part">Parcial</span>
</div>

O Portal não possui uma seção de FAQ ou Perguntas Frequentes clara e de fácil acesso, porém o Detran Digital possui uma assistente virtual de fácil acesso.

<div class="heur-probs" markdown="1">
Problemas relacionados: [P10](problemas.md#p10){ .rel-tag }
</div>
</div>

</div>
