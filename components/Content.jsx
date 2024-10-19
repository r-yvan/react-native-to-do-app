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
      <Text className="text-white text-2xl font-bold mt-5">
        Add an activity
      </Text>
      <TextInput
        className="border border-grey-9 rounded-xl p-2 w-full text-white mt-5"
        onChangeText={handleChange}
      />
      <TouchableOpacity
        className="bg-violet-600 py-2 px-4 rounded-full border mt-3"
        onPress={() =>
          setActivities([{ description: description }, ...activities])
        }
      >
        <Text className="text-white text-lg font-semibold">Add Activity</Text>
      </TouchableOpacity>
      <FlatList
        className="mt-10 w-full"
        data={activities}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <View
            className="py-3 px-4 bg-grey-5 mx-3 my-1 border-2 rounded-2xl border-grey-7"
          >
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
