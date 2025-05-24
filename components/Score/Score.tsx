import { Text, View } from "react-native";

const Score = () => {
  return (
    <View className="px-4 py-4 flex w-28 rounded-lg bg-primary items-center">
      <Text className="font-c-regular uppercase">Score</Text>
      <Text className="text-5xl font-c-bold text-[#555369]">12</Text>
    </View>
  );
};

export default Score;
