<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 14
      h1  Etiqueta y protocolo

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema14/1.svg', alt='Texto que describa la imagen')
          
        h4.text-center Etiqueta
        p Son las normas que nos direccionan como debemos comportarnos, de acuerdo con el lugar donde nos encontremos. Con esto se quiere decir que es la forma de vestirnos, comportarnos, etc. ante determinada situación. En otras palabras, está orientada a la conducta de las personas.

      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema14/2.svg', alt='Texto que describa la imagen')
          
        h4.text-center Protocolo
        p Es un conjunto de reglas establecidas, que se deben dar en continuidad para la ejecución de un proceso o actividad. Es necesario recalcar que el protocolo está establecido por un orden.
    br
    .bg_grad-01
      p.mb-4 <b>El siguiente enlace lleva a un video llamado “protocolos de atención al cliente” y da a conocer las diferentes actitudes que tenemos frente a nuestros usuarios y el respeto que debemos demostrar hacia ellos.</b>
      figure.mb-5
        .video
          iframe(width="1026" height="578" src="https://www.youtube.com/embed/tDUOKWTeoYs" title="Constitución Política De Colombia - (Fundamentos de Administración Pública)." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    br
    .bg_grad-01
      p.mb-4 <b>El siguiente enlace lleva a otro video llamado “protocolo servicio al cliente” en donde se presentan las 10 reglas principales a la hora de atención al cliente.</b>
      figure.mb-5
        .video
          iframe(width="1026" height="578" src="https://www.youtube.com/embed/tDUOKWTeoYs" title="Constitución Política De Colombia - (Fundamentos de Administración Pública)." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-4 <b>En el protocolo de atención al ciudadano sector salud del Ministerio de Salud y Protección Social, puede encontrar temas de su interés como:</b>
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2
        span
      .col-lg-4
        .cajon.color-acento-contenido(style='background-color: #C3F0F2').p-4.mb-4
          ul.lista-ul--color.mb-4
            li
              i.fas.fa-check
              | Atributos del buen servicio.
            li
              i.fas.fa-check
              | Actitud.
            li
              i.fas.fa-check
              | Atención a personas alteradas.
        .row.mb-4 
          .col-lg-12
            a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                .text-white
                  p.mb-0 <b>Protocolo de protección al ciudadano.</b>
                  p Fuente: Ministerio de salud y Protección Social.
      .col-lg-4.col-md-8.col-8
        figure
          img(src='@/assets/curso/tema14/1.png', alt='Texto que describa la imagen')
  
    .tarjeta.color-primario.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-4.col-sm-3.col-lg-2
          img(src="@/assets/curso/tema14/descarga.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Ficha técnica uniformes
              p.mb-0 Servicio Nacional de Aprendizaje – SENA. Centro de Formación Talento Humano en Salud
              p.mb-0 Regional Distrito Capital. En el documento se encuentran las especificaciones técnicas de los uniformes de la institución.
              p.mb-0 Programa de formación: técnico apoyo administrativo en salud.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema14',
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
