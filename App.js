import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import TextBox from './components/Textbox';
import FilteredProducts from './components/filteredProducts';

export default function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [text, setText] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error("No data found");
                }
                const result = await response.json();
                setData(result);
                setFilteredProducts(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = data.filter(product =>
            product.title.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [text]);

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color="#000061ff" />
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Error: {error}</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <TextBox text={text} setText={setText} />
                <FilteredProducts products={filteredProducts} />
            </ScrollView>
        </SafeAreaView>   
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContent: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
        paddingBottom: 40,
    },
});
