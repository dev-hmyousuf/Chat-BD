import { TextInput, TextInputProps } from "react-native";

export default function Input(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={{
        padding: 18,
        fontSize: 16,
        borderRadius: 10,
        backgroundColor: "#262626",
        color: "#fff",
      }}
    />
  );
}
