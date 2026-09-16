import { convertToByte64 } from "../lib/convertToByte64";

export interface Post {
    id:      string
    title:   string
    image:   string
    content: string
    
    // file_size: number
    // file_type: string

    // created_at: Date
    // updated_at: Date

    // user_id: string
}

const img001 = await convertToByte64("./public/blog/post_blog-01a.png")
const img002 = await convertToByte64("./public/blog/post_blog-02a.png")
const img003 = await convertToByte64("./public/blog/post_blog-03.png")
const img005 = await convertToByte64("./public/blog/post_blog-05b.png")
const img004 = await convertToByte64("./public/blog/post_blog-04c.png")

export const posts: Post[] = [
    { 
        id:      "1",
        title:   "Entenda como a consultoria em Design de Produto pode ajudar sua empresa",
        image:   img001,
        content: `Um dos maiores desafios de qualquer empresa, independente do setor, é fazer com que o produto ou serviço chegue o mais perto possível do gosto do cliente. Quem tem um negócio sabe, porém, que essa tarefa não costuma ser das mais fáceis. Exige, muitas vezes, experiência e um olhar que vai de fora para dentro do processo. É aí, então, que entra o trabalho da consultoria em Design de Produto, que atua justamente na busca do denominador comum que encante o público-alvo de uma marca.

A função do Design nesse contexto é a de qualificar o produto, dando diferentes opções de caminhos a serem seguidos e jogando luz em aspectos que vão além do dia a dia do negócio. Ou seja, o profissional dessa área tem a missão de ampliar o campo de visão em relação aos produtos e serviços.

Entre os problemas que podem ser enfrentados com o envolvimento do Design estão a incerteza da efetividade do projeto, a falta de previsibilidade de investimento e retorno, o grau de aceitabilidade das soluções propostas, os limites do processo de produção, a exigência dos mercados em constante mudança e a agilidade de adaptação. Para todos eles há uma abordagem específica ou uma ferramenta a ser aplicada pelo Design.

Aspectos trabalhados pela consultoria em Design de Produto

Um deles está ligado à valorização do produto proporcionada por meio de diferenciais que o Design pode promover, ou seja, aquilo que sai do comum. Isso significa, por exemplo, fugir da briga de preços e oferecer atrativos singulares aos clientes.

Junto a isso estão também os fatores humanos envolvidos na experiência de uso do produto ou do serviço, não apenas em relação à capacidade física, mas a facilidade na comunicação, o modo de uso, a hierarquia de funcionamento vivenciada pelo usuário.

Outro aspecto é a percepção do cliente em relação à qualidade ou ao diferencial que foi entregue. Isso está ligado à experiência de uso e à expectativa gerada em torno do produto.

Com isso, chegamos a mais um ponto, que é o da atratividade em relação aos concorrentes e as soluções estéticas que geram envolvimento sensorial. São os aspectos que fazem as pessoas escolherem um produto ao invés do outro. Na base disso, estão as questões subjetivas ligadas ao comportamento social, questões culturais de aceitação ou não, tendências e outros pontos.

Por fim, o Design acaba tratando também da antecipação de cenários por meio da análise de soluções para os problemas a serem resolvidos, simulações que auxiliam na tomada de decisão, experimentações que avaliam propostas inusitadas e fazem os erros se tornarem aprendizados.

Tudo auxiliando e girando ao redor daquilo que mais gostamos de fazer: criar soluções e descobrir novas possibilidades.

Como você pode ter percebido, nossa atuação alcança diferentes frentes. Quer conhecer melhor como esse trabalho é feito? Converse com a gente!
`
    },
        { 
        id:      "2",
        title:   "No confronto com a concorrência, o Design pode trazer vantagens",
        image:   img002,
        content: `O processo de criação e desenvolvimento de um produto precisa ser sempre o mais
assertivo possível. Em um mercado cada vez mais competitivo, não há muito espaço para
equívocos, pois a concorrência está logo atrás buscando seu lugar ao sol. Por isso, o
planejamento precisa ser a palavra-chave desse processo, incluindo aqui todas as possíveis
variáveis dentro de um projeto.

Em meio a essa busca pelo planejamento, nossa consultoria em Design de Produtos entra como suporte para agregar experiência ao processo, justamente para ajudar a empresa na
diminuição de riscos. Imagine ter à disposição, por exemplo, profissionais que já atuaram
no desenvolvimento de produtos premiados? É um diferencial e tanto, não é mesmo? A
tomada de decisão passa a ter um respaldo mais seguro.

As frentes de atuação do Design no planejamento

A primeira frente em que podemos atuar é a da antecipação de cenários dos produtos, que nada mais é do que o exercício de antecipar e mapear reações e situações possíveis dentro do contexto do mercado, onde todos estarão competindo, suas vantagens e decepções, tudo com olhar crítico tendo os princípios do design como critério de avaliação. Este olhar pode antecipar o melhor posicionamento para o seu produto e qual a melhor maneira para alcançá-lo.

A vantagem de ter uma antecipação de cenários é que, assim, a empresa consegue medir
seu potencial diante das possibilidades apresentadas e traçar estratégias para cada
situação apresentada. É uma forma de ser pró-ativo e estar preparado para o que pode
acontecer, uma maneira de construir o futuro do produto e da marca.

Trata-se, sobretudo, de avaliar os riscos que o desenvolvimento do projeto pode apresentar.
Então, as equipes conseguem trabalhar mais facilmente as mudanças, ocorrendo em
possíveis recuos ou mesmo avanços diante de riscos contornáveis.

Considera-se aqui também o cenário de competitividade e o mapeamento dos concorrentes,
identificando quem realmente é uma ameaça, e como lidar com ela na escolha dos atributos que o novo produto deverá ter. Aqui começa a ser construída a sua identidade.

Considerando tudo isso, a empresa vai pensar em uma estratégia e um posicionamento
para a marca diante do desafio colocado. Cenários e riscos vão encaminhar o empreendimento para um lado ou para outro, permitindo que ele defenda suas posições.

Ficou claro que o suporte do Design é importante, certo? Então, entre em contato com a gente, conheça onde já atuamos e saiba como podemos ajudar sua empresa.

`
    },
    { 
        id:      "3",
        title:   "Atratividade: como o design constrói este valor no produto",
        image:   img003,
        content: `Quando um cliente entra em uma loja para escolher um carro, o que ele observa? Em parte, desempenho, autonomia, tamanho, espaço interno e preço. Por muitos anos, realmente era apenas isso. No entanto, o fato é que, hoje, essa resposta transcende as funcionalidades mais óbvias e leva a atratividade a outro patamar. Um produto precisa ser atraente o suficiente para ser percebido, admirado e até desejado, quando se torna referência para os demais, ao atingir o grau máximo de impacto sensorial. Existe uma transferência de valores a ponto do produto representar seu usuário que também assume os valores do produto.
O carro transfere tudo o que ele representa simbolicamente ao usuário que por outro lado, quer se ver representado por ele, seu estilo de vida, suas convicções, sua personalidade, suas aspirações.

Aqui, no entanto, cabe uma pergunta: como agregar algo tão subjetivo ao produto que irá,  muitas vezes, definir a decisão de compra frente aos concorrentes? Existe uma série de elementos que o produto precisa concentrar para ser atrativo. É nesse contexto que o Design de Produtos se apresenta como forma de reunir todos esses pontos e criar uma unidade que faça sentido e, assim, seja percebida pelos clientes.

Esse trabalho começa por aplicar os princípios básicos do design: harmonia, proporção, equilíbrio, hierarquia, contraste, composição, movimento e unidade. Esses elementos são responsáveis por construir a percepção que os clientes terão em relação aos produtos. O primeiro deles, por exemplo, garante que os itens conversem bem entre si, concordem uns com os outros e com o contexto no qual estão inseridos.

O design de produtos também trabalha para construir uma coerência formal. Na prática, isso garante que todas as partes sigam o mesmo critério, o mesmo nível de solução e a mesma coerência construtiva, na qual cada elemento segue seu propósito dentro da mesma identidade.

Depois de garantir essa composição, fica mais fácil chegar à qualidade percebida, ou seja, aquilo que reconhecemos como tendo sido bem executado, com os materiais mais adequados à funcionalidade escolhida. É o caso de uma frigideira vendida como uma peça resistente. O cliente precisa acreditar nessa promessa muito antes do uso, avaliando se o metal e o revestimento são os mais adequados, se a forma como os materiais estão dispostos transmitem rosbustez, formando um conjunto coerente.

O trabalho do design também tem responsabilidade sobre a coerência estratégica do produto. Isso considera sua inserção no contexto econômico e a relação de valor e custo adequado à sua estratégia de posicionamento no mercado, pois esses elementos estão ligados às escolhas feitas na composição da peça.


Contemporaneidade do produto / Em sintonia com o seu tempo

Junto a tudo que falamos até aqui, ainda há um fator primordial. Um produto não será atrativo se não estiver conectado ao seu tempo, considerando, além da estética, todos os fatores que isso implica, como a tecnologia e funcionalidades. A longevidade vem do quanto ele expande sua capacidade de ser relevante e se manter atrativo durante muito tempo. Além de ter potencial de antecipar o futuro, ajudando a construí-lo agora.

Pensando nisso, além de garantir que os novos produtos tenham essa característica, é importante atualizar constantemente o portfólio, sempre reciclando a mentalidade da empresa. Em resumo, tudo deve estar sintonizado com as tendências que prevalecem no mercado.

Tudo isso junto determina se o cliente vai ou não gostar do produto e exige alto grau de compreensão do que vai acontecer em termos de significado, do que o representa para cada pessoa aquele produto.

Quer conhecer melhor esse trabalho e começar a implementá-lo em sua empresa? Converse com a gente!
`
    },
    { 
        id:      "4",
        title:   "Entenda a importância da empatia no trabalho do design de produtos ",
        image:   img004,
        content: `Uma das capacidades que nos tornam humanos é a empatia. Por meio dela, nos colocamos no lugar do outro e, a partir de um entendimento de seus sentimentos e emoções, tentamos sentir o que ele sente. Assim, conseguimos compreender melhor seus comportamentos, atitudes e também como se dão os  processos de tomada de decisão. Dessa forma, nos conectamos e identificamos com alguém.

Bom, mas o que isso tem a ver com produtos? Muita coisa. Assim como a arte, o design imita a vida e, dentro desse contexto, o designer faz uso da sua capacidade de sentir empatia para desenvolver projetos que estejam conectados com as reais necessidades das pessoas. Esse profissional se coloca no lugar do outro e desenha algo que, de fato, vai ajudar o consumidor em seu dia a dia.

Em outras palavras, trata-se de trazer para dentro do projeto o ponto de vista de quem irá usar o produto, humanizando aspectos que tenderiam a ser exclusivamente técnicos.

Pense em ergonomia, por exemplo. O designer projeta o produto pensando em formas de deixá-lo alinhado anatomicamente com o uso que o público-alvo vai fazer dele, considerando os mais diferentes ângulos.

É o caso de uma geladeira, que tem suas gavetas estrategicamente desenhadas, de modo a se adaptar aos usos mais comuns. O profissional não desenvolve, portanto, a peça com base em seus gostos e vaidades. 

Como se aplica a empatia no processo de design

Para trabalhar o aspecto da empatia dentro do design de produtos, o profissional escuta as pessoas por meio de pesquisas de mercado e etnológicas, estudos informais, imersões de uso, observações e outras técnicas.

Além disso, ele também tenta entender suas respostas e necessidades,  seu modo de pensar, se colocar no lugar dele, fazer o que ele faz, considerando onde, como, quando e por que faz. 

É preciso compreender seu ambiente, o contexto e o seu repertório. Por isso, essa atividade exige uma combinação de conhecimento, experiência e sensibilidade acima das ideias pré-concebidas.

Vantagens proporcionadas pela empatia no design

Entre as vantagens de se valer da empatia no processo de criação está o entendimento mais claro do problema que se quer resolver com o projeto. Com isso, solução se torna mais assertiva e dá oportunidade de se encontrar relações e abordagens novas ou de descobrir necessidades não atendidas. É assim, portanto, que nascem as inovações, indo além do óbvio.

Quando se alcança consistentemente uma solução relevante para o usuário, ele se torna um admirador e forma-se um vínculo de confiança e uma conexão emocional que se transforma em fidelidade. Nascem assim os fãs da marca.

A Aeroplano Design acredita na importância da empatia nesse processo. Quer conhecer melhor nosso trabalho? Entre em contato e venha bater um papo conosco.

Facebook: Desenvolver produtos alinhados com as reais necessidades das pessoas pode ser um grande diferencial para sua empresa. Saiba, então, como a empatia pode ajudar nesse processo.
`
    },
    { 
        id:      "5",
        title:   "Num mundo visual, é preciso dar vida aos sonhos",
        image:   img005,
        content: `Todo empreendimento nasce de um sonho. As ideias de produtos, muitas vezes, aparecem em forma de planilhas, listas de objetivos, listas de características e descrições, soluções isoladas, rascunhos. As informações, ainda subjetivas, criam conceitos que são possibilidades nascidas dos mais variados processos criativos. Nesse contexto, para que comecem a ganhar forma e sejam validadas, essas ideias precisam ir para outro estágio, que é o da visualização.

Para que a ideia se torne visual, a mão de um designer de produtos é essencial. Ele vai dar corpo visual à informações e conceitos subjetivos ou a uma certa variedade de soluções preliminares. Tudo isso em um momento no qual é importante ampliar e mapear as possibilidades, inspirando e acelerando a associação e a criação de novas ideias que serão mais tarde analisadas e avaliadas.

Para fazer isso, o profissional de design recorre a recursos como desenhos básicos ou bem elaborados, construção de modelos tridimensionais com materiais simples, simulações digitais, desenvolvimento de mapas comparativos, infográficos com elementos gráfico-visuais, tudo para tornarem visíveis as idéias e os sistemas complexos.

Dessa forma, o designer consegue visualizar as relações que fazem parte de um projeto e, além disso, pode dar oportunidade para que novas conexões sejam encontradas e testadas.

Os ganhos da empresa com a visualização

Em um momento no qual o planejamento do negócio ou o desenvolvimento de um produto ainda estão no início, o esforço de criar maneiras de visualizar a ideia permite que suas características definidoras sejam expostas a um custo de investimento muito baixo.

Com isso, há a possibilidade de enxergar as vantagens do projeto e os diferenciais frente aos concorrentes, vislumbrar como o produto deverá ser usado, suas possíveis desvantagens e dificuldades com o usuário, necessidades em termos de processos de fabricação e uso adequado de materiais, ou seja, os impactos, as necessidades e os riscos são descobertos e podem ser discutidos com antecipação.

Em resumo, é o primeiro teste real daquilo que tinha sido sonhado. É, portanto, o momento em que os erros se transformam em conhecimento valioso, pois permitem que correções importantes sejam feitas ou que características que merecem maior destaque recebam mais atenção.

Evita-se o prejuízo de se descobrir apenas em estágios mais avançados do projeto de que a ideia precisava de mais ajustes ou de que a estratégia estava desfocada. De certa maneira, é uma forma de reduzir e otimizar custos financeiros e outros recursos tão preciosos.

O empreendedor tem a oportunidade para verificar de maneira prática aquilo que tinha imaginado apenas de maneira subjetiva. No fim do processo, é possível ter a certeza de que o caminho a ser trilhado é promissor.

Nós, da Aeroplano Design, acreditamos na importância do planejamento e, por isso, prezamos por isso em nossos projetos. Entre em contato e faça uma visita.



Facebook: Tirar uma ideia apenas do campo da subjetividade e visualizá-la é fundamental no processo de desenvolvimento de um produto. Entenda como podemos ajudar nisso.
`
    }
]