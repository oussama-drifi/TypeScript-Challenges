interface Subject {
    registerObserver(listener: Observer): void
    unregisterObserver(listener: Observer): void
    notifyObservers(): void
    broadcastMessage(message: string): void
}

interface Observer {
    update(message: string): void
}

class RadioStation implements Subject {
    public name: string
    private message: string = ''
    private listeners: Array<Observer>

    constructor(name: string) {
        this.name = name
        this.listeners = []
    }

    registerObserver(listener: Observer): void {
        this.listeners.push(listener)
    }
    unregisterObserver(listener: Observer): void {
        this.listeners = this.listeners.filter(l => l !== listener)
    }

    notifyObservers(): void {
        this.listeners.forEach(listener => listener.update(this.message))
    }
    broadcastMessage(message: string): void {
        this.message = message
        this.notifyObservers()
    }
}


class Listener implements Observer {

    private name: string
    private messages: Array<string>

    constructor(name: string) {
        this.name = name
        this.messages = []
    }

    update(message: string): void {
        this.messages.push(message)
        console.log(`${this.name} got the message ${message}`)
    }

    showMessages(): void {
        this.messages.forEach(m => console.log(m))
    }
}