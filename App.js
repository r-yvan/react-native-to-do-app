import Header from "./components/Header";
import Content from "./components/Content";
import { Text, TouchableWithoutFeedback, View } from "react-native";

export default function App() {
  return (
    <TouchableWithoutFeedback>
      <View className="flex flex-1 h-full w-full bg-grey-2">
        <Header />
        <Content />
      </View>
    </TouchableWithoutFeedback>
  );
}
