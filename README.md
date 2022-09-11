Doge Gold Floki UIkit

[![Version](https://img.shields.io/npm/v/@dogegoldfloki-libs/uikit)](https://www.npmjs.com/package/@dogegoldfloki-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@dogegoldfloki-libs/uikit)](https://www.npmjs.com/package/@dogegoldfloki-libs/uikit)

Bridgeswap UIkit is a set of React components and hooks used to build pages on Bridgeswap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @dogegoldfloki-libs/uikit`

## Setup

### Theme

Before using Doge Gold Floki UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@dogegoldfloki-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@dogegoldfloki-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation]
