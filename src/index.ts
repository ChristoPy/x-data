import XData, { Store } from "./main"

interface User extends Store {
  name: string;
  age: string;
}

const user = XData({
  name: 'John',
  age: '30',
}) as User;
const listener = (value: string) => {
  console.log(value)
}
user.subscribe('two', listener)
user.two = 3
user.two = 4
user.unsubscribe(listener)
user.two = 5
