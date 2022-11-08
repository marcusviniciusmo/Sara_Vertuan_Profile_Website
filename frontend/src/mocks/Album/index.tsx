import { AlbumProps } from "types/Album";
import Cover01 from '../../assets/album/01_a_face_oculta_dos_versos.jpg';
import Cover02 from '../../assets/album/02_sherlock_holmes_e_a_agencia_anticrimes.jpg';
import Cover03 from '../../assets/album/03_minha_novela_turca_2.jpg';
import Cover04 from '../../assets/album/04_markus_novelas_noturnas_livro_2.jpg';
import Cover05 from '../../assets/album/05_uma_cancao_de_ano_novo.jpg';
import Cover06 from '../../assets/album/06_incrivel_galaxia.jpg';
import Cover07 from '../../assets/album/07_valek_novelas_noturnas_livro_1.jpg';
import Cover08 from '../../assets/album/08_transmorfo.jpg';
import Cover09 from '../../assets/album/09_tudo_inspira_e_respira_poesia.jpg';
import Cover10 from '../../assets/album/10_de_vista_para_a_mesquita.jpg';
import Cover11 from '../../assets/album/11_o_alvorecer_da_rosa.jpg';
import Cover12 from '../../assets/album/12_no_fim_do_mundo.jpg';
import Cover13 from '../../assets/album/13_um_sonho_real_um_absoluto_cliche.jpg';
import Cover14 from '../../assets/album/14_depois_da_curva.jpg';
import Cover15 from '../../assets/album/15_o_povoado_no_fim_do_mundo.jpg';
import Cover16 from '../../assets/album/16_a_vovo_chamou_o_diabo_para_a_ceia.jpg';
import Cover17 from '../../assets/album/17_a_casa_das_hostesses_encontros_e_solidao.jpg';
import Cover18 from '../../assets/album/18_a_outra_ana.jpg';
import Cover19 from '../../assets/album/19_minha_vida_um_dorama.jpg';
import Cover20 from '../../assets/album/20_o_circulo_de_pedra.jpg';

