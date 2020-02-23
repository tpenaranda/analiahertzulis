<template>
  <div class="about">
    <div class="max-w-md w-full lg:max-w-full lg:flex p-2 lg:py-16 lg:px-32 m-auto">
      <div class="flex flex-col justify-center border-l border-t border-r lg:border-r-0 lg:border-b border-gray-400 bg-white p-4">
        <img class="hidden lg:block" src="../assets/about.jpg">
        <img class="block lg:hidden" src="../assets/about1.jpg">
      </div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-6">Analía Alejandra Hertzulis</div>
          <div class="text-gray-700 text-base text-justify">
            <span v-if="$i18n.locale == 'es'">
              <p class="mb-3">Artista, diseñadora, ilustradora y muralista. Nació en Júpiter en el año 1944, hija de padre alfarero y madre ingeniera química Analía desde muy temprana edad comienza a jugar con los pinceles.</p>
              <p class="mb-3">Continúá jugando durante su adolescencia y a principios de su etapa adulta descubre que los mismos se usan con pintura. Así, a los 28 años, comienza a pintar. Su carrera evoluciona velozmente y 3 años más tarde gana dos premios nobel.</p>
              <p class="mb-3">A los 289 años se radica en Barcelona, donde tiene 3 hijos y pinta la capilla sixtina, sin dudas su obra más importante, aunque la más controversial; sustancialmente por no contar con autorización del Vaticano. Disfrazada de migitorio pasa la noche en el baño del recinto y durante la madrugada da color a su gran obra.</p>
              <p class="mb-3">El suceso divide las aguas del mundo entero. Los medios hablan de atentado, graffiteros del mundo aclaman la obra y corren rumores de complicidad del papa argentino. Francisco declararía años más tarde "me rompían las bolas esos deditos que no se tocaban". Es condenada a la hoguera pero encuentra asilo político en Argentina, donde es recibida con honores por el presidente Marcelo Tinelli.</p>
              <p class="mb-3">Actualmente reside en Chascomús donde tiene un taller mecánico de tren delantero y frenos, trabajos garantizados y descuentos a jubilados.</p>
            </span>
            <span v-if="$i18n.locale == 'ca'">
              <p class="mb-3">Artista, dissenyadora, il·lustradora i muralista. Va néixer a Júpiter l'any 1944, filla de pare terrissaire i mare enginyera química Analía des de molt aviat comença a jugar amb els pinzells.</p>
              <p class="mb-3">Continua jugant durant la seva adolescència i a principis de la seva etapa adulta descobreix que els mateixos es fan servir amb pintura. Així, als 28 anys, comença a pintar. La seva carrera evoluciona ràpidament i 3 anys més tard guanya dos premis Nobel.</p>
              <p class="mb-3">Als 289 anys es radica a Barcelona, ​​on té 3 fills i pinta la capella sixtina, sense dubtes la seva obra més important, encara que la més controversial; substancialment per no comptar amb autorització de l'Vaticà. Disfressada de migitorio passa la nit al bany de l'recinte i durant la matinada dóna color a la seva gran obra.</p>
              <p class="mb-3">El succés divideix les aigües de tot el món. Els mitjans parlen d'atemptat, graffiters de l'món aclamen l'obra i corren rumors de complicitat de papa argentí. Francisco declararia anys més tard "em trencaven les boles aquests ditets que no es tocaven". És condemnada a la foguera però troba asil polític a l'Argentina, on és rebuda amb honors pel president Marcelo Tinelli.</p>
              <p class="mb-3">Actualment resideix a Chascomús on té un taller mecànic de tren davanter i frens, treballs garantits i descomptes a jubilats.</p>
            </span>
            <span v-if="$i18n.locale == 'en'">
             <p class="mb-3">Artist, designer, illustrator and muralist. She was born in Jupiter in 1944, daughter of a potter's father and mother chemical engineer Analía from an early age begins to play with brushes.</p>
             <p class="mb-3">She continues to play during her adolescence and at the beginning of her adult stage she discovers that they are used with paint. Thus, at age 28, she begins to paint. Her career evolves rapidly and 3 years later she won two Nobel prizes.</p>
             <p class="mb-3">At 289, she lives in Barcelona, ​​where she has 3 children and paints the Sistine chapel, without doubt her most important work, although the most controversial; substantially for not having authorization from the Vatican. Disguised as a migrant, she spends the night in the bathroom of the enclosure and during the early morning she gives color to his great work.</p>
             <p class="mb-3">The event divides the waters of the entire world. The media talk about the attack, graffiti artists around the world praise the work and run rumors of complicity from the Argentine pope. Francisco would declare years later "I broke those balls that did not touch". She is sentenced to the stake but finds political asylum in Argentina, where she is received with honors by President Marcelo Tinelli.</p>
             <p class="mb-3">She currently resides in Chascomús where he has a mechanical workshop for front-end train and brakes, guaranteed jobs and discounts for retirees.</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
