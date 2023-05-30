function cars(input) {
    const data = {}
    const returnResult = {
        create: (name, inherit, parentName) => { data[name] = inherit ? Object.create(data[parentName]) : {} },
        set: (name, key, value) => { data[name][key] = value },
        print: (name) => {
            const entry = [];
            for (let key in data[name]) entry.push(`${key}:${data[name][key]}`);
            console.log(entry.join(','));
        },
    }
    const lines = input.forEach(line => {
        const [command, name, key, value] = line.split(" ");
        returnResult[command](name, key, value)
    });
}






cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])

