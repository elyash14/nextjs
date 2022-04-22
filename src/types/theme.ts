
import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        isDark?: boolean;
        background: string;
        typography: string;
        colors: {
            primary: string;
            secondary: string;
        }
    }
}

