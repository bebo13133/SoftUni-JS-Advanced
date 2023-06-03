function extendetClass(classExt){
    classExt.prototype.species="Human"
    classExt.prototype.toSpeciesString = function(){
return `I am a ${this.species}. ${this.toString()}`
    }
}