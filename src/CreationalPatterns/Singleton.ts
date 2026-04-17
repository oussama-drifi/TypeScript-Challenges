// ##################### Singleton Pattern #####################
// the sigleton pattern is useful when you need a global state across your entire application
// the pattern allows only one access point

class Database {
    private static instance: Database

    private constructor() {} // new Database() is not allowed

    public static getInstance(): Database {
        if (!Database.instance) Database.instance = new Database()
        return Database.instance // always return the same instance
    }
}

const instance1 = Database.getInstance();
const instance2 = Database.getInstance();
console.log(instance1 === instance2) // true

