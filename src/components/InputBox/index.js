import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const InputBox = () => {
  const [newMessage, setnewMessage] = React.useState("");
  const onSend = () => {
    console.warn(`Sending a new message ${newMessage}`);
  };
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />

      <TextInput
        value={newMessage}
        onChangeText={setnewMessage}
        style={styles.input}
        placeholder="type your message"
      />

      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={20}
        color="white"
      />
    </SafeAreaView>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    paddingHorizontal: 10,

    backgroundColor: "whitesmoke",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    fontSize: 18,
    borderRadius: 50,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});
