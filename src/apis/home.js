import httpInstance from "@/utils/http";

export function getBannerApi() {
    return httpInstance({
        url: '/home/banner'
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewApi = () => {
    return httpInstance({
        url: '/home/new'
    })
}