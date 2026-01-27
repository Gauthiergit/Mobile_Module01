import { ThemedText } from '@/components/ThemedText';
import { Styles } from '@/constants/theme';
import { View } from 'react-native';

export default function TodayScreen() {
  return (
	<View style={Styles.container}>
		<ThemedText type="title">Today</ThemedText>
	</View>
  );
}
