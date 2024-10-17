import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import Content from "./components/Content";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Header />
        <Content />
      </View>
    </TouchableWithoutFeedback>
  );
}
