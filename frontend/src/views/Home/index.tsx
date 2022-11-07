import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar"
import { Interface } from "styles/Interface";
import { Album } from "components/Album";

export function Home() {
  return (
    <div>
      <Header />

      <Sidebar />

      <Interface>
        <Album />

        <p>
          PORQUE DEVO INVESTIR NUMA CAPA PROFISSIONAL?

          Uma capa, seja ela física ou digital, é o elemento mais importante de um
          livro. Além de ser o primeiro contato do leitor com a obra, protege o
          miolo do livro e representa um percentual superior a 70% nas vendas de
          um livro.

          É necessário realizar uma pesquisa sobre tendências de design,
          público-alvo, tempo histórico, etc; e tambem levar em conta os gostos do
          autor para assim chegar a uma capa de qualidade e que atraia o público
          podendo tranformar o livro em um objeto de coleção na estante.
        </p>
        <p>
          PERCHÉ INVESTIRE IN UNA COPERTINA PROFESSIONALE?

          La copertina, sia essa fisica o digitale, è l'elemento più importante di
          un libro. Oltre a essere il primo contatto del lettore con l'opera,
          protegge il nucleo del libro e rappresenta oltre il 70% delle vendite
          di un libro.

          É necessario effettuare ricerche sulle tendenze del design, sul pubblico
          di riferimento, sul periodo storico, ecc. e tenere conto anche dei gusti
          dell'autore per ottenere una copertina di qualità che possa attrarre il
          pubblico e trasformare il libro in un oggetto da collezione sugli
          scaffali delle librerie.
        </p>
        <p>
          WHY SHOULD I INVEST IN A PROFESSIONAL COVER?

          A cover, whether physical or digital, is the most important element of a
          book. Besides being the reader's first contact with the work, it
          protects the book's core and represents more than 70% of a book's sales.

          To make a high quality cover it is necessary to carry out researches
          based on design trends, target audience, historical time, etc. Moreover,
          it is also important to take into account the author's tastes.
          In this way the cover will have more chances to attract the public,
          making the book a collector's item on the bookshelf.
        </p>
      </Interface>
    </div>
  );
};