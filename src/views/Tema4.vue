<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Reforma del Sistema General de Seguridad Social en Salud (Ley 1438 de 2011)

    .row.justify-content-center.align-items-center.mb-4
      .col
        .tarjeta.color-gris3.px-4.py-5
          p.mb-0 La Ley 100 de 1993, que pretende transformar el viejo Sistema Nacional de Salud, de corte asistencialista estatal y caracterizado por su organización vertical y planeación centralizada, en un Sistema General de Seguridad Social en Salud, basado en el aseguramiento, la competencia de administradoras del seguro y prestadores de servicios, con un enorme componente de solidaridad redistributiva para financiar a los ciudadanos más vulnerables.
      .col-lg-4
        figure.mb-0
          img(src='@/assets/curso/tema4/img1.jpg', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-4
      .col-lg-5
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4 Ley 1438 de 2011
            br
            p Por medio de la cual se forma el sistema general de seguridad social en salud y se dictan otras disposiciones
            i.fas.fa-quote-right

    p.mb-4 <b>La reforma del sistema general de seguridad social en salud, (Ley 1438 de 2011) define 2 regímenes:</b>
    .row 
      .col-lg-5
        h4.mb-4 Régimen contributivo
        p.mb-4 Está conformado por quienes tienen capacidad de realizar aportes a la seguridad social a través de su trabajo o ingresos independientes.
        p.mb-4 <b>Con las siguientes medidas fundamentales:</b>
        LineaTiempoD.color-secundario.mb-4
          p(numero="1" titulo="Primero") Aumentar los aportes para la seguridad social en salud del 6 % al 12 % del salario del trabajador, para cubrir al cónyuge y los hijos.
          
          p(numero="2" titulo="Segundo") Acabar con el monopolio del Instituto de Seguros Sociales en la administración del seguro obligatorio de salud, abriendo la posibilidad de competir a empresas privadas con o sin ánimo de lucro, empresas cooperativas e incluso a otras empresas públicas o mixtas. Fueron denominadas con el eufemismo de Entidades Promotoras de Salud (EPS). Para finales de 1996 se encontraban en funcionamiento 30 de ellas.
          
          p(numero="3" titulo="Tercero") Determinación de un valor único promedio del seguro obligatorio anual (unidad de capitación / UPC).
          
          p(numero="4" titulo="Cuarto") Creación del Consejo Nacional de Seguridad Social en Salud, organismo de concertación entre el Gobierno, las administradoras del seguro obligatorio, las instituciones prestadoras de servicios de salud, los gremios y los trabajadores, máximo organismo rector del Sistema, buscando el equilibrio de este.
      .col-lg-2
        span
      .col-lg-5
        h4.mb-4 Régimen subsidiado
        p.mb-4 Para quienes no tienen capacidad de pago y a quienes el Estado debe financiarles parcial o totalmente el valor del seguro obligatorio.
        p.mb-4 <b>Con las siguientes medidas fundamentales:</b>
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Primero") Consecución de nuevos recursos para su financiamiento. Se dedica a un fondo de solidaridad. El Estado debe colocar una cantidad de recursos a dicho fondo, provenientes de otros impuestos.
          
          p(numero="2" titulo="Segundo") Transición de los viejos recursos de la oferta a la demanda. Los hospitales deberán ser eficientes y competitivos, convertidos en Empresas Sociales del Estado para lograr sus ingresos por la venta de servicios a las diversas administradoras de los Regímenes subsidiado y contributivo.
          
          p(numero="3" titulo="Tercero") Los recursos del Fondo de Solidaridad de la nación, los recursos del financiamiento de los hospitales en los departamentos y los recursos municipales deben sumarse para lograr el aseguramiento de toda la población pobre.
          
          p(numero="4" titulo="Cuarto") La cobertura en servicios del seguro subsidiado se plantea con gradualidad, debiendo ser igual a la del contributivo en el año 2002.
</template>

<script>
export default {
  name: 'Tema4',
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
