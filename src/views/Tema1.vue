<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistema de seguridad social integral (Ley 100 de 1993)

    .row.justify-content-center.align-items-center.mb-4
      .col
        .tarjeta.color-gris.p-5
          p.mb-0 En el actual sistema de salud de Colombia se evidencian dos periodos destacados, antes y después de la Ley 100 de 1993. En los años ochenta el llamado Sistema Nacional de Salud, se caracterizó por que el estado asumió la prestación de aproximadamente el 40% de la población, un 18% a cargo de la seguridad social y menos del 20% de la población accedía a la atención privada. 
      .col-lg-4
        figure.mb-0
          img(src='@/assets/curso/tema1/img1.jpg', alt='Texto que describa la imagen')
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      .h2 1.1 Modelo de salud

    p.mb-5 El artículo 152 de la Ley 100 de 1993 define los objetivos del Sistema General de la Seguridad Social en Salud como: “regular el servicio público esencial de la salud, crear condiciones de acceso de toda la población al servicio en todos los niveles de atención”.

    .row.justify-content-center.mb-4
      .col-lg-10
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-celeste.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/1.svg' alt='AvatarTop')
            p <b>Disponibilidad</b> de los servicios e instituciones.

          .tarjeta.color-celeste.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/2.svg' alt='AvatarTop')
            p <b>Aceptabilidad</b> la identificación y satisfacción de las necesidades expectativas en salud de la población.

          .tarjeta.color-celeste.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/3.svg' alt='AvatarTop')
            p <b>Acceso</b> entendido como la posibilidad de llegar a la atención y a la oportunidad en la prestación como un elemento único e indivisible del anterior.

          .tarjeta.color-celeste.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/4.svg' alt='AvatarTop')
            p <b>Garantía</b> de la calidad en los servicios.

    .row.mb-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Propósitos de la Ley 100 de 1993}
    
    .row.justify-content-center.mb-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/fig1.svg', alt='Texto que describa la imagen')
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      .h2 1.2 Aseguramiento

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-1
        figure
          img(src='@/assets/curso/tema1/decoracion.svg', alt='Texto que describa la imagen')
      .col-lg-11
        p.mb-0 Mediante el aseguramiento, el sistema construye procesos de protección frente a las condiciones mencionadas y garantiza la prestación de los servicios. La Ley 1122 de 2007 define el aseguramiento como

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-8
        .cajon.color-acento-contenido(style='background-color: #C3F1F2').px-5.py-4
          .row 
            .col-lg-1
              span
            .col-lg-11
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | La administración del riesgo financiero.
                li
                  i.fas.fa-check
                  | La gestión del riesgo en salud.
                li
                  i.fas.fa-check
                  | La articulación de los servicios que garantice el acceso efectivo.
                li
                  i.fas.fa-check
                  | La garantía de la calidad en la prestación de los servicios de salud.
                li
                  i.fas.fa-check
                  | La representación del afiliado ante el prestador.
                li
                  i.fas.fa-check
                  | Los demás actores sin perjuicio de la autonomía de los usuarios
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='Texto que describa la imagen')
    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      .h2 1.3 Integrantes del sistema

    p.mb-4 Para garantizar la articulación de los servicios el sistema tiene dos integrantes principales, las Empresas Promotoras de Salud también llamadas Empresas Administradoras de Planes de Beneficios con sus siglas EPS o EAPB respectivamente y las Instituciones Prestadoras de Salud IPS.

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-10
        .row.justify-content-center
          .col-lg-6.col-md-8.col-10.mb-4
            .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h1 Instituciones Prestadoras de Salud – IPS
                  p Las Instituciones Prestadoras de Salud o IPS son las encargadas de la entrega de servicios a los afiliados, son de carácter público o privado, sujetas a regulación por la Superintendencia Nacional de Salud.
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slide1.svg')})`}")
          
          .col-lg-6.col-md-8.col-10
            .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h1 Empresas Promotoras de Salud – EPS
                  p Significa Entidad Promotora de Salud y es la encargada de promover la afiliación al sistema de seguridad social. No se presta servicio médico, solo administrativo y comercial.
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slide2.svg')})`}")
    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade")
      .h2 1.4 Integrantes del sistema

    .tarjeta.celeste.p-4
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Régimen contributivo
            p.mb-4 Según el Ministerio de Salud el régimen contributivo es un conjunto de normas que rigen la vinculación de los individuos y las familias al Sistema General de Seguridad Social en Salud, cuando tal vinculación se hace a través del pago de una cotización, individual y familiar, o un aporte económico previo financiado directamente por el afiliado o en concurrencia entre éste y su empleador.
            p.mb-0 De la misma manera afilia a las personas con capacidad de pago para una cotización, que están en el sector formal de la economía, con ingresos iguales o superiores a un salario mínimo mensual y libertad de elección de la Empresa Promotora de Salud (EPS) que puede ser pública o privada.

          .col-md-6
            figure
              img(src='@/assets/curso/tema1/slyder1.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Régimen subsidiado
            p.mb-4 Conforme al Ministerio de Salud el régimen subsidiado es el mecanismo mediante el cual la población más pobre del país, sin capacidad de pago, tiene acceso a los servicios de salud a través de un subsidio que ofrece el Estado.
            p.mb-0 Igualmente afilia a la población sin capacidad de pago y a sus grupos familiares quienes reciben un subsidio total o parcial por parte del Estado el cual depende de la estratificación socioeconómica (niveles I, II y III), para los niveles I y II los subsidios son completos y para el nivel III especial. Dichos niveles dependen de los resultados de la encuesta del Sistema de Identificación y Clasificación de Potenciales Beneficiarios para los Programas Sociales (SISBEN).
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/slyder2.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Regímenes especiales
            p.mb-0 Está conformado por el cotizante y beneficiario de las siguientes entidades. Fuerzas Militares, la Policía Nacional, el Magisterio, los trabajadores de las universidades públicas y Ecopetrol hacen parte de un pequeño grupo de la población (aproximadamente el 5 %) que goza de otros esquemas de seguridad social a los que se han llamado Regímenes especiales.
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/slyder3.png', alt='Texto que describa la imagen')

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
