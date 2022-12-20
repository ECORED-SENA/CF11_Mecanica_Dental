<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Tipos de clientes

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-7
        .cajon.color-acento-contenido(style='background-color: #C3F1F2').px-5.py-4.mb-4
          p.mb-4 En el Diccionario de Marketing, de Cultural S.A., encontramos que "cliente" es un "Término que define a la persona u organización que realiza una compra. Puede estar comprando en su nombre, y disfrutar personalmente del bien adquirido, o comprar para otro, como el caso de los artículos infantiles. Resulta la parte de la población más importante de la compañía.
          p.mb-0 Teniendo en cuenta lo anterior podemos determinar que el cliente en salud es la persona que adquiere un servicio que necesita o desea para sí mismo o para otra persona. Es necesario recalcar que nuestro usuario es el motivo principal por el que se crean las instituciones de salud.
      .col-lg-5.col-md-8.col-8
        figure
          img(src='@/assets/curso/tema7/img1.png', alt='Texto que describa la imagen')

    p.mb-4 <b>En el diario vivir de nuestras instituciones manejamos diversidad o tipos de clientes, al diferenciar sus rasgos o características es más fácil saber de qué forma deben ser tratados.</b>

    h4 Tipos de cliente según su nivel de fidelización  
    .row.mb-5
      .col-lg-12
        .tarjeta.celeste4.p-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center(titulo="Cliente ocasional")
              .col-md-11
                p Clientes que compran por primera vez o lo hacen ocasionalmente, pero sin una frecuencia establecida.

            .row.justify-content-center(titulo="Cliente de compra regular")
              .col-md-11
                p Suele repetir la compra en el establecimiento, pero en ocasiones también consume en la competencia.

            .row.justify-content-center(titulo="Clientes de compra frecuente")
              .col-md-11
                p Siempre compra el tipo de productos/servicios que vendemos en nuestro establecimiento.

            .row.justify-content-center(titulo="Clientes-embajadores")
              .col-md-11
                p Cumple las características del cliente de compra frecuente, pero, además, comparte con sus familiares o compañeros las bondades de nuestra marca. En otras palabras, es una especie de ‘fan’ del negocio.

    h4 Tipos de cliente según su comportamiento
    .row.mb-5
      .col-lg-12
        .tarjeta.celeste4.p-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center(titulo="Cliente amable")
              .col-md-11
                p Se muestra amistoso y le da la razón en casi todo, pero no tiene las cosas claras. No se confíe, es mejor que le enseñe pocos productos para no incrementar sus dudas.

            .row.justify-content-center(titulo="Cliente reflexivo")
              .col-md-11
                p Son personas que se muestran muy organizadas y a las que les gusta contar con información antes de hacer la compra. Hay que atenderlas con paciencia, mostrar tranquilidad y datos objetivos sobre el producto. Nunca hay que presionarles para que tome una decisión.

            .row.justify-content-center(titulo="Cliente entusiasta")
              .col-md-11
                p Le encanta hablar y puede que incluso le cuente parte de su vida. Además, sus conversaciones no tienen por qué girar en torno a la compra. Repite las ideas y le gusta escuchar a los dependientes. Trate de centrar la conversación en el producto e intente ser conciso al hablar. Debe ser usted quien dirija el proceso de compra, no se muestre aburrido ante sus exposiciones.

            .row.justify-content-center(titulo="Cliente tímido")
              .col-md-11
                p Se dará cuenta con rapidez que está ante un cliente tímido, ya que guarda las distancias y ni siquiera le mira a los ojos. Gánese su confianza, muéstrele todo lo que necesite y trate de guiar su compra. No le haga sentir inseguro con miradas fijas o con preguntas personales, tampoco se acerque demasiado a él para que no se sienta intimidado.

            .row.justify-content-center(titulo="Cliente indeciso")
              .col-md-11
                p Es un cliente que manifiesta muchas dudas a lo largo de todo el proceso de compra. Recopila mucha información y por eso la compra puede alargarse en el tiempo. Hay que ser paciente y estar dispuesto a explicar muy bien el producto y a ofrecerle alternativas. No se debe agobiar a este tipo de cliente ni presionarlo.

            .row.justify-content-center(titulo="Cliente silencioso")
              .col-md-11
                p Como habla poco, escucha muy bien todo lo que se le dice. No deja ver lo que piensa y es difícil adivinar lo que necesita. Hay que ser amable, dar opciones y mostrar interés. Es bueno no interrumpirle y no pensar que no escucha por el hecho de que esté tanto tiempo en silencio.

            .row.justify-content-center(titulo="Cliente discutidor")
              .col-md-11
                p Se nota que tiene ganas de discutir y suele mostrarse soberbio en el trato. No hay que perder los nervios, pero hay que ser firme en todo momento. Hay que evitar discutir, pero tampoco debe mostrarse temeroso. No es bueno que ceda en todo, pero puede plantearse hacerlo en algo.

            .row.justify-content-center(titulo="Cliente orgulloso")
              .col-md-11
                p Se trata de un tipo de cliente que cree saberlo todo. Quiere mantener el control y hace uso de su buena labia para conseguirlo. No se deja aconsejar y quiere que otros elogien el hecho de que parezca conocer a fondo el producto. Debe demostrar que también conoce el producto y explicar muy bien en qué consiste. Mantenga la calma y escuche con atención. Trate de no corregirlo abiertamente.

            .row.justify-content-center(titulo="Cliente escéptico")
              .col-md-11
                p Le encanta resaltar lo malo del producto y obviar lo bueno. Es desconfiado y teme que quiera manipularlo para que compre el producto y, por eso, se muestra a la defensiva. Muestre datos objetivos, mencione tanto las ventajas como las desventajas. No se impaciente y ayúdele hasta que complete la venta.

            .row.justify-content-center(titulo="Cliente ocupado")
              .col-md-11
                p Dejará claro desde el principio que no tiene tiempo y puede que esté haciendo otras cosas mientras compra, como hablar por teléfono. Suele ser caótico e impaciente. Intente que el ambiente sea tranquilo y no intente la venta si no le presta atención.

    h4 Tipos de clientes en función su satisfacción
    .row.mb-5
      .col-lg-12
        .tarjeta.celeste4.p-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center(titulo="Clientes complacidos")
              .col-md-11
                p Son los que muestran un mayor grado de satisfacción. Este tipo de clientes no encuentra ningún ‘pero’ a la marca y no se plantea acudir a la competencia. Normalmente, son clientes-embajador, porque suelen hablar bien a sus conocidos sobre la empresa.

            .row.justify-content-center(titulo="Clientes satisfechos")
              .col-md-11
                p Sus expectativas están cubiertas, por lo que no buscarán el irse a la competencia. Sin embargo, las personas que entran en esta categoría de tipos de clientes sí pueden irse si se encuentran con una oferta mejor, por lo que vale la pena intentar fidelizarlos con ofertas recurrentes para eliminar esta tentación.

            .row.justify-content-center(titulo="Clientes indiferentes")
              .col-md-11
                p Como su nombre indica, no tienen una postura definida. Son muy volátiles, por lo que pueden cambiar fácilmente de marca (aunque es muy probable que sigan siendo clientes ocasionales).

            .row.justify-content-center(titulo="Clientes insatisfechos")
              .col-md-11
                p Son clientes que no ven sus expectativas cumplidas y que quieren desistir de la relación comercial. Revertir la situación puede ser muy difícil, pero a veces puede lograrse con una disculpa y una buena oferta.

            .row.justify-content-center(titulo="Clientes rehenes")
              .col-md-11
                p Los clientes rehenes a veces se agrupan bajo la categoría de clientes insatisfechos. Son aquellos que no están conformes con el servicio y que desean cambiar de proveedor, pero que no lo hacen porque no encuentran alternativas accesibles o porque no pueden (por los costes del cambio, el #[i timing], las cláusulas del contrato, etc.) (BeeDIGITAL, 2020)




            


</template>

<script>
export default {
  name: 'Tema7',
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
