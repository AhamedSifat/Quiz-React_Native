import { Pressable, Text, StyleSheet, View } from 'react-native';
import { ComponentProps } from 'react';

type CustomButtonProps = {
  title: string;
  rightIcon?: React.ReactNode;
} & ComponentProps<typeof Pressable>;

const CustomButton = ({
  title,
  rightIcon,
  ...PressableProps
}: CustomButtonProps) => {
  return (
    <Pressable {...PressableProps} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#005055',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 1.5,
  },

  rightIcon: {
    position: 'absolute',
    right: 20,
  },
});
