export type CallbackFunction = (value: string) => void;

export interface Store {
  [key: string]: any;
  subscribe: (key: string, callback: CallbackFunction) => void;
  unsubscribe: (callback: CallbackFunction) => void;
}

export default function XData<T>(target: any): T & Store {
  const listeners: Record<string, CallbackFunction[]> = {}

  const store = {
    ...target,
    subscribe: (key: string, callback: CallbackFunction) => {
      if (!listeners[key]) {
        listeners[key] = []
      }
      listeners[key].push(callback)
    },
    unsubscribe: (callback: CallbackFunction) => {
      for (let key in listeners) {
        listeners[key] = listeners[key].filter((fn) => fn !== callback)
      }
    }
  }

  function notify(key: string, value: any) {
    if (listeners[key]) {
      listeners[key].forEach((fn) => fn(value))
    }
  }

  return new Proxy<T & Store>(store, {
    set: function (target: Store, property: string, value: any) {
      if (property === 'subscribe' || property === 'unsubscribe') {
        return false
      }

      let oldValue = target[property]
      if (oldValue !== value) {
        target[property] = value
        notify(property, value)
      }

      return true
    }
  })
}
