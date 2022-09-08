import { ThemeManager } from './theme';

export interface IApp {
    name: string;
    author: {
        name: string;
        link: string;
    };
}

export function AppSetup() {
    const app: IApp = {
        name: 'Nuxt 3 Awesome Starter',
        author: {
            name: 'viandwi24',
            link: 'https://github.com/viandwi24',
        },
    };
    useState('app', () => app);

    const themeManager = ThemeManager();

    // vue transition bug handle
    const messages = [
        "Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.",
        'NotFoundError: The object can not be found here.',
    ];
    if (typeof window !== 'undefined') {
        window.addEventListener('error', (ev) => {
            if (messages.includes(ev.message)) {
                ev.preventDefault();
                window.location.reload();
            }
        });
    }

    return {
        app,
        themeManager,
    };
}
