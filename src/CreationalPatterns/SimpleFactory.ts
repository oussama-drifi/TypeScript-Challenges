interface PaymentProcessor {
    charge(amount: number): void
}
type TypeMethod = 'paypal' | 'credit card'



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


class PaymentFactory {
    static createPaymentMethod(method: TypeMethod) {
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
const processor = PaymentFactory.createPaymentMethod('paypal')
processor.charge(100)