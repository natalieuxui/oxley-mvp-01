import * as React from 'react';
import { Switch } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { MainStackParamList } from '../NavigationParamList';
import { UserSettings } from '../types/UserSettings';
import { SettingsField } from '../components/settings/SettingsField';

type UserSettingsScreenProps = {
  route: RouteProp<MainStackParamList, 'UserSettings'>;
  navigation: FrameNavigationProp<MainStackParamList, 'UserSettings'>;
};

export function UserSettingsScreen() {
  const [settings, setSettings] = React.useState<UserSettings>({
    displayName: 'John Doe',
    email: 'john@example.com',
    notificationsEnabled: true,
    theme: 'light',
    language: 'English',
  });

  return (
    <flexboxLayout className="h-full bg-white justify-center">
      <scrollView>
        <SettingsField label="Display Name">
          <textField
            text={settings.displayName}
            onTextChange={(e) =>
              setSettings((prev) => ({ ...prev, displayName: e.value }))
            }
          />
        </SettingsField>

        <SettingsField label="Email">
          <textField
            text={settings.email}
            onTextChange={(e) =>
              setSettings((prev) => ({ ...prev, email: e.value }))
            }
          />
        </SettingsField>

        <SettingsField label="Notifications">
          <switch
            checked={settings.notificationsEnabled}
            onCheckedChange={(e) =>
              setSettings((prev) => ({
                ...prev,
                notificationsEnabled: e.value,
              }))
            }
          />
        </SettingsField>

        <SettingsField label="Theme">
          <segmentedBar selectedIndex={settings.theme === 'light' ? 0 : 1}>
            <segmentedBarItem title="Light" />
            <segmentedBarItem title="Dark" />
          </segmentedBar>
        </SettingsField>
      </scrollView>
    </flexboxLayout>
  );
}
