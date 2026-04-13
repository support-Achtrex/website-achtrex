'use client'

import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Loader2, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'loading' | 'info';

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    addToast: (message: string, type: ToastType) => string;
    removeToast: (id: string) => void;
    updateToast: (id: string, message: string, type: ToastType) => void;
    success: (message: string) => string;
    error: (message: string) => string;
    loading: (message: string) => string;
    info: (message: string) => string;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const addToast = useCallback((message: string, type: ToastType) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        // Auto remove non-loading toasts
        if (type !== 'loading') {
            setTimeout(() => {
                removeToast(id);
            }, 4000);
        }

        return id;
    }, [removeToast]);

    const updateToast = useCallback((id: string, message: string, type: ToastType) => {
        setToasts((prev) => prev.map((toast) =>
            toast.id === id ? { ...toast, message, type } : toast
        ));

        if (type !== 'loading') {
            setTimeout(() => {
                removeToast(id);
            }, 4000);
        }
    }, [removeToast]);

    const success = useCallback((message: string) => addToast(message, 'success'), [addToast]);
    const error = useCallback((message: string) => addToast(message, 'error'), [addToast]);
    const loading = useCallback((message: string) => addToast(message, 'loading'), [addToast]);
    const info = useCallback((message: string) => addToast(message, 'info'), [addToast]);

    return (
        <ToastContext.Provider value={{ addToast, removeToast, updateToast, success, error, loading, info }}>
            {children}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
                <AnimatePresence mode="popLayout">
                    {toasts.map((toast) => (
                        <ToastItem key={toast.id} toast={toast} onRemove={() => removeToast(toast.id)} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ toast, onRemove }: { toast: Toast; onRemove: () => void }) => {
    const icons = {
        success: <CheckCircle2 className="text-green-500" size={20} />,
        error: <XCircle className="text-red-500" size={20} />,
        loading: <Loader2 className="text-primary animate-spin" size={20} />,
        info: <Info className="text-blue-500" size={20} />,
    };

    const bgColors = {
        success: 'bg-white/90 border-green-100',
        error: 'bg-white/90 border-red-100',
        loading: 'bg-white/90 border-primary/10',
        info: 'bg-white/90 border-blue-100',
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className={`pointer-events-auto min-w-[300px] max-w-md p-4 rounded-2xl shadow-xl border backdrop-blur-md flex items-center gap-3 ${bgColors[toast.type]}`}
        >
            <div className="shrink-0">
                {icons[toast.type]}
            </div>
            <p className="text-sm font-medium text-gray-700 flex-1">
                {toast.message}
            </p>
            {toast.type !== 'loading' && (
                <button
                    onClick={onRemove}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-black/5 rounded-full"
                >
                    <XCircle size={16} />
                </button>
            )}
        </motion.div>
    );
};
