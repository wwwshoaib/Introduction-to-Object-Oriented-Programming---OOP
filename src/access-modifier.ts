/**
 * bKash Account
 * balance
 * check
 * phone
 * history: send money, cash in, cash out
 */
//access modifier: public, private, protected
class bKashAccount {
    public phone: string
    private pin: number
    private balance: number
    protected history: any = []

    constructor(phone: string, pin: number, balance: number) {
        this.phone = phone
        this.pin = pin
        this.balance = balance

    }
    checkBalance(pin: number) {
        if(this.pin === pin) {
            return `You balance is Tk. ${this.balance}`
        }

        return `Your Pin is Wrong !`
    }
}


const myAccount = new bKashAccount('017441217902', 1234, 500);
console.log(myAccount.checkBalance(123));