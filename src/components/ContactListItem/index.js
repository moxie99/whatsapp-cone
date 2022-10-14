import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";
dayjs.extend(relativeTime);

const ContactListItem = ({ user }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: user.image,
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {user.name}
        </Text>
        <Text numberOfLines={2} style={styles.subtitle}>
          {user.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: "center",
  },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  name: { flex: 1, fontWeight: "bold" },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
  },
  subtitle: { color: "gray" },
});
