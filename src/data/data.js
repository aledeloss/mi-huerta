// Images imports
import GarlicImg from '../assets/vegetables-imgs/018-garlic.svg'

const data = [
    {
        name: 'Acelga',
        sowing: [2, 3, 4, 5, 7, 8, 9, 10, 11],
        harvest: {
            from: 60,
            to: 80            
        },
        design: {
            plantsSpacing: {
                from: 15,
                to: 20
            },
            rowsSpacing: {
                from: 50,
                to: 70
            },
            associate: ['maíz', 'lechuga', 'escarola'],
            rotate: ['legumbres'],
            shadow: 'sí',
        },
        difficulty: 'fácil',
        img: {
            src: GarlicImg,
            alt: 'Garlic icon.'
        }
    },
    {
        name: 'Ajo',
        sowing: [2, 3, 4],
        harvest: {
            from: 250,
            to: 270
        },
        design: {
            plantsSpacing: {
                from: 10,
                to: 15
            },
            rowsSpacing: {
                from: 35,
                to: 45
            },
            associate: ['lechuga', 'escarola', 'acelga'],
            rotate: ['legumbres', 'hojas', 'raíces'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: GarlicImg,
            alt: 'Garlic icon.'
        }
    },
    {
        name: 'Albahaca',
        sowing: [7, 8, 9, 10],
        harvest: {
            from: 80, 
            to: 100
        },
        design: {
            plantsSpacing: {
                from: 20,
                to: 25
            },
            rowsSpacing: {
                from: 45,
                to: 50
            },
            associate: ['tomate', 'zanahoria', 'lechuga', 'rabanito'],
            rotate: ['bulbos', 'raíces', 'legumbres'],
            shadow: 'sí',
        },
        difficulty: 'fácil',
        img: {
            src: GarlicImg,
            alt: 'Garlic icon.'
        }
    },
    {
        name: 'Apio',
        sowing: [0, 1, 2, 8, 9, 10, 11],
        harvest: {
            from: 120,
            to: 150
        },
        design: {
            plantsSpacing: {
                from: 20,
                to: 25
            },
            rowsSpacing: {
                from: 45,
                to: 50
            },
            associate: ['raíces', 'bulbos'],
            rotate: ['raíces', 'bulbos', 'legumbres'],
            shadow: 'sí',
        },
        difficulty: 'difícil',
        img: {
            src: GarlicImg,
            alt: 'Garlic icon.'
        }
    },
    {
        name: 'Arvejas',
        sowing: [2, 3, 4, 5, 6, 7],
        harvest: {
            from: 120, 
            to: 150
        },
        design: {
            plantsSpacing: {
                from: 5,
                to: 10
            },
            rowsSpacing: {
                from: 40,
                to: 50
            },
            associate: ['repollo', 'ajo', 'zanahoria'],
            rotate: ['frutos', 'chacra de verano', 'bulbos', 'raíces'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: GarlicImg,
            alt: 'Garlic icon.'
        }
    },
    {
        name: 'Batata',
        sowing: [6, 7],
        harvest: {
            from: 250,
            to: 270
        },
        design: {
            plantsSpacing: {
                from: 30,
                to: 40
            },
            rowsSpacing: {
                from: 80,
                to: 90
            },
            associate: ['choclo', 'chacra de verano'],
            rotate: ['hortalizas', 'ajo', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: GarlicImg,
            alt: 'Garlic icon.'
        }
    },
    {
        name: 'Berenjena',
        sowing: [6, 7, 8, 9],
        harvest: {
            from: 150,
            to: 180
        },
        design: {
            plantsSpacing: {
                from: 40,
                to: 50
            },
            rowsSpacing: {
                from: 70,
                to: 80
            },
            associate: ['poroto', 'lechuga copete'],
            rotate: ['hortalizas asociadas'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: GarlicImg,
            alt: 'Garlic icon.'
        }
    },
    {
        name: 'Brócoli y coliflor',
        sowing: [1, 2, 3, 8, 9],
        harvest: {
            from: 250,
            to: 270
        },
        design: {
            plantsSpacing: {
                from: 40,
                to: 50
            },
            rowsSpacing: {
                from: 70,
                to: 80
            },
            associate: ['taco de reina', 'ajenjo', 'remolacha'],
            rotate: ['bulbos', 'raíces', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'difícil',
        img: {
            src: GarlicImg,
            alt: 'Garlic icon.'
        }
    },
    {
        name: 'Cebolla y cebolla de verdeo',
        sowing: [1, 2, 3],
        harvest: {
            from: 250,
            to: 270
        },
        design: {
            plantsSpacing: {
                from: 10,
                to: 15
            },
            rowsSpacing: {
                from: 35,
                to: 45
            },
            associate: ['zanahoria', 'lechuga', 'repollo', 'remolacha'],
            rotate: ['raíces', 'hojas', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: GarlicImg,
            alt: 'Garlic icon.'
        }
    },
]

export default data;