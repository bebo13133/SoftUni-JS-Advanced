class Hex {
    constructor(value) {
        this.value = value
    }

    toString() { return `0x${this.value.toString(16).toUpperCase()}` }
    plus(data) {
        if(typeof data === "object"){ 
            let result = this.value + data.value
            return new Hex(result)
           }else{ 
          let result = this.value + data
            return new Hex(result)
           }
    }
    minus(data) {
        if(typeof data === "object"){ 
            let result = this.value - data.value
            return new Hex(result)
           }else{ 
          let result = this.value - data
            return new Hex(result)
           }
    }
    parse(data) {
        return parseInt(data, 16)
    }

}
let FF = new Hex(255); console.log(FF.toString()); FF.valueOf() + 1 == 256; let a = new Hex(10);
let b = new Hex(5); console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
