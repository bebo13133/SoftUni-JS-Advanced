function juiceFlavors(data) {

    const juices = {}
    const bottles = {}

    data.forEach(line => {
        const [juiceName, quantity] = line.split(" => ")
        if (!juices[juiceName]) juices[juiceName] = 0;
        juices[juiceName] += Number(quantity);
        if (juices[juiceName] >= 1000) {
            let bottle = Math.floor(juices[juiceName] / 1000)
            if (!bottles[juiceName])  bottles[juiceName] = 0;
            bottles[juiceName] += bottle
            juices[juiceName] -= bottle * 1000
        }

    });
for(const [namer,bottle] of Object.entries(bottles)){
    console.log(`${namer} => ${bottle}`)
}
}
juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)
