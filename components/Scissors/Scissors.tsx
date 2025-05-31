import { Image } from "expo-image";
import { View } from "react-native";

const Scissors = () => {
  return (
    <View className="w-1/2 max-w-40 max-h-40 h-screen relative rounded-full bg-white flex items-center justify-center border-[14px] border-yellow-500">
      <View className="w-full h-full absolute top-0 left-0 rotate-[75deg] border-l-8 border-t-4 border-[#babfd5] rounded-full"></View>
      <Image
        source={require("../../assets/images/rock-paper-scissors/icon-scissors.svg")}
        style={{
          width: 50,
          height: 50,
        }}
        contentFit="contain"
      />
    </View>
  );
};

export default Scissors;
