interface PaymentProcessor {
    charge(amount: number): void
}

class PaypalPayment implements PaymentProcessor {
    charge(amount: number): void {
        console.log(`charged ${amount} with paypal`)
    }
}
class CreditCardPayment implements PaymentProcessor {
    charge(amount: number): void {
        console.log(`charged ${amount} with credit card`)
    }
}

type TypeMethod = 'paypal' | 'credit card'

class PaymentFactory {
    static create_payment_method(method: TypeMethod) {
        switch (method) {
            case 'paypal':
                return new PaypalPayment()
            case 'credit card':
                return new CreditCardPayment()
            default: 
                throw new Error("Unavailable payment method")
        }
    }
}

// usage
const processor = PaymentFactory.create_payment_method('paypal')
processor.charge(100)