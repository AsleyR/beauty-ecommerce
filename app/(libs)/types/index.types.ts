// BASES

export interface BaseComponentProps {
    text?: string;
    className?: string
}

export interface LinkComponentProps extends BaseComponentProps {
    link?: string;
}

export interface IconComponentProps extends BaseComponentProps {
}

// FOOTERS

export interface FoorterTitleComponentProps extends BaseComponentProps {

}

export interface FooterLinkComponentProps extends LinkComponentProps {
}

export interface FooterSocialLinkComponentProps extends LinkComponentProps {
    children: React.ReactNode
}