import { reactive } from "vue";




/**
 * Unity 관련 전역 객체
 * - instance: 유니티 인스턴스
 * - state: 유니티 로드 상태 (로딩창을 위한 상태값)
 */
export const unityStore: { instance: any, state: boolean } = reactive({
    instance: null,
    state: false
});