<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1  Plataforma estratégica

    p.mb-4 La plataforma estratégica es la base sobre la cual se direcciona una organización. Donde se establece una:

    .row.justify-content-center.mb-4
      .col-lg-12.col-md-10.col-10
        SlyderF(columnas="col-lg-3 col-xl-3").mb-4
          .tarjeta-avatar
            img(src='@/assets/curso/tema10/avatar1.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido
              .p-4
                h4.text-center Misión 
          .tarjeta-avatar
            img(src='@/assets/curso/tema10/avatar2.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido
              .p-4
                h4.text-center Visión 
          .tarjeta-avatar
            img(src='@/assets/curso/tema10/avatar3.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido
              .p-4
                h4.text-center Objetivos estrategicos
          .tarjeta-avatar
            img(src='@/assets/curso/tema10/avatar4.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido
              .p-4
                h4.text-center Valores corporativos 
          .tarjeta-avatar
            img(src='@/assets/curso/tema10/avatar5.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido
              .p-4
                h4.text-center Políticas
          .tarjeta-avatar
            img(src='@/assets/curso/tema10/avatar6.svg' alt='AvatarTop')
            .tarjeta.color-acento-contenido
              .p-4
                h4.text-center Códigos de ética
    p.mb-4 <b>En el siguiente enlace podrá visualizar la descripción completa de la plataforma estratégica del:</b>
    .row
      .col-lg-4.col-md-6.col-6
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            .text-white
              p.mb-0 <b>Plataforma estratégica.</b>
              p Fuente: Ministerio de salud y Protección Social 2018 - 2022.


</template>

<script>
export default {
  name: 'Tema10',
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
