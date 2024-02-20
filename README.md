# @jmleep/carousel

A simple carousel utility to handle typical needs.

### Installation

`npm i @jmleep/carousel`

### Usage

Create a carousel object with the desired iterable items.

```ts
// with default speed of 1000ms
const carousel = new Carousel(["item1", "item2", "item3"])

function onActiveItemChange(activeItem: string) {
  console.log(activeItem)
}

function onPlayingStatechange(isPlaying: boolean) {
  console.log(isPlaying)
}

// with 5000ms speed
const carousel2 = new Carousel(
  ["item1", "item2", "item3"],
  onActiveItemChange,
  onPlayingStateChange,
  5000
)
```

Use the play/pause functions to start and stop the carousel

```ts
carousel.play()

carousel.pause()
```

Access the active item by using the activeItem property or by providing a callback function to the Carousel to be notified of changes to the active item. Access the playing state (boolean) by using the isPlaying property or by providing a callback function to the onPlayingStateChange function.

```ts
const active = carousel.activeItem
const isPlaying = carousel.isPlaying

function onActiveItemChange(activeItem: string) {
  console.log(activeItem)
}

function onPlayingStatechange(isPlaying: boolean) {
  console.log(isPlaying)
}

// with 5000ms speed
const carousel2 = new Carousel(
  ["item1", "item2", "item3"],
  onActiveItemChange,
  onPlayingStateChange,
  5000
)
```

Manually move through the carousel items by using the next/previous functions

```ts
carousel.next()

carousel.previous()
```

Update the carousel speed

```ts
carousel.setSpeed(2000)
```
