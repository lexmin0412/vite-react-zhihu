/**
 * 校验规则
 */
type ValidateRuleType = {
	required: boolean
	msg: string
}

/**
 * 校验结果类型
 */
type ValidateResultType = {
	/**
	 * 校验是否通过
	 */
	success: boolean
	/**
	 * 错误信息
	 */
	errs: Array<{
		[name: string]: string
		value: any
	}>
}

class FormStore {
	constructor() {
		this.store = {}
		this.entities = []
	}

	/**
	 * 状态对象
	 */
	store: any
	/**
	 * 实例数组
	 */
	entities: Array<any>

	/**
	 * 获取表单字段值
	 * @param name 字段名
	 * @returns
	 */
	getFieldValue = (name: string) => {
		return this.store[name]
	}

	/**
	 * 合并表单对象
	 * @param newStore 需要合并的表单对象
	 */
	setFieldValue = (newStore: Object) => {
		console.log('setFieldValue', newStore)
		this.store = {
			...this.store,
			...newStore
		}
	}

	/**
	 * 用于注册实例，没有这个方法提交的时候就没有办法校验字段是否合法
	 */
	registerField = (entity: any) => {
		this.entities.push(entity)

		return {
			/**
			 * 卸载实例 删除实例并删除状态
			 */
			unRegisterField: ()  => {
				this.entities = this.entities.filter(item=>item!==entity)
				delete this.store[entity.props.name]
			}
		}
	}

	/**
	 * 字段校验
	 */
	validate = (): ValidateResultType => {
		let errs: any[] = []
		this.entities.forEach((entity=>{
			const { name, rules } = entity.props
			rules.forEach((rule: ValidateRuleType) => {
				if ( rule.required && !this.store[name] ) {
					errs.push({
						[name]: rule.msg,
						value: this.store[name]
					})
				}
			});
		}))
		return {
			success: !errs.length,
			errs
		}
	}

	/**
	 * 提交表单
	 */
	submit = (): Promise<any> => {
		const {success, errs} = this.validate()
		console.log('into formStore submit', success, errs)
		return new Promise((resolve, reject) => {
			if (success) {
				resolve(this.store)
			} else {
				reject(errs)
			}
		})
	}

}

export default FormStore
