# Blueprint de serviços (*Service Blueprint*) { #service-blueprint }

## Contexto da técnica

O Service Blueprint detalha como processos visíveis e invisíveis sustentam a experiência do usuário. Complementa a jornada, conectando a sequência de ações a responsabilidades, sistemas e dependências operacionais.

## O que é e quando utilizar

Utilize esta técnica para transformar observações em decisões de projeto explícitas. Sua contribuição depende de uma pergunta de pesquisa bem definida e de evidências suficientes para apoiar as conclusões. Em projetos públicos e acessíveis, considere pessoas com diferentes tecnologias assistivas, dispositivos e contextos de acesso.

## Elementos essenciais

| Elemento | Função na prática |
|---|---|
| **Ações do usuário** | Passos para atingir um objetivo. |
| **Frontstage** | Pessoas e interfaces visíveis durante a prestação do serviço. |
| **Backstage** | Atividades internas que viabilizam o atendimento. |
| **Processos de suporte** | Integrações, bases de dados, validações e equipes de apoio. |
| **Linhas de interação e visibilidade** | Distinguem contatos diretos, atividades visíveis e operações internas. |
| **Evidências físicas ou digitais** | Comprovantes, mensagens, protocolos e telas retornadas. |

## Como aplicar

Comece por uma jornada comprovada; alinhe as etapas horizontalmente; indique responsabilidades por camada; marque falhas, esperas e transferências de responsabilidade; valide com as áreas envolvidas.

!!! tip "Critério de qualidade"
    Separe **evidência observada**, **interpretação da equipe** e **decisão de projeto**. Registre as limitações da amostra e os pontos ainda não validados.

## Exemplo de aplicação

Ao solicitar um serviço público, o usuário preenche o formulário (ação), o portal confirma a solicitação (frontstage), um sistema verifica dados (backstage) e uma integração registra o protocolo (suporte). O blueprint evidencia o ponto de falha se a confirmação não chega.

## Boas práticas e erros comuns

**Boas práticas:** envolver as pessoas afetadas, documentar a origem das informações, revisar o artefato após testes e comunicar suas limitações.

**Erros comuns:** Inventar processos internos; ignorar exceções; não indicar quem responde por cada etapa; misturar camadas sem critério; criar um diagrama impossível de validar.

## Conceitos relacionados

O **blueprint** responde “o que precisa acontecer nos bastidores?”; a **jornada** responde “como a pessoa vivencia o serviço?”. Os dois artefatos podem se referenciar.

## Leitura complementar

- [Técnicas e métodos de IHC](index.md) — comparação com outras abordagens.
- [Checklist do projeto](../../checklist/index.md) — pontos de verificação para aplicar nos projetos.
- [Referências bibliográficas](../../referencias.md) — literatura utilizada pelo grupo.
