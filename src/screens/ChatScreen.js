import {
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import bg from "../../assets/images/BG.png";
import messages from "../../assets/data/messages.json";
import Message from "../components/Messsage";
import { useNavigation, useRoute } from "@react-navigation/native";
import InputBox from "../components/InputBox";

const ChatScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 90}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: { flex: 1 },
  list: { padding: 10 },
});
