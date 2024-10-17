import { StatusBar } from "expo-status-bar";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  SafeAreaView,
} from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <SafeAreaView>
        <Header />
    </SafeAreaView>
  );
}
