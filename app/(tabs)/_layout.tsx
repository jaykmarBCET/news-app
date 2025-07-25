import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { Fragment } from "react";


export default function Layout() {
    return (
        <Fragment>
            
            <Tabs screenOptions={{ tabBarActiveTintColor: "#007AFF", headerShown: false}} initialRouteName="index">
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" color={color} size={size} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Discover"
                    options={{
                        title: "Discover",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="compass-outline" color={color} size={size} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Search"
                    options={{
                        title: "Search",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="search-outline" color={color} size={size} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Setting"
                    options={{
                        title: "Settings",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="settings-outline" color={color} size={size} />
                        ),
                    }}
                />
            </Tabs>
        </Fragment>
    );
};
