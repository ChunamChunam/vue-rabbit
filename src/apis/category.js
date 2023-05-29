import request from '@/utils/http'

export const getCategoryApi = (id) => {
    return request({
        url: '/category',
        params: {
            id
        }
    })
}