<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1  Mecanismo para el reporte de información que permitirá la verificación de la entrega de la Carta de Derechos y Deberes del Afiliado y del Paciente y la Carta de Desempeño de la EPS. (Resolución 1379 de 2015)

    .row.mb-5
      .col-lg-12
        .tarjeta.colorgris.p-5
          .row 
            .col-lg-12
              h4 Mecanismo para el reporte de información que permitirá la verificación de la entrega de la Carta de Derechos y Deberes del Afiliado y del Paciente y la Carta de Desempeño de la EPS (Resolución 1379 de 2015.)
          .row.justify-content-center.align-items-center 
            .col-lg-7
              LineaTiempoE.color-acento-contenido
                .row(titulo="ARTICULO I")
                  .col-lg-12
                    p.mb-0 Objeto.

                .row(titulo="ARTICULO II")
                  .col-lg-12
                    p.mb-0 Selección de información a ser reportada.

                .row(titulo="ARTICULO III")
                  .col-lg-12
                    p.mb-0 Reporte de información.

                .row(titulo="ARTICULO IV")
                  .col-lg-12
                    p.mb-0 Anexos técnicos para el reporte de información.

                .row(titulo="ARTICULO V")
                  .col-lg-12
                    p.mb-0 Periodicidad y plazo del reporte de la información.

                .row(titulo="ARTICULO VI")
                  .col-lg-12
                    p.mb-0 Actualización y modificación de la Carta de Derechos y Deberes del Afiliado y Carta de Desempeño de EPS.

                .row(titulo="ARTICULO VII")
                  .col-lg-12
                    p.mb-0 Tratamiento de la información.

                .row(titulo="ARTICULO VIII")
                  .col-lg-12
                    p.mb-0 Vigencia.
            .col-lg-5.col-md-8
              figure
                img(src='@/assets/curso/tema9/img1.png', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .cajon.color-acento-contenido(style='background-color: #C3F1F2').px-5.py-4.mb-4
          p.mb-0 "El Ministerio de Salud y Protección Social y la Superintendencia Nacional de Salud en ejercicio de las facultades que a cada uno compete en relación con el Sistema General de Seguridad Social en Salud, se permiten instruir a las Entidades Promotoras de Salud de los Regímenes Contributivo y Subsidiado respecto de los mecanismos a través de los cuales deberán disponer la información al ciudadano relacionada tanto con la Carta de Derechos y Deberes del Afiliado y del Paciente en el Sistema General de Seguridad Social en Salud, como con la carta de desempeño de dichas entidades". (Minsalud, s.f.).
        p.mb-4 <b>Estimando aprendiz en la siguiente infografía se encuentran los 23 derechos y 6 deberes que tienen que ser conocidos por los usuarios.</b>
        .row.justify-content-center
          .col-lg-8.col-md-8.col-8
            a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                .text-white
                  p.mb-0 <b>Enlace documento con la normatividad.</b>
                  p Fuente: Ministerio de salud y Protección Social. 
      .col-lg-5.col-md-8
        figure
          img(src='@/assets/curso/tema9/img2.png', alt='Texto que describa la imagen')
    br
    .bg_grad-01
      p.mb-4 <b>El siguiente video animado presenta un resumen de la Resolución 2626 de 2019.</b>
      figure.mb-5
        .video
          iframe(width="1026" height="578" src="https://www.youtube.com/embed/tDUOKWTeoYs" title="Constitución Política De Colombia - (Fundamentos de Administración Pública)." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-4 <b>En el siguiente enlace del Ministerio de Salud, puede ampliar información acerca de la Carta de Derechos y Deberes del Afiliado y del Paciente y de la Carta de Desempeño de la IPS y EPS.</b>
    .row
      .col-lg-4.col-md-6
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            .text-white
              p.mb-0 <b>Carta de derechos y deberes.</b>
              p Fuente: Página del Ministerio de Salud y Protección Social.


</template>

<script>
export default {
  name: 'Tema9',
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
