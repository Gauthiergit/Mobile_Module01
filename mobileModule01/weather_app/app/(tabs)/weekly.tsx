import { ThemedText } from '@/components/ThemedText';
import { Styles } from '@/constants/theme';
import { View } from 'react-native';

export default function WeeklyScreen() {
  return (
	<View style={Styles.container}>
		<ThemedText type="title">Weekly</ThemedText>
	</View>
  );
}
