import FormStore from './formStore'

/**
 * hook 封装
 * @returns
 */
const useForm = () => {
	const formStore = new FormStore()
	return [formStore]
}

export default useForm
