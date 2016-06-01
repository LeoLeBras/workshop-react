/* @flow */

// Ok 💥🔥
const foo = (value: number): number => value * 2
foo(2)

// Wrong 💩
const foo = (value: number): number => value * 2
foo('hello')
