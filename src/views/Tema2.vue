<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Constitución política de Colombia

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-2
        figure
          img(src='@/assets/curso/tema2/decoracion.svg', alt='Texto que describa la imagen')
      .col-lg-11.col-md-10.col-10
        p.mb-4 La constitución política, también llamada Carta Magna o Carta Fundamental, es la ley máxima y suprema de un país o estado. En ella se especifican los principales derechos y deberes de sus participantes, y define la estructura y organización del Estado. En Colombia esta constitución se modificó drásticamente por última vez en 1991, luego de durar más de 100 años con la constitución de 1886.
        p.mb-0 A continuación, se encuentra un enlace que lleva a un video donde se explica qué es la constitución política de Colombia, las normas que rigen a la nación ya que es la que nos dirige para mantener el orden y la paz, así mismo contar con unos derechos y deberes como ciudadanos.
  
    .bg_grad-01
      br
      figure.mb-5
        .video
          iframe(width="1026" height="578" src="https://www.youtube.com/embed/tDUOKWTeoYs" title="Constitución Política De Colombia - (Fundamentos de Administración Pública)." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Tema2',
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
