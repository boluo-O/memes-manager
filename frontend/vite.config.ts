import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { UserConfig } from 'vite'

const config: UserConfig = {
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: '@p',
                replacement: resolve(__dirname, 'src/public'),
            },
            {
                find: '@a',
                replacement: resolve(__dirname, 'src/assets'),
            },
            {
                find: '@c',
                replacement: resolve(__dirname, 'src/components'),
            },
            {
                find: '@context',
                replacement: resolve(__dirname, 'src/context'),
            },
            {
                find: '@s',
                replacement: resolve(__dirname, 'src/service'),
            },
            {
                find: '@u',
                replacement: resolve(__dirname, 'src/utils'),
            },
            {
                find: '@hooks',
                replacement: resolve(__dirname, 'src/hooks'),
            },
            {
                find: '@enum',
                replacement: resolve(__dirname, 'src/assets/js/enum.tsx'),
            },
            {
                find: '/image',
                replacement: 'src/assets/image',
            },
        ],
    },
}

export default config
