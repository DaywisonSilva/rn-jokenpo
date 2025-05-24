import { Text, View } from "react-native";
import Score from "../Score";

const HeaderScore = () => {
  return (
    <View className="flex flex-row justify-between items-center m-8 border-4 border-[#5b6b82] rounded-lg p-4 gap-0 mb-8">
      <View>
        <Text className="text-white text-2xl uppercase font-c-bold leading-[17px]">
          Pedra
        </Text>
        <Text className="text-white text-2xl uppercase font-c-bold leading-[17px]">
          Papel
        </Text>
        <Text className="text-white text-2xl uppercase font-c-bold leading-[17px]">
          Tesoura
        </Text>
      </View>
      <Score />
    </View>
  );
};

export default HeaderScore;
