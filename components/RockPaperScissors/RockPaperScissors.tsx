import { Image } from "expo-image";
import { View } from "react-native";

const RockPaperScissors = () => {
  return (
    <View className="w-full">
      <View className="mx-auto flex flex-col items-center justify-between max-w-[320px] max-h-[320px] h-full  relative">
        <View className="absolute w-full h-full mx-auto">
          <Image
            source={require("../../assets/images/rock-paper-scissors/bg-triangle.svg")}
            style={{
              width: "80%",
              height: "80%",
              margin: "auto",
            }}
            contentFit="contain"
          />
        </View>
        <View className="flex flex-row justify-between w-full  mx-auto">
          <View className="w-1/2 max-w-40 max-h-40 h-screen rounded-full bg-white flex items-center justify-center border-[14px] border-blue-600 relative">
            <View className="w-full h-full absolute top-0 left-0 rotate-[75deg] border-l-8 border-t-4 border-[#babfd5] rounded-full"></View>

            <Image
              source={require("../../assets/images/rock-paper-scissors/icon-paper.svg")}
              style={{
                width: 50,
                height: 50,
              }}
              contentFit="contain"
            />
          </View>

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
        </View>
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
      </View>
    </View>
  );
};

export default RockPaperScissors;