export const MockedData: AlbumProps[] = [
  {
    language: 'PT',
    arrows: {
      prev: 'Página Anterior',
      next: 'Próxima Página'
    },
    labelSynopsis: 'SINOPSE',
    labelPost: 'Ver post',
    image: [
      {
        id: 1,
        url: Cover01,
        title: '"A Face Oculta dos Versos"',
        author: 'George Luan @8763.george',
        year: 2022,
        publisher: `Lura Editorial @lura_editorial e @academiadeletras_ajal`,
        synopsis: `“A face oculta dos versos”. Ética, estilo, simplicidade e
          originalidade — eis os ingredientes essenciais a contrapesar no prato
          de cá da balança, versus os registros predominantes trágicos do cânone
          ocidental, amiúde desfavoráveis ao gênero feminino.
          Isso porque, desde nossos primórdios, na Grécia Antiga, as
          mulheres-mães já protagonizavam um “padecer no paraíso”; como no caso
          da consorte de Agamemnon, a boa Clitemnestra, conforme a define
          Homero, no terceiro canto da “Odisseia”, a mãe que suportou o suplício
          de ver sua filha Ifigênia ser imolada pelo próprio pai Agamemnon, para
          agradar a deusa Ártemis, em favor dos ventos favoráveis à navegação.`,
        link: `https://www.instagram.com/p/CkRe7ojAS8J/`
      },
      {
        id: 2,
        url: Cover02,
        title: '"Sherlock Holmes E A Agência Anticrimes"',
        author: '',
        year: 2022,
        publisher: 'Editora Grimm @editoragrimm',
        synopsis: `“Por muitos anos Londres presenciou o legado do grande
          Sherlock Holmes. O homem que desafiou o crime organizado e resolveu os
          maiores mistérios que assombravam a polícia. Holmes parecia eterno,
          mas o tempo chegou e o velho detetive não pode mais fazer tudo
          sozinho. Assim, nasce uma nova geração de detetives.
          Aqui você testemunhará as histórias dos herdeiros de Sherlock Holmes.`,
        link: `https://www.instagram.com/p/Cj31cfOjOFD/`
      },
      {
        id: 3,
        url: Cover03,
        title: '"Minha Novela Turca 2"',
        author: 'Raffa Fustagno @raffafustagno',
        year: 2022,
        publisher: 'Publicação Independente',
        synopsis: `Sandra e Marcelo estão completamente apaixonados um pelo
          outro. O que poderia ser melhor do que namorar alguém que ama assistir
          suas amadas novelas turcas e falar sobre elas? Só que nem tudo são
          flores quando ex namorados surgirem como uma continuação digna de
          filme de terror e alguns segredos forem revelados. Será que nosso
          casal terá seu final feliz? Ou farão jus aos dramalhões turcos e farão
          todo mundo chorar com algumas decisões? Em Minha Novela Turca 2 eles
          aprenderão que não é só na Turquia que cada capítulo da história
          precisa ser escrito com muito cuidado, para garantir um felizes para
          sempre.`,
        link: `https://www.instagram.com/p/CiYT-vss-LQ/`
      },
      {
        id: 4,
        url: Cover04,
        title: '"Markus (Novelas Noturnas Livro 2)"',
        author: 'Juliana Daglio @judaglio2',
        year: 2022,
        publisher: 'Publicação Independente',
        synopsis: `Camila Aranha não se lembra de Markus, exceto de que o amou a
          ponto de enlouquecer. Antes da chegada de Valek, o pianista carioca
          ocupou seis meses de sua vida. Esse volume contará a misteriosa
          história do músico que mudou-se com sua família para São Paulo para
          tentar a carreira na noite com sua banda de Jazz. Porém, quando o
          vampiro Mael entra em seu caminho, se aproveitando da atração que
          Camila Aranha sente por ele à primeira vista, seus sonhos e a
          segurança de sua família são postos em risco. O que aconteceu nesse
          período? Seria Markus um vilão ou o verdadeiro protagonista?`,
        link: `https://www.instagram.com/p/Chn7A-SqhVj/`
      },
      {
        id: 5,
        url: Cover05,
        title: '"Uma Canção de Ano Novo"',
        author: 'Felipe Gulyas @fegulyas',
        year: 2022,
        publisher: 'Editora Grimm',
        synopsis: `No dia em que a irmã gêmea de Jace morreu, a vida perdeu um
          pouco o sentido. Jace nunca pensou que teria de dizer adeus tão cedo,
          nem de ter que voltar, quase dez anos depois, ao lugar que deu origem
          a tudo. Enquanto precisa lidar com seus sentimentos, Jace encontra
          pistas deixadas por sua irmã, levando o garoto a viver aventuras na
          cidade que tanto mudou, com novos amigos e muita música na véspera de
          ano novo, onde fogos de artifício tomam os céus e fantasmas do passado
          estão à solta nas ruas da cidade.`,
        link: `https://www.instagram.com/p/Cg7nUusq32s/`
      },
      {
        id: 6,
        url: Cover06,
        title: '"Incrível Galáxia"',
        author: 'Gian Bettinhausen @bettinhausen',
        year: 2022,
        publisher: 'Tribus Editorial',
        synopsis: `Ninguém é uma ilha solitária. Quando Fernando é obrigado a
          fazer um trabalho com seu veterano, e antigo conhecido, Pedro, muitas
          coisas são colocadas na mesa. Quem ele é? O que ele está fazendo da
          sua vida? É aquilo mesmo que ele quer?
          Em meio a gravações, edições e livros, uma força maior do que a
          amizade vai crescendo, enquanto ambos vão descobrindo que nem sempre
          tudo sai como planejado.
          Viver é sempre uma eterna dúvida, mas certamente eles irão descobrir
          que viver com pessoas incríveis ao seu lado é muito mais fácil.
          É preciso muito mais que uma ou duas estrelas e um planeta para formar
          uma galáxia.`,
        link: `https://www.instagram.com/p/Ceriwwwtqf0/`
      },
      {
        id: 7,
        url: Cover07,
        title: '"Valek (Novelas Noturnas Livro 1)"',
        author: 'Juliana Daglio @judaglio2',
        year: 2022,
        publisher: 'Publicação Independente',
        synopsis: `Camila Aranha está envolvida com a investigação de um
          assassino que mata homens bêbados à noite, por estrangulamento,
          deixando uma assinatura de mordidas com marcas de batom. Nos anos 60
          antes da ditadura militar, o ritmo de samba embala das noites e une um
          quebra-cabeças entre a história de um vampiro ancestral e a jornalista
          que pode ser o centro de tudo – e o novo alvo do vampiro Valek.`,
        link: `https://www.instagram.com/p/CcTibVnIbcq/`
      },
      {
        id: 8,
        url: Cover08,
        title: '"Transmorfo"',
        author: 'Bettina Winkler @bettwinkler',
        year: 2022,
        publisher: 'Publicação Independente',
        synopsis: `Maddie, Faith, Frankie, Alisha e Essie são Transmorfos, seres
          humanos com a capacidade de se transfigurarem em animais específicos,
          tendo assim acesso às habilidades e instintos de seus respectivos
          animais de transformação.Mas o mundo não é um lugar seguro para
          criaturas místicas com tais poderes. A fim de proteger tais segredos
          dos humanos comuns e para se manterem protegidos de caçadores odiosos,
          foi criada há muitos anos a Academia Linnaeus para Transformos.
          Situada em Winter Meadow, uma área imperceptível aos mapas nas
          montanhas polares do Alasca, a academia é conhecida como o lugar mais
          seguro para um Transmorfo viver.
          Mas será mesmo que a Linnaeus é um lugar completamente protegido?
          Um assassinato misterioso prova para as nossas cinco protagonistas que
          não é bem assim. E pior do que isso, são os bilhetes ameaçadores que
          vêm em seguida, prometendo ainda mais derramamento de sangue entre as
          paredes da Linnaeus. O assassino pode ser qualquer um. Em quem elas
          podem confiar? Quem será a próxima vítima? Até que ponto elas podem
          contar com seus instintos tanto animais quanto humanos? Maddie, sua
          ligação com os caçadores e seu antigo bando. Alisha e um enorme
          segredo que a levou até ali. Frankie com sua taciturnidade e aversão
          ao contato humano. Essie, suas inseguranças e a conexão com uma
          vítima. Faith com suas lutas clandestinas e segredos sobre sua
          família. A amizade que cresce entre elas cinco é sequer verdadeira?`,
        link: `https://www.instagram.com/p/CcOekrvt46h/`
      },
      {
        id: 9,
        url: Cover09,
        title: '"Tudo inspira e respira poesia"',
        author: 'Nanne Pimenta @pimentananne',
        year: 2022,
        publisher: 'Editora Sinna @editorasinna',
        synopsis: `Uma coletânea de poesias alegres, inspiradoras e divertidas
          que transmitem mensagens positivas de coragem, determinação e ousadia
          através de rimas claras e de fácil leitura. Um livro encantador, capaz
          de tocar o coração e a alma de quem o lê, fazendo despertar não só a
          vontade de ler poesia, como ainda, escrevê-las, afinal, tudo inspira
          (e respira) poesia.`,
        link: `https://www.instagram.com/p/CcGg6ZStOkm/`
      },
      {
        id: 10,
        url: Cover10,
        title: '"De vista para a Mesquita"',
        author: 'Manuela Marques Tchoe @manuela.tchoe.autora',
        year: 2021,
        publisher: 'Editora Pendragon @editorapendragon',
        synopsis: `Desafiando família e amigos, Roberta embarca para o Egito
          para visitar Farid com expectativas de uma lua de mel — mesmo que uma
          guerra esteja prestes a explodir no Oriente Médio. Entre Cairo,
          Alexandria e o Oásis de Siwa, ela batalha contra o preconceito num
          mundo fechado para uma mulher estrangeira e católica.
          Temendo perder sua identidade em prol do amor, Roberta decide tomar o
          caminho mais fácil e retornar para Salvador, sua cidade natal, onde se
          casa com o ciumento Marcos.
          Duas décadas depois, ela viaja a trabalho para a cidade espanhola de
          Sevilha com a sensação de que sua vida está numa encruzilhada.
          Inesperadamente, reencontra Farid, o egípcio que jamais deixou de amar.
          Neste acerto de contas, os dois revelam os acontecimentos de suas
          vidas diante de casamentos fracassados, preconceito no pós 11 de
          Setembro, famílias destruídas pela Primavera Árabe e sonhos esquecidos
          em função de tradição e religião.`,
        link: `https://www.instagram.com/p/CZuwhvet41B/`
      },
      {
        id: 11,
        url: Cover11,
        title: '"O Alvorecer da Rosa"',
        author: 'Bruna Diana @escritosdeoutono',
        year: 2022,
        publisher: 'Publicação Independente',
        synopsis: `Quantos segredos um pingente de rosa pode esconder? Enquanto
          muitos esperam e acreditam que Aurora seja a solução para os problemas
          de Aethel, ela busca respostas sobre o passado de sua poderosa família
          e do presente que sua avó lhe deu antes de morrer.
          Ao chegar em Aethel, Aurora se vê em meio a um conflito entre dois
          lados. O que não imaginava era que aquele mundo até então desconhecido
          começaria a mostrar que possui relação com sua história, a obrigando
          tomar decisões que mudarão para sempre sua vida.`,
        link: `https://www.instagram.com/p/CZh8hvKt0Nx/`
      },
      {
        id: 12,
        url: Cover12,
        title: '"No fim do mundo"',
        author: 'Felipe Gulyas @fegulyas',
        year: 2022,
        publisher: 'Editora Grimm @editoragrimm',
        synopsis: `A morte é a maior das aventuras. Colin White não estava
          preparado para morrer, mas a morte não podia esperar para levá-lo.
          Agora, tendo apenas uma canoa como guia, ele terá que fazer a
          travessia por um grande mar até a outra vida, descobrindo que o fim do
          mundo guarda grandes mistérios e revelações que ele nunca poderia
          esperar. Ao mesmo tempo em que garoto vaga por esse mar, Colin não
          consegue deixar de pensar nas pessoas que deixou para trás. Enquanto o
          passado e o presente se misturam, será que ele vai ser forte o
          bastante para chegar ao fim de tudo?`,
        link: `https://www.instagram.com/p/CZF0D-dqgHg/`
      },
      {
        id: 13,
        url: Cover13,
        title: '"Um Sonho Real - Um absoluto clichê"',
        author: 'Ana Maria Duarte @anadsduarte',
        year: 2022,
        publisher: 'Publicação Independente',
        synopsis: `"Anna Thomas tem apenas dezessete anos e é apaixonada por
          tudo a sua volta: seus amigos, sua família, sua escola, sua casa, seu
          quarto... mas quando o assunto é estar de fato apaixonada por alguém
          isso é guardado apenas para o enredo dos livros de romance dos quais é
          fascinada.
          Ler sobre amor sempre foi fácil, mas vive-lo ao vivo? Jamais.
          Ela sempre imaginou que, depois de ter lido tanto sobre romance, nunca
          poderia viver sua própria história de amor, afinal sua vida não era um
          filme em cartaz ou um livro best-seller, era apenas... a vida, mas tem
          coisas que simplesmente tendem a mudar, e o que antes eram apenas
          palavras em um enredo fictício se tornam palavras a serem vividas”.`,
        link: `https://www.instagram.com/p/CYkJSQUr6wa/`
      },
      {
        id: 14,
        url: Cover14,
        title: '"Depois da Curva"',
        author: 'Samara Viana @samaravianaescritora',
        year: 2022,
        publisher: 'Publicação Independente',
        synopsis: `Depois de perder a irmã mais nova em um acidente de trânsito,
          o mundo de Brenda despenca de ladeira abaixo. Enquanto tenta
          reerguê-lo, descobre que o seu falecido pai teve uma filha fora do
          casamento e, pior, que ela quer passar um tempo em seu apartamento em
          Lisboa. Quando a inesperada visita acontece, as irmãs embarcam em uma
          jornada de autodescoberta em meio a segredos familiares que vêm à
          tona, fazendo com que Brenda desperte do seu mundo introspectivo.
          Adam, um premiado fotojornalista, também perdeu seu irmão mais novo.
          Mas sua crise emocional vai além disso. A perda apenas agravou sua
          percepção fechada sobre a vida. Ele viveu os últimos oito anos quase
          como um nômade, indo e vindo de países árabes em guerra, fotografando
          sua devastação, mas está de volta a Lisboa em definitivo, um lugar de
          recordações hostis.
          É nesse momento sinuoso de suas vidas que eles se encontram para
          trilhar um caminho ora estreito, ora espaçoso — isso está condicionado
          a como cada um enfrentará os obstáculos.`,
        link: `https://www.instagram.com/p/CYXjPiTKfm0/`
      },
      {
        id: 15,
        url: Cover15,
        title: '"O Povoado no Fim do Mundo',
        author: 'André Comanche @do.conto.ao.traco',
        year: 2021,
        publisher: 'Publicação @leitores_fantasticos',
        synopsis: `"Em 'O Povoado no Fim do Mundo', André Comanche cria uma
          fábula de horror pós apocalíptico no coração de um simples e isolado
          povoado do interior brasileiro.
          A trama é ambientada no sertão, com seus contrastes naturais realçados
          por pinceladas lovecraftianas. O pequeno assentamento nordestino
          sobreviveu ao assalto de uma moléstia cósmica que há dois anos dizimou
          a humanidade.
          O isolamento geográfico e social, que antes era responsável por sua
          miséria material, se tornou uma defesa contra o fim do mundo. No
          entanto, mesmo sobrevivendo na base da criatividade e resiliência de
          seus populares, uma hora a fome se revela um monstro tão mortal quanto
          os que residem além das fronteiras.
          É chegada a hora de enfrentar as duas frentes da morte, a interna e a
          externa."`,
        link: `https://www.instagram.com/p/CXZFc1yNDmM/`
      },
      {
        id: 16,
        url: Cover16,
        title: '"A vovó chamou o Diabo para a ceia"',
        author: 'Juliana Daglio @judaglio2',
        year: 2021,
        publisher: 'Publicação Independente',
        synopsis: `Poucas coisas nesse mundo têm mais de dois nomes; dentre elas
          está a realeza brasileira, as genitálias humanas, o próprio ato sexual,
          e, claro, o Diabo. Seria difícil escolher entre uma de suas múltiplas
          alcunhas.”
          A Ceia de Natal está posta à mesa. A Velha casa dos Vieira arrumada e
          enfeitada com luzes coloridas e guirlandas. Os quatro filhos da
          falecida matriarca já chegaram, três dos onze netos também vieram. Os
          sete membros da família estão sentados na sala, esperando para
          cumprirem o último desejo de Olegna: assistirem juntos o vídeo com
          suas últimas palavras.
          Quando o rosto da mulher aparece na tela, já abatida pela doença que
          ceifou sua vida, sua família mal pode acreditar nas palavras ouvidas.
          Ao que parece, há um convidado especial entre eles; as portas estão
          fechadas, os telefones mudos, o pavor se alastrando e os velhos
          problemas da família emergindo e trazendo o caos. A ceia não é mais
          feita de peru, farofa com uva passa e salpicão. A refeição principal
          agora são os pecados e a alma dos Vieira.
          Porque a Vovó chamou o Diabo para a Ceia, e ninguém vai sair vivo de
          lá.`,
        link: `https://www.instagram.com/p/CXOpg6OIUYR/`
      },
      {
        id: 17,
        url: Cover17,
        title: '"A Casa das Hostesses - Encontros e Solidão"',
        author: 'Déborah Felipe @acasadashostesses',
        year: 2021,
        publisher: 'Editora Pendragon @editorapendragon',
        synopsis: `A Casa das Hostesses não se parece com um lugar que Souji
          frequentaria normalmente. A música é muito alta, as pessoas parecem
          menos inibidas, as luzes dançam muito rápido, as bebidas se parecem
          mais com poções mágicas... E as garotas... Bom, ele não sabe ao certo
          como é que um trabalho como aquele funciona. Mas aquele lugar
          misterioso surgiu em seu caminho como se fosse um encontro marcado
          pelo Destino...
          Takeshi Souji sempre conduziu sua vida sobre três pilares: seu
          trabalho na empresa Takeshi, que um dia será sua; seu noivado com
          Juury, sua namorada do colégio, e seus amigos de infância. Porém,
          dois desses pilares desmoronam quando ele descobre que sua noiva tem
          um caso com seu pai, deixando-o completamente sem chão.
          A Casa das Hostesses é um prédio de aparência antiga que germina como
          se fizesse parte do solo. Ninguém perceberia aquele lugar se não o
          estivesse procurando e talvez isso faça parte de seu charme, como um
          lugar que sabe exatamente quem deseja conhecer a cada noite, como se
          fosse uma das hostesses que trabalha ali...
          A todos que estão para conhecer esse novo mundo...
          Sejam bem-vindos à Casa das Hostesses.`,
        link: `https://www.instagram.com/p/CWB9yK1N7Eu/`
      },
      {
        id: 18,
        url: Cover18,
        title: '"A Outra Ana"',
        author: 'Italo Oliveira @itwlu',
        year: 2020,
        publisher: 'Publicação Independente',
        synopsis: `Duas irmãs. Um assassino. Todos são suspeitos. Ana Elisa
          Pérez, uma das maiores golpistas de Cozumel, vê sua vida virar de
          ponta-cabeça ao deparar-se com Ana Sofia, uma mulher idêntica a ela.
          Descobre, então, segredos há muito guardados sobre seu nascimento.
          Dentre eles, uma irmã gêmea.
          Ana Sofia Salvatierra Rincon é uma dama da alta sociedade mexicana,
          que está disposta a tudo para ter a irmã gêmea ao seu lado. Mas o
          destino prega peças, e uma morte prematura destrói todos os seus
          planos – ou quase todos.
          Perdida numa mansão desconhecida, Elisa terá de ser forte para
          enfrentar as adversidades da vida e descobrir o verdadeiro assassino
          de sua irmã, carregando consigo a face morta de Sofia; um lembrete de
          que não era única. Existira outra mulher como ela. Uma outra Ana.`,
        link: `https://www.instagram.com/p/CVx8CMEJwfs/`
      },
      {
        id: 19,
        url: Cover19,
        title: '"Minha vida, um dorama"',
        author: 'Angel Wolff @autora.angelwolff',
        year: 2021,
        publisher: 'Tribus Editorial @tribuseditorial',
        synopsis: `Atualmente, dramas coreanos arrebatam o coração dos
          brasileiros com seus enredos cheios de emoção e ingenuidade.
          Extremamente doces e leves, os doramas nos dão uma nova visão dos
          romances, em comparação aos que estamos acostumados no ocidente.
          Mas quem disse que nós humildes mortais não podemos viver o nosso
          próprio dorama? Com direito a histórias arrebatadoras e apaixonantes?
          Ou quem sabe histórias de comédia ou até um mistério, suspense
          policial, ação, fantasia… Mas com a palavra chave sendo o romance!
          “Minha vida, um dorama” vem para preencher ainda mais o coração
          daquela dorameira que passa madrugadas maratonando seu casal favorito;
          shippando um casal improvável ou só para conquistar aqueles leitores
          que amam se apaixonar. São histórias cheias de romance, boas doses de
          clichês, reviravoltas emocionantes e cenas dignas das novelas
          orientais, claro, todos embalados/baseados por uma música K-pop; J-pop
          ou C-pop.`,
        link: `https://www.instagram.com/p/CUTV0JaAaky/`
      },
      {
        id: 20,
        url: Cover20,
        title: '"O circulo de pedra"',
        author: 'Ricardo Costac @ricardocostacoficial',
        year: 2020,
        publisher: 'Publicação Independente',
        synopsis: `O que você faria se tivesse que guardar o maior segredo de
          todos os tempos e nunca... nunca pudesse revelá-lo a mais ninguém? E
          se tivesse que conviver com um segredo tão incrível que mudaria sua
          vida para sempre? Cinco jovens estudantes descobrem um segredo
          guardado por quatrocentos anos que os fará viver a maior aventura de
          suas vidas. Eles serão levados a descobrir coisas inacreditáveis nessa
          fantástica jornada, desafiando constantemente suas habilidades,
          inteligência e coragem. E quanto a você, seria capaz de guardar o
          maior segredo de todos os tempos?`,
        link: `https://www.instagram.com/p/CTvS2HosMEt/`
      }
    ]
  },
  {
    language: 'EN',
    arrows: {
      prev: 'Previous Page',
      next: 'Next Page'
    },
    labelSynopsis: 'SYNOPSIS',
    labelPost: 'Check post',
    image: [
      {
        id: 1,
        url: Cover01,
        title: '"A Face Oculta dos Versos"',
        author: 'George Luan @8763.george',
        year: 2022,
        publisher: `Lura Editorial @lura_editorial and @academiadeletras_ajal`,
        synopsis: `“The hidden face of the verses”. ethics, style, simplicity
          and originality — these are the essential ingredients to
          counterbalance on this side of the scale, versus the records tragedies
          of the western canon, often unfavorable to the feminine gender.
          This is because, since our beginnings, in Ancient Greece, the
          women-mothers were already the protagonists of a “suffering in
          paradise”; as in the case of Agamemnon's consort, the good
          Clytemnestra, as defined Homer, in the third canto of the “Odyssey”,
          the mother who endured the torture of seeing his daughter Iphigenia
          being immolated by her father Agamemnon, to please the goddess
          Artemis, in favor of winds favorable to navigation.`,
        link: `https://www.instagram.com/p/CkRe7ojAS8J/`
      },
      {
        id: 2,
        url: Cover02,
        title: '"Sherlock Holmes E A Agência Anticrimes"',
        author: '',
        year: 2022,
        publisher: 'Editora Grimm @editoragrimm',
        synopsis: `“For many years London has seen the legacy of great Sherlock
          Holmes. The man who defied organized crime and solved the biggest
          mysteries that haunted the police. Holmes seemed eternal, but the time
          has come and the old detective can no longer do everything yourself.
          Thus, a new generation of detectives is born. Here you will witness
          the stories of the heirs of Sherlock Holmes.`,
        link: `https://www.instagram.com/p/Cj31cfOjOFD/`
      },
      {
        id: 3,
        url: Cover03,
        title: '"Minha Novela Turca 2"',
        author: 'Raffa Fustagno @raffafustagno',
        year: 2022,
        publisher: 'Independent publication',
        synopsis: `Sandra and Marcelo are completely in love with each other for
          the other. What could be better than dating someone you love? watch
          your beloved Turkish soap operas and talk about them? only not
          everything is flowers when ex boyfriends appear as a sequel worthy of
          a horror movie and some secrets are revealed. Does will our couple
          have their happy ending? Or will they live up to the Turkish dramas
          and make everyone cry with some decisions? In My Turkish Novel 2 they
          will learn that it is not only in Turkey that each chapter of history
          needs to be written very carefully, to ensure a happy to ever.`,
        link: `https://www.instagram.com/p/CiYT-vss-LQ/`
      },
      {
        id: 4,
        url: Cover04,
        title: '"Markus (Novelas Noturnas Livro 2)"',
        author: 'Juliana Daglio @judaglio2',
        year: 2022,
        publisher: 'Independent publication',
        synopsis: `Camila Aranha doesn't remember Markus, except that loved him
          to the point of madness. Before Valek's arrival, the pianist carioca
          took up six months of his life. This volume will mysterious story of
          the musician who moved with his family to São Paulo to try his career
          at night with his jazz band. Although, when the vampire Mael gets in
          his way, taking advantage of the attraction that Camila Aranha feels
          for him at first sight, his dreams and the your family's safety are
          put at risk. what happened in that period? Would Markus be a villain
          or the real protagonist?`,
        link: `https://www.instagram.com/p/Chn7A-SqhVj/`
      },
      {
        id: 5,
        url: Cover05,
        title: '"Uma Canção de Ano Novo"',
        author: 'Felipe Gulyas @fegulyas',
        year: 2022,
        publisher: 'Editora Grimm',
        synopsis: `The day Jace's twin died, life lost some sense. Jace never
          thought he'd have to say goodbye so soon, nor having to return, almost
          ten years later, to the place gave rise to everything. While dealing
          with his feelings, Jace finds clues left by his sister, leading the
          boy to live adventures in the city that has changed so much, with new
          friends and lots of music on New Year's Eve, where fireworks take the
          skies and ghosts of the past are loose on the city streets.`,
        link: `https://www.instagram.com/p/Cg7nUusq32s/`
      },
      {
        id: 6,
        url: Cover06,
        title: '"Incrível Galáxia"',
        author: 'Gian Bettinhausen @bettinhausen',
        year: 2022,
        publisher: 'Tribus Editorial',
        synopsis: `Nobody is a lonely island. when Fernando is obliged to do a
          job with his veteran, and old acquaintance, Peter, many things are
          placed on the table. Who he is? what is he doing with your life? Is
          that what he wants?
          In the midst of recordings, editions and books, a force greater than
          friendship grows, while both discover that not always everything goes
          as planned.
          Living is always an eternal doubt, but surely they will find out that
          living with amazing people by your side is so much easier.
          It takes a lot more than a star or two and a planet to form a galaxy.`,
        link: `https://www.instagram.com/p/Ceriwwwtqf0/`
      },
      {
        id: 7,
        url: Cover07,
        title: '"Valek (Novelas Noturnas Livro 1)"',
        author: 'Juliana Daglio @judaglio2',
        year: 2022,
        publisher: 'Independent publication',
        synopsis: `Camila Aranha is involved with the investigation of an
          assassin who kills drunk men at night, by strangulation, leaving a
          bite signature with lipstick marks. in the 60's before the military
          dictatorship, the samba rhythm rocks the nights and unites a puzzle
          between the story of an ancestral vampire and the journalist who could
          be the center of it all - and the vampire Valek's new target.`,
        link: `https://www.instagram.com/p/CcTibVnIbcq/`
      },
      {
        id: 8,
        url: Cover08,
        title: '"Transmorfo"',
        author: 'Bettina Winkler @bettwinkler',
        year: 2022,
        publisher: 'Independent publication',
        synopsis: `Maddie, Faith, Frankie, Alisha and Essie are Changelings,
          humans with the ability to transfigure themselves into specific
          animals, thus having access to the abilities and instincts of their
          respective transformation animals. But the world is not a place safe
          for mystical creatures with such powers. in order to protect such
          secrets from ordinary humans and to keep themselves safe from hateful
          hunters, the Linnaeus Academy was created many years ago to transforms.
          Located in Winter Meadow, an area imperceptible to maps in Alaska's
          polar mountains, the academy is known as the safest place for a
          Changeling to live.
          But is Linnaeus really a completely protected place?
          A mysterious murder proves to our five protagonists that not quite
          like that. And worse than that, are the threatening notes that come
          next, promising even more bloodshed between the Linnaeus walls. The
          killer could be anyone. on whom they can you trust? Who is going to be
          the next victim? To what extent can they rely on your instincts both
          animal and human? Maddie, your liaison with the hunters and their
          former pack. Alisha is a huge secret that got her there. Frankie with
          her taciturnity and aversion to human contact. Essie, her insecurities
          and her connection to a victim. Faith with her clandestine fights and
          secrets about her family. Is the friendship that grows between the
          five of them even true?`,
        link: `https://www.instagram.com/p/CcOekrvt46h/`
      },
      {
        id: 9,
        url: Cover09,
        title: '"Tudo inspira e respira poesia"',
        author: 'Nanne Pimenta @pimentananne',
        year: 2022,
        publisher: 'Editora Sinna @editorasinna',
        synopsis: `A collection of uplifting, inspiring and fun activities that
          convey positive messages of courage, determination and boldness
          through clear, easy-to-read rhymes. A book charming, capable of
          touching the heart and soul of those who read it, making awaken not
          only the desire to read poetry, but also to write them, after all,
          everything inspires (and breathes) poetry.`,
        link: `https://www.instagram.com/p/CcGg6ZStOkm/`
      },
      {
        id: 10,
        url: Cover10,
        title: '"De vista para a Mesquita"',
        author: 'Manuela Marques Tchoe @manuela.tchoe.autora',
        year: 2021,
        publisher: 'Editora Pendragon @editorapendragon',
        synopsis: `Defying family and friends, Roberta embarks on Egypt to visit
          Farid with expectations of a honeymoon — even that a war is about to
          break out in the Middle East. In between Cairo, Alexandria and the
          Siwa Oasis, she battles prejudice in a world closed to a foreign and
          Catholic woman. Fearing to lose her identity for the sake of love,
          Roberta decides to take the easier way and return to Salvador, his
          hometown, where he marries the jealous Marcos.
          Two decades later, she travels for work to the Spanish city of
          Seville with the feeling that your life is at a crossroads.
          Unexpectedly, he meets Farid, the Egyptian he never stopped loving.
          In this settling of accounts, the two reveal the events of their
          lives in the face of failed marriages, prejudice in the post 11th of
          September, families destroyed by the Arab Spring and forgotten dreams
          depending on tradition and religion.`,
        link: `https://www.instagram.com/p/CZuwhvet41B/`
      },
      {
        id: 11,
        url: Cover11,
        title: '"O Alvorecer da Rosa"',
        author: 'Bruna Diana @escritosdeoutono',
        year: 2022,
        publisher: 'Independent publication',
        synopsis: `How many secrets can a rose pendant hide? While many hope and
          believe that Aurora is the solution for the Aethel's problems, she
          seeks answers about her past powerful family and the gift his
          grandmother gave him before she died.
          Upon arriving in Aethel, Aurora finds herself in the midst of a
          conflict between two sides. What I didn't imagine was that that
          hitherto unknown world would begin to show that it is related to her
          history, forcing her to make decisions that will change your life
          forever.`,
        link: `https://www.instagram.com/p/CZh8hvKt0Nx/`
      },
      {
        id: 12,
        url: Cover12,
        title: '"No fim do mundo"',
        author: 'Felipe Gulyas @fegulyas',
        year: 2022,
        publisher: 'Editora Grimm @editoragrimm',
        synopsis: `Death is the greatest of adventures. Colin White no was
          prepared to die, but death could not wait to take you. Now, having
          only one canoe as a guide, he will have to make the crossing a great
          sea to the afterlife, discovering that the end of the world holds
          great mysteries and revelations that he could never wait. At the same
          time that boy roams this sea, Colin doesn't can stop thinking about
          the people he left behind. While the past and present mix, will he be
          strong the enough to get to the end of it all?`,
        link: `https://www.instagram.com/p/CZF0D-dqgHg/`
      },
      {
        id: 13,
        url: Cover13,
        title: '"Um Sonho Real - Um absoluto clichê"',
        author: 'Ana Maria Duarte @anadsduarte',
        year: 2022,
        publisher: 'Independent publication',
        synopsis: `Thomas is only seventeen years old and is in love with
          everything around her: her friends, her family, her school, your
          house, your room... but when it comes to actually being in love with
          someone this is only saved for the plot of the books of romance with
          which she is fascinated.
          Reading about love has always been easy, but living it live? Never.
          She had always imagined that after having read so much about romance,
          she would never could live his own love story, after all his life was
          not a movie in theaters or a bestselling book, it was just... life,
          but it has things that simply tend to change, and what were once just
          words in a fictional plot become words to be lived”.`,
        link: `https://www.instagram.com/p/CYkJSQUr6wa/`
      },
      {
        id: 14,
        url: Cover14,
        title: '"Depois da Curva"',
        author: 'Samara Viana @samaravianaescritora',
        year: 2022,
        publisher: 'Independent publication',
        synopsis: `After losing her younger sister in a car accident traffic,
          Brenda's world plummets downhill. while trying to rebuild it,
          discovers that his late father had a daughter outside the marriage
          and, worse, that she wants to spend time in her apartment in Lisbon.
          When the unexpected visit happens, the sisters embark on a journey of
          self-discovery amidst family secrets that come to surface, causing
          Brenda to wake up from her introspective world.
          Adam, an award-winning photojournalist, also lost his younger brother.
          But his emotional crisis goes beyond that. The loss only aggravated
          her closed perception of life. He lived the last eight years almost
          like a nomad, traveling to and from Arab countries at war,
          photographing its devastation, but it is back to Lisbon for good, a
          place of hostile memories.
          It is at this winding moment in their lives that they meet to to tread
          a path that is sometimes narrow, sometimes broad - this is conditioned
          to how each one will face obstacles.`,
        link: `https://www.instagram.com/p/CYXjPiTKfm0/`
      },
      {
        id: 15,
        url: Cover15,
        title: '"O Povoado no Fim do Mundo',
        author: 'André Comanche @do.conto.ao.traco',
        year: 2021,
        publisher: '@leitores_fantasticos',
        synopsis: `"In 'O Povoado no Fim do Mundo', André Comanche creates a
          tale of post-apocalyptic horror at the heart of a simple and isolated
          village in the Brazilian interior.
          The plot is set in the sertão, with its natural contrasts highlighted.
          by Lovecraftian brushstrokes. The small northeastern settlement
          survived the onslaught of a cosmic disease that two years ago
          decimated the humanity.
          The geographic and social isolation, which was previously responsible
          for its material misery, became a defense against the end of the
          world. At the however, even surviving on the basis of creativity and
          resilience of its popular, one hour hunger proves to be a monster as
          deadly as those residing across borders.
          The time has come to face the two fronts of death, the internal and
          the external."`,
        link: `https://www.instagram.com/p/CXZFc1yNDmM/`
      },
      {
        id: 16,
        url: Cover16,
        title: '"A vovó chamou o Diabo para a ceia"',
        author: 'Juliana Daglio @judaglio2',
        year: 2021,
        publisher: 'Independent publication',
        synopsis: `Few things in this world have more than two names; among them
          are the Brazilian royalty, the human genitals, the sexual act itself,
          and, of course, the Devil. It would be hard to choose between one of
          his multiple nicknames.”
          Christmas dinner is on the table. The old Vieira house tidy and
          adorned with colored lights and garlands. the four children of late
          matriarch have arrived, three of the eleven grandchildren have also
          arrived. You seven family members are sitting in the room, waiting for
          fulfill Olegna's last wish: to watch the video together with your
          last words.
          When the woman's face appears on the screen, already beaten down by
          the disease that took his life, his family can hardly believe the
          words they heard.
          Apparently, there is a special guest among them; the doors are closed,
          the phones muted, the dread spreading and the old family problems
          emerging and bringing chaos. Supper is no more made of turkey, farofa
          with raisins and sausage. the main meal now they are the sins and the
          soul of the Vieira.
          Because Grandma called the Devil to Supper, and no one will get out of
          it alive there.`,
        link: `https://www.instagram.com/p/CXOpg6OIUYR/`
      },
      {
        id: 17,
        url: Cover17,
        title: '"A Casa das Hostesses - Encontros e Solidão"',
        author: 'Déborah Felipe @acasadashostesses',
        year: 2021,
        publisher: 'Editora Pendragon @editorapendragon',
        synopsis: `Casa das Hostesses doesn't look like a place that Souji would
          attend normally. The music is too loud, the people seem less
          inhibited, the lights dance too fast, the drinks get they look more
          like magic potions... And the girls... Well, he doesn't know not sure
          how a job like that works. but that place mysterious came his way as
          if it were an appointment by Destiny...
          Takeshi Souji has always led his life on three pillars: his work at
          the Takeshi company, which will one day be yours; your engagement with
          Juury, his high school sweetheart, and his childhood friends.
          Although, two of those pillars crumble when he discovers his fiancee
          has an affair with his father, leaving him completely floored.
          The Hostesses House is an old-looking building that germinates as if
          it were part of the ground. No one would notice that place if not for
          it were looking for and maybe that's part of its charm, as a place
          that knows exactly who it wants to meet each night, as if was one of
          the hostesses who works there...
          To everyone who is to know this new world...
          Welcome to Casa das Hostesses.`,
        link: `https://www.instagram.com/p/CWB9yK1N7Eu/`
      },
      {
        id: 18,
        url: Cover18,
        title: '"A Outra Ana"',
        author: 'Italo Oliveira @itwlu',
        year: 2020,
        publisher: 'Independent publication',
        synopsis: `Two sisters. A killer. All are suspects. Ana Elisa Pérez, one
          of Cozumel's biggest scammers, sees her life turn around upside down
          when he came across Ana Sofia, a woman identical to her.
          He then discovers long-kept secrets about his birth.
          Among them, a twin sister.
          Ana Sofia Salvatierra Rincon is a lady of Mexican high society, who is
          willing to do anything to have her twin sister by her side. But the
          fate plays tricks, and an untimely death destroys all your plans - or
          almost all.
          Lost in an unknown mansion, Elisa will have to be strong to face
          life's adversities and discover the real killer of her sister,
          carrying Sofia's dead face with her; a reminder of that it was not
          unique. There had been another woman like her. Another Anne.`,
        link: `https://www.instagram.com/p/CVx8CMEJwfs/`
      },
      {
        id: 19,
        url: Cover19,
        title: '"Minha vida, um dorama"',
        author: 'Angel Wolff @autora.angelwolff',
        year: 2021,
        publisher: 'Tribus Editorial @tribuseditorial',
        synopsis: `Currently, Korean dramas capture the hearts of Brazilians
          with their plots full of emotion and naivety.
          Extremely sweet and light, the dramas give us a new vision of novels,
          compared to what we are used to in the west.
          But who said that we humble mortals can't live our drama itself?
          Entitled to sweeping and passionate stories?
          Or maybe comedy stories or even a mystery, thriller police, action,
          fantasy… But with the key word being romance!
          “My life, a drama” comes to fill the heart even more that dorameira
          who spends late nights marathoning her favorite couple;
          shipping an unlikely couple or just to win over those readers who love
          to fall in love. They are stories full of romance, good doses of
          clichés, exciting twists and scenes worthy of soap operas Orientals,
          of course, all packed/based on K-pop music; J-pop or C-pop.`,
        link: `https://www.instagram.com/p/CUTV0JaAaky/`
      },
      {
        id: 20,
        url: Cover20,
        title: '"O circulo de pedra"',
        author: 'Ricardo Costac @ricardocostacoficial',
        year: 2020,
        publisher: 'Independent publication',
        synopsis: `What would you do if you had to keep your biggest secret? all
          the time and never... could never reveal it to anyone else? AND if you
          had to live with a secret so incredible that it would change your life
          forever? Five young students discover a secret guarded for four
          hundred years that will make them live the greatest adventure of your
          lives. They will be led to discover unbelievable things in this
          fantastic journey, constantly challenging your skills, intelligence
          and courage. And as for you, would you be able to keep the biggest
          secret of all time?`,
        link: `https://www.instagram.com/p/CTvS2HosMEt/`
      }
    ]
  },
  {
    language: 'IT',
    arrows: {
      prev: 'Pagina Precedente',
      next: 'Pagina Successiva'
    },
    labelSynopsis: 'SINOSSI',
    labelPost: 'Vedi post',
    image: [
      {
        id: 1,
        url: Cover01,
        title: '"A Face Oculta dos Versos"',
        author: 'George Luan @8763.george',
        year: 2022,
        publisher: `Lura Editorial @lura_editorial e @academiadeletras_ajal`,
        synopsis: `“Il volto nascosto dei versi”. Etica, stile, semplicità e
          originalità: ecco gli ingredienti essenziali per bilanciare il piatto
          da qui sulla scala, contro i tragici record prevalenti del canone
          occidentale, spesso sfavorevole al genere femminile.
          Questo perché, sin dai nostri inizi, nell'antica Grecia, il le
          donne-madri erano già protagoniste di una “sofferenza in paradiso”;
          come nel caso della consorte di Agamennone, la buona Clitennestra,
          come definita Omero, nel terzo canto dell'Odissea, la madre che ha
          subito il supplizio di vedere sua figlia Ifigenia essere immolata da
          suo padre Agamennone, a compiacere la dea Artemide, a favore dei venti
          favorevoli alla navigazione.`,
        link: `https://www.instagram.com/p/CkRe7ojAS8J/`
      },
      {
        id: 2,
        url: Cover02,
        title: '"Sherlock Holmes E A Agência Anticrimes"',
        author: '',
        year: 2022,
        publisher: 'Editora Grimm @editoragrimm',
        synopsis: `“Per molti anni Londra ha visto l'eredità dei grandi Sherlock
          Holmes. L'uomo che ha sfidato la criminalità organizzata e risolto il
          più grandi misteri che perseguitavano la polizia. Holmes sembrava
          eterno, ma è giunto il momento e il vecchio detective non può più fare
          tutto solo. Nasce così una nuova generazione di investigatori.
          Qui potrai assistere alle storie degli eredi di Sherlock Holmes.`,
        link: `https://www.instagram.com/p/Cj31cfOjOFD/`
      },
      {
        id: 3,
        url: Cover03,
        title: '"Minha Novela Turca 2"',
        author: 'Raffa Fustagno @raffafustagno',
        year: 2022,
        publisher: 'Pubblicazione indipendente',
        synopsis: `Sandra e Marcelo sono completamente innamorati l'uno
          dell'altro. Cosa potrebbe esserci di meglio che uscire con qualcuno
          che ama guardare i tuoi amati romanzi turchi e parlarne? Solo che non
          tutto lo è fiori quando gli ex fidanzati emergono come una
          continuazione degna film horror e alcuni segreti vengono svelati. Sarà
          il nostro La coppia avrà il suo lieto fine? O saranno all'altezza dei
          drammi turchi e lo faranno tutti piangono con alcune decisioni? Nel
          mio romanzo turco 2 loro Imparerà che non è solo in Turchia che ogni
          capitolo della storia deve essere scritto con molta attenzione, per
          garantire un felice mai.`,
        link: `https://www.instagram.com/p/CiYT-vss-LQ/`
      },
      {
        id: 4,
        url: Cover04,
        title: '"Markus (Novelas Noturnas Livro 2)"',
        author: 'Juliana Daglio @judaglio2',
        year: 2022,
        publisher: 'Pubblicazione indipendente',
        synopsis: `Camila Aranha non si ricorda di Markus, tranne per il fatto
          che lo amava punto di merda. Prima dell'arrivo di Valek, il pianista
          di Rio de Janeiro impiegò sei mesi della sua vita. Questo volume
          racconterà il misterioso storia del musicista che si trasferì con la
          sua famiglia a San Paolo tentare una carriera di notte con la sua jazz
          band. Tuttavia, quando il il vampiro Mael si mette sulla sua strada,
          approfittando dell'attrazione che ha Camila Aranha prova per lui a
          prima vista, i suoi sogni e la sicurezza della tua famiglia è messa a
          rischio. cosa è successo in quello periodo? Markus sarebbe un cattivo
          o il vero protagonista?`,
        link: `https://www.instagram.com/p/Chn7A-SqhVj/`
      },
      {
        id: 5,
        url: Cover05,
        title: '"Uma Canção de Ano Novo"',
        author: 'Felipe Gulyas @fegulyas',
        year: 2022,
        publisher: 'Editora Grimm',
        synopsis: `Il giorno in cui il gemello di Jace è morto, la vita ha perso
          a poco senso. Jace non avrebbe mai pensato che avrebbe dovuto dire
          addio così presto, né dover tornare, quasi dieci anni dopo, nel luogo
          che ha dato origine a tutto. Mentre affronta i suoi sentimenti, Jace
          scopre indizi lasciati dalla sorella, che portano il ragazzo a vivere
          delle avventure città che tanto è cambiata, con nuovi amici e tanta
          musica alla vigilia capodanno dove i fuochi d'artificio si
          impossessano dei cieli e dei fantasmi del passato sono per le strade
          della città.`,
        link: `https://www.instagram.com/p/Cg7nUusq32s/`
      },
      {
        id: 6,
        url: Cover06,
        title: '"Incrível Galáxia"',
        author: 'Gian Bettinhausen @bettinhausen',
        year: 2022,
        publisher: 'Tribus Editorial',
        synopsis: `Nessuno è un'isola solitaria. Quando Fernando è costretto a
          farlo a lavorare con il suo veterano, e vecchia conoscenza, Pedro,
          molti le cose sono messe sul tavolo. Chi è lui? Cosa sta facendo la
          tua vita? È quello che vuole?
          In mezzo a registrazioni, edizioni e libri, una forza maggiore di
          l'amicizia cresce, mentre entrambi scoprono che non sempre tutto va
          come previsto.
          Vivere è sempre un eterno dubbio, ma sicuramente lo scopriranno che
          vivere con persone straordinarie al tuo fianco è molto più facile.
          Ci vuole molto più di una o due stelle e un pianeta per formarsi una
          galassia.`,
        link: `https://www.instagram.com/p/Ceriwwwtqf0/`
      },
      {
        id: 7,
        url: Cover07,
        title: '"Valek (Novelas Noturnas Livro 1)"',
        author: 'Juliana Daglio @judaglio2',
        year: 2022,
        publisher: 'Pubblicazione indipendente',
        synopsis: `Camila Aranha è coinvolta nelle indagini su a assassino che
          uccide di notte uomini ubriachi, per strangolamento, lasciando una
          firma del morso con segni di rossetto. negli anni '60 prima della
          dittatura militare, il ritmo della samba culla le notti e unisce a
          puzzle tra la storia di un vampiro ancestrale e il giornalista chi
          potrebbe essere il centro di tutto - e il nuovo obiettivo del vampiro
          Valek.`,
        link: `https://www.instagram.com/p/CcTibVnIbcq/`
      },
      {
        id: 8,
        url: Cover08,
        title: '"Transmorfo"',
        author: 'Bettina Winkler @bettwinkler',
        year: 2022,
        publisher: 'Pubblicazione indipendente',
        synopsis: `Maddie, Faith, Frankie, Alisha ed Essie sono Changeling,
          esseri umani con la capacità di trasfigurarsi in animali specifici,
          avendo così accesso alle capacità e agli istinti dei rispettivi
          animali di trasformazione, ma il mondo non è un posto sicuro per
          creature mistiche con tali poteri. Al fine di proteggere tali segreti
          dell'uomo comune e per tenersi al sicuro da odiosi cacciatori, la
          Linnaeus Academy for Transformos è stata creata molti anni fa.
          Situato a Winter Meadow, un'area impercettibile alle mappe Le montagne
          polari dell'Alaska, l'accademia è conosciuta come la più sicuro per un
          Changeling da vivere.
          Ma Linneo è davvero un luogo completamente protetto?
          Un misterioso omicidio lo dimostra ai nostri cinque protagonisti non
          proprio così. E peggio ancora, sono le note minacciose che vieni dopo,
          promettendo ancora più spargimenti di sangue tra i Mura di Linneo.
          L'assassino potrebbe essere chiunque. su chi loro puoi fidarti? Chi
          sarà la prossima vittima? In che misura possono fare affidamento sul
          tuo istinto sia animale che umano? Maddie, il tuo collegamento con i
          cacciatori e il loro ex branco. Alisha è un enorme segreto che l'ha
          portata lì. Frankie con la sua taciturnità e avversione al contatto
          umano. Essie, le sue insicurezze e il suo legame con a vittima.
          Fede con le sue lotte clandestine e segreti su di lei famiglia.
          L'amicizia che cresce tra loro cinque è vera?`,
        link: `https://www.instagram.com/p/CcOekrvt46h/`
      },
      {
        id: 9,
        url: Cover09,
        title: '"Tudo inspira e respira poesia"',
        author: 'Nanne Pimenta @pimentananne',
        year: 2022,
        publisher: 'Editora Sinna @editorasinna',
        synopsis: `Una raccolta di poesie edificanti, stimolanti e divertenti
          che trasmettono messaggi positivi di coraggio, determinazione e
          audacia attraverso rime chiare e di facile lettura. Un libro
          affascinante, capace toccare il cuore e l'anima di chi lo legge,
          risvegliando non solo il desiderio di leggere poesie, oltre a
          scriverle, dopotutto tutto ispira (e respira) poesia.`,
        link: `https://www.instagram.com/p/CcGg6ZStOkm/`
      },
      {
        id: 10,
        url: Cover10,
        title: '"De vista para a Mesquita"',
        author: 'Manuela Marques Tchoe @manuela.tchoe.autora',
        year: 2021,
        publisher: 'Editora Pendragon @editorapendragon',
        synopsis: `Sfidando famiglia e amici, Roberta salpa per l'Egitto
          visitare Farid con l'aspettativa di una luna di miele, anche se a sta
          per scoppiare la guerra in Medio Oriente. tra il Cairo, Alessandria e
          l'Oasi di Siwa, combatte il pregiudizio in a mondo chiuso per una
          donna straniera e cattolica.
          Temendo di perdere la sua identità per amore dell'amore, Roberta
          decide di prendere il modo più semplice e tornare a Salvador, la sua
          città natale, dove lui sposa il geloso Marcos.
          Due decenni dopo, si reca per lavoro nella città spagnola di Siviglia
          con la sensazione che la tua vita sia a un bivio.
          Inaspettatamente incontra Farid, l'egiziano che non ha mai smesso di
          amare.
          In questo regolamento di conti, i due svelano le vicende del loro vive
          di fronte a matrimoni falliti, pregiudizio nel post 11 di Settembre,
          famiglie distrutte dalla Primavera Araba e sogni dimenticati a seconda
          della tradizione e della religione.`,
        link: `https://www.instagram.com/p/CZuwhvet41B/`
      },
      {
        id: 11,
        url: Cover11,
        title: '"O Alvorecer da Rosa"',
        author: 'Bruna Diana @escritosdeoutono',
        year: 2022,
        publisher: 'Pubblicazione indipendente',
        synopsis: `Quanti segreti può nascondere un ciondolo rosa? Mentre molti
          sperano e credono che Aurora sia la soluzione ai problemi di Aethel,
          cerca risposte sul passato della sua potente famiglia e il dono che
          sua nonna le fece prima di morire.
          Al suo arrivo ad Aethel, Aurora si ritrova nel mezzo di un conflitto
          tra i due lati. Quello che non immaginavo era quel mondo fino ad
          allora sconosciuto comincerebbe a mostrare che è legato alla sua
          storia, costringendola a farlo prendi decisioni che cambieranno la tua
          vita per sempre.`,
        link: `https://www.instagram.com/p/CZh8hvKt0Nx/`
      },
      {
        id: 12,
        url: Cover12,
        title: '"No fim do mundo"',
        author: 'Felipe Gulyas @fegulyas',
        year: 2022,
        publisher: 'Editora Grimm @editoragrimm',
        synopsis: `La morte è la più grande delle avventure. Colin White non lo
          era pronto a morire, ma la morte non vedeva l'ora di prenderlo.
          Ora, avendo come guida una sola canoa, dovrà fare il attraversare un
          grande mare verso l'aldilà, scoprendo che la fine del mondo custodisce
          grandi misteri e rivelazioni che non avrebbe mai potuto aspettare.
          Allo stesso tempo quel ragazzo vaga per questo mare, Colin no può
          smettere di pensare alle persone che ha lasciato. Mentre il passato e
          presente si mescolano, sarà forte il abbastanza per arrivare alla fine
          di tutto?`,
        link: `https://www.instagram.com/p/CZF0D-dqgHg/`
      },
      {
        id: 13,
        url: Cover13,
        title: '"Um Sonho Real - Um absoluto clichê"',
        author: 'Ana Maria Duarte @anadsduarte',
        year: 2022,
        publisher: 'Pubblicazione indipendente',
        synopsis: `"Anna Thomas ha solo diciassette anni ed è innamorata tutto
          ciò che ti circonda: i tuoi amici, la tua famiglia, la tua scuola, la
          tua casa, il tuo quarto... ma quando si tratta di essere innamorati di
          qualcuno questo viene salvato solo per la trama dei romanzi rosa da
          cui proviene affascinato.
          Leggere d'amore è sempre stato facile, ma viverlo dal vivo? Mai.
          Aveva sempre immaginato che, dopo aver letto così tanto di
          romanticismo, non l'avrebbe mai fatto poteva vivere la sua storia
          d'amore, dopotutto la sua vita non era una film nelle sale o un libro
          bestseller, era solo... la vita, ma è così cose che semplicemente
          tendono a cambiare e ciò che una volta era giusto le parole in una
          trama fittizia diventano parole da vivere”.`,
        link: `https://www.instagram.com/p/CYkJSQUr6wa/`
      },
      {
        id: 14,
        url: Cover14,
        title: '"Depois da Curva"',
        author: 'Samara Viana @samaravianaescritora',
        year: 2022,
        publisher: 'Pubblicazione indipendente',
        synopsis: `Dopo aver perso la sorella minore in un incidente stradale,
          Il mondo di Brenda precipita in discesa. durante il tentativo per
          ricostruirlo, scopre che il suo defunto padre aveva una figlia fuori
          dal matrimonio e, peggio, che vuole trascorrere del tempo nel suo
          appartamento Lisbona. Quando avviene la visita inaspettata, le suore
          intraprendono a viaggio alla scoperta di se stessi tra i segreti di
          famiglia che vengono a galla superficie, facendo svegliare Brenda dal
          suo mondo introspettivo.
          Adam, un pluripremiato fotoreporter, ha perso anche il fratello minore.
          Ma la sua crisi emotiva va oltre. La perdita l'ha solo aggravata
          percezione chiusa della vita. Ha vissuto quasi gli ultimi otto anni
          come un nomade, in viaggio da e verso i paesi arabi in guerra,
          fotografando la sua devastazione, ma è tornato a Lisbona per sempre,
          un luogo di ricordi ostili.
          È in questo momento tortuoso della loro vita che si incontrano
          percorrere un sentiero che a volte è stretto, a volte largo: questo è
          condizionato a come ognuno affronterà gli ostacoli.`,
        link: `https://www.instagram.com/p/CYXjPiTKfm0/`
      },
      {
        id: 15,
        url: Cover15,
        title: '"O Povoado no Fim do Mundo',
        author: 'André Comanche @do.conto.ao.traco',
        year: 2021,
        publisher: 'Publicação @leitores_fantasticos',
        synopsis: `"In 'O Povoado no Fim do Mundo', André Comanche crea a favola
          horror post apocalittica nel cuore di un mondo semplice e isolato
          villaggio nell'entroterra brasiliano.
          La trama è ambientata nel sertão, con i suoi contrasti naturali
          evidenziati dalle pennellate lovecraftiane. Il piccolo insediamento
          nord-orientale sopravvissuto all'assalto di una malattia cosmica che
          due anni fa ha decimato l'umanità.
          L'isolamento geografico e sociale, che in precedenza ne era
          responsabile miseria materiale, divenne una difesa contro la fine del
          mondo. Al Tuttavia, anche sopravvivere sulla base della creatività e
          della resilienza la sua fame popolare, un'ora si rivela un mostro
          mortale come coloro che risiedono oltre confine.
          È giunto il momento di affrontare i due fronti della morte, quello
          interno e quello esterno."`,
        link: `https://www.instagram.com/p/CXZFc1yNDmM/`
      },
      {
        id: 16,
        url: Cover16,
        title: '"A vovó chamou o Diabo para a ceia"',
        author: 'Juliana Daglio @judaglio2',
        year: 2021,
        publisher: 'Pubblicazione indipendente',
        synopsis: `Poche cose in questo mondo hanno più di due nomi; tra loro è
          la regalità brasiliana, i genitali umani, l'atto sessuale stesso, e,
          naturalmente, il Diavolo. Sarebbe difficile scegliere tra uno dei
          tanti soprannome."
          Il pranzo di Natale è in tavola. La vecchia casa Vieira in ordine e
          ornata di luci colorate e ghirlande. i quattro figli di sono arrivate
          le matriarcate defunte, sono arrivati anche tre degli undici nipoti.
          Voi sette membri della famiglia sono seduti nella stanza, in attesa
          esaudire l'ultimo desiderio di Olegna: guardare insieme il video le
          tue ultime parole.
          Quando sullo schermo compare il volto della donna, già martoriato
          dalla malattia che si è tolto la vita, la sua famiglia non riesce a
          credere alle parole che hanno sentito.
          Apparentemente, c'è un ospite speciale tra loro; le porte sono chiuso,
          i telefoni muti, la paura che si diffonde e il vecchio problemi
          familiari che emergono e portano il caos. La cena non c'è più di
          tacchino, farofa con uvetta e salsiccia. il pasto principale ora sono
          i peccati e l'anima della Vieira.
          Perché la nonna ha chiamato il diavolo a cena e nessuno ne uscirà vivo.
          là.`,
        link: `https://www.instagram.com/p/CXOpg6OIUYR/`
      },
      {
        id: 17,
        url: Cover17,
        title: '"A Casa das Hostesses - Encontros e Solidão"',
        author: 'Déborah Felipe @acasadashostesses',
        year: 2021,
        publisher: 'Editora Pendragon @editorapendragon',
        synopsis: `La casa delle hostess non sembra un posto Souji normalmente
          parteciperebbe. La musica è troppo alta, sembra che la gente meno
          inibito, le luci ballano troppo velocemente, le bevande sembrano di
          più con pozioni magiche... E le ragazze... beh, non lo sa per certo
          come funziona un lavoro del genere. ma quel posto misterioso si
          avvicinò come se fosse un appuntamento per Destino...
          Takeshi Souji ha sempre condotto la sua vita su tre pilastri: il suo
          Lavoro presso l'azienda Takeshi, che un giorno sarà tua; il tuo
          impegno con Juury, la sua fidanzata del liceo e i suoi amici
          d'infanzia. Sebbene, due di quei pilastri si sgretolano quando scopre
          che la sua fidanzata ce l'ha una relazione con suo padre, lasciandolo
          completamente a terra.
          The Hostess House è un edificio dall'aspetto vecchio che germoglia
          come se fosse parte del terreno. Nessuno noterebbe quel posto se non
          fosse per esso cercavamo e forse questo fa parte del suo fascino, come
          a luogo che sa esattamente chi vuole incontrare ogni notte, come se
          era una delle hostess che ci lavora...
          A tutti coloro che devono conoscere questo nuovo mondo...
          Benvenuti a Casa das Hostess.`,
        link: `https://www.instagram.com/p/CWB9yK1N7Eu/`
      },
      {
        id: 18,
        url: Cover18,
        title: '"A Outra Ana"',
        author: 'Italo Oliveira @itwlu',
        year: 2020,
        publisher: 'Pubblicazione indipendente',
        synopsis: `Due sorelle. Un assassino. Tutti sono sospetti. Ana Elisa
          Pérez, uno dei più grandi truffatori di Cozumel, vede la sua vita
          cambiare a testa in giù quando si è imbattuto in Ana Sofia, una donna
          identica a lei.
          Poi scopre i segreti a lungo custoditi sulla sua nascita.
          Tra loro, una sorella gemella.
          Ana Sofia Salvatierra Rincon è una signora dell'alta società messicana,
          che è disposta a tutto pur di avere la sorella gemella al suo fianco.
          Ma il Il destino gioca brutti scherzi e una morte prematura distrugge
          tutto il tuo piani - o quasi tutti.
          Persa in una villa sconosciuta, Elisa dovrà essere forte affronta le
          avversità della vita e scopri il vero assassino di sua sorella, che
          porta con sé il volto morto di Sofia; un promemoria di che non era
          unico. C'era stata un'altra donna come lei. Un'altra Anna.`,
        link: `https://www.instagram.com/p/CVx8CMEJwfs/`
      },
      {
        id: 19,
        url: Cover19,
        title: '"Minha vida, um dorama"',
        author: 'Angel Wolff @autora.angelwolff',
        year: 2021,
        publisher: 'Tribus Editorial @tribuseditorial',
        synopsis: `Attualmente, i drammi coreani catturano il cuore di
          Brasiliani con le loro trame piene di emozione e ingenuità.
          Estremamente dolci e leggeri, i drammi ci danno una nuova visione di
          romanzi, rispetto a quello a cui siamo abituati in occidente.
          Ma chi ha detto che noi umili mortali non possiamo vivere il nostro
          dramma stesso? Hai diritto a storie travolgenti e appassionate?
          O forse storie comiche o anche un giallo, un thriller polizia, azione,
          fantasia... Ma con la parola chiave romanticismo!
          “La mia vita, un dramma” arriva a riempire ancora di più il cuore
          quella Dorameira che passa la notte tarda a fare maratona con la sua
          coppia preferita; spedire una coppia improbabile o semplicemente per
          conquistare quei lettori che amano innamorarsi. Sono storie piene di
          romanticismo, buone dosi di cliché, colpi di scena emozionanti e scene
          degne di telenovelas Gli orientali, ovviamente, tutti pieni/basati
          sulla musica K-pop; J-pop o C-pop.`,
        link: `https://www.instagram.com/p/CUTV0JaAaky/`
      },
      {
        id: 20,
        url: Cover20,
        title: '"O circulo de pedra"',
        author: 'Ricardo Costac @ricardocostacoficial',
        year: 2020,
        publisher: 'Pubblicazione indipendente',
        synopsis: `Cosa faresti se dovessi mantenere il tuo più grande segreto?
          tutto il tempo e mai... potrebbe mai rivelarlo a nessun altro? E se
          dovessi convivere con un segreto così incredibile che cambierebbe il
          tuo vita per sempre? Cinque giovani studenti scoprono un segreto
          custodito per quattrocento anni che li farà vivere la più grande
          avventura di Le tue vite. Saranno portati a scoprire cose incredibili
          in questo viaggio fantastico, sfidando costantemente le tue abilità,
          intelligenza e coraggio. E quanto a te, saresti in grado di mantenere
          il più grande segreto di tutti i tempi?`,
        link: `https://www.instagram.com/p/CTvS2HosMEt/`
      }
    ]
  },
];