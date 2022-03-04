# NPM MH COMMON NPM MODULE

## Purpose

This repsository is used for sharing common data within `Mitt Helsingborg`. The data that will be shared is for example constants, Typescript types and enums.

## Description

This respository is used as an NPM module in `Mitt Helsingborg` which means that in order to use it, it has to be installed in the package.json in the current repository.
The repository contains data that is specific for `Ekonomiskt bistånd` (ekb), but also common data (i.e. not specificly for ekb).

The NPM module is created in order to not have duplicate and inaccurate common data within `Mitt Helsingborg` respositories.


## Prerequisites


### Authorization
In order `git checkout` this module, you must have authorization to use `@helsingborg-stad` respositories.


## Getting started


### Installation

In order to use this module in your current project, simply run in your terminal:

```sh
    yarn add @helsingborg-stad/npm-ekb-common
```

or with npm:

```sh
    npm install @helsingborg-stad/npm-ekb-common
```

## Usage

The data in this module is split between two main folders, `ekb` and `common`, where each folder contains the `constants` and `types` sub-folders.

Then in your project, simply import the data needed from the `ekb` or `common` folders like so:

```js
 import { MY_EXAMPLE_CONSTANT } from "@helsingborg-stad/npm-mh-common/dist/common/constants";
```

make sure the path includes the `dist` folder.