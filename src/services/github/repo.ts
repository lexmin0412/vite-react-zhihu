import Request from './../../utils/request'

class RepoService {
    /**
     * 获取repo详情
     * @returns 
     */
    getRepoDetail() {
        return Request({
            url: `${import.meta.env.VITE_GITHUB_API}/users/lexmin0412/repos`,
            method: 'get',
        })
    }
}

export default new RepoService()