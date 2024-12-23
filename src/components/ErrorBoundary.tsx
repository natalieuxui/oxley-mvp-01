import * as React from "react";
import { Label, StackLayout, Button } from "@nativescript/core";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <stackLayout className="p-4 items-center justify-center h-full">
          <label className="text-xl text-red-500 text-center mb-4" text="Something went wrong" />
          <label className="text-gray-600 text-center mb-4" text={this.state.error?.message} />
          <button className="bg-blue-500 text-white p-2 rounded" text="Retry" onTap={this.handleRetry} />
        </stackLayout>
      );
    }

    return this.props.children;
  }
}