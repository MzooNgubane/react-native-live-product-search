import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextBox = ({setText,text}) => {
    return (
        <TextInput
            style={styles.input}
            value={text}
            onChangeText={(input) => setText(String(input))}
            placeholder="Search product"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 4,
        paddingHorizontal: 16,
        marginBottom: 10,
        width: '90%',
    },
});

export default TextBox;