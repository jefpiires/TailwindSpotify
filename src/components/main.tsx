import { ChevronLeft, ChevronRight } from "lucide-react";
import { RecentMusic } from "./recentMusic";
import { MadeForUser } from "./madeForUser";

export function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <RecentMusic img="/Versinho.jpg" name="PLAYLIST DO VERSINHO" />
        <RecentMusic img="/Funkhits.jpg" name="Funk Hits" />
        <RecentMusic
          img="/ChurrasquinDosCria.jpg"
          name="Churrasquin dos Cria"
        />
        <RecentMusic img="/Sertanejo 2k24.jpg" name="Sertanejo 2K24" />
        <RecentMusic img="/MTG Atualizada.webp" name="MTG ATUALIZADO 2024" />
        <RecentMusic img="/ModaoRaiz.jpg" name="Modao Sertanejo Raiz" />
      </div>

      <a href="">
        <h2 className="font-semibold text-2xl mt-10 hover:underline">
          Made for Jeferson Pires
        </h2>
      </a>

      <div className="grid grid-cols-7 gap-4 mt-4">
        <MadeForUser
          img="/CidadeAoAmanhecer.jpg"
          name="Vibes do Amanhã"
          description="Músicas para energizar o seu dia e preparar você para um futuro brilhante. Ritmos modernos e inspiradores para acompanhar suas melhores ideias."
        />
        <MadeForUser
          img="/PorDoSol.jpg"
          name="Trilhas do Entardecer"
          description="Músicas suaves e relaxantes para acompanhar o final do dia. Ideal para momentos de introspecção e relaxamento ao pôr do sol."
        />
        <MadeForUser
          img="/PistaDanca.jpg"
          name="Festa de Sábado à Noite"
          description="Os maiores hits e batidas para animar a sua noite. A playlist perfeita para dançar até o amanhecer!"
        />
        <MadeForUser
          img="/TocandoViolao.jpg"
          name="Melancolia Acústica"
          description="Canções acústicas e emocionantes que tocam o coração. Para aqueles momentos de reflexão e nostalgia."
        />
        <MadeForUser
          img="/Academia.jpg"
          name="Energia para Treinar"
          description="Músicas enérgicas e motivacionais para acompanhar seus treinos. Sinta a batida e alcance seus objetivos com mais força!"
        />
        <MadeForUser
          img="/Mapa.jpg"
          name="Jornada Musical Global"
          description="Uma coleção de músicas de diferentes culturas e estilos ao redor do mundo. Explore a diversidade musical e descubra novos sons."
        />
        <MadeForUser
          img="/Cafe.jpg"
          name="Mornings in Chill"
          description="Trilhas sonoras suaves e relaxantes para começar o dia com tranquilidade. Perfeita para suas manhãs preguiçosas e momentos de calma."
        />
      </div>
    </main>
  );
}
