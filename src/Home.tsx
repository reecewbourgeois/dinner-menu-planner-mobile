import { StyleSheet, View, Text } from 'react-native';

/**
 * <description here>
 */
export function Home(): React.ReactElement {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text>Home</Text>
            </View>
            <View style={styles.subContainer}>
                <Text>Settings</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
