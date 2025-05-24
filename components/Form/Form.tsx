import { router } from "expo-router";
import { Text, TextInput, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import Button from "../Button";
import useViewModel from "./useViewModel";

const Form = () => {
  const { code, error, setCode } = useViewModel();
  const isValidCode = code.length === 12;

  const handleEnterRoom = () => {
    if (isValidCode) {
      router.push({ pathname: "/home" });
    }
  };

  return (
    <View className="flex gap-4 px-8">
      <TextInput
        className="w-full h-14 border-2 border-[#5b6b82] rounded-md p-2 px-4 font-c-semibold text-white text-xl uppercase text-center"
        placeholder="Digite o código"
        placeholderTextColor="#5b6b82"
        selectionColor="white"
        value={code}
        onChangeText={setCode}
        maxLength={12}
      />
      {error && (
        <Text className="text-red-500 font-c-medium text-sm">{error}</Text>
      )}

      {!error && isValidCode && (
        <Animated.View entering={FadeInUp.duration(200).springify()}>
          <Button className="w-full" onPress={handleEnterRoom}>
            Entrar na sala
          </Button>
        </Animated.View>
      )}

      <View className="flex flex-row items-center gap-4">
        <View className="flex-1 h-1 bg-zinc-300 rounded-lg" />
        <Text className="text-white font-c-black uppercase text-2xl">ou</Text>
        <View className="flex-1 h-1 bg-zinc-300 rounded-lg" />
      </View>

      <Button className="w-full" type="outline">
        Crie uma sala
      </Button>
    </View>
  );
};

export default Form;
