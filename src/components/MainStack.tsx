import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { ScreenOne as Lobby } from "./ScreenOne";
import { ScreenTwo as Lounge } from "./ScreenTwo";
import { UserSettingsScreen } from "../screens/UserSettingsScreen";
import { ChatsScreen } from "../screens/ChatsScreen";

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Lobby"
            screenOptions={{
                headerStyle: {
                    // backgroundColor: "white",
                },
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Lobby"
                component={Lobby}
            />
            <StackNavigator.Screen
                name="Lounge"
                component={Lounge}
            />
            <StackNavigator.Screen
                name="UserSettings"
                component={UserSettingsScreen}
                options={{ title: "Settings" }}
            />
            <StackNavigator.Screen
                name="Chats"
                component={ChatsScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);