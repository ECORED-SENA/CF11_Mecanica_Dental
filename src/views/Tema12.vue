<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1  Servicio al cliente

    p.mb-4 En relación con servicio al cliente son las diferentes estrategias ejecutadas dentro de una organización para interactuar con sus usuarios, para garantizar la calidad en la prestación de los servicios ofertados teniendo en cuenta ciertos factores, que le permitan ser más competente con el mercado.

    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Factores que intervienen en el servicio al cliente
    .row.justify-content-center.mb-4
      .col-lg-6
        figure
          img(src='@/assets/curso/tema12/fig1.svg', alt='Texto que describa la imagen')
    br
    .bg_grad-01
      p.mb-4 <b>El siguiente enlace lleva al video “Atención y Servicio al Cliente”, en donde explican la importancia de satisfacer al cliente, la importancia de satisfacer sus necesidades ante la prestación de un servicio o un producto.</b>
      figure.mb-5
        .video
          iframe(width="1026" height="578" src="https://www.youtube.com/embed/5xGoNUkHpZQ" title="Constitución Política De Colombia - (Fundamentos de Administración Pública)." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.align-items-center.mb-4
      .col
        .tarjeta.color-gris5.p-5
          h4 Técnicas de comunicación
          p.mb-4 Son las habilidades que utilizamos para generar una adecuada comunicación.
      .col-lg-6
        figure.mb-0
          img(src='@/assets/curso/tema12/img1.jpg', alt='Texto que describa la imagen')
    br
    .bg_grad-01
      p.mb-4 <b>El siguiente enlace lleva a un video que da a conocer las 7 técnicas para desarrollar habilidades verbales.</b>
      figure.mb-5
        .video
          iframe(width="1026" height="578" src="https://www.youtube.com/embed/6tGA8RDW-Z0" title="Constitución Política De Colombia - (Fundamentos de Administración Pública)." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h4 Protocolo de comunicación telefónica, virtual y presencial
    p.mb-4 Un protocolo son normas o reglas que se deben seguir para dar cumplimiento a una actividad, para llegar a la mejora continua del proceso generando así confianza y satisfacción de las dos partes.
    p.mb-4 <b>En el siguiente enlace del Ministerio de Salud, puede ampliar información sobre este tema. Pag. 23-29.</b>
    .row.mb-4 
      .col-lg-4.col-md-6.col-7
        a.anexo.mb-4.mb-lg-0(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/SG/SAB/protocolo-atencion-ciudadano-sector-salud.pdf" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            .text-white
              p.mb-0 <b>Protocolo de protección al ciudadano.</b>
              p Fuente: Ministerio de salud y Protección Social.
    br
    .bg_grad-01
      p.mb-4 <b>El siguiente enlace lleva a un video sobre la cortesía telefónica, presenta 4 sugerencias para realizar o recibir una llamada de forma adecuada.</b>
      figure.mb-5
        .video
          iframe(width="1026" height="578" src="https://www.youtube.com/embed/BDamU19Cvaw" title="Constitución Política De Colombia - (Fundamentos de Administración Pública)." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h4 Manejo y solución de conflictos
    p.mb-4 Con respecto al manejo y solución de conflictos, nos direccionamos a la forma de manejar las inconformidades de los empleados o los usuarios por medio de estrategias diseñadas desde la dirección general de la institución para dar resolución a dichas diferencias, generando un ambiente agradable dentro del ámbito laboral o la prestación del servicio.

    .row 
      .col-lg-6
        h4.mb-5 <FONT COLOR="#0273BC"> Para ello debemos evitar:</FONT>
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Mala comunicación.
          li
            i.fas.fa-check
            | Desempeño inapropiado.
          li
            i.fas.fa-check
            | Diferencia de intereses.
          li
            i.fas.fa-check
            | Inflexibilidad.
        br
        h4.mb-5 <FONT COLOR="#0273BC">En los conflictos podemos encontrar varios aspectos positivos:</FONT>
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Superándolos crecemos.
          li
            i.fas.fa-check
            | Nos dan experiencia.
          li
            i.fas.fa-check
            | Nos hacen detectar puntos débiles.
          li
            i.fas.fa-check
            | Es la ocasión para mejorar la comunicación y las relaciones.
          li
            i.fas.fa-check
            | Podemos fomentar la creatividad.
          li
            i.fas.fa-check
            | Ayuda a definir los problemas y a tomar conciencia sobre los mismos.
      .col-lg-6
        h4.mb-5 <FONT COLOR="#0273BC"> La mejor manera de enfrentar los conflictos es:</FONT>
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Reconociendo que existe.
          li
            i.fas.fa-check
            | Definir el conflicto. (problema)
          li
            i.fas.fa-check
            | Reconocer que soy corresponsable.
          li
            i.fas.fa-check
            | Declarar explícitamente la voluntad de superarlo.
          li
            i.fas.fa-check
            | Tolerancia con la otra parte. (Ver y valorar su punto de vista)
          li
            i.fas.fa-check
            | Diseñar alternativas de solución y estar abiertos a innovaciones.
          li
            i.fas.fa-check
            | Elegir una solución en la que ganemos los dos.
          li
            i.fas.fa-check
            | Comprometerse con dicha solución. (Sánchez, 2012)
        .row.justify-content-center
          .col-8.col-md-8
            figure.mb-0
              img(src='@/assets/curso/tema12/1.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema12',
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
