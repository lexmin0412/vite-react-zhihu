export interface ITheme {
	/**
	 * 主题中文标题
	 */
	titleZh: string
	/**
	 * 主题色十六进制值
	 */
	hex: string
}

export const themeList: Array<ITheme> = [
	{
		titleZh: '知乎蓝',
		hex: '#06f'
	},
	{
		titleZh: '掘金蓝',
		hex: '#007fff',
	},
	{
		titleZh: '美团黄',
		hex: '#FFC300'
	},
	{
		titleZh: '网易红',
		hex: '#C20C0E'
	},
	{
		titleZh: '京东到家绿',
		hex: '#25c156'
	},
	{
		titleZh: '微信绿',
		hex: '#0FBE5D'
	},
	{
		titleZh: '思否绿',
		hex: '#009a61'
	}
]
