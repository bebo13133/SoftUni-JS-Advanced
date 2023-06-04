function attachEventsListeners() {
    function attachEventsListeners() {

        const inputDistance = document.getElementById('inputDistance');
        const outputDistance = document.getElementById('outputDistance');
    
        const inputUnits = document.getElementById('inputUnits');
        const outputUnits = document.getElementById('outputUnits');
    
        const convertBtn = document.getElementById('convert');
        convertBtn.addEventListener('click', onClick);
    
        function onClick() {
    
            let convert = Number(inputDistance.value);
            let result = 0;
    
            if (inputUnits.value === 'km') {
                convert *= 1000;
    
            } else if (inputUnits.value === 'm') {
                convert = convert;
    
            } else if (inputUnits.value === 'cm') {
                convert *= 0.01;
    
            } else if (inputUnits.value === 'mm') {
                convert *= 0.001;
    
            } else if (inputUnits.value === 'mi') {
                convert *= 1609.34;
    
            } else if (inputUnits.value === 'yrd') {
                convert *= 0.9144;
    
            } else if (inputUnits.value === 'ft') {
                convert *= 0.3048;
    
            } else if (inputUnits.value === 'in') {
                convert *= 0.0254;
            }
    
            if (outputUnits.value === 'km') {
                result = convert / 1000;
    
            } else if (outputUnits.value === 'm') {
                result = convert;
    
            } else if (outputUnits.value === 'cm') {
                result = convert / 0.01;
    
            } else if (outputUnits.value === 'mm') {
                result = convert / 0.001;
    
            } else if (outputUnits.value === 'mi') {
                result = convert / 1609.34;
    
            } else if (outputUnits.value === 'yrd') {
                result = convert / 0.9144;
    
            } else if (outputUnits.value === 'ft') {
                result = convert / 0.3048;
    
            } else if (outputUnits.value === 'in') {
                result = convert / 0.0254;
            }
            outputDistance.value = result;
        }
    }
}