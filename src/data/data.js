// Images imports

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
            src: 'chard',
            alt: 'Ícono de acelga'
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
            src: '018-garlic',
            alt: 'Ícono de ajo'
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
            src: 'basil',
            alt: 'Ícono de albahaca'
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
            src: '',
            alt: 'Ícono de apio'
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
            src: 'peas',
            alt: 'Ícono de arvejas'
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
            src: '031-sweet potato',
            alt: 'Ícono de batata'
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
            src: '006-eggplant',
            alt: 'Ícono de berenjena'
        }
    },
    {
        name: 'Brócoli',
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
            src: '017-broccoli',
            alt: 'Ícono de brócoli'
        }
    },
    {
        name: 'Coliflor',
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
            src: '015-cauliflower',
            alt: 'Ícono de coliflor'
        }
    },
    {
        name: 'Cebolla',
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
            src: '036-onion',
            alt: 'Ícono de cebolla'
        }
    },
    {
        name: 'Cebolla de verdeo',
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
            src: 'green-onion',
            alt: 'Ícono de cebolla de verdeo'
        }
    },
    {
        name: 'Chaucha',
        sowing: [2, 3, 4, 6, 9, 10, 11],
        harvest: {
            from: 90,
            to: 120
        },
        design: {
            plantsSpacing: {
                from: 20,
                to: 30
            },
            rowsSpacing: {
                from: 70,
                to: 80
            },
            associate: ['maíz', 'hojas', 'bulbos', 'pimientos', 'berenjenas'],
            rotate: ['frutos', 'bulbos', 'raíces'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: 'green-beans',
            alt: 'Ícono de chaucha'
        }
    },
    {
        name: 'Choclo',
        sowing: [0, 7, 8, 9, 10, 11],
        harvest: {
            from: 100,
            to: 130
        },
        design: {
            plantsSpacing: {
                from: 30,
                to: 35
            },
            rowsSpacing: {
                from: 70,
                to: 80
            },
            associate: ['batata', 'maní', 'poroto', 'chacra de verano'],
            rotate: ['chacra de invierno', 'hojas', 'raíces'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: '003-corn',
            alt: 'Ícono de choclo'
        }
    },
    {
        name: 'Espárrago',
        sowing: [7, 8],
        harvest: {
            from: 1460,
            to: 1490
            // Consultar fecha de cierre.
        },
        design: {
            plantsSpacing: {
                from: 70,
                to: 80
            },
            rowsSpacing: {
                from: 35,
                to: 45
            },
            associate: ['maíz', 'hojas', 'bulbos', 'pimientos', 'berenjenas'],
            rotate: ['frutos', 'bulbos', 'raíces'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: '021-asparagus',
            alt: 'Ícono de espárragos'
        }
    },
    {
        name: 'Espinaca',
        sowing: [0, 1, 2, 3, 4, 5],
        harvest: {
            from: 80,
            to: 90
        },
        design: {
            plantsSpacing: {
                from: 5,
                to: 10
            },
            rowsSpacing: {
                from: 35,
                to: 45
            },
            associate: ['repollo', 'coliflor', 'brócoli', 'remolacha'],
            rotate: ['bulbos', 'raíces', 'legumbres'],
            shadow: 'sí',
        },
        difficulty: 'moderada, fácil',
        img: {
            src: '009-spinach',
            alt: 'Ícono de espinaca'
        }
    },
    {
        name: 'Frutilla',
        sowing: [3, 4],
        harvest: {
            from: 150,
            to: 180
        },
        design: {
            plantsSpacing: {
                from: 25,
                to: 30
            },
            rowsSpacing: {
                from: 40,
                to: 45
            },
            associate: ['hojas'],
            rotate: ['bulbos', 'raíces', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'difícil',
        img: {
            src: '024-strawberry',
            alt: 'Ícono de frutilla'
        }
    },
    {
        name: 'Haba',
        sowing: [8, 9, 10, 11],
        harvest: {
            from: 180,
            to: 200
        },
        design: {
            plantsSpacing: {
                from: 25,
                to: 30
            },
            rowsSpacing: {
                from: 70,
                to: 80
            },
            associate: ['chacra de invierno', 'rabanito', 'lechuga'],
            rotate: ['chacra de verano', 'hojas', 'frutos'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: '024-strawberry',
            alt: 'Ícono de frutilla'
        }
    },
    {
        name: 'Hinojo',
        sowing: [0, 1, 2, 3],
        harvest: {
            from: 150,
            to: 180
        },
        design: {
            plantsSpacing: {
                from: 30,
                to: 35
            },
            rowsSpacing: {
                from: 60,
                to: 70
            },
            associate: ['lechuga', 'acelga', 'bulbos'],
            rotate: ['bulbos', 'raíces', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'difícil',
        img: {
            src: 'fennel',
            alt: 'Ícono de hinojo'
        }
    },
    {
        name: 'Lechuga',
        sowing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        harvest: {
            from: 60,
            to: 90
        },
        design: {
            plantsSpacing: {
                from: 15,
                to: 20
            },
            rowsSpacing: {
                from: 25,
                to: 40
            },
            associate: ['bulbos', 'raíces', 'coles', 'acelga'],
            rotate: ['bulbos', 'raíces', 'legumbres'],
            shadow: 'sí',
        },
        difficulty: 'fácil',
        img: {
            src: '002-lettuce',
            alt: 'Ícono de lechuga'
        }
    },
    {
        name: 'Melón',
        sowing: [7, 8, 10],
        harvest: {
            from: 130,
            to: 180
        },
        design: {
            plantsSpacing: {
                from: 80,
                to: 90
            },
            rowsSpacing: {
                from: 120,
                to: 180
            },
            associate: ['chacra de verano', 'cercos'],
            rotate: ['chacra de invierno', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: '016-melon',
            alt: 'Ícono de melón'
        }
    },
    {
        name: 'Sandía',
        sowing: [7, 8, 10],
        harvest: {
            from: 130,
            to: 180
        },
        design: {
            plantsSpacing: {
                from: 80,
                to: 90
            },
            rowsSpacing: {
                from: 120,
                to: 180
            },
            associate: ['chacra de verano', 'cercos'],
            rotate: ['chacra de invierno', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: 'watermelon',
            alt: 'Ícono de sandía'
        }
    },
    {
        name: 'Papa',
        sowing: [0, 1, 7, 8],
        harvest: {
            from: 120,
            to: 150
        },
        design: {
            plantsSpacing: {
                from: 20,
                to: 30
            },
            rowsSpacing: {
                from: 70,
                to: 75
            },
            associate: ['lechuga', 'cardo blanco', 'alcaucil'],
            rotate: ['bulbos', 'raíces', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'difícil',
        img: {
            src: '006-potato',
            alt: 'Ícono de papa'
        }
    },
    {
        name: 'Pepino',
        sowing: [7, 8, 9, 10],
        harvest: {
            from: 100,
            to: 130
        },
        design: {
            plantsSpacing: {
                from: '-',
                to: '-'
            },
            rowsSpacing: {
                from: 30,
                to: 40
            },
            associate: ['chacra de verano'],
            rotate: ['chacra de invierno', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: '007-cucumber',
            alt: 'Ícono de pepino'
        }
    },
    {
        name: 'Pimiento',
        sowing: [6, 7, 8],
        harvest: {
            from: 180,
            to: 200
        },
        design: {
            plantsSpacing: {
                from: 40,
                to: 45
            },
            rowsSpacing: {
                from: 70,
                to: 80
            },
            associate: ['zanahora', 'rabanito', 'albahaca'],
            rotate: ['bulbos', 'hojas', 'legumbres'],
            shadow: 'sí',
        },
        difficulty: 'moderada',
        img: {
            src: '30-green chili pepper',
            alt: 'Ícono de pimiento'
        }
    },
    {
        name: 'Puerro',
        sowing: [1, 2, 3, 7, 8],
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
                to: 45
            },
            associate: ['zanahora', 'apio', 'lechuga'],
            rotate: ['bulbos', 'hojas', 'legumbres'],
            shadow: 'sí',
        },
        difficulty: 'fácil',
        img: {
            src: 'leek',
            alt: 'Ícono de pimiento'
        }
    },
    {
        name: 'Rabanito',
        sowing: [1, 2, 3, 4, 5, 8, 9, 10, 11],
        harvest: {
            from: 30,
            to: 40
        },
        design: {
            plantsSpacing: {
                from: 5,
                to: 5
            },
            rowsSpacing: {
                from: 30,
                to: 40
            },
            associate: ['taco de reina', 'ajenjo', 'zanahoria', 'hojas', 'arvejas'],
            rotate: ['raíces', 'hojas', 'legumbres'],
            shadow: 'sí',
        },
        difficulty: 'fácil',
        img: {
            src: '028-radishes',
            alt: 'Ícono de rabanito'
        }
    },
    {
        name: 'Radicheta',
        sowing: [1, 2, 3, 4, 7, 8, 9],
        harvest: {
            from: 80,
            to: 100
        },
        design: {
            plantsSpacing: {
                from: 'chorrillo apretado',
                to: '-'
            },
            rowsSpacing: {
                from: 30,
                to: 35
            },
            associate: ['coles', 'bulbos', 'raíces'],
            rotate: ['bulbos', 'hojas', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'moderada',
        img: {
            src: '',
            alt: 'Ícono de radicheta'
        }
    },
    {
        name: 'Remolacha',
        sowing: [2, 3, 4, 5, 7, 8, 9, 10, 11],
        harvest: {
            from: 100,
            to: 130
        },
        design: {
            plantsSpacing: {
                from: 8,
                to: 10
            },
            rowsSpacing: {
                from: 35,
                to: 45
            },
            associate: ['repollo', 'coliflor', 'lechuga', 'ajo'],
            rotate: ['bulbos', 'hojas', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'moderada',
        img: {
            src: 'beet',
            alt: 'Ícono de remolacha'
        }
    },
    {
        name: 'Repollo',
        sowing: [1, 2, 3, 8, 9, 10],
        harvest: {
            from: 120,
            to: 150
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
            associate: ['zanahora', 'romero', 'salvia', 'taco de reina', 'ajenjo', 'lechuga'],
            rotate: ['bulbos', 'hojas', 'raíces'],
            shadow: 'no',
        },
        difficulty: 'moderada',
        img: {
            src: 'cabbage',
            alt: 'Ícono de repollo'
        }
    },
    {
        name: 'Rúcula',
        sowing: [7, 8, 9],
        harvest: {
            from: 60,
            to: 80
        },
        design: {
            plantsSpacing: {
                from: 'chorrillo apretado',
                to: '-'
            },
            rowsSpacing: {
                from: 30,
                to: 40
            },
            associate: ['zanahora', 'taco de reina', 'ajenjo', 'apio', 'diente de león'],
            rotate: ['bulbos', 'raíces', 'raíces'],
            shadow: 'sí',
        },
        difficulty: 'fácil',
        img: {
            src: 'arugula',
            alt: 'Ícono de rúcula'
        }
    },
    {
        name: 'Tomate',
        sowing: [6, 7, 8, 9],
        harvest: {
            from: 120,
            to: 150
        },
        design: {
            plantsSpacing: {
                from: 20,
                to: 40
            },
            rowsSpacing: {
                from: 80,
                to: 90
            },
            associate: ['tabaco', 'repollo', 'borraja', 'copete', 'albahaca','hojas'],
            rotate: ['bulbos', 'hojas', 'raíces'],
            shadow: 'no',
        },
        difficulty: 'moderada',
        img: {
            src: 'tomato',
            alt: 'Ícono de tomate'
        }
    },
    {
        name: 'Zanahoria',
        sowing: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        harvest: {
            from: 150,
            to: 180
        },
        design: {
            plantsSpacing: {
                from: 'chorrillo ralo',
                to: '-'
            },
            rowsSpacing: {
                from: 40,
                to: 45
            },
            associate: ['repollo', 'romero', 'salvia', 'cebolla', 'ajenjo', 'puerro', 'lechuga'],
            rotate: ['bulbos', 'hojas', 'raíces'],
            shadow: 'no',
        },
        difficulty: 'moderada',
        img: {
            src: 'carrot',
            alt: 'Ícono de zanahoria'
        }
    },
    {
        name: 'Zapallo',
        sowing: [7, 8, 9, 10],
        harvest: {
            from: 150,
            to: 180
        },
        design: {
            plantsSpacing: {
                from: 100,
                to: 150
            },
            rowsSpacing: {
                from: 200,
                to: 250
            },
            associate: ['taco de reina', 'chacra de verano'],
            rotate: ['chacra de invierno', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: '008-pumpkin',
            alt: 'Ícono de calabaza'
        }
    },
    {
        name: 'Zapallito',
        sowing: [0, 7, 8, 9, 10, 11],
        harvest: {
            from: 90,
            to: 100
        },
        design: {
            plantsSpacing: {
                from: 80,
                to: 100
            },
            rowsSpacing: {
                from: 80,
                to: 100
            },
            associate: ['taco de reina', 'maíz (surco)'],
            rotate: ['chacra de invierno', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: '',
            alt: 'Ícono de zapallito'
        }
    },
    {
        name: 'Zuccini',
        sowing: [0, 7, 8, 9, 10, 11],
        harvest: {
            from: 90,
            to: 100
        },
        design: {
            plantsSpacing: {
                from: 80,
                to: 100
            },
            rowsSpacing: {
                from: 80,
                to: 100
            },
            associate: ['taco de reina', 'maíz (surco)'],
            rotate: ['chacra de invierno', 'legumbres'],
            shadow: 'no',
        },
        difficulty: 'fácil',
        img: {
            src: 'zucchini',
            alt: 'Ícono de zuccini'
        }
    }
]

export default data;