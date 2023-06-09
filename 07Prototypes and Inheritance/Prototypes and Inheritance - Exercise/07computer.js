function createComputerHierarchy() {
    class Builder {
      constructor(manufacturer) {
        this.manufacturer = manufacturer;
        if (this.constructor === Builder) {
          throw new Error("Abstract classes can't be instantiated.");
        }
      }
    }
  
    class Keyboard extends Builder {
      constructor(manufacturer, responseTime) {
        super(manufacturer);
        this.responseTime = responseTime;
      }
    }
  
    class Monitor extends Builder {
      constructor(manufacturer, width, height) {
        super(manufacturer);
        this.width = width;
        this.height = height;
      }
    }
  
    class Battery extends Builder {
      constructor(manufacturer, expectedLife) {
        super(manufacturer);
        this.expectedLife = expectedLife;
      }
    }
  
    class Computer extends Builder {
      constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        if (new.target === Computer) {
          throw new Error("Abstract classes can't be instantiated.");
        }
        super(manufacturer);
        this.processorSpeed = +processorSpeed;
        this.ram = +ram;
        this.hardDiskSpace = +hardDiskSpace;
      }
    }
  
    class Laptop extends Computer {
      constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.weight = +weight;
        this.color = color;
        this.battery = battery;
      }
  
      get battery() {
        return this._battery;
      }
  
      set battery(input) {
        if (!(input instanceof Battery)) {
          throw new TypeError();
        }
        this._battery = input;
      }
    }
  
    class Desktop extends Computer {
      constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.keyboard = keyboard;
        this.monitor = monitor;
      }
  
      get keyboard() {
        return this._keyboard;
      }
  
      set keyboard(input) {
        if (!(input instanceof Keyboard)) {
          throw new TypeError();
        }
        this._keyboard = input;
      }
  
      get monitor() {
        return this._monitor;
      }
  
      set monitor(input) {
        if (!(input instanceof Monitor)) {
          throw new TypeError();
        }
        this._monitor = input;
      }
    }
    return { Battery, Keyboard, Monitor, Computer, Laptop, Desktop };
  }
  
  let classes = createComputerHierarchy();
  let Computer = classes.Computer;
  let Laptop = classes.Laptop;
  let Desktop = classes.Desktop;
  let Monitor = classes.Monitor;
  let Battery = classes.Battery;
  let Keyboard = classes.Keyboard;
  let battery = new Battery('Energy', 3);
  console.log(battery);
  let laptop = new Laptop('Hewlett Packard', 2.4, 4, 0.5, 3.12, 'Silver', battery);
  console.log(laptop);