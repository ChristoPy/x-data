import XData from "./main"

interface User {
  name: string;
  age: string;
}

const user = XData<User>({
  name: 'John',
  age: '30',
});
const listener = (value: string) => {
  console.log(value)
}
user.subscribe('two', listener)
user.two = 3
user.two = 4
user.unsubscribe(listener)
user.two = 5
