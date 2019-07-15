import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import AppBannerInfo from '../components/BannerInfo';

const IndexContainer = styled.div`
    width: 100%;
    padding: 80px 20px 0;
    margin: 0 auto;
    overflow-x: hidden;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

    @media (min-width: 768px) {
        max-width: calc(100% - 60px);
        justify-content: flex-start;
        padding: 0;
    }

    @media (min-width: 860px) {
        max-width: calc(100% - 100px);
    }

    @media (min-width: 1159px) {
        max-width: 980px;
    }

    @media (min-width: 1440px) {
        max-width: 1142px;
    }

    @media (max-width: 860px) and (min-width: 768px) {
        margin-top: 70px;
    }
`;

const IndexContainerInfo = styled.div`
    display: flex;
    width: 100%;
`;

const ContainerElements = styled.div`
    width: calc(100% - 100px);
    margin: 0 auto;

    @media(min-width: 768px) {
        width: calc(100% - 200px);
    }

    @media(min-width: 1180px) {
        width: calc(100% - 300px);
    }
`;

class App extends Component {
    render() {
        return (
            <Fragment>
                <IndexContainer>
                    <ContainerElements>
                        <IndexContainerInfo>
                            <AppBannerInfo
                                img="/public/images/minions1.png"
                                bgColor="#f49cdf"
                                subtitle="Хотите коктейль"
                                title="А вы?"
                                link="/internet"
                            />
                            <AppBannerInfo
                                img="/public/images/minions2.png"
                                bgColor="#faafa4"
                                subtitle="Мы милашки"
                                title="Тянемся к знаниям"
                                link="/bundles"
                            />
                        </IndexContainerInfo>
                    </ContainerElements>
                </IndexContainer>
            </Fragment>
        );
    }
}

export default App;
