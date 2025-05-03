export {};

declare global {
  interface Window {
    FB: FacebookSDK.FB;
  }

  namespace FacebookSDK {
    interface InitParams {
      appId: string;
      autoLogAppEvents?: boolean;
      xfbml?: boolean;
      version: string;
    }

    interface FB {
      init(params: InitParams): void;
      XFBML: {
        parse(element?: HTMLElement | string, callback?: () => void): void;
      };
    }
  }
}
