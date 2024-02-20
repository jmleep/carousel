function* carouselGenerator(
  itemsLength: number
): Generator<any, number, number> {
  let i = 0
  while (true) {
    let input = yield i

    if (input === undefined) {
      i++
      if (i >= itemsLength) {
        i = 0
      }
    } else {
      i = input
    }
  }
}

class Carousel<T> {
  private _generator: Generator<any, number, number>
  private _interval: number | undefined = undefined
  private _activeIndex: number
  isPlaying: boolean
  activeItem: T
  intervalSpeed: number
  items: T[]
  onActiveItemChange
  onPlayingStateChange

  constructor(
    items: T[],
    onActiveItemChange: (activeItem: T) => any,
    onPlayingStateChange: (isPlaying: boolean) => void = () => {},
    intervalSpeed: number = 1000
  ) {
    this.items = items
    this.intervalSpeed = intervalSpeed
    this.onActiveItemChange = onActiveItemChange
    this.onPlayingStateChange = onPlayingStateChange
    this.isPlaying = false
    this._activeIndex = 0
    this.activeItem = items[this._activeIndex]
    this._generator = carouselGenerator(items.length)
    // trigger the first iteration so that the generator is ready
    this._generator.next()
    this.onActiveItemChange(items[0])
  }

  play() {
    if (!this.isPlaying) {
      this.isPlaying = true
      this.onPlayingStateChange(this.isPlaying)
      this._startInterval()
    }
  }

  pause() {
    this.isPlaying = false
    this.onPlayingStateChange(this.isPlaying)
    window.clearInterval(this._interval)
  }

  next() {
    this._setActiveItem(this._generator.next().value)
  }

  previous() {
    let previousIndex = this._activeIndex - 1
    if (previousIndex < 0) {
      previousIndex = this.items.length - 1
    }

    this._setActiveItem(this._generator.next(previousIndex).value)
  }

  setSpeed(speed: number) {
    this.intervalSpeed = speed
    if (this.isPlaying) {
      this._startInterval()
    }
  }

  getActiveItem() {
    return this.activeItem
  }

  private _startInterval() {
    window.clearInterval(this._interval)
    this._interval = window.setInterval(() => {
      this._setActiveItem(this._generator.next().value)
    }, this.intervalSpeed)
  }

  private _setActiveItem(index: number) {
    this._activeIndex = index
    this.activeItem = this.items[index]
    this.onActiveItemChange(this.activeItem)
  }
}

export default Carousel
