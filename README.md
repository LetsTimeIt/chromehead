## Installing dependencies

Install nodejs 16+, pnpm globally, then do the following:

```pnpm i```

## Building all extensions with Bazel

If you would like to use `bazel` to build all extensions, run the following command:

```pnpm build```

## Building a single extension

If you prefer to build each extension independently and without using `bazel`, navigate to the correct path and run `pnpm build` in it. For instance, if you wanted to build Firehead (chromehead for firefox):

```cd extensions/firefox && pnpm build```

The full extension will be in the `dist` folder at that package's root level (for instance, for our example, `extensions/firefox/dist`)