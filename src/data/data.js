




export const data = [{
    inicio: {
        id: 'inicioNav',
        name: 'INICIO',
        url: '/home',
        logoNav:'Logo-itic.svg',
        email:'contacto@iticco.com',
        phone:'+57 601 746 0980',
        address:'Of. Calle 108 #45-27',
        addressBuilding:'Ed. ITICCOL - Bogotá Colombia',
        facebookUrl:'https://www.facebook.com/iticcolombia',
        instagramUrl:'https://www.instagram.com/itic_colombia/',
        twitterUrl:'https://twitter.com/ITICColombia',
        linkedInUrl:'https://www.linkedin.com/company/itic-colombia/',

    },
    empresa: {
        id: 'empresaNav',
        name: 'EMPRESA',
        url: '',
        dropDownMenu:{
            nosotros: {
                key:1,
                id: "nosotros",
                name: "ACERCA DE NOSOTROS",
                nameFooter:'Acerca de nosotros',
                url: '/empresa/nosotros',
                banner1: '',
                miniaturas: {
                    tarjeta1: {
                        id: '',
                        img: "",
                        text: "",
                    },
                },
            },
            pilares: {
                key:2,
                id: "pilares",
                name: "PILARES, MISIÓN, VISIÓN",
                nameFooter:'Pilares, Misión, Visión',
                url: '/empresa/pilares',
                banner1: '',
                miniaturas: {
                    tarjeta1: {
                        id: '',
                        img: "",
                        text: "",
                    },
                },
            },
            acreditaciones: {
                key:5,
                id: "acreditaciones",
                name: "ACREDITACIONES",
                nameFooter:'Acreditaciones',
                url: '/empresa/acreditaciones',
                banner1: '',
                miniaturas: {
                    tarjeta1: {
                        id: 'fff',
                        img: "hhhh",
                        text: "eeee",
                    },
                },
                documentOnac:{
                    title:'ACREDITACIONES',
                    subTitle:'En iticcol contamos con acreditación ONAC, vigente a la fecha con código de acreditación:',
                    cards:{
                        document1:{
                            id:'cardInspec',
                            url:'https://onac.org.co/certificados/15-OIN-014.pdf',
                            img:'ONAC_INSPECCION.png',
                            name:'INSPECCION',
                            textP:'15-OIN-014, bajo la norma \nISO/IEC 17020:2012 \npara la certificación de \ninspecciones',
                        },
                        document2:{
                            id:'cardPers',
                            url:'https://onac.org.co/certificados/14-OCP-006.pdf',
                            img:'ONAC_PERSONAS.png',
                            name:'PERSONAS',
                            textP:'14-OCP-006, bajo la \nnorma ISO/IEC 17024:2012 \npara la certificación de \npersonas',
                        },
                        document3:{
                            id:'cardProd',
                            url:'https://onac.org.co/certificados/15-CPR-002.pdf',
                            img:'ONAC_PRODUCTO.png',
                            name:'PRODUCTOS',
                            textP:'15-CPR-002, bajo la \nnorma ISO/IEC 17065:2012 \npara la certificación de \nproducto',
                        },
                        document4:{
                            id:'card',
                            url:'https://onac.org.co/certificados/12-CSG-001.pdf',
                            img:'ONAC_GESTION.png',
                            name:'SISTEMAS DE \nGESTIÓN',
                            textP:'12-CSG-001, bajo la norma \nISO/IEC 17021-1:2015 \npara la certificación de \nsistemas de gestión',
                        },
                    }
                }
            },
            certificaciones: {
                key:6,
                id: "certificaciones",
                name: "CERTIFICACIONES",
                nameFooter:'Certificaciones',
                url: '/empresa/certificaciones',
                banner1: '',
                miniaturas: {
                    tarjeta1: {
                        id: '',
                        img: "",
                        text: "",
                    },
                },
            },
            equipo: {
                key:7,
                id: "equipo",
                name: "NUESTRO EQUIPO",
                nameFooter:'Nuestro equipo',
                url: '/empresa/equipo',
                banner1: '',
                miniaturas: {
                    tarjeta1: {
                        id: '',
                        img: "",
                        text: "",
                    },
                },
            },
            clientes: {
                key:8,
                id: "clientes",
                name: "HAN CONFIADO EN NOSOTROS",
                nameFooter:'Han confiado en nosotros',
                url: '/empresa/clientes',
                banner1: '',
                miniaturas: {
                    tarjeta1: {
                        id: '',
                        img: "",
                        text: "",
                    },
                },
            },
            proyectos: {
                key:9,
                id: "proyectos",
                name: "PROYECTOS",
                nameFooter:'Nuestras Experiencias',
                nameSecction:'NUESTRA EXPERIENCIA',
                url: '/empresa/proyectos',
                banner1: '',
                subTitle:'Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis dictumst porttitor: ',
                cards: {
                    card1: {
                        id: 'proyect1',
                        img: "Proyecto1.png",
                        title:'TÍTULO PROYECTO UNO',
                        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non vestibulum, dis libero leo aliquet viverra justo interdum.",
                    },
                    card2: {
                        id: 'proyect2',
                        img: "Proyecto2.png",
                        title:'TÍTULO PROYECTO DOS',
                        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non vestibulum, dis libero leo aliquet viverra justo interdum.",
                    },
                    card3: {
                        id: 'proyect3',
                        img: "Proyecto3.png",
                        title:'TÍTULO PROYECTO TRES',
                        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non vestibulum, dis libero leo aliquet viverra justo interdum.",
                    },
                    card4: {
                        id: 'proyect4',
                        img: "Proyecto1.png",
                        title:'TÍTULO PROYECTO CUATRO',
                        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non vestibulum, dis libero leo aliquet viverra justo interdum.",
                    },
                    card5: {
                        id: 'proyect5',
                        img: "Proyecto2.png",
                        title:'TÍTULO PROYECTO CINCO',
                        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non vestibulum, dis libero leo aliquet viverra justo interdum.",
                    },
                    card6: {
                        id: 'proyect6',
                        img: "Proyecto3.png",
                        title:'TÍTULO PROYECTO SEIS',
                        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non vestibulum, dis libero leo aliquet viverra justo interdum.",
                    },
                    card7: {
                        id: 'proyect7',
                        img: "Proyecto1.png",
                        title:'TÍTULO PROYECTO SIETE',
                        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non vestibulum, dis libero leo aliquet viverra justo interdum.",
                    },
                    card8: {
                        id: 'proyect8',
                        img: "Proyecto2.png",
                        title:'TÍTULO PROYECTO OCHO',
                        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non vestibulum, dis libero leo aliquet viverra justo interdum.",
                    },
                    card9: {
                        id: 'proyect9',
                        img: "Proyecto3.png",
                        title:'TÍTULO PROYECTO NUEVE',
                        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit non vestibulum, dis libero leo aliquet viverra justo interdum.",
                    },
                },
            },
            politicas: {
                key:10,
                id: "politicas",
                name: "POLÍTICAS, CÓDIGOS Y REGLAMENTOS",
                url: '/empresa/politicas',
                banner1: '',
                miniaturas: {
                    tarjeta1: {
                        id: '',
                        img: "",
                        text: "",
                    },
                },
            },
        },


    },
    servicios: {
        id: 'serviciosNav',
        name: 'SERVICIOS',
        url: '',
        subTitle:'Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis dictumst porttitor: ',
        dropDownMenu: {
            gestion: {
                id: "gestion",
                name: "SISTEMAS DE GESTIÓN",
                nameFooter: "Sistemas de Gestión",
                url: '/servicios/gestion',
                banner1: '',
                cardImg:'GESTION.png',
                cardText:'- Certificación - GAP Análisis - Auditoría Interna - Evaluación de Proveedores',
                
            },
            producto: {
                id: "producto",
                name: "CERTIFICACIÓN DE PRODUCTO",
                nameFooter: "Certificación de producto",
                url: '/servicios/producto',
                banner1: '',
                cardImg:'PRODUCTO.png',
                cardText:'- TCA ENEL - Eficiencia energética - Gasodomésticos - Barras Corrugadas - Retilap - Retie - Pilas - RetiQ - Refrigeradores y congeladores',
                
            },
            industriales: {
                id: "industriales",
                name: "SERVICIOS INDUSTRIALES",
                nameFooter: "Servicios industriales",
                url: '/servicios/industrial',
                banner1: '',
                cardImg:'INDUSTRIALES.png',
                cardText:'- Certificación Sistemas Retie/Retilap - Certificación Redes de Gas - Certificación Estaciones de servicio - Servicios de interventoría - Servicios deI nspección...',
            },
            personas: {
                id: "personas",
                name: "CERTIFICACIÓN DE PERSONAS",
                nameFooter: "Certificación de personas",
                url: '/servicios/personas',
                banner1: '',
                cardImg:'PERSONAS.png',
                cardText:'- Gas Natural Residencial y Comercial - Gas Natural Comprimido Vehicular',
                
            },
        },
    },
    consulta: {
        id: 'consultaNav',
        name: 'CONSULTA TU CERTIFICADO',
        url: '',
    },
    cotizacion: {
        id: 'cotizacionNav',
        name: 'SOLICITA TU COTIZACIÓN',
        url: '/cotizacion',
    },
    contacto: {
        id: 'contactonNav',
        name: 'CONTACTO',
        nameFooter:'Formulario de contacto',
        url: '/contacto',
        title:'¡CONTÁCTANOS!',
        subTitle:'CONOCE MÁS SOBRE \nNUESTROS SERVICIOS',
        btn:'COMUNÍCATE CON NUESTRO EQUIPO',
        btnMovile:'COMUNÍCATE',
    },
    countries:{
        colombia:{
            id:'colombia',
            name:'COL',
            url:'https://www.iticco.com/',
        },
        peru:{
            id:'peru',
            name:'PER',
            url:'https://www.iticpe.com/',
        }
    },
    home:{
        bannerHome1:'',
        bannerText1:'INSPECCIÓN',
        bannerParrafo1:'A través de nuestros servicios de inspección, ponemos a disposición de los clientes toda nuestra experticia y experiencia técnica para ser sus ojos en el lugar del mundo que lo requieran y de esta manera garantizar la calidad en sus procesos y evitar pérdidas de tiempo y dinero.',
        bannerBtn1:'SOLICITAR INFORMACIÓN',
        sectionServicios:{
            text1:'SOLICITAR INFORMACIÓN',
            text2:'En iticcol contamos con acreditación ONAC, vigente a la fecha con código de acreditación:',
            textLayout:'En iticcol contamos con acreditación ONAC, vigente a la fecha con código de acreditación:',
            btnLayout:'ACEPTAR',
            cards:{
                cards1:{
                    textCard1:'SISTEMAS DE GESTIÓN',
                    textCard2:'- Certificación - GAP Análisis - Auditoría Interna - Evaluación de Proveedores',
                    textBtn:'VER MÁS',
                    imgCard:'',
                    imgCsg001:'',
                },
                cards2:{
                    textCard1:'CERTIFICACIÓN DE PRODUCTO',
                    textCard2:'- TCA ENEL - Eficiencia energética - Gasodomésticos - Barras Corrugadas - Retilap - Retie - Pilas - RetiQ - Refrigeradores y congeladores',
                    textBtn:'VER MÁS',
                    imgCard:'',
                    imgCpr002:'',
                },
                cards3:{
                    textCard1:'SERVICIOS INDUSTRIALES',
                    textCard2:'- Certificación: Sistemas Retie/Retilap - Redes de Gas - Estaciones de servicio - Servicios de: interventoría - Inspección- Supervisión Técnica Independiente - Gerencia de Proyectos -Ensayos no destructivos - Evaluación de Integridad - Homologación de Proveedores - Supply Chain& Expediting',
                    textBtn:'VER MÁS',
                    imgCard:'',
                    imgOin014:'',
                },
                cards4:{
                    textCard1:'CERTIFICACIÓN DE PERSONAS',
                    textCard2:'- Gas Natural Residencial y Comercial - Gas Natural Comprimido Vehicular',
                    textBtn:'VER MÁS',
                    imgCard:'',
                    imgOco006:'',
                }
            }
        },
        enfoque:{
            text1:'NUESTRO ENFOQUE',
            text2:'SOLUCIONES APLICABLES A CUALQUIER INDUSTRIA',
            textBtn:'CONOCE MÁS',
            parrafo:'Somos una empresa comprometida con la responsabilidad social y la sostenibilidad la integridad y la excelencia operacional nos permiten ofrecer servicios de alta calidad a nuestros clientes y contribuir al desarrollo del país. Contamos con experiencia en proyectos de gran envergadura a nivel nacional e internacional, lo que nos permite ofrecer confianza, agilidad y seguridad en servicios de Inspeccion, supervision, interventoria, certificacion, y ensayos. Además, ofrecemos el desarrollo de soluciones digitales a medida de nuestros clientes para agilizar la toma de decisiones y ahorrar recursos. Basamos nuestros procesos en estándares técnicos globales y contamos con profesionales con calificaciones técnicas internacionales.',
            cards:{
                card1:{
                    text1:'AÑOS',
                    text2:'EXPERIENCIA',
                },
                card2:{
                    text1:'COLABORADORES',
                    text2:'CAPACIDAD LOCAL',
                },
                card3:{
                    text1:'SOPORTE',
                    text2:'RED GLOBAL',
                }
            }
        },
        contactanos:{
            banner:'',
            text1:'¡CONTÁCTANOS!',
            text2:'CONOCE MÁS SOBRE NUESTROS SERVICIOS',
            textBtn:'COMUNÍCATE CON NUESTRO EQUIPO',
        }
    },
    politicas:{
        id: 'politicas',
        name: 'POLÍTICAS, CÓDIGOS Y REGLAMENTOS',
        url: '',
    },
    enfoque:{
        id:'Enfoque',
        title:'NUESTRO ENFOQUE',
        subTitle:'SOLUCIONES APLICABLES \nA CUALQUIER INDUSTRIA',
        img:'banner_2_desktop.png',
        url: '/empresa/nosotros',
        p:'Somos una empresa comprometida con la responsabilidad social y la sostenibilidad la integridad y la excelencia operacional nos permiten ofrecer servicios de alta calidad a nuestros clientes y contribuir al desarrollo del país. Contamos con experiencia en proyectos de gran envergadura a nivel nacional e internacional, lo que nos permite ofrecer confianza, agilidad y seguridad en servicios de Inspeccion, supervision, interventoria, certificacion, y ensayos. Además, ofrecemos el desarrollo de soluciones digitales a medida de nuestros clientes para agilizar la toma de decisiones y ahorrar recursos. Basamos nuestros procesos en estándares técnicos globales y contamos con profesionales con calificaciones técnicas internacionales.',
        cards:{
            card1:{
                text1:'AÑOS',
                text2:'EXPERIENCIA',
                count:12,
            },
            card2:{
                text1:'COLABORADORES',
                text2:'CAPACIDAD LOCAL',
                count:250,
            },
            card3:{
                text1:'SOPORTE',
                text2:'RED GLOBAL',
                count:'',
            }
        }
    }
}]