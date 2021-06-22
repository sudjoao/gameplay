import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
    },
    input: {
        width: 300,
        height: 20,
        borderBottomWidth: 1
    },
    image: {
        width: "100%",
        height: 350,
    },
    content: {
        marginTop: -40
    },
    title: {
        color: theme.colors.heading,
        fontSize: 40,
        marginBottom: 16,
        textAlign: 'center'
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center'
    },
    discordButton: {}
})