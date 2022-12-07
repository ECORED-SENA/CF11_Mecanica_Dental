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
    .row.mb-4
      .tarjeta--container.row.mb-5
        .col-md 
          .tarjeta-avatar
            img(src='@/assets/curso/tema5/avatar1.svg' alt='AvatarTop')
            .tarjeta.color-cian
              .p-4
                .row.justify-content-center
                  .col-10
                    p.mb-4 A continuación, se encuentra un cuadro en donde pueden ser revisadas las actualizaciones del Decreto 1833 de 2016.
                    a.anexo1.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p.mb-0 <b>Decreto Único Sistema General de Pensiones.</b>
                        p Fuente: Ministerio del Trabajo.
        .col-md 
          .tarjeta-avatar
            img(src='@/assets/curso/tema5/avatar2.svg' alt='AvatarTop')
            .tarjeta.color-azul
              .p-4
                .row.justify-content-center
                  .col-10
                    p.mb-4 Se presenta el siguiente enlace que lleva a un cuadro en donde se describe todo el marco normativo de pensiones en nuestro país. Este cuadro fue construido por el Ministerio de Hacienda.

                    a.anexo2.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p.mb-0 <b>Marco normativo pensiones.</b>
                        p Fuente: Ministerio de Hacienda.
    h4.mb-4 Tipos de regímenes
    p.mb-4 El sistema de acuerdo con su financiación y la modalidad de administración de los recursos está conformado por el Régimen Solidario de Prima Media con Prestación Definida (RPM) y el Régimen de Ahorro Individual con Solidaridad (RAIS).
    p.mb-5 <b>La administración del primero está a cargo del Estado (actualmente Colpensiones) y la del segundo está a cargo de los fondos privados de pensiones y cesantías</b>.

    .row.justify-content-center
      .col-lg-6
        .row.justify-content-center
          .col-lg-6
            .bloque-texto-c.color-claro.p-4
              i.fas.fa-quote-right
              h4.mb-2 Prima media con prestación definida Seguro / Exigible
          .col-lg-6
            .bloque-texto-c.color-claro.p-4
              i.fas.fa-quote-right
              h4.mb-2 Ahorro individual con solidaridad capacidad de capitalización / Rentabilidad

    h4.mb-4 Afiliación al sistema
    p.mb-4 En tanto que la escogencia del régimen es libre y voluntaria, la afiliación al sistema es obligatoria para:

    .row.justify-content-center.mb-4
      .col-lg-10
        .row.align-items-center.mb-4
          .col-lg-1
            figure
              img(src='@/assets/curso/tema5/dialogomujer.svg', alt='Texto que describa la imagen')
          .col-lg-10
            .comentario
              .comentario.burbuja
                p.mb-0 Trabajadores dependientes, los servidores públicos o para los independientes vinculados mediante la modalidad de contratación por prestación de servicios.
    
        .row.align-items-center.justify-content-end.mb-4
          .col-lg-5
            .comentario1
              .comentario1.burbuja1
                p.mb-0 Voluntaria para los independientes sin contrato.
          .col-lg-1
            figure
              img(src='@/assets/curso/tema5/dialogohombre.svg', alt='Texto que describa la imagen')

        .row.align-items-center.mb-4
          .col-lg-1
            figure
              img(src='@/assets/curso/tema5/dialogomujer.svg', alt='Texto que describa la imagen')
          .col-lg-10
            .comentario
              .comentario.burbuja
                p.mb-0 Condición necesaria para el reconocimiento y pago de las prestaciones y de las pensiones de invalidez, vejez y sobrevivientes y de la obligación de efectuar los aportes (cotización o ahorro).

        .row.align-items-center.justify-content-end.mb-4
          .col-lg-10
            .comentario2
              .comentario2.burbuja2
                p.mb-0 La afiliación al Sistema General de Pensiones es permanente, excluyente, de carácter contractual y no se pierde por mora.
          .col-lg-1
            figure
              img(src='@/assets/curso/tema5/dialogohombre.svg', alt='Texto que describa la imagen')

        .row.align-items-center.mb-4
          .col-lg-1
            figure
              img(src='@/assets/curso/tema5/dialogomujer.svg', alt='Texto que describa la imagen')
          .col-lg-10
            .comentario
              .comentario.burbuja
                p.mb-0 Obligatoria para personas naturales con vinculación contractual, que sirvan al Estado o beneficiarios del Fondo de Solidaridad Pensional.

        .row.align-items-center.justify-content-end.mb-4
          .col-lg-10
            .comentario2
              .comentario2.burbuja2
                p.mb-0 Afiliados
                p.mb-0 Activos: cotizantes
                p.mb-0 Inactivos: personas con mora superior a seis meses.
          .col-lg-1
            figure
              img(src='@/assets/curso/tema5/dialogohombre.svg', alt='Texto que describa la imagen')

        .row.align-items-center.mb-4
          .col-lg-1
            figure
              img(src='@/assets/curso/tema5/dialogomujer.svg', alt='Texto que describa la imagen')
          .col-lg-10
            .comentario
              .comentario.burbuja
                p.mb-0 Voluntaria para extranjeros con contratos y en los contratos en los que la afiliación no es obligatoria.

        .row.align-items-center.justify-content-end.mb-4
          .col-lg-10
            .comentario2
              .comentario2.burbuja2
                p.mb-0 Para el reconocimiento de las pensiones se tiene en cuenta el número de semanas cotizadas y los dos regímenes basados en el principio de solidaridad garantizan el reconocimiento y el pago de una pensión mínima la cual solo podrá causarse por invalidez o por vejez.
          .col-lg-1
            figure
              img(src='@/assets/curso/tema5/dialogohombre.svg', alt='Texto que describa la imagen')

        .row.align-items-center.mb-4
          .col-lg-1
            figure
              img(src='@/assets/curso/tema5/dialogomujer.svg', alt='Texto que describa la imagen')
          .col-lg-10
            .comentario
              .comentario.burbuja
                p.mb-0 En el caso que el afiliado al cumplir la edad de la pensión no cumpla con los demás requisitos para el efecto y, dependiendo del régimen en el cual se encuentre afiliado, tendrá derecho a la devolución de saldos o a una indemnización sustitutiva.

    h4.mb-5 Reconocimientos del régimen de prima media
    ul.lista-ul--color.mb-4
      li
        i.fas.fa-check
        | Con los requisitos mínimos de una cotización de 1300 semanas y con 57 años para las mujeres y 62 años para los hombres.
      li
        i.fas.fa-check
        | Se debe haber perdido el 50 % o más de su capacidad laboral a causa de una actividad no profesional
      li
        i.fas.fa-check
        | Es la que deja el afiliado a sus beneficiarios al fallecer y puede ser causada por muerte del pensionado o por muerte del trabajador activo.

    .row.mb-4 
      .col-lg-12
        .tarjeta.celeste3.px-5.py-4
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center.mb-0
                .col-lg-7
                  h4.mb-4 Régimen de ahorro individual con solidaridad.
                  p.mb-0 En este régimen el financiamiento de las pensiones se hace a través de una cuenta individual de ahorro manejada por la administradora de pensiones. Las cotizaciones de cada afiliado están dirigidas a financiar su propia pensión centrando su efectividad en la acumulación de capital en la cuenta individual del afiliado (cantidad cotizada) dejando de lado los requisitos de edad y tiempo de cotización exigidos por el régimen de prima media.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema5/img1.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-4
      .col-lg-10
        h4.mb-4 Algunas características de la financiación de este régimen son:
        ul.lista-ul--color.mb-4
          li
            i.fas.fa-check
            | Existe una relación directa entre la cantidad cotizada y la expectativa de pensión (la cuantía depende de la cantidad ahorrada y los rendimientos)
          li
            i.fas.fa-check
            | Existe la posibilidad de hacer cotizaciones adicionales.
          li
            i.fas.fa-check
            | Garantiza el beneficio al reunir el capital que financie la pensión.
          li
            i.fas.fa-check
            | Los aportes no van a un fondo común, aunque parte de los aportes se destinan a seguros, asesoría y administración.
          li
            i.fas.fa-check
            | Las administradoras están obligadas a garantizar una rentabilidad mínima y en caso de insuficiencia del capital para financiar la pensión, el sistema contempla la devolución de saldos al cotizante.
          li
            i.fas.fa-check
            | Retiro programado: se pueden realizar retiros periódicos.
          li
            i.fas.fa-check
            | Renta vitalicia: traslado del capital pensional a una aseguradora que promete una renta vitalicia.
          li
            i.fas.fa-check
            | Retiro programado con renta vitalicia diferida.
    h4.mb-4 Conclusiones

    .row.mb-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Cuadro 1.
          span Diferencias entre régimen de pensión público y privado
    .row.justify-content-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Prima media
                th 
                th Ahorro Individual
            tbody
              tr
                td Prima de seguro obligatoria
                td Cotización
                td 
                  p Capitalización individual
                  p Cotizaciones adicionales
              tr
                td El derecho a pensión no depende del aporte
                td Pensión
                td 
                  p No se requiere edad o tiempo. 
                  p A mayor cotización (ahorro), mayor posibilidad de pensión
    .row.justify-content-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                <th colspan="2">Prima media</th>
                <th colspan="2">Ahorro Individual</th> 
            tbody
              tr
                td 
                  h5 Ventajas
                td 
                  h5 Desventajas
                td 
                  h5 Ventajas
                td
                  h5 Desventajas
              tr
                td Bajos costos de administración.
                td No relación entre cotización y pensión.
                td Aumento del ahorro.
                td Efectividad / Tasas de rendimiento.
              tr
                td Carácter solidario.
                td Impacto por transición demográfica.
                td Fortalecimiento del mercado de capitales.
                td Riesgo ante crisis económica.

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
