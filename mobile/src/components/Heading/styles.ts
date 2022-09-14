import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 32,
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
  },
  subtitle: {
    color: THEME.COLORS.CAPTION_500,
    fontSize: 15,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});