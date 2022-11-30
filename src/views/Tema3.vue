<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1  Derecho fundamental de la salud (Ley número 1751 de 2015 ley estatutaria)

    p.mb-4 Ley 1751 de 2015 – El Ministerio de Salud regula el derecho fundamental a la salud, basada en unos principios y elementos esenciales que serán los encargados de impactar la prestación de los servicios y tecnologías en salud con el fin de asegurar una atención acorde a las necesidades de la población.
    .row.justify-content-center
      .col-lg-3
        a.anexo.mb-4(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            b.text-white Anexo 1. 
            p.text-white Ley estatutaria No. 1751

    h4.mb-5 La Ley Estatutaria de Salud

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1
        figure
          img(src='@/assets/curso/tema2/decoracion.svg', alt='Texto que describa la imagen')
      .col-lg-11
        .tarjeta.celeste2.p-4
          p.mb-0 Es la primera ley de su clase para un derecho social y reconoce a la salud como un derecho fundamental.
          p.mb-0 Es la Ley 1751 de 2015. Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones.
          p.mb-0 <b>En esta ley se encuentra:</b>
          
    .row.justify-content-center.mb-4 
      .col-lg-3.col-md-8.col-8.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/avatar1.svg' alt='AvatarTop')
          .tarjeta.coloavatar1
            .text-white.p-4
              p Objeto, elementos esenciales, principios, derechos y deberes. Conformado por los artículos del 1 al 11.

      .col-lg-3.col-md-8.col-8.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/avatar2.svg' alt='AvatarTop')
          .tarjeta.coloavatar2
            .p-4
              p Garantía y mecanismos de protección del derecho fundamental a la salud. Conformado por los artículos del 12 al 16.

      .col-lg-3.col-md-8.col-8.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/avatar3.svg' alt='AvatarTop')
          .tarjeta.coloavatar3
            .text-white.p-4
              p Profesionales y trabajadores de la salud. Conformado por los artículos 17 Y 18.

      .col-lg-3.col-md-8.col-8.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/avatar4.svg' alt='AvatarTop')
          .tarjeta.coloavatar4
            .p-4
              p Otras disposiciones. Conformado por los artículos del 19 al 26.
    br
    .bg_grad-01
      p.mb-5 <b>A continuación, se encuentra un enlace que lleva a un video donde se explica lo que usted debe saber sobre la Ley Estatutaria de Salud, luego de su trámite en el Congreso y del control previo en la Corte Constitucional.</b>

      figure.mb-5
        .video
          iframe(width="1026" height="578" src="https://www.youtube.com/embed/8OTicDh_JYc" title="Lo que usted debe saber sobre la Ley Estatutaria de Salud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row 
      .col-lg-12
        .color-gris2.p-4
          p.mb-5 <b>La ley estatutaria consagra la salud como un derecho fundamental autónomo, garantiza su prestación, lo regula y establece sus mecanismos de protección.</b>
          .row.justify-content-center
            .col-lg-10
              .tarjeta.color-primario.p-3.mb-5
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/curso/tema3/icon.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1 Ley Estatutaria de Salud.
                        p A continuación, se encuentra el enlace para ingresar a la pagina web del Ministerio de Salud y Protección Social donde está la Ley Estatutaria de Salud.
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download
            .col-lg-10
              .tarjeta.color-primario.p-3.mb-5
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/curso/tema3/icon.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1 Infografia de la Ley Estatutario de Salud
                        p Enlace a la infografía de la Ley Estatutaria de Salud, Construida por el Ministerio de Salud y Protección Social.
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download

 
</template>

<script>
export default {
  name: 'Tema3',
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
