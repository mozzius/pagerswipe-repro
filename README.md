# Pager view back swipe issue reproduction

Run the app and see that the back swipe gesture is working as expected on iOS.

This is a repro for two issues:

- `react-native-pager-view` is set to `6.8.0`. Change to `6.8.1` (or any higher version) and observe the back swipe doesn't work
- `react-native-screens` is set to `4.16.0`. Change to `4.19.0` and observe the back swipe doesn't work

How to run:

```
pnpm i
pnpm prebuild
pnpm ios
```
