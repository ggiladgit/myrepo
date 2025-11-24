// Common types used across the application

export interface CounterState {
  value: number;
}

// Add more types as the application grows
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

export interface ButtonProps {
  onClick: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}
