export interface UserSettings {
  displayName: string;
  email: string;
  notificationsEnabled: boolean;
  theme: 'light' | 'dark';
  language: string;
}