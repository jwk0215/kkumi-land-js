// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	interface Window {
		// 유니티 로드 시 유니티에서 실행될 함수
		onUnityLoaded: () => void;
	}


	// UNITY INSTANCE
	interface UnityInstance {
		SendMessage(gameObject: string, methodName: string, value?: any): void;
        SetFullscreen(flag: boolean): void;
        Quit(): Promise<void>;
	}


	// CREATE UNITY INSTANCE FUNCTION
	declare function createUnityInstance(
        canvas: HTMLCanvasElement,
        config: {
			dataUrl: string;
			frameworkUrl: string;
			codeUrl: string;
		},
		onProgress?: (progress: number) => void,
    ): Promise<UnityInstance>;
	
	
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};