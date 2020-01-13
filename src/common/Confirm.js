import React from 'react';
import { View, Modal, Text } from 'react-native';
import { CardSection } from './CardSections';
import { Button } from './Button';


const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;

    return (
        <Modal 
        visible={visible}
        animationType="slide"
        onRequestClose={() => {}}
        transparent
        >
           <View style={containerStyle}>
                <CardSection>
                    <Text style={textStyle}> {children} </Text>
                </CardSection>

                <CardSection style={cardSectionStyle}>
                    <Button onPress={onAccept}> Yes </Button>
                    <Button onPress={onDecline}> No </Button>
                </CardSection>
           </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',

    }
};
export { Confirm };
