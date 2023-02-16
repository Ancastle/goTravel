import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemCardContainer = ({ placeData }) => {
  const title = placeData?.name;
  const location = placeData.location_string;
  const imageSrc = placeData?.photo?.images?.medium?.url
    ? placeData.photo.images.medium.url
    : "https://cdn.pixabay.com/photo/2017/06/21/09/19/spoon-2426623_1280.jpg";

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PlaceScreen", { param: placeData })}
      className="rounded-md border border-gray-300 space-y-2 px-3 py-2 bg-white w-[182px] my-2"
    >
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />
      <Text className="text-[#428288] text-[18px] font-bold">
        {title.length > 14 ? `${title.slice(0, 14)}...` : title}
      </Text>
      <View className="flex-row items-center space-x-1">
        <FontAwesome name="map-marker" size={20} color="#8597A2" />
        <Text className="text-[#428288] text-[14px] font-bold">
          {location.length > 18 ? `${title.slice(0, 18)}...` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
