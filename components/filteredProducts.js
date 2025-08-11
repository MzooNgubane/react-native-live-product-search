import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FilteredProducts = ({ products }) => {
    return (
        <View style={styles.gridContainer}>
            {products.length === 0 ? (
                <Text>No products found.</Text>
            ) : (
                products.map(product => (
                    <View key={product.id} style={styles.item}>
                        <Image
                            source={{ uri: product.image }}
                            style={styles.productImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.productName}>{product.title}</Text>
                        <Text>Price: ${product.price}</Text>
                    </View>
                ))
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    item: {
        width: '48%',
        backgroundColor: '#f9f9f9',
        marginBottom: 16,
        borderRadius: 8,
        padding: 8,
        alignItems: 'center',
        elevation: 2,
    },
    productImage: {
        width: 100,
        height: 100,
        marginBottom: 8,
        borderRadius: 4,
        backgroundColor: '#eee',
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4,
        textAlign: 'center',
    },
});

export default FilteredProducts;