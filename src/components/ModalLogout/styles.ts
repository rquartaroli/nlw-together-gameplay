import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 460
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay
  },
  messageLogout: {
    flexDirection: 'row',
    marginVertical: 24,
    justifyContent: 'center',
  },
  titleLogout: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    lineHeight: 31,
    color: theme.colors.heading,
  },
  firstTitleAppLogout: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    lineHeight: 31,
    color: theme.colors.heading,
  },
  secondTitleAppLogout: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    lineHeight: 31,
    color: theme.colors.primary,
  },
  wrapperButtons: {
    width: '50%',
    flexDirection: 'row',
    marginBottom: 40,
  },
  buttonNoLogout: {
    flexDirection: 'row',
    marginHorizontal: 8,
    backgroundColor: 'transparent',
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonYesLogout: {
    flexDirection: 'row',
    marginHorizontal: 8,
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 8,
  }
});