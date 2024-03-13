import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
    const [value, setValue] = useState<T>(() => {
        const storedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
        return storedValue === null ? defaultValue : JSON.parse(storedValue);
    });

    useEffect(() => {
        const listener = (e: any) => {
            if (typeof window !== 'undefined' && e.storageArea === localStorage && e.key === key) {
                setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue);
            }
        };
        window.addEventListener('storage', listener);

        return () => {
            window.removeEventListener('storage', listener);
        };
    }, [key, defaultValue]);

    const setValueInLocalStorage = (newValue: T) => {
        setValue((currentValue: T) => {
            const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
            if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(result));
            return result;
        });
    };
    const removeKey = () => {
        if (typeof window !== 'undefined') localStorage.removeItem(key);
    };

    return { value, setValue: setValueInLocalStorage, removeKey };
};
