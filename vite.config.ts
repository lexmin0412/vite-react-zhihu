import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: '/vite-react-app/',
	css:{
		modules: {  // css module配置
			localsConvention: 'camelCaseOnly'  // 如果类名为  .tab-item, 使用时要写成 styles.tabItem
		}
	},
	server: {
		proxy: {
			// '/api': 'https://www.fastmock.site/mock/17ad4659e546df135e2027055aba5443',
			'/api': {
				target: 'https://www.fastmock.site/mock/17ad4659e546df135e2027055aba5443',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})
