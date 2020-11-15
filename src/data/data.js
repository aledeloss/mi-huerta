export let jsonData = {
    "acelga": {
            "id": 1,
            "distribución": {
                "distancia entre plantas": [15, 20],        
                "distancia entre lineas": [50, 70]        
            },
            "fecha de siembra": [1, 2, 3, 4, 5, 7, 8, 9, 10, 11],
            "días a cosecha": [60, 80],
            "asociar con": [],
            "rotar con": [],
            "tolera sombra": true,
            "img": {
                "src": 'GarlicImg',
                "alt": 'Garlic icon.'
            }
    },    
    "ajo": {
        "id": 2,
        "distribución": {
            "distancia entre plantas": [10, 15],        
            "distancia entre lineas": [35, 45]        
        },
        "fecha de siembra": [2, 3, 4],
        "días a cosecha": [250, 270],
        "asociar con": [1],
        "rotar con": [],
        "tolera sombra": false,
        "img": {
            "src": 'GarlicImg',
            "alt": 'Garlic icon.'
        }
    },
    
    "albahaca": {
        "id": 3,
        "distribución": {
            "distancia entre plantas": [20, 25],        
            "distancia entre lineas": [40, 50]        
        },
        "fecha de siembra": [7, 8, 9, 10],
        "días a cosecha": [250, 270],
        "asociar con": [],
        "rotar con": [],
        "tolera sombra": true,
        "img": {
            "src": 'GarlicImg',
            "alt": 'Garlic icon.'
        },
        "consejo": "Si plantás en agosto, que sea en almácigo porque todavía hay heladas."
    }
}