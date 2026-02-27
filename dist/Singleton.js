"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    static instance;
    constructor() { } // new Singleton() is not allowed
    static getInstance() {
        if (!Singleton.instance)
            Singleton.instance = new Singleton();
        return Singleton.instance; // always return the same instance
    }
}
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2);
//# sourceMappingURL=Singleton.js.map