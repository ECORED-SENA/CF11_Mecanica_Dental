<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1  La comunicación

    .row.justify-content-center.align-items-center.mb-4
      .col
        .tarjeta.color-gris4.p-5
          p.mb-4 La comunicación en un medio donde interactúan 2 o más personas, realizando intercambio de ideas, información y/o sentimientos. Esta comunicación está conformada por una serie de elementos entre un emisor y un receptor, donde el emisor transmite el mensaje y el receptor lo interpreta. El poder de comunicarnos con los demás es fundamental para nuestro desarrollo como seres humanos.
          p.mb-4 Hay que mencionar además que se debe mejorar nuestra comunicación para lograr transmitir acertadamente nuestro mensaje o información a las personas que nos escuchan.
      .col-lg-4
        figure.mb-0
          img(src='@/assets/curso/tema11/img1.jpg', alt='Texto que describa la imagen')

    h4.mb-4 Elementos de la comunicación
    p.mb-5 Como ya se ha mencionado, la definición de comunicación es básicamente el procedimiento mediante el cual un individuo establece contacto con otros, permitiéndole difundir una información. Por lo tanto, existen una serie de elementos que hacen posible este proceso:

    SlyderF(columnas="col-lg-4 col-xl-4").mb-4
      .tarjeta-avatar
        img(src='@/assets/curso/tema11/avatar1.svg' alt='AvatarTop')
        .tarjeta.coloravatar
          .p-4
            h4.text-center Emisor
            p.mb-0 Es el encargado de iniciar la acción de comunicar y emitir cierta información. Este decide de qué manera realizar la acción.
      .tarjeta-avatar
        img(src='@/assets/curso/tema11/avatar2.svg' alt='AvatarTop')
        .tarjeta.coloravatar
          .p-4
            h4.text-center Receptor
            p.mb-0 Es quien recibe el mensaje o información, ajustándolo e interpretando según los signos lingüísticos. Luego de su interpretación está en capacidad de emitir una respuesta al emisor.
      .tarjeta-avatar
        img(src='@/assets/curso/tema11/avatar3.svg' alt='AvatarTop')
        .tarjeta.coloravatar
          .p-4
            h4.text-center Mensaje
            p.mb-0 También conocido como la materia del proceso. Es el contenido bien sea, de una carta, un correo, un mensaje hablado o grabado, entre otros.
      .tarjeta-avatar
        img(src='@/assets/curso/tema11/avatar4.svg' alt='AvatarTop')
        .tarjeta.coloravatar
          .p-4
            h4.text-center Canal de comunicación
            p.mb-0 Es el medio a través del cual es transmitida la información o mensaje, este puede ser natural como lo es el aire, o artificial como las cartas, CD, etc. 
      .tarjeta-avatar
        img(src='@/assets/curso/tema11/avatar5.svg' alt='AvatarTop')
        .tarjeta.coloravatar
          .p-4
            h4.text-center Código
            p.mb-0 Es un elemento fundamental en la comunicación, son signos del idioma, combinados por el emisor según sea el mensaje que desea transmitir.
      .tarjeta-avatar
        img(src='@/assets/curso/tema11/avatar6.svg' alt='AvatarTop')
        .tarjeta.coloravatar
          .p-4
            h4.text-center Contexto
            p.mb-0 Es el medio o entorno que rodea al emisor y receptor al momento de realizarse la comunicación (Adrián, 2019).
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        figure
          img(src='@/assets/curso/tema2/decoracion.svg', alt='Texto que describa la imagen')
      .col-lg-11
        h4.mb-4 La comunicación asertiva
        p.mb-0 Es una habilidad social de gran valor, que está asociada a la inteligencia emocional y a la capacidad para comunicarse de manera armoniosa y eficaz con los demás. (Coelho, 2019) 
        p.mb-0 La comunicación asertiva se basa en la reacción o criterio para comunicarse con el otro desde el respeto hacia los demás y lo que se quiere expresar. La respuesta a esta comunicación puede ser de carácter pasivo-asertivo-agresivo.
  
    .row.justify-content-center.mb-4
      .col-lg-10 
        .row.justify-content-center
          .col-lg-4
            .tarjeta.colorgris.p-4
              figure
                img(src='@/assets/curso/tema11/1.png', alt='Texto que describa la imagen')
              p.text-center <b>Pasivo</b>
          .col-lg-4
            .tarjeta.colorgris.p-4
              figure
                img(src='@/assets/curso/tema11/2.png', alt='Texto que describa la imagen')
              p.text-center <b>Asertivo</b>
          .col-lg-4
            .tarjeta.colorgris.p-4
              figure
                img(src='@/assets/curso/tema11/3.png', alt='Texto que describa la imagen')
              p.text-center <b>Agresivo</b>
    p.mb-4 La comunicación asertiva impacta positiva o negativamente en la relación con las demás personas tanto a nivel personal, profesional o laboral. (como con los usuarios) Se trata, en general, de mantener una comunicación simultánea, en este caso, entre el usuario y nosotros donde prime el respeto y la armonía. Así se logra mejorar el ambiente laboral con los demás y con la institución.
    .bg_grad-01
      p.mb-4 <b>El siguiente enlace presenta un video que da a conocer el poder de transmitir lo que queremos decir de una manera clara y concisa.</b>
      figure.mb-5
        .video
          iframe(width="1026" height="578" src="https://www.youtube.com/embed/tDUOKWTeoYs" title="Constitución Política De Colombia - (Fundamentos de Administración Pública)." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h4.mb-4 Tipos de Comunicación
    p.mb-4 Comunicación verbal. Nos permite expresar y transmitir un mensaje de manera:
    .row.mb-4
      .col-lg-12
        .row.justify-content-center
          .col-lg-2
            .tarjeta-avatar
              img(src='@/assets/curso/tema11/avatar7.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-4
                  h4.text-center Oral
          .col-lg-2
            .tarjeta-avatar
              img(src='@/assets/curso/tema11/avatar8.svg' alt='AvatarTop')
              .tarjeta.color-primario
                .p-4
                  h4.text-center Escrita

    h4.mb-4 Comunicación no verbal. No se emiten palabras o mensajes. Es esencialmente el lenguaje corporal donde interviene:
    .row.mb-4
      .col-lg-12
        .row.align-items-center.justify-content-center
          .col-lg-4
            .cajon.celeste5.p-4
              ul.lista-ul--color.mb-4
                li
                  i.fas.fa-check
                  | Tono y velocidad de la voz.
                li
                  i.fas.fa-check
                  | El entorno.
                li
                  i.fas.fa-check
                  | La postura corporal.
                li
                  i.fas.fa-check
                  | La postura facial.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema11/img1.png', alt='Texto que describa la imagen')
             



</template>

<script>
export default {
  name: 'Tema11',
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
