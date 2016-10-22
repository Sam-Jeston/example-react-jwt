import * as Rx from 'rxjs'

export const counter = new Rx.Subject()
export function counterIncrement (val) {
  counter.next(val)
}
