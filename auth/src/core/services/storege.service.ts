import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    getItem(key: string): string | null {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(key);
        }
        return null;
    }

    setItem(key: string, value: string): void {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, value);
        }
    }

    removeItem(key: string): void {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(key);
        }
    }
}
