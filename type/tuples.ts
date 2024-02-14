const stuff: string[] = ["x", "y", "z"];
const myTuples: (number | string)[] = [1, 3, "4", "32", 3];
const color: [number, number, number] = [1, 2, 3];
type res = [number, string];
const goodRes: res = [200, "it's done"];
// tuples enums
enum Order {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
const myStatus = Order.DELIVERED;
function isDelivered(status: Order) {
  return status === Order.DELIVERED;
}
isDelivered(Order.DELIVERED);
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
