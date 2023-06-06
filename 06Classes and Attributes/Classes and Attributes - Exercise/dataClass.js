class dataClass {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }

}
/*•	method (String)
•	uri (String)
•	version (String)
•	message (String)
•	response (String)
•	fulfilled (Boolean)
*/