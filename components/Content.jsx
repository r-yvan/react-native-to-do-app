import {
  View,
  Text,
  TextI,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Content = () => {
  const [activities, setActivities] = useState([{ description: description }]);
  const [description, setDescription] = useState("");
  const handleChange = (val) => {
    setDescription(val);
  };
  return (
    <View className="flex justify-center items-center px-7 bg-red-400">
      <Text>Hi</Text>
      <TextInput
        className="border border-slate-500 rounded-xl p-2 w-full"
        onChangeText={handleChange}
      />
      <TouchableOpacity className="bg-">
        <Text>Add Activity</Text>
      </TouchableOpacity>
      <FlatList
        data={activities}
        renderItem={({ item }) => (
          <View className="py-3 px-4 bg-green-100">
            <Text className="text-slate-900 text-xl font-semibold">
              {item.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Content;
