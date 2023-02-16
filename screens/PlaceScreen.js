import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const PlaceScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;
  console.log(data);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {data && (
        <ScrollView className="flex-1 px-4 py-6">
          <View className="relative bg-white" style={styles.shadow}>
            <Image
              source={{
                uri: data?.photo?.images?.large?.url
                  ? data.photo.images.medium.url
                  : "https://cdn.pixabay.com/photo/2017/06/21/09/19/spoon-2426623_1280.jpg",
              }}
              className="w-full h-72 object-cover rounded-2xl"
            />
            <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
              <TouchableOpacity
                onPress={() => navigation.navigate("Discover")}
                className="w-10 h-10 rounded-md items-center justify-center bg-white"
              >
                <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
              </TouchableOpacity>
              <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                <FontAwesome5 name="heartbeat" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
              <View className="flex-row space-x-2 items-center">
                <Text className="text-[22px] font-bold text-gray-100">
                  {data?.price}
                </Text>
              </View>
              <View className="px-2 py-1 rounded-md bg-teal-100 justify-center items-center">
                <Text>{data?.open_now_text}</Text>
              </View>
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-[#428288] text-[24px] font-bold">
              {data?.name}
            </Text>
            <View className="flex-row items-center space-x-2 mt-2">
              <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
              <Text className="text-[#8C9EA6] text-[20px] font-bold">
                {data?.location_string}
              </Text>
            </View>
          </View>
          <View className="mt-4 flex-row items-center justify-between">
            {data?.rating && (
              <View className="flex-row items-center space-x-2">
                <View
                  className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center"
                  style={styles.shadow}
                >
                  <FontAwesome name="star" size={24} color="#D58574" />
                </View>
                <View>
                  <Text className="text-[#515151]">{data?.rating}</Text>
                  <Text className="text-[#515151]">Rating</Text>
                </View>
              </View>
            )}
            {data?.price_level && (
              <View className="flex-row items-center space-x-2">
                <View
                  className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center"
                  style={styles.shadow}
                >
                  <MaterialIcons name="attach-money" size={24} color="black" />
                </View>
                <View>
                  <Text className="text-[#515151]">{data?.price_level}</Text>
                  <Text className="text-[#515151]">Price Level</Text>
                </View>
              </View>
            )}
            {data?.bearing && (
              <View className="flex-row items-center space-x-2">
                <View
                  className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center"
                  style={styles.shadow}
                >
                  <FontAwesome name="map-signs" size={24} color="black" />
                </View>
                <View>
                  <Text className="text-[#515151] capitalize">
                    {data?.bearing}
                  </Text>
                  <Text className="text-[#515151]">Bearing</Text>
                </View>
              </View>
            )}
          </View>
          {data?.description && (
            <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
              {data?.description}
            </Text>
          )}
          {data?.cuisine && (
            <View className="flex-row gap-2 items-center justify-center flex-wrap mt-4">
              {data.cuisine.map((tag, i) => (
                <TouchableOpacity
                  key={i}
                  className="px-2 py-1 rounded-md bg-emerald-100"
                >
                  <Text>{tag?.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
            <>
              {data?.phone ? (
                <View className="items-center flex-row space-x-6">
                  <FontAwesome name="phone" size={24} color="#428288" />
                  <Text className="text-lg">{data?.phone}</Text>
                </View>
              ) : (
                <></>
              )}
              {data.email ? (
                <View className="items-center flex-row space-x-6">
                  <FontAwesome name="envelope" size={24} color="#428288" />
                  <Text className="text-lg">{data?.email}</Text>
                </View>
              ) : (
                <></>
              )}
              {data?.address ? (
                <View className="items-center flex-row space-x-6">
                  <FontAwesome name="map-pin" size={24} color="#428288" />
                  <Text className="text-lg">{data?.address}</Text>
                </View>
              ) : (
                <></>
              )}
              <View className="mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
                <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
                  Book Now
                </Text>
              </View>
            </>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default PlaceScreen;
