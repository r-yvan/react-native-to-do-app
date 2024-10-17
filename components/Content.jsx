import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Content = () => {
  const [activities, setActivities] = useState([]);
  const [description, setDescription] = useState("");
  const handleChange = (val) => {
    setDescription(val);
  };
  return (
    <View className="flex justify-center items-center px-7">
      <Text className="text-white text-lg font-bold">Add an activity</Text>
      <TextInput
        className="border border-white border-opacity-25 rounded-xl p-2 w-full text-white mt-10"
        onChangeText={handleChange}
      />
      <TouchableOpacity
        className="bg-grey-6 py-2 px-4 rounded-full border border-white border-opacity-10 mt-10"
        onPress={() =>
          setActivities([{ description: description }, ...activities])
        }
      >
        <Text className="text-white text-lg font-semibold">Add Activity</Text>
      </TouchableOpacity>
      <FlatList
        className="mt-10"
        data={activities}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <View className="py-3 px-4 bg-grey-5 rounded-lg w-full mx-3 border border-dashed border-grey-8">
            <Text className="text-white text-lg font-semibold">
              {item.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Content;
