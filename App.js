import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  createStaticNavigation,
  Link,
  useTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PagerView from "react-native-pager-view";

function HomeScreen() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link
        screen="Pager"
        style={{ color: theme.colors.primary, fontSize: 20 }}
      >
        Go to Pager
      </Link>
    </View>
  );
}
function PagerScreen() {
  return (
    <PagerView style={styles.pv}>
      <ScrollView
        contentContainerStyle={styles.ccs}
        contentInsetAdjustmentBehavior="automatic"
      >
        <PlaceholderViews color="red" />
      </ScrollView>
      <ScrollView
        contentContainerStyle={styles.ccs}
        contentInsetAdjustmentBehavior="automatic"
      >
        <PlaceholderViews color="green" />
      </ScrollView>
      <ScrollView
        contentContainerStyle={styles.ccs}
        contentInsetAdjustmentBehavior="automatic"
      >
        <PlaceholderViews color="blue" />
      </ScrollView>
    </PagerView>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screenOptions: {
    headerLargeTitle: true,
    headerLargeStyle: {
      backgroundColor: "transparent",
    },
    fullScreenGestureEnabled: true,
  },
  screens: {
    Home: {
      options: {
        title: "Back swipe repro",
      },
      screen: HomeScreen,
    },
    Pager: {
      screen: PagerScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}

function PlaceholderViews({ color }) {
  return (
    <>
      {Array.from({ length: 50 }, (_, i) => (
        <View
          key={i}
          style={{ width: "100%", height: 100, backgroundColor: color }}
        />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  pv: {
    flex: 1,
  },
  ccs: {
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
  },
});
