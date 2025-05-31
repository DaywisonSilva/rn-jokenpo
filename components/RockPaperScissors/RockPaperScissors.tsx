import { Image } from "expo-image";
import { View } from "react-native";
import Paper from "../Paper";
import Rock from "../Rock";
import Scissors from "../Scissors";

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
          <Paper />
          <Scissors />
        </View>
        <Rock />
      </View>
    </View>
  );
};

export default RockPaperScissors;
