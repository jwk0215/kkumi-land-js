export {}




declare global {
    interface Window {
        // unity Instance
        unityInstance: any;

        // unity load 완료 시 실행될 함수 (unity쪽에서 실행함)
		onUnityLoaded: () => void;
    }



    interface UnityInstance {
        SendMessage(gameObject: string, methodName: string, value?: any): void;
        SetFullscreen(flag: boolean): void;
        Quit(): Promise<void>;
    }


    declare function createUnityInstance(
        canvas: HTMLCanvasElement,
        config: {
			dataUrl: string;
			frameworkUrl: string;
			codeUrl: string;
		},
		onProgress?: (progress: number) => void,
    ): Promise<UnityInstance>;


    interface CategoryDataType {
        depthList: {[key: string]: string},
        [key: string]: any
    }
}