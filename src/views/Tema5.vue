<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  El Sistema General de Riesgos Profesionales. (Decreto 1295 de 1994)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .cajon.color-acento-contenido(style='background-color: #C3F1F2').px-5.py-4
          p.mb-2 La Ley 100 de 1993 definió el objeto del Sistema General de Pensiones: “garantizar a la población, el amparo contra las contingencias derivadas de la vejez, la invalidez y la muerte, mediante el reconocimiento de las pensiones y prestaciones que se determinan en la presente ley, así como propender por la ampliación progresiva de cobertura a los segmentos de población no cubiertos con un sistema de pensiones”.
          p.mb-4 <b>A continuación, podrá observar dos videos:</b>
          p.mb-0 El primero se titula ¿Cómo funciona el sistema pensional colombiano? Como son: el de ahorro individual o solidario (RAIS) entre los que están Colfondos, Porvenir, etc. y el régimen de prima media (RPM) representado por Colpensiones.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema5/img1.svg', alt='Texto que describa la imagen')
    br
    .bg_grad-01
      br
      figure.mb-5
        .video
          iframe(width="1026" height="578" src="https://www.youtube.com/embed/CoB_6Z8gtlU" title="¿Cómo funciona el sistema pensional colombiano?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-4 <b>El segundo video es de clases de pensiones. Donde se explica la diferencia entre los fondos de pensiones públicos y los privados</b>
    figure.mb-5
      .video
        iframe(width="1026" height="578" src="https://www.youtube.com/embed/JZ-2C3sndPM" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-4 A través del tiempo el régimen pensional ha tenido diferentes modificaciones que se pueden precisar desde la Ley 100 de 1993 (diciembre 23), por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones: el libro primero del Sistema General de Pensiones, el Decreto 1450 del 3 de julio de 2012, por el cual se reglamenta el Decreto Ley 019 de 2012; la Resolución 2030 del 17 de diciembre de 2019, por medio de la cual se declara el decaimiento de 4 resoluciones de ordenación de gasto y pago de intereses moratorios y/o costas procesales de la vigencia 2019. Y demás normatividad existente.

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center
          .col-lg-7
            .tarjeta.celeste2.p-4
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | La Ley 100 de 1993 (diciembre 23)
                li
                  i.fas.fa-check
                  | Decreto 1450 del 3 de julio de 2012
                li
                  i.fas.fa-check
                  | Decreto Ley 019 de 2012
                li
                  i.fas.fa-check
                  | Resolución 2030 del 17 de diciembre de 2019
          .col-lg-3
            figure
              img(src='@/assets/curso/tema5/img2.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
