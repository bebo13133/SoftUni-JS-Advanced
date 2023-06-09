(function stringExtension() {
    String.prototype.ensureStart = function (str) { return !this.startsWith(str) ? str + this.toString() : `${this.toString()}` }

    String.prototype.ensureEnd = function (str) { return !this.endsWith(str) ? this.toString() + str : `${this.toString()}` };

    String.prototype.isEmpty = function () { return (this.length <= 0) ? true : false };
    String.prototype.truncate = function (n) {
        if (n < 3) return ".".repeat(n);

        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.toString().substring(0, n - 2).lastIndexOf(' ')

            if (lastIndex != -1) {
                return this.toString().substring(0, lastIndex) + "..."
            } else {
                return this.toString().substring(0, n - 3) + '...'
            }
        };
    };
    String.format = function (string, ...params) {
        params.forEach((x, i) => string = string.replace(`{${i}}`, x));
        return string
    };
})()

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('jumps {0} {1}', 'dog');




