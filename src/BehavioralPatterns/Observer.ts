// ================= Observer Pattern ======================
// there are 2 components in this pattern: Subject & Observer
// the Subject is broadcasting (publisher)
// the observer is listening (subscriber)

interface Subject {
    name: string
    registerObserver(listener: Observer): void
    unregisterObserver(listener: Observer): void
    notifyObservers(): void
    broadcastMessage(message: string): void
    getMessage(): string
}

interface Observer {
    id: number
    name: string
    update(subject: Subject): void
}

interface Message {
    id: number
    publisher: string
    content: string
}

class RadioStation implements Subject {
    public name: string
    private message: string = ''
    private listeners: Array<Observer> = []
    
    getMessage() : string {
        return this.message
    }
    
    constructor(name: string) {
        this.name = name
    }

    registerObserver(listener: Observer): void {
        this.listeners.push(listener)
    }
    
    unregisterObserver(listener: Observer): void {
        // assuming the there will be no 2 listeners created at the same millisecond
        this.listeners = this.listeners.filter(l => l.id !== listener.id)
        console.log(`===== unregistered "${listener.name}" from ##${this.name}##`)
    }

    notifyObservers(): void {
        this.listeners.forEach(listener => listener.update(this))
    }

    broadcastMessage(message: string): void {
        this.message = message
        this.notifyObservers()
    }
}


class Listener implements Observer {

    public id: number
    public name: string
    private messages: Array<Message>

    constructor(name: string) {
        this.id = Date.now()
        this.name = name
        this.messages = []
    }

    update(subject: Subject): void {
            this.messages.push({
                id: Date.now(),
                publisher: subject.name,
                content: subject.getMessage()
            })
            console.log(`${this.name} got the message "${subject.getMessage()}" from ##${subject.name}##`)
    }

    showMessages(): void {
        this.messages.forEach(m => console.log(m))
    }
}

// usage
// #### observers
const observer1 = new Listener("alex");
const observer2 = new Listener("alice");
const observer3 = new Listener("jona");
// #### subjects
const radioStation1 = new RadioStation("new mexico national station");
radioStation1.registerObserver(observer1);
radioStation1.registerObserver(observer2);
radioStation1.registerObserver(observer3);

const radioStation2 = new RadioStation("nevada national station");
radioStation2.registerObserver(observer1);
radioStation2.registerObserver(observer3);

const radioStation3 = new RadioStation("colorado national station");
radioStation3.registerObserver(observer2);

radioStation1.broadcastMessage("it will rain tomorrow");
radioStation2.broadcastMessage("a new song is out");
radioStation3.broadcastMessage("enjoy your weekend");

radioStation1.unregisterObserver(observer1)
radioStation3.unregisterObserver(observer2)