import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface SettingsFieldProps {
  label: string;
  children: React.ReactNode;
}

export function SettingsField({ label, children }: SettingsFieldProps) {
  return (
    <gridLayout columns="*, 2*" className="p-4 border-b border-gray-200">
      <label col={0} className="text-gray-600" text={label} />
      <contentView col={1} className="text-right">
        {children}
      </contentView>
    </gridLayout>
  );
}