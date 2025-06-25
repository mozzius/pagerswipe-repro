# Pager view back swipe issue reproduction

Run the app and see that the back swipe gesture is not working as expected on iOS.

`react-native-pager-view` is set to `6.8.1`. Change to `6.8.0` and see that the back swipe gesture works fine.

How to run:

```
pnpm i
pnpm prebuild
pnpm ios
```
