import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
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
  const deleteItem = (itemDescription) => {
    setActivities((prevActivities) =>
      prevActivities.filter(
        (activity) => activity.description != itemDescription
      )
    );
  };

  return (
    <View className="flex justify-center items-center px-7">
      <Text className="text-white text-2xl font-bold mt-5">
        Add an activity
      </Text>
      <View className="flex flex-row gap-2 mt-5">
        <TextInput
          className="flex-1 border border-grey-9 rounded-2xl p-2 pl-3 text-white"
          onChangeText={handleChange}
        />
        <TouchableOpacity
          className="bg-violet-500 px-3 py-2 rounded-full"
          onPress={() =>
            setActivities([{ description: description }, ...activities])
          }
        >
          <FontAwesome6 name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        className="mt-10 w-full"
        data={activities}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <View className="flex flex-row justify-between py-3 px-4 bg-grey-5 mx-3 my-1 border-2 rounded-2xl border-grey-7">
            <Text className="text-white text-lg font-semibold">
              {item.description}
            </Text>
            <AntDesign
              name="delete"
              size={24}
              color="white"
              onPress={() => deleteItem(item.description)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Content;
