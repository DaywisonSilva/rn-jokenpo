import { Text, TouchableNativeFeedback, View } from "react-native";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: "default" | "outline";
  onPress?: () => void;
}

const Button = ({
  className,
  children,
  type = "default",
  onPress,
}: ButtonProps) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        className={`p-4 rounded-md self-start ${
          type === "default"
            ? "bg-primary"
            : "bg-transparent border-primary border-2"
        } ${className}`}
      >
        <Text
          className={`text-secondary font-c-semibold uppercase text-center ${
            type === "default" ? "text-secondary" : "text-white"
          }`}
        >
          {children}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Button;
