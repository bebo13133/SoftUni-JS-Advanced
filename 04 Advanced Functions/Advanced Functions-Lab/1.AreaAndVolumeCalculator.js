function areaCalculator (areaInput,volInput, input){

   const dataInput = JSON.parse(input).map(element=>({
         area: areaInput.call(element),
         volume: volInput.call(element),
    }));
    return dataInput
}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}


console.table(areaCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ))