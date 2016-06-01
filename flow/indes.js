/* @flow */

// Ok 💥🔥
const foo = (value: number): number => value * 2
foo(2)

// Wrong 💩
const bar = (value: number): number => value * 2
bar('hello')
