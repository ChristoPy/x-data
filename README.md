# X-Data
X-Data is an agnostic reactivity solution for any framework.  
It allows you to easily define reactive data, and automatically update your application whenever that data changes.

## Installation
You can install X-Data using npm or yarn:

```bash
npm install @christopy/x-data
```

```bash
yarn add @christopy/x-data
```

## Usage
First, import XData into your application:

```js
import XData from "@christopy/x-data";
```

Then, define your data as an object, and pass it to XData:

```js
const data = XData({
  name: 'John',
  age: 30,
});
```

Now, you subscribe to changes in your data by calling the `subscribe` method with the name of the property you want to subscribe to, and a callback function:

```js
function onNameChange(name) {
  console.log(name);
}
data.subscribe('name', onNameChange);
```

Whenever the value of `name` changes, the callback function will be called with the new value.

You can also unsubscribe from changes in your data by calling the `unsubscribe` method with callback function:

```js
data.unsubscribe(onNameChange);
```

# License
X-Data is released under the [MIT License](LICENSE).
