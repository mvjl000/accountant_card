# Zadanie testowe na pozycję React Developer

Here is the [deploy](https://accountant-card.vercel.app/)

## How to start

In the project directory, you can run:

```
//to install the dependencies
npm install

// to run the project
npm run start
```

## Stuff I used

- Tanstack/react-query
- Jotai
- React-router-dom
- Styled-components
- React & Typescript - obviously

## Features

- Handling of both loading and error states,
- Besides of basic functionality (fetching more accountants), I decided to add 'filter' that allows the user to select how many accountants should be fetched per click (I also wanted to add a gender filter but it turned out that when the `seed parameter` is provided, the API doesn't care about it and returns both female and male :') ),
- Two basic routes:
  1. `/` - 'Landing' with link to `/ksiegowi`
  2. `/ksiegowi` - List of accountants
     Additionaly very simple 404 route
- Some small but pleasant details like random price for service & `twój/twoja` basing on gender,
- Type-safe styled-components theme

## My libraries / packages decisions

### Why Tanstack with Jotai?

Honestly **Tanstack** was a no brainer, because of how easy it is there to implement something like 'infinite pagination' with help of `useInfiniteQuery`. I also wanted to add there some simple client state management solution and **Jotai** seemed to me as a robust option.

### How about styles?

Not gonna lie, I chose styled-components because You mentioned it as prefered ;) But it was a good experience, I used to style a lot with CSS-in-JS.
If it were not for your suggestion, I would most likely choose tailwind, my daily go-to.

### Where is eslint / prettier (You may ask)?

It is a very small project I worked on alone. I decided that the solutions built into the IDE would be enough. But I'm aware that for bigger projects it is necessary ;)
