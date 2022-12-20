export default {
  global: {
    componenteFormativo: 'Orientar personas según normativa de salud',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos sobre competencia de orientar al usuario, la cual busca que los aprendices se enfoquen en identificar las necesidades y expectativas de los usuarios que asisten al servicio de salud. Para ello es importante reconocer la normatividad vigente que rige las políticas institucionales y conocer las normas que rigen el Sistema de Salud en Colombia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistema de seguridad social integral (Ley 100 de 1993)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Modelo de salud',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Aseguramiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Integrantes del sistema',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Regímenes',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Constitución política de Colombia',
        desarrolloContenidos: true,
        subMenu: [
          ////
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Derecho fundamental de la salud (Ley número 1751 de 2015 ley estatutaria)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Reforma del Sistema General de Seguridad Social en Salud (Ley 1438 de 2011)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'El Sistema General de Riesgos Profesionales. (Decreto 1295 de 1994)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo:
          'Política de Atención Integral en Salud — PAÍS y el Modelo de Acción Integral Territorial - MAITE (Resolución 2626 de 2019)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Tipos de clientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'La satisfacción del cliente: elementos y reto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo:
          'Mecanismo para el reporte de información que permitirá la verificación de la entrega de la Carta de Derechos y Deberes del Afiliado y del Paciente y la Carta de Desempeño de la EPS. (Resolución 1379 de 2015)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Plataforma estratégica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: 'La comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        icono: 'far fa-file-alt',
        numero: '12',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        icono: 'far fa-file-alt',
        numero: '13',
        titulo: 'Trabajo en equipo: autoestima, autonomía',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema14',
        icono: 'far fa-file-alt',
        numero: '14',
        titulo: 'Etiqueta y protocolo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  icono: 'fas fa-sitemap',
      //  titulo: 'Síntesis',
      //  nombreRuta: 'sintesis',
      //},
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Adrián, Y. (22 de diciembre de 2019). conceptos, definiciones ',
      link: 'https://conceptodefinicion.de/comunicacion/',
    },
    {
      referencia:
        'Amazonia_Team. (08 de mayo de 2019). Amazonia Team Factory. LAS 10 CUALIDADES DEL LÍDER MÁS IMPORTANTES: ',
      link:
        'https://amazonia-teamfactory.com/blog/las-10-cualidades-del-lider-mas-importantes/',
    },
    {
      referencia:
        'BeeDIGITAL. (2020). Tipos de clientes que existen: características y cómo tratarlos. ',
      link:
        'https://www.beedigital.es/experiencia-de-cliente/tipos-de-clientes-caracteristicas/',
    },
    {
      referencia:
        'Bueno, M. (08 de abril de 2018). fundación querer. Autonomía y autoestima. ',
      link: 'https://www.fundacionquerer.org/autonomia-y-autoestima/',
    },
    {
      referencia:
        'Coelho, F. (30 de mayo de 2019). Significados. Comunicación asertiva. ',
      link: 'https://www.significados.com/comunicacion-asertiva/',
    },
    {
      referencia:
        'El Congreso de Colombia. (2011). Ley No. 1438 de 2011. Por medio de la cual se reforma el sistema general de seguridad social y se dictan otras disposiciones. (pp. 1–51). pp. 1–51. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/LEY 1438 DE 2011.pdf',
    },
    {
      referencia:
        'Komiya, A. (30 de octubre de 2015). CreceNegocios. factores que intervienen en el servicio al cliente. ',
      link:
        'https://www.crecenegocios.com/que-es-el-servicio-al-cliente-y-cual-es-su-importancia/',
    },
    {
      referencia:
        'Koontz, H. & Weihrich, H. (1998). Administración una perspectiva global. Editorial Mc Graw Hill. ',
      link: '',
    },
    {
      referencia:
        'Larraín Cortés, A. (2012). Diseño de una propuesta de mejoramiento de la calidad de servicio en una empresa del rubro automotriz. ',
      link: 'http://repositorio.uchile.cl/handle/2250/104405',
    },
    {
      referencia:
        'López, M. (2006). Lenguaje transparente. Relaciones interpersonales en la empresa. Instituto de Estudios Almerienses.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2004). Sistema de Seguridad Social en Salud. Régimen contributivo (pp. 1–24). pp. 1–24. ',
      link:
        'https://www.minsalud.gov.co/Documentos y Publicaciones/GUIA INFORMATIVA DEL REGIMEN CONTRIBUTIVO.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. Por la cual se modifica la Política de Atención Integral en Salud - PAIS y se adopta el Modelo de Acción Integral Territorial - MAITE. (2019). Resolución No. 2626 de 2019 (pp. 1–17). pp. 1–17. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolución No. 2626 de 2019.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Política de Atención Integral en Salud. Un sistema de salud al servicio de la gente (pp. 1–97). pp. 1–97. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/modelo-pais-2016.pdf',
    },
    {
      referencia: 'Minsalud. (s.f.). Minsalud. ',
      link:
        'https://www.minsalud.gov.co/salud/CAS/Paginas/Carta-de-derechos-y-deberes-y-carta-de-desempe%C3%B1o-del-afiliado-al-sistema-de-salud.aspx',
    },
    {
      referencia:
        'Murillo, S. (2004). Relaciones humanas. Limusa Noriega Editores.',
      link: '',
    },
    {
      referencia:
        'Sánchez, R. R. (28 de febrero de 2012). Manejo de conflictos. ',
      link:
        'https://www.eoi.es/blogs/ruddyramonalonzo/2012/02/28/manejo-de-conflictos-en-las-organizaciones/',
    },
    {
      referencia:
        'Stoner, J., Freman, R., Edward, G. y Daniel, R. (1996). Administración. Editorial Pretice Hall.',
      link: '',
    },
    {
      referencia:
        'wikieoi. (21 de marzo de 2012). Toma de Decisiones en Proyectos de negocio. ',
      link:
        'https://www.eoi.es/wiki/index.php/El_Liderazgo_y_la_Toma_de_Decisiones_en_Proyectos_de_negocio',
    },
  ],
  glosario: [
    {
      termino: 'AIU',
      significado: ' Atención Inicial de Urgencias.',
    },
    {
      termino: 'Amabilidad',
      significado:
        'hace referencia al trato amable, cortés y servicial. Se da, por ejemplo, cuando los trabajadores saludan al cliente con una sonrisa sincera, cuando le hacen saber que están para servirlo, cuando le hacen sentir que están genuinamente interesados en satisfacerlo antes que en venderle, etc.',
    },
    {
      termino: 'Pirognóstico',
      significado:
        'ensayo sin componentes reactivos, quiere decir, reconocimiento de los componentes, mediante la aplicación adecuada del fuego.',
    },
    {
      termino: 'Ambiente agradable',
      significado:
        'es un ambiente acogedor en donde el cliente se siente a gusto. Se da, por ejemplo, cuando los trabajadores le dan al cliente un trato amable y amigable, cuando el local del negocio cuenta con una buena decoración, una iluminación adecuada, una música agradable, etc.',
    },
    {
      termino: 'Atención personalizada',
      significado:
        'es la atención directa o personal que toma en cuenta las necesidades, gustos y preferencias particulares del cliente. Se da, por ejemplo, cuando un mismo trabajador atiende a un cliente durante todo el proceso de compra, cuando se le brinda al cliente un producto diseñado especialmente de acuerdo con sus necesidades, gustos y preferencias particulares, etc.',
    },
    {
      termino: 'ARL',
      significado: ' Administradora de Riesgos Laborales.',
    },
    {
      termino: 'Canal de comunicación',
      significado:
        'es el medio a través del cual es transmitida la información o mensaje, este puede ser natural como lo es el aire, o artificial como las cartas, cd, etc.',
    },
    {
      termino: 'Cliente externo',
      significado:
        'es la persona que se puede denominar consumidor y que busca satisfacer una necesidad.',
    },
    {
      termino: 'Cliente interno',
      significado:
        'es aquella persona que se desempeña como colaborador de la organización.',
    },
    {
      termino: 'Cliente',
      significado:
        'es aquella persona que adquiere un bien o servicio por medio de una transacción financiera.',
    },
    {
      termino: 'Código',
      significado:
        'es un elemento fundamental en la comunicación, son signos del idioma, combinados por el emisor según sea el mensaje que desea transmitir.',
    },
    {
      termino: 'Comodidad',
      significado:
        'hace referencia a la comodidad que se le brinda al cliente cuando visita el local. Se da, por ejemplo, cuando el local cuenta con espacios lo suficientemente amplios como para que el cliente se sienta a gusto, sillas o sillones cómodos, mesas amplias, estacionamiento vehicular, un lugar en donde pueda guardar sus pertenencias, etc.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'es una habilidad social de gran valor, que está asociada a la inteligencia emocional y a la capacidad para comunicarse de manera armoniosa y eficaz con los demás.',
    },
    {
      termino: 'Contexto',
      significado:
        'es el medio o entorno que rodea al emisor y receptor al momento de realizarse la comunicación.',
    },
    {
      termino: 'Copago',
      significado:
        'aporte en dinero que realiza beneficiario por los servicios de salud en hospitalización y cirugías y dependen de su IBC y sirve para financiar el sistema.',
    },
    {
      termino: 'Cuotas de recuperación',
      significado:
        'aportes que se realizan por los servicios recibidos y que no están incluidos dentro del POS.',
    },
    {
      termino: 'Cuotas moderadoras',
      significado:
        'sirven para financiar el sistema y lo cancelan los cotizantes y beneficiarios en los servicios recibidos por consulta externa, medicamentos y laboratorios.',
    },
    {
      termino: 'ECAT',
      significado: ' Eventos Catastróficos y Accidentes de Tránsito.',
    },
    {
      termino: 'Emisor',
      significado:
        'es el encargado de iniciar la acción de comunicar y emitir cierta información. Éste decide de qué manera realizar la acción.',
    },
    {
      termino: 'EPS',
      significado: ' Empresa Promotora de Salud.',
    },
    {
      termino: 'Higiene',
      significado:
        'hace referencia a la limpieza o aseo que hay en el local o en los trabajadores. Se da, por ejemplo, cuando los baños del local se encuentran siempre limpios, cuando no hay papeles en el piso, cuando los trabajadores están bien aseados, con el uniforme o la vestimenta impecable y las uñas recortadas, etc.',
    },
    {
      termino: 'IBC',
      significado: ' Ingreso Base de Cotización.',
    },
    {
      termino: 'IPS',
      significado: ' Instituto Prestador de Salud.',
    },
    {
      termino: 'Misión',
      significado:
        'es lo que se hace para alcanzar el propósito en un periodo de tiempo.',
    },
    {
      termino: 'Multiafiliación',
      significado: 'personas que pertenecen a más de una EPS o EPS_S.',
    },
    {
      termino: 'Plataforma estratégica',
      significado:
        'es la estructura conceptual sobre la cual se rige una organización. Está compuesta en esencia por: misión, visión, objetivos estratégicos, valores corporativos, políticas y códigos de ética.',
    },
    {
      termino: 'POS',
      significado: ' Plan Obligatorio de Salud.',
    },
    {
      termino: 'Rapidez en la atención',
      significado:
        'es la rapidez con la que se le toman los pedidos al cliente, se le entrega su producto, o se le atienden sus consultas o reclamos. Se da, por ejemplo, cuando se cuenta con procesos simples y eficientes, cuando se cuenta con un número suficiente de personal, cuando se capacita al personal para que brinden una rápida atención, etc.',
    },
    {
      termino: 'Receptor',
      significado:
        'es quien recibe el mensaje o información, ajustándose e interpretando según los signos lingüísticos. Luego de su interpretación está en capacidad de emitir una respuesta al emisor.',
    },
    {
      termino: 'Régimen contributivo',
      significado:
        'personas afiliadas al sistema de salud y que tienen capacidad de pago.',
    },
    {
      termino: 'Régimen subsidiado',
      significado:
        'personas pobres y vulnerables afiliados al SGSSS y que se encuentran clasificados por la encuesta del Sisbén 1 y 2 y tienen una EPS_S.',
    },
    {
      termino: 'Seguridad',
      significado:
        'hace referencia a la seguridad que existe en el local y que, por tanto, se le da al cliente al momento de visitarlo. Se da, por ejemplo, cuando se cuenta con suficiente personal de seguridad, cuando se tienen claramente marcadas las zonas de seguridad, cuando se tienen claramente señalizadas las vías de escape, cuando se cuenta con botiquines médicos, etc.',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'es el servicio o atención que una empresa o negocio brinda a sus clientes al momento de atender sus consultas, pedidos o reclamos, venderle un producto o entregarle el mismo.',
    },
    {
      termino: 'SOAT',
      significado: ' Seguro Obligatorio de Accidentes de Tránsito.',
    },
    {
      termino: 'Visión',
      significado:
        'es la realidad que le gustaría ver a la empresa entorno al mundo, sus clientes y ella misma.',
    },
  ],
  complementario: [
    {
      referencia:
        'Colpensiones, (2019), Beneficios del Régimen de Prima Media.',
      tipo: 'Página <em>web</em>',
      link:
        'https://www.colpensiones.gov.co/educacion/publicaciones/2841/como-funciona-el-sistema-pensional-colombiano/',
    },
    {
      tema: '',
      referencia:
        'Ministerio de Salud y Protección Social, Sistema General de Pensiones.',
      tipo: 'Página <em>web</em>',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/RiesgosLaborales/Paginas/sistema-general-pensiones.aspx',
    },
    {
      tema: '',
      referencia: 'Asobancaria, Regímenes de pensiones ¿a cuál afiliarse?',
      tipo: 'Artículo',
      link:
        'https://www.sabermassermas.com/regimenes-de-pensiones-a-cual-afiliarse/',
    },
    {
      tema: '',
      referencia: 'Comunicación asertiva',
      tipo: 'Página <em>web</em>',
      link: 'https://concepto.de/comunicacion-asertiva/',
    },
    {
      tema: '',
      referencia: 'Servicio al cliente',
      tipo: 'Página <em>web</em>',
      link: 'https://concepto.de/servicio-al-cliente/',
    },
    {
      tema: '',
      referencia:
        'Ministerio de Salud y Protección Social. (2010), Definición, actualización, modificación del Plan Obligatorio de Salud.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/comunicadosPrensa/Documents/1.%20Antecedentes%20POS%20Agosto%202.pdf',
    },
    {
      tema: '',
      referencia:
        'Sistema general de seguridad social. 3 de agosto de 2017. Publicado por fucsalud.edu.co.',
      tipo: 'Video',
      link: 'https://vimeo.com/228217305',
    },
    {
      tema: '',
      referencia:
        'Constitución Política De Colombia - (Fundamentos de Administración Pública). 14 de junio de 2018. Publicado por Serranosqui Plus.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tDUOKWTeoYs',
    },
    {
      tema: '',
      referencia: 'Melissa Lenis. (2016), Ley estatutaria en salud.',
      tipo: 'Artículo - Presentación',
      link: 'https://prezi.com/jvfvnkn0zd1p/ley-1751-de-2015/',
    },
    {
      tema: '',
      referencia:
        'Ley 1751 de 2015. 25 de abril de 2017. Publicado por Jennifer Rueda.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WBXc_GZLEa0',
    },
    {
      tema: '',
      referencia:
        'Lo que usted debe saber sobre la Ley Estatutaria de Salud. 24 de febrero de 2015. Publicado por Ámbito Jurídico.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8OTicDh_JYc',
    },
    {
      tema: '',
      referencia:
        '¿Cómo funciona el sistema pensional colombiano? 19 de junio de 2019. Publicado por Asofondos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CoB_6Z8gtlU',
    },
    {
      tema: '',
      referencia:
        'Clases de pensiones. 3 de mayo de 2010. Publicado por Actualícese.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=m8HzgXu24Js',
    },
    {
      tema: '',
      referencia:
        'Presentación de la Política de Atención Integral en Salud. 31 de mayo de 2018. Publicado por MinSaludCol.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AD9GoqohIuQ',
    },
    {
      tema: '',
      referencia:
        'Resolución 2626 de 2019. 1 de febrero de 2020. Publicado por Laura Rocio Vargas Jimenez.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=n6bE2uy_Dr0',
    },
    {
      tema: '',
      referencia:
        'Tipos de clientes. 6 de noviembre de 2013. Publicado por Diana Jaime.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hixQG0y7nuI',
    },
    {
      tema: '',
      referencia:
        'Carta de derechos y deberes. 5 de diciembre de 2013. Publicado por Supersalud Superintendencia de Salud.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nTiPxWOYx5A',
    },
    {
      tema: '',
      referencia:
        'Ministerio de salud y Protección Social. (2019). Plataforma Estratégica 2018- 2022.',
      tipo: 'Artículo',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/PES/plataforma-estrategica.pdf',
    },
    {
      tema: '',
      referencia:
        'María Estela Raffino. (2020). Comunicación asertiva. Concepto.de.',
      tipo: 'Página <em>web</em>',
      link: 'https://concepto.de/comunicacion-asertiva/',
    },
    {
      tema: '',
      referencia:
        'Atención y Servicio al Cliente. 24 de junio de 2015. Publicado por Grupo Proikos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5xGoNUkHpZQ',
    },
    {
      tema: '',
      referencia:
        'La carreta. 29 de agosto de 2016. Publicado por Performina Colombia.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=p4MMuesoseI',
    },
    {
      tema: '',
      referencia:
        'El trabajo en equipo. 14 de julio de 2014. Publicado por Aldeas Verdes.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nYhliYnTIUo',
    },
    {
      tema: '',
      referencia:
        'Relaciones interpersonales humanizadas en salud. 4 de mayo de 2016. Publicado por Leidy Hernandez.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KnmqCaeZYww',
    },
    {
      tema: '',
      referencia:
        'Fomentar la autoestima: motivación, aliento y autonomía. 4 de julio de 2018. Publicado por Cuentos por Creer.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0E7ryzsaLKs',
    },
    {
      tema: '',
      referencia:
        'Protocolo de atención al cliente. 15 de diciembre de 2016. Publicado por Shirley Dania Julca Castillo.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=egkOLUiEdx4',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
