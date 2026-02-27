class Singleton {
    private static instance: Singleton

    private constructor() {} // new Singleton() is not allowed

    public static getInstance(): Singleton {
        if (!Singleton.instance) Singleton.instance = new Singleton()
        return Singleton.instance // always return the same instance
    }

}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2) // true