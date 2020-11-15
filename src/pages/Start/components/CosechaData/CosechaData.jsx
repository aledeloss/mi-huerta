
    const siembra = new Date(Date.now());

    function calcularCosechaInicio(planta) { 
        let cosechaInicio = siembra + planta.cosecha[0] * 86400;
    }

    function calcularCosechaFin(planta) {
        let cosechaFin = siembra + planta.cosecha[1] * 86400;
    }

    calcularCosechaInicio(planta);
    calcularCosechaFin(planta);