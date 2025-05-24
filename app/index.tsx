import Form from "@/components/Form";
import HeaderScore from "@/components/HeaderScore";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className=" h-full">
      <HeaderScore />
      <Form />
    </SafeAreaView>
  );
}
