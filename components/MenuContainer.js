import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useCallback, useMemo } from "react";

const MenuContainer = ({
  title,
  imageSrc,
  activeCategory,
  setActiveCategory,
}) => {
  const handlePress = useCallback(() => {
    setActiveCategory(title.toLowerCase());
  }, [title]);

  const isActive = useMemo(
    () => activeCategory === title.toLowerCase(),
    [title, activeCategory]
  );

  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2"
      onPress={handlePress}
    >
      <View
        className={`w-24 h-24 p-2 rounded-full items-center justify-center ${
          isActive ? "bg-gray-200" : ""
        }`}
      >
        <Image source={imageSrc} className="w-full h-full object-contain" />
      </View>
      <Text className={`text-[#00BCC9] ${isActive ? "font-semibold" : ""}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
