import HeaderScore from "@/components/HeaderScore";
import RockPaperScissors from "@/components/RockPaperScissors";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <HeaderScore />

      <View className="mt-12">
        <RockPaperScissors />
      </View>
    </SafeAreaView>
  );
};

export default Home;
