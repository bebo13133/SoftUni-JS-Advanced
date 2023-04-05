function solve(){

    let health = 100
    let staminaOrmana = 100
    const create = {
        mage:(name) => {
            return (object = {
                name,
                health,
                mana: staminaOrmana,
                cast(spell) {
                    this.mana--;
                    console.log(`${name} cast ${spell}`)
                }
            })
        },
         fighter: (name)=>{
            return (object = {
                name,
                health,
                stamina:staminaOrmana,
                fight(){
                    this.stamina--
                    console.log(`${this.name} slashes at the foe!`)
                }
            })
         }
    
    }
    return create
    }