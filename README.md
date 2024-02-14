# @leep/carousel

A simple carousel utility to handle typical needs.

### Installation

`npm i @leep/carousel`

### Usage

Create a carousel object with the desired iterable items.

```ts
// with default speed of 1000ms
const carousel = new Carousel(["item1", "item2", "item3"]);

// with 5000ms speed
const carousel2 = new Carousel(["item1", "item2", "item3"], 5000);
```

Use the play/pause functions to start and stop the carousel

```ts
carousel.play();

carousel.pause();
```

Access the active item by using the activeItem property

```ts
const active = carousel.activeItem;
```

Manually move through the carousel items by using the next/previous functions

```ts
carousel.next();

carousel.previous();
```

Update the carousel speed

```ts
carousel.setSpeed(2000);
```
