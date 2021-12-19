import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrapper, WebsiteRights, FooterContainer } from './styled';

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to={'/'}>
                        <SocialIcon />
                        EXPLOR
                    </SocialLogo>
                    <WebsiteRights>EXPLOR © {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink
                            href={'/'}
                            target={'_blank'}
                            aria-label={'Facebook'}
                        >
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink
                            href={'/'}
                            target={'_blank'}
                            aria-label={'FaInstagram'}
                        >
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                            href={'/'}
                            target={'_blank'}
                            aria-label={'FaYoutube'}
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink
                            href={'/'}
                            target={'_blank'}
                            aria-label={'Twitter'}
                        >
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink
                            href={'/'}
                            target={'_blank'}
                            aria-label={'Linkedin'}
                        >
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;
