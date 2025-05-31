import { Image } from "expo-image";
import { View } from "react-native";

const Rock = () => {
  return (
    <View className="w-screen max-w-40 max-h-40 h-screen rounded-full bg-white flex items-center justify-center border-[14px] border-red-500 relative bottom-8">
      <View className="w-full h-full absolute top-0 left-0 rotate-[75deg] border-l-8 border-t-4 border-[#babfd5] rounded-full"></View>
      <Image
        source={require("../../assets/images/rock-paper-scissors/icon-rock.svg")}
        style={{
          width: 50,
          height: 50,
        }}
        contentFit="contain"
      />
    </View>
  );
};

export default Rock;
