import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactListItem from "../components/ContactListItem";
import contacts from "../../assets/data/chats.json";

const ContactScreen = () => {
  return (
    <FlatList
      data={contacts}
      renderItem={({ item }) => <ContactListItem user={item.user} />}
      style={{ backgroundColor: "whitesmoke" }}
    />
  );
};

export default ContactScreen;

const styles = StyleSheet.create({});
