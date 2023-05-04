export interface MobileSideMenu {
    mobileSideMenu: boolean;
}

export type MobileSideMenuType = {
    mobileSideMenu: MobileSideMenu['mobileSideMenu']
    setMobileSideMenu: (mobileSideMenu: MobileSideMenu['mobileSideMenu']) => void;
}