export class Orderdummy{
    orderId:Number
    customerId:Number
    amount:Number

    constructor(oid: Number, cid: Number, amt:Number){
      this.orderId = oid;
      this.customerId = cid;
      this.amount = amt;
    }
  }
class Items{
    ItemCode: String
    Quantity: Number
  }
export class Order{
  Id: number
  Custid: number
  OrderDate: String
  OrderDetails: Items[]
  DeliveryDate: String
  PaymentDate: String
  PaymentType: String
  Completed: Boolean
}
