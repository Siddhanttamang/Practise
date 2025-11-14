import React, { createContext, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

interface ToastContextType {
  success: (msg: string) => void;
  error: (msg: string) => void;
  info: (msg: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const success = (msg: string) => toast.success(msg);
  const error = (msg: string) => toast.error(msg);
  const info = (msg: string) => toast(msg);

  return (
    <ToastContext.Provider value={{ success, error, info }}>
      {children}
      <Toaster position="top-center" />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext)!;
