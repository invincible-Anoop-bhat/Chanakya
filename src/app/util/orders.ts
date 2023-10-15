export class Order{
    orderId:Number
    customerId:Number
    amount:Number

    constructor(oid: Number, cid: Number, amt:Number){
      this.orderId = oid;
      this.customerId = cid;
      this.amount = amt;
    }
  }