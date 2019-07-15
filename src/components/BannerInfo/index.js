import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: block;
    width: calc(50% - 11px);
    min-height: 240px;
    margin-right: 22px;

    &:nth-child(even) {
        margin-right: 0;
    }

    @media(max-width: 860px) {
        width: 100%;
        margin-bottom: 20px;
        margin-right: 0;
    }
`;

const BannerInfoLink = styled.div`
    display: inline-block;
    margin-top: auto;
    margin-bottom: 0;
    font-family: "robotoRegular";
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    color: white;
    text-decoration: none;
    position: relative;

    &:after {
        font-family: "icomoon";
        font-size: 16px;
        line-height: 16px;
        content: "\\e655";
        position: absolute;
        right: -15px;
        top: 50%;
        transform: translateY(-50%) translateX(2px);
        transition: transform 0.2s ease;
    }
`;

const BannerInfo = styled.a`
    display: flex;
    background-color: ${props => props.backgroundColor};
    background: url( ${props => props.img} ) ${props => props.backgroundColor ? props.backgroundColor : '#fff'} no-repeat;
    background-position: right center;
    border-radius: 4px;
    color: ${props => props.backgroundColor ? '#fff' : '#000000'};
    cursor: pointer;
    height: 100%;
    padding: 32px 35px 35px;
    text-decoration: none;

    &:hover {
        div${BannerInfoLink}:after {
            transform: translateY(-50%) translateX(8px);
        }
    }
`;

const BannerInfoContainerText = styled.div`
    width: 55%;
`;

const BannerInfoTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 25px;
    font-family: "robotoRegular";
    font-size: 20px;
    line-height: 28px;
    font-weight: 300;
`;

const BannerInfoSubtitle = styled.p`
    margin-top: 0;
    margin-bottom: 35px;
    font-family: "robotoLight";
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
`;

const AppBannerInfo = ({bgColor, subtitle, title, img, link}) => {
    return (
        <React.Fragment>
            <Container>
                <BannerInfo href={link} backgroundColor={bgColor} img={img}>
                    <BannerInfoContainerText>
                        <BannerInfoSubtitle>{ subtitle }</BannerInfoSubtitle>
                        <BannerInfoTitle>{ title }</BannerInfoTitle>
                        <BannerInfoLink>Узнать больше</BannerInfoLink>
                    </BannerInfoContainerText>
                </BannerInfo>
            </Container>
        </React.Fragment>
    )
}

export default AppBannerInfo;
