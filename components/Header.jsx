import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

const Header = () => {
  return (
    <View className="flex flex-row items-center justify-center bg-slate-500 mt-12 py-3">
      <Text className="text-white text-xl font-bold">To Do Activities</Text>
    </View>
  );
};

export default Header;
