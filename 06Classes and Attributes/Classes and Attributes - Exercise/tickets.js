function tickets(data, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = data.reduce((a, el) => {
        let [destination, price, status] = el.split("|")
        price = Number(price)
        a.push(new Ticket(destination, price, status))
        return a;
    }, []);

    const sortValid = (a,b) => {
        return criteria == 'price' ? a - b : a[criteria].localeCompare(b[criteria]);
      }
      return result.sort(sortValid);
    }
    // const sortValidation = (a, b) => {
    //     return criteria == 'price' ? a - b : a[criteria].localCompare(b[criteria])

    // }
    // return result.sort(sortValidation)

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination')