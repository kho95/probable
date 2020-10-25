/* eslint-disable no-alert */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from '@reach/router';
import _ from 'lodash'

import Button from '../../../components/button';
import ContentLayout from '../../../components/contentLayout';
import Image from '../../../components/image';
import Paragraph from '../../../components/paragraph';

import HeroVideo from '../../components/hero-video';
import TextWithImage from '../../components/text-with-image';
import PageLayout from '../../components/pageLayout';
import Section from '../../components/section';
import SectionBackground from '../../components/section-background';
import Map from '../../components/google-map';

import {
  HeroImageLayout,
  LogoImage,
  LogoParagraph,
  ImageAddressContent,
  ImageAddressCtn,
  HeroText,
  MineralsParagraph,
  Title,
  WhiteTitle,
} from './index.style';

const Otakiri: React.FC<any> = (): React.ReactElement => {

  return (
    <PageLayout>
      <HeroVideo
        backgroundImg="https://i.imgur.com/TS0OYuP.png">
        <ContentLayout align='center' column>
          <ContentLayout align='center'>
            <HeroText>A PREMIUM WATER DESIGNED WITH HOSPITALITY IN MIND</HeroText>
          </ContentLayout>
        </ContentLayout>
      </HeroVideo>

      <Section>
        <TextWithImage img="https://i.imgur.com/JndwWtY.png">
          <Title>ABOUT OTAKIRI</Title>
          <Paragraph>
            뉴질랜드 북섬 중심부에 있는 오타키리 동부 플랜티 만은<br />
            수백만 년 동안 인간과 산업의 흔적이 없었던 천연 그대로의 지역입니다.<br />
            오타키리 물은 오타키리 지역 땅 밑에 있는 특유의 성분들을<br />
            모두 흡수함으로써 단 한 모금만으로도 우월함을 선사합니다.
          </Paragraph>
          <Paragraph>
            Situated in the heart of New Zealand’s North Island,<br />
            The Eastern Bay of Plenty has continued to remain<br />
            free from industry and human intervention for millions of years.<br />
            The Otakiri Aquifer is Artesian and absorbs essential<br />
            characteristics from its subterranean environment.<br />
            one sip from the Otakiri aquifer confirms it is superiority.
          </Paragraph>
        </TextWithImage>
        <div> </div>
      </Section>

      <Section id="products" backgroundColor="black">
        <TextWithImage img="https://i.imgur.com/WPGyypW.jpg" imgRight={true} textColor="white">
          <WhiteTitle>THE WATER</WhiteTitle>
          <Paragraph>
            오타키리 932 물은 매우 맑고 깨끗하여 <br />
            상쾌한 맛을 선사합니다.
          </Paragraph>
          <Paragraph>
            오타키리 물의 출처는 수 문학자들<br />
            (Hydrologists)이 ‘932’란 이름으로<br />
            지정한 알티시안(Artesian) 장소입니다.
          </Paragraph>
          <Paragraph>
            알티시안(Artesian) 우물에서 나온<br />
            이 물은 물 고유의 청정함이<br />
            그대로 전달될 수 있도록<br />
            수원지에서 바로 제조됩니다.
          </Paragraph>
          <Paragraph>
            지하 200m 밑에서부터<br />
            물 자체의 압력으로 솟아올라<br />
            일 년 내내 계절이 바뀌어도<br />
            물 수압은 변함이 없습니다.
          </Paragraph>
          <Paragraph>
            세계적으로 증명된 오타키리 932
            높은 품질을 지금 바로 경험해 보세요.
          </Paragraph>
        </TextWithImage>
      </Section>

      <Section>
        <TextWithImage img="https://i.imgur.com/jujTON7.jpg">
          <Title>The Taste of 932</Title>
          <Paragraph>
            Carbonation
          </Paragraph>
          <Paragraph>
            오타키리 물은 가볍게 탄산염화되어 있고 낮은<br />
            TDS(Total Dissolved Solids) 수치를 가지고 있습니다.<br />
            음식과 같이 섭취했을 때 맛이나 느낌이 강하지 않으며<br />
            물만 섭취할 경우 상쾌함과 청결한 맛을 선사합니다.
          </Paragraph>
          <Paragraph>
            Total Dissolved Solids
          </Paragraph>
          <Paragraph>
            <ContentLayout desktopWidth="30%">
              Low<br />
              Medium<br />
              High<br />
            </ContentLayout>
            <ContentLayout desktopWidth="70%">
              50 - 250 mg/l ... Otakiri Source 932 130 mg/l<br />
              250 - 500 mg/l<br />
              500 - 1500 mg/l<br />
            </ContentLayout>
          </Paragraph>
          <Paragraph>
            Purity
          </Paragraph>
          <Paragraph>
            <ContentLayout desktopWidth="30%">
              Superior<br />
              Very Good<br />
              Good<br />
              Acceptable<br />
              Potable
            </ContentLayout>
            <ContentLayout desktopWidth="70%">
              0 - 1 mg/l ... Otakiri Source 932 0.3 mg/l<br />
              1 - 4 mg/l<br />
              4 - 7 mg/l<br />
              7 - 10 mg/l<br />
              10 - 50 mg/l
            </ContentLayout>
          </Paragraph>
          <Paragraph>
            Acidity (pH)
          </Paragraph>
          <Paragraph>
            <ContentLayout desktopWidth="30%">
              1<br />
              7<br />
              14<br />
            </ContentLayout>
            <ContentLayout desktopWidth="60%">
              Acidic (Sour)<br />
              Neutral (Sweet).  Otakiri Source 932 (6.8 -7.2)<br />
              Alkaline (Bitter)<br />
            </ContentLayout>
          </Paragraph>
          <div>
          </div>
        </TextWithImage>
        <MineralsParagraph>
          이산화규소 73mg/L.    중탄산염 40mg/L     황산염 3.1mg/L     나트륨 12mg/L     칼륨 3.5 mg/L       칼슘 3.1mg/L      마그네슘 1.8 mg/L
        </MineralsParagraph>
      </Section>

      <Section>
        <ContentLayout wrap={'true'}>
          <ContentLayout desktopWidth="25%" tabletWidth="50%" mobileLargeWidth="100%" align='center' column={true}>
            <Image src='https://i.imgur.com/ozgWSzw.png' alt="Otakiri 932 still glass bottle" height="300px"></Image>
            <Paragraph align='center'>
              OTAKIRI 932<br />
              STILL GLASS<br />
              <br />
              300ml / Case of 15<br />
              750ml / Case of 12<br />
            </Paragraph>
          </ContentLayout>
          <ContentLayout desktopWidth="25%" tabletWidth="50%" mobileLargeWidth="100%" align='center' column={true}>
            <Image src='https://i.imgur.com/TiX9Pyh.png' alt="Otakiri 932 sparkling glass bottle" height="300px"></Image>
            <Paragraph align='center'>
              OTAKIRI 932<br />
              SPARKLING GLASS<br />
              <br />
              300ml / Case of 15<br />
              750ml / Case of 12<br />
            </Paragraph>
          </ContentLayout>
          <ContentLayout desktopWidth="25%" tabletWidth="50%" mobileLargeWidth="100%" align='center' column={true}>
            <Image src='https://i.imgur.com/noPzpuG.png' alt="Otakiri 932 still PET bottle" height="300px"></Image>
            <Paragraph align='center'>
              OTAKIRI 932<br />
              STILL PET<br />
              <br />
              350m l / Case of 24<br />
              500m l / Case of 24<br />
              1L / Case<br />
            </Paragraph>
          </ContentLayout>
          <ContentLayout desktopWidth="25%" tabletWidth="50%" mobileLargeWidth="100%" align='center' column={true}>
            <Image src='https://i.imgur.com/0yDwPDI.png' alt="Otakiri 932 sparkling PET bottle" height="300px"></Image>
            <Paragraph align='center'>
              OTAKIRI 932<br />
              SPARKLING PET<br />
              <br />
              350m l / Case of 24<br />
              500m l / Case of 24<br />
              1L / Case<br />
            </Paragraph>
          </ContentLayout>
        </ContentLayout>
        <></>
      </Section>

      <Section>
        <Title>ACCREDITIONS</Title>
        <LogoParagraph >
          <ContentLayout>
            <Paragraph>
              EU 자격증은 크게 3가지로 나눠집니다. 자연산 미네랄 물(Natural mineral water), 샘물(Spring water), 병에 담긴 생수(Bottled drinking water) 자연산 미네랄 물과 샘물은 지정된 수원지에서 바로 제조되어야 하며 살균 절차를 거치지 않고 바로 마셔야 안전한 물입니다. 샘물의 미네랄 구성은 자주 변동하며 자연산 미네랄 물은 안정적이고 일관적인 미네랄 구성을 보장합니다. Otakiri 932는 3가지 EU 자격증 중에서 제일 프리미엄 자격증인 자연산 미네랄 물(Natural mineral water) 자격증을 가지고 있습니다.
           </Paragraph>
          </ContentLayout>
          <ContentLayout>
            <LogoImage src='https://i.imgur.com/vvhjxzG.png'></LogoImage>
          </ContentLayout>
        </LogoParagraph>
        <LogoParagraph>
          <ContentLayout>
            <Paragraph>
              Otakiri 932는 바이오 그로(Bio Gro) 자격인증을 받은 공장에서 생산됩니다. 바이오그로는 정확하고 세밀한 3단계의 자격 인증 절차가 있습니다.<br />
              1) 유기물 관리 공장 평가<br />
              2) 바이오그로 심사원의 현장검사<br />
              3) 독립적인 자격 인증서<br />
              이런 심사 과정은 긴 시간과 노력을 보여줍니다. 바이오그로는 매년 전 세계 기관들로부터 최고 수준의 엄격한 감사를 진행하며 국제 표준을 준수하고 있는지 확인합니다. Otakiri 932는 소비자에게 안전하고 믿을 수 있는 제품을 제공합니다
          </Paragraph>
          </ContentLayout>
          <ContentLayout>
            <LogoImage src='https://i.imgur.com/UnkgPsv.png'></LogoImage>
          </ContentLayout>
        </LogoParagraph>
        <LogoParagraph>
          <ContentLayout>
            <Paragraph>
              할랄(Halal)은 아랍어로 ‘허용’이라는 뜻을 가지고 있습니다. 법적으로 먹고 쓸 수 있는 제품을 말합니다. 할랄 자격 인증서는 소비자들에게 자연적인 제품을 자연형태 그대로 공급되었다는 사실을 100% 증명합니다. 뉴질랜드처럼 식품 및 음료 법이 엄중한 나라에서는 할랄 인증서를 보유하는 것이 매우 중요합니다
            </Paragraph>
          </ContentLayout>
          <ContentLayout>
            <LogoImage src='https://i.imgur.com/FOHu0ED.png'></LogoImage>
          </ContentLayout>
        </LogoParagraph>
        <LogoParagraph>
          <ContentLayout>
            <Paragraph>
              코셔(Kosher) 자격증이 인증된 물은 순수함과 타당함이 검증된 제품입니다. 코셔 자격 인증서는 유대인의 식이요법 기준에 맞춰서 심사합니다. 공장에서부터 물이 가공되는 모든 과정까지 제품의 퀄리티와 순수함을 수시로 검사합니다. Otakiri 932도 빠짐없이 코셔 심사를 받으며 자격 인증서를 보유 중입니다. 코셔 자격 인증서는 소비자들 사이에서 높은 품질과 청정함을 증명합니다
            </Paragraph>
          </ContentLayout>
          <ContentLayout>
            <LogoImage src='https://i.imgur.com/8Hs4DSv.png'></LogoImage>
          </ContentLayout>
        </LogoParagraph>
      </Section>
      <Section>
        <ContentLayout wrap>
          <ImageAddressCtn desktopWidth="40%" tabletWidth="50%" mobileLargeWidth="100%">
            <ImageAddressContent>
              <Image src='https://i.imgur.com/2oV0z4F.png' alt="Otakiri springs logo" height="200px"></Image>
            </ImageAddressContent>
            <ImageAddressContent desktopWidth="40%" tabletWidth="50%" mobileLargeWidth="100%" align='center' column>
              <Paragraph align='center' column>
                57 Johnson Road,<br />
                Wakatane. Bay of Plenty,<br />
                New Zealand<br /><br />
                +64 0800 OTAKIRI<br />
                (0800 682 547)<br /><br />
                <a href="http://www.otakirisprings.co.nz" target="_blank">www.otakirisprings.co.nz</a>
              </Paragraph>
              <Button
                isSecondary
                handleClick={(e): void => {
                  e.preventDefault();
                  navigate('/#contact-us');
                }}>
                Enquire
              </Button>
            </ImageAddressContent>
          </ImageAddressCtn>
          <ContentLayout desktopWidth="60%" tabletWidth="100%" align='center' justify='center'>
            <Map coordinates={{
              coordinates: {
                lat: -38.00983,
                lng: +176.74557
              },
              zoom: 10,
            }} />
          </ContentLayout>
        </ContentLayout>
        <></>
      </Section>
      <SectionBackground backgroundSrc='https://i.imgur.com/TwD4t39.jpg'>
        <Button
          isSecondary
          handleClick={(e): void => {
            e.preventDefault();
            window.open("https://drive.google.com/uc?export=download&id=1fywyv05R_QIj2TFld5QViJ041aIpWsM8", "_blank")
          }}
        >
          Download Brochure
        </Button>
        <></>
      </SectionBackground>
    </PageLayout >
  );
};

export default Otakiri;
