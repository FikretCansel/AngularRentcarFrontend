export interface CreditCardModel {
    userId: number,
    cardHolderName: string,
    cardNumber: string,
    cvv: number,
    validThruMonth: number,
    validThruYear: number
}