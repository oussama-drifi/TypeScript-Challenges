// Product interface

interface Notification {
    send(message: string): void
}

// Concrete Products

class EmailNotification implements Notification {
    constructor(private recipient: string) {}

    send(message: string): void {
        console.log(`Email → ${this.recipient}: "${message}"`)
    }
}

class SMSNotification implements Notification {
    constructor(private phoneNumber: string) {}

    send(message: string): void {
        console.log(`SMS → ${this.phoneNumber}: "${message}"`)
    }
}

class PushNotification implements Notification {
    constructor(private deviceToken: string) {}

    send(message: string): void {
        console.log(`Push → device(${this.deviceToken}): "${message}"`)
    }
}

// Creator (abstract)
abstract class NotificationService {
    //the factory method — subclasses override it.
    abstract createNotification(): Notification

    // shared logic that uses whatever the subclass creates.
    // The base class never references a concrete product directly.
    notify(message: string): void {
        const notification = this.createNotification()
        notification.send(message)
    }
}

// Concrete Creators

class EmailNotificationService extends NotificationService {
    constructor(private recipient: string) {
        super()
    }

    createNotification(): Notification {
        return new EmailNotification(this.recipient)
    }
}

class SMSNotificationService extends NotificationService {
    constructor(private phoneNumber: string) {
        super()
    }

    createNotification(): Notification {
        return new SMSNotification(this.phoneNumber)
    }
}

class PushNotificationService extends NotificationService {
    constructor(private deviceToken: string) {
        super()
    }

    createNotification(): Notification {
        return new PushNotification(this.deviceToken)
    }
}

// usage
function alertUser(service: NotificationService, message: string): void {
    service.notify(message)
}

const emailService = new EmailNotificationService("oussama@gmail.com")
const smsService   = new SMSNotificationService("+212 7xxxxxxxx")
const pushService  = new PushNotificationService("abc123token")

alertUser(emailService, "Your order has shipped.")
alertUser(smsService,   "Your order has shipped.")
alertUser(pushService,  "Your order has shipped.")