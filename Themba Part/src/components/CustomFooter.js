import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export const CustomFooter = ({
  name,
  navigateFunction,
  accountStatus,
  googleAuth,
  googleSignInFunc,
  facebookSignInFunc
}) => {
  return (
    <View>
      <View style={styles.or}>
        <Text style={styles.line}>-</Text>
        <Text style={styles.ortxt}>Or Sign in With</Text>
        <Text style={styles.line}>-</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconsContainer} onPress={googleSignInFunc}>
          <AntDesign name="google" size={40} color="#4285F4" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconsContainer} onPress={facebookSignInFunc}>
          <AntDesign name="facebook-square" size={40} color="blue" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.dontHaveAccount}>{accountStatus}</Text>
        <TouchableOpacity onPress={navigateFunction}>
          <Text style={styles.signup}>{name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  or: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    marginHorizontal: 5,
    width: 50,
    height: 1,
    backgroundColor: "#D9D9D9",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  iconsContainer: {
    paddingHorizontal: 15,
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "95%",
    marginTop: 5,
    // backgroundColor: 'red'
  },
  dontHaveAccount: {
    fontSize: 11,
    // paddingHorizontal: 5,
  },
  signup: {
    fontSize: 11,
    color: "#FF9C00",
    position: "relative",
    // right: 25
  },
});
