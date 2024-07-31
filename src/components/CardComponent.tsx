import React from 'react';
import { Button, StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/src/constants/Colors';

interface CardComponentProps {
  onPress?: () => void;
}

export default function CardComponent( { onPress }: CardComponentProps) {
  const handleButtonPress = async () => {
    try {
      if (onPress) {
        onPress();
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <View 
      style={styles.getStartedContainer}
      onTouchEnd={() => handleButtonPress()}
    >
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        lalalalalala
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '20%',
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});
