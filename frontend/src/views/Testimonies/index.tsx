import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar"
import { Card } from "components/Card";
import { Interface } from "styles/Interface";

export function Testimonies() {
  return (
    <div>
      <Header />

      <Sidebar />

      <Interface>
        <h1>DEPOIMENTOS View</h1>
        {/* <Card /> */}
        <h3>Gabriela Maya</h3>
        <h5>Autora</h5>
        <p>
          Sara Vertuan é uma profissional sensível e talentosa, consegue captar o
          desejo do autor e torná-lo ainda mais especial. Atenciosa, gentil e doce
          é também alguém com quem podemos contar para cumprir prazos estipulados
          previamente. Sua arte surpreende e dialoga com a premissa das obras
          cujas capas ela assina brilhantemente. Não há uma pessoa que segure meu
          livro, Uma Vida Para Anne, sem comentar sobre a beleza da capa. Mérito
          da Sara!
        </p>

        <h3>Bettina Winkler</h3>
        <h5>Autora</h5>
        <p>
          Sara é uma excelente profissional, que se esforça ao máximo para
          entender os desejos do cliente e atingir o melhor resultado possível.
          Fiz a capa do meu livro de fantasia com ela e recebo elogios o tempo
          todo, não poderia ter escolhido uma capista melhor.
        </p>

        <h3>Rodrigo Seixas</h3>
        <h5>Autor e Quadrinista</h5>
        <p>
          Sara é uma das profissionais mais completas do mercado. Possui uma série
          de atributos que torna seu trabalho único: senso estético, velocidade e
          GOSTO POR LEITURA! Tudo isso facilita demais o diálogo com o autor e
          tradução de suas ideias capas incríveis! Recomendo DEMAIS!!!
        </p>

        <h3>Ana Maria Duarte</h3>
        <h5>Autora</h5>
        <p>
          O trabalho da Sara se mostrou melhor do que eu imaginava. A qualidade
          do serviço foi excelente e ela soube captar exatamente a essência do meu
          livro em todos os detalhes, na capa e na diagramação. Foi incrível poder
          ver uma ideia que estava apenas na minha cabeça se materializando de
          maneira única e tão especial!!
        </p>

        <h3>Aurélia Cruz</h3>
        <h5>Autora</h5>
        <p>
          Precisava de uma capa mas já tinha passado por várias sugestões e
          nenhuma conseguia causar o impacto que eu procurava. Até que a querida
          Drica Bitarello me falou sobre sua capista: Sara Vertuan. Vendo as capas
          que a Sara havia feito para os livros da Drica, não tive dúvidas de que
          ela poderia entender exatamente o que eu precisava. Entrei em contato e
          conversamos bastante sobre o que eu queria para essa capa. Sara além de
          conversar comigo, também leu meu livro, para se envolver mais com a
          história e conseguir captar toda essência.
        </p>
      </Interface>
    </div>
  );
};