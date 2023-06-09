
// NARROWING IN THE TYPESCRIPT HANDBOOK

// Uh-oh, we’re getting an error on padding. TypeScript is warning us that we’re passing a value with type number | string
// to the repeat function, which only accepts a number, and it’s right. In other words, we haven’t explicitly checked if
// padding is a number first, nor are we handling the case where it’s a string, so let’s do exactly that.

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}


// If this mostly looks like uninteresting JavaScript code, that’s sort of the point. Apart from the annotations we
// put in place, this TypeScript code looks like JavaScript. The idea is that TypeScript’s type system aims to make it as
// easy as possible to write typical JavaScript code without bending over backwards to get type safety.

// While it might not look like much, there’s actually a lot going on under the covers here. Much like how TypeScript
// analyzes runtime values using static types, it overlays type analysis on JavaScript’s runtime control flow constructs like if/else,
// conditional ternaries, loops, truthiness checks, etc., which can all affect those types.

// Within our if check, TypeScript sees typeof padding === "number" and understands that as a special form of code 
// called a type guard. TypeScript follows possible paths of execution that our programs can take to analyze the most
// specific possible type of a value at a given position. It looks at these special checks (called type guards) and assignments,
// and the process of refining types to more specific types than declared is called narrowing. In many editors we can observe these
// types as they change, and we’ll even do so in our examples.






// typeof TYPE GUARDS

// As we’ve seen, JavaScript supports a typeof operator which can give very basic information about the type of values we have at runtime.
// TypeScript expects this to return a certain set of strings:
"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"



// LEFT OFF ON instanceof narrowing START HERE!!!