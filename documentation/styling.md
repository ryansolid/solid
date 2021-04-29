# Styling

Styling is not any different in Solid than most libraries. You can use CSS inserted in the head of your document. Or you can use CSS Modules with your Webpack or Rollup config, you can use preprocessor like SASS or PostCSS. Libraries like Bootstrap or Tailwind are compatible. Solid also supports generic CSS in JS libraries like Emotion.

In addition Solid has 2 libraries to support some more common CSS in JS patterns with [solid-styled-components](https://github.com/solidui/solid-styled-components), a Styled Component library that works with Solid's Component system and [solid-styled-jsx](https://github.com/solidui/solid-styled-jsx) a wrapper on Vercel's Styled JSX to work with Solid.

Styled Components:

```jsx
import { styled } from "solid-styled-components";

const Btn = styled("button")`
  border-radius: ${props => props.size}px;
`;

<Btn size={20} />;
```

Styled JSX:

```jsx
function Button() {
  const [isLoggedIn, login] = createSignal(false);
  return (
    <>
      <button className="button" onClick={() => login(!isLoggedIn())}>
        {isLoggedIn() ? "Log Out" : "Log In"}
      </button>
      <style jsx dynamic>
        {`
          .button {
            background-color: ${isLoggedIn() ? "blue" : "green"};
            color: white;
            padding: 20px;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
}
```

## Inline Styles

Solid supports both string styles and style objects (using style property form .. ie hyphenated not camel cased).

```jsx
<div style={`color: green; background-color: ${state.color}; height: ${state.height}px`} />

<div style={{
  color: "green",
  "background-color": state.color,
  height: state.height + "px" }}
/>
```

This also means it can support stuff like CSS variables:

```jsx
<div style={{ "--my-custom-color": state.themeColor }} />
```

In addition to supporting CSS variables it puts things consistent with CSS string and SSR versions.
[`setProperty`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) is also more performant. This does mean that you must use units like "px" or "em" on properties expecting sizes.

_Note: The compiler automatically optimizes object form when declared inline unrolling any iteration._

## Classes

Solid supports declaring classes with both `className` and `class`:

```jsx
<div className={"col-sm-6 col-lg-2"} />

<div class={"col-sm-6 col-lg-2"} />
```

Solid also provides an additional binding for toggling multiple classes `classList`:

```jsx
<div classList={{ active: state.active, editting: state.currentId === row.id }} />
```
