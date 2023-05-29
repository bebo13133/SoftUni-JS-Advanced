function solution() {

    let result = ''
    return {
        append: (txt) => result = result += txt,
        removeStart: (num) => result = result.substring(num),
        removeEnd : (n) => result = result.substring(0, result.length - n),
        print: () => console.log(result)
    }

}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
