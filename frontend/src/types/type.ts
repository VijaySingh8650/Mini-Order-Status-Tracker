export type TypeResponseOfOrders = {
    id: number;
    orderId: string;
    customerName: string;
    status:OrderStatusEnum;
    createdAt: Date;
}

enum OrderStatusEnum {
    Pending,
    Accepted,
    Shipped,
    Delivered,
    Cancelled
  }


