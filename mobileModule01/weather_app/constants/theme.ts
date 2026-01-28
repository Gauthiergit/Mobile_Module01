import { StyleSheet } from "react-native";

export const tintColor = '#e03d0b';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColor,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColor,
  },
};

export const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
});