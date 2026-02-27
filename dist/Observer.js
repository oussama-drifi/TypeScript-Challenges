"use strict";
// ================= Observer Pattern ======================
// there are 2 components in this pattern: Subject & Observer
// the Subject is broadcasting (publisher)
// the observer is listening (subscriber)
Object.defineProperty(exports, "__esModule", { value: true });
class RadioStation {
    name;
    message = '';
    listeners;
    getMessage() {
        return this.message;
    }
    constructor(name) {
        this.name = name;
        this.listeners = [];
    }
    registerObserver(listener) {
        this.listeners.push(listener);
    }
    unregisterObserver(listener) {
        this.listeners = this.listeners.filter(l => l.id !== listener.id);
        console.log(`===== unregistered "${listener.name}" from ##${this.name}##`);
    }
    notifyObservers() {
        this.listeners.forEach(listener => listener.update(this));
    }
    broadcastMessage(message) {
        this.message = message;
        this.notifyObservers();
    }
}
class Listener {
    id;
    name;
    messages;
    constructor(name) {
        this.id = Date.now();
        this.name = name;
        this.messages = [];
    }
    update(subject) {
        if (subject instanceof RadioStation) {
            this.messages.push({
                id: Date.now(),
                publisher: subject.name,
                content: subject.getMessage()
            });
            console.log(`${this.name} got the message "${subject.getMessage()}" from ##${subject.name}##`);
        }
    }
    showMessages() {
        this.messages.forEach(m => console.log(m));
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
radioStation1.unregisterObserver(observer1);
radioStation3.unregisterObserver(observer2);
//# sourceMappingURL=Observer.js.map