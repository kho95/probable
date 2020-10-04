/* eslint-disable no-alert */
import React, { useEffect, useContext, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from '@reach/router';
import _ from 'lodash'

import AppStateContext from '../../context/appStateContext';

import Button from '../../../components/button';
import ContentLayout from '../../../components/contentLayout';
import Image from '../../../components/image';
import Paragraph from '../../../components/paragraph';

import HeroVideo from '../../components/hero-video';
import TextWithImage from '../../components/text-with-image';
import PageLayout from '../../components/pageLayout';
import Section from '../../components/section';

import Images from '../../../assets/images';

import {
  Title
} from './index.style';

const Otakiri: React.FC<any> = (): React.ReactElement => {

  useEffect(() => {

  }, []);

  return (
    <PageLayout>
      <HeroVideo
        backgroundImg="https://i.imgur.com/8pj4WJj.jpg" overlayColor='#FFFFFF70'>
        <ContentLayout>
          <ContentLayout align='center'>
            <h1>A PREMIUM WATER DESIGNED WITH HOSPITALITY IN MIND</h1>
          </ContentLayout>
          <ContentLayout desktopWidth="100%" justify='space-around'>
            <ContentLayout desktopWidth="50%" mobileLargeWidth="100%" align='center' column={true}>
              <Image src='https://i.imgur.com/uvKX20C.jpg' alt="Top of Otakiri 932 glass bottle" height="300px"></Image>
            </ContentLayout>
            <ContentLayout desktopWidth="50%" mobileLargeWidth="100%" align='center' column={true}>
              <Image src='https://i.imgur.com/9a7duqW.png' alt="Otakiri 932" height="300px"></Image>
            </ContentLayout>
          </ContentLayout>
        </ContentLayout>
      </HeroVideo>

      <Section>
        <Title>ABOUT OTAKIRI</Title>
        <TextWithImage img="https://i.imgur.com/JndwWtY.png">
          <Paragraph>
            오타키리는 뉴질랜드 북섬 중심부에 위치한<br />
            동부 플랜티 만은 수백만 년 동안<br />
            산업과 인간의 개입이 없었던<br />
            천연 그대로 자연을 간직 하고 있는 아름다운 지역입니다.
          </Paragraph>
          <Paragraph>
            평방 3km당 2명 미안의 사람들이 살고 있으며<br />
            이곳은 자연으로 부터 진정한 축복을 받고 있습니다.
          </Paragraph>
        </TextWithImage>
        <div> </div>
      </Section>

      <Section id="products">
        <Title>THE WATER</Title>
        <TextWithImage img="https://i.imgur.com/9a7duqW.jpg" imgRight={true}>
          <Paragraph>
            VIP를 위해 탄생한 프리미엄 샘물
          </Paragraph>
          <Paragraph>
            오타키리 리저브에는 그 어느 곳 보다 뛰어난 샘물이 있습니다.
          </Paragraph>
          <Paragraph>
            알티시안 (Artesian) 우물에서 나온 이 물은 자연적으로 광물 (Mineral) 이 낮아서<br />
            물이 매우 맑고 세밀한 상쾌함을 선사합니다.
          </Paragraph>
          <Paragraph>
            오타키리 물은 오타키리 지역 땅 밑에 있는 지하 환경에서 나오는 특유의 특질<br />
            (Characteristic, Mineral) 을 모두 흡수합니다.
          </Paragraph>
          <Paragraph>
            오타키리 932는 마그네슘 함량이 높고 나트륨 함량과 질산염 수치가 매우 낮으며<br />
            전 세계적으로 최고 수준의 품질을 증명합니다.<br />
            또한 치매 예방 성분으로 적합한 실리카 성분 함량 높습니다.
          </Paragraph>
          <Paragraph>
            오타키리 932는 자연의 완벽한 작품을 구체화한 듯<br />
            물에 구성이 완벽하게 균형을 이루고 있습니다.
          </Paragraph>
          <div>
          </div>
        </TextWithImage>
      </Section>

      <Section id="products">
        <TextWithImage img="https://i.imgur.com/9a7duqW.jpg">
          <Title>The Taste of 932</Title>
          <Paragraph>
            오타키리 932 물의 출처는 수 문학자들(Hydrologists)이<br />
            오타키리에 부여한 고유 식별 번호입니다.
          </Paragraph>
          <Paragraph>
            932 대수층은 남반구에서 가장 깊은 대수층입니다.<br />
            지하 200m 밑에서부터 물 혼자만의 압력으로 땅 위로 물이 솟아오릅니다.<br />
            일 년 내내 계절이 바뀌어도 물 수압은 변함이 없습니다.
          </Paragraph>
          <Paragraph>
            물 고유의 청점함(Purity)이 그대로 전달될 수 있도록<br />
            수원지에서 바로 제조됩니다.
          </Paragraph>
          <Paragraph>
            Carbonation
          </Paragraph>
          <Paragraph>
            오타키리 물은 가볍게 탄산염화되어 있고 낮은 TDS (Total Dissoloved Solids)<br />
            수치를 가지고 있습니다. 음식과 같이 섭취했을때 맛이나 느낌이 강하지 않으며<br />
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
        <Paragraph>
          이산화규소 73mg/L.    중 탄 산 염 40mg/L     황산염 3.1mg/L     나트륨 12mg/L     칼륨 3.5 mg/L       칼슘 3.1mg/L      마그네슘 1.8 mg/L
        </Paragraph>
      </Section>

      <Section backgroundColor="#E9F1FF">
        <Title>THE WATER</Title>
        <ContentLayout>
          <ContentLayout desktopWidth="50%" column={true}>
            <Paragraph>
              오타키리 932에는 그 어느 곳보다 뛰어난 샘물이 있습니다.
            </Paragraph>
            <Paragraph>
              알티시안 (Artesian) 우물에서 나온 이 물은 자연적으로 광물 (Mineral)이<br />
              낮아서 물이 매우 맑고 세밀한 상쾌함을 선사합니다.
            </Paragraph>
            <Paragraph>
              오타키리 물은 오타키리 지역 땅 밑에 있는 지하 환경에서 나오는 특유의<br />
              특질 (Characteristic, Mineral)을 모두 흡수합니다.
            </Paragraph>
            <Paragraph>
              이  특유의 광물 (Mineral)을 흡수함으로써 오타키리 물은 세상 어디에도<br />
              없는 특유의 본질을 가지고 있습니다.
            </Paragraph>
            <Paragraph>
              마치 자연의 완벽한 작품을 구체화한 듯 물에 구성이 완벽하게 균형을 이루<br />
              고 있습니다.
            </Paragraph >
            <Paragraph>
              오타키리  932에 특유의 특질들을 (Characteristics) 직접 경험하세요.
            </Paragraph >

          </ContentLayout>

          <ContentLayout desktopWidth="50%" column={true}>
            <span>
              Total Dissolved Solids
            </span>
            <Paragraph>
              <ContentLayout desktopWidth="30%">
                Low<br />
                Medium<br />
                High<br />
              </ContentLayout>
              <ContentLayout desktopWidth="60%">
                50-250 mg/l          Otakiri Source 932 130mg/l<br />
                250-500m g/l<br />
                5 0 0 - 1 5 0 0 mg/l<br />
              </ContentLayout>
            </Paragraph>
            <span>
              Total Dissolved Solids
            </span>
            <ContentLayout>
              <Paragraph>
                오타키리 물은 가볍게 탄산염화 되어 있고 낮은 TDS (Total Dissolved Solid) 수치를 가지고있습니다. 음식과 같이 섭취했을때 맛이나 느낌이  강하지 않으며 물만 섭취할 경우 상쾌함과 청결한 맛을 선사합니다.
              </Paragraph>
            </ContentLayout>
            <span>
              Total Dissolved Solids
            </span>
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
          </ContentLayout>
          <Paragraph>
            이산화규소 73mg/L.    중 탄 산 염 40mg/L     황산염 3.1mg/L     나트륨 12mg/L     칼륨 3.5 mg/L       칼슘 3.1mg/L      마그네슘 1.8 mg/L
          </Paragraph>
        </ContentLayout>
      </Section>

      <Section>
        <ContentLayout>
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
      </Section>

      <Section backgroundColor="#E9F1FF">
        <Title>ACCREDITIONS</Title>
        <ContentLayout>
          <Paragraph>
            EU 자격증은 크게 3가지로 나눠집니다. 미네랄 워터 (Mineral water), 스프링 워터 (Springwater) 그리고병에 담긴 보틀 워터 (Bottled water) 입니다. 미네랄워터와 스프링 워터는 무조건 땅 밑에서 지정된 물이어야 하며 살균 절차를 거치지 않고 바로 마셔야 안전한 물입니다. 이 두 종류에 물은 항상 지정된 수원지에서 바로 제조되어야 하며 자연산 미네랄 물은 안정적이고 일관적인 미네랄 구성을 보장해야 합니다. EU 자격증 중에서 자연산 미네랄 자격증 (Natural mineral water)이 제일 프리미엄 자격증입니다. Otakiri 932는 EU 자격증 중에서 제일 프리미엄 자격증인 자연산 미네랄 물 (Natural mineral water) 자격증을 보유하고 있습니다.
          </Paragraph>
        </ContentLayout>

        <ContentLayout>
          <Paragraph>
            Otakiri 932는 바이오 그로 (Bio Gro) 자격인증을 받은 공장에서 생산됩니다. 바이오 그로는 정확하고 세밀한 3단계의 자격 인증 절차가 있습니다.<br />
            1) 유기물 관리 공장 평가<br />
            2) 바이오 그로 심사원이 현장검사<br />
            3) 독립적인 자격 인증서입니다.<br />
            바이오 그로는 매년 심사 절차가 있으며 바이오 그로 뉴질랜드 심사 기준은 세계적인 심사 기준과 일치 합니다. 바이오 그로는 1년에 4번 세계 적인 기관들로보터 심사를 받음으로써, 쎄계적인 기준과 동일함을 증명합니다. 이런 심사 과정은 긴 시간과 노력이 필요함으로 소비자들에게 안심하고 믿을 수 있는 제품을 제공하는 것이 최우선이기에 매년 검사를 진행합니다.
          </Paragraph>
        </ContentLayout>
        <ContentLayout>
          <Paragraph>
            (Halal) 할랄은 아랍어로 허용이라는 뜻을 가지고 있습니다. 법적으로 먹고 쓸 수 있는 제품을 말합니다. 할랄 자격 인증서는 소비자들에 자연적인 제품을 자연 형태 그대로 공급되었다는 사실을 100% 증명합니다. 특히 뉴질랜드 같은,식품 및 음료 법이 엄중한 나라에서 할랄 인증서를 보유하는 것이 매우 중요합니다. 제품에 대한 확신 필요하시다면  할랄 자격 인증서가 있는 Otakiri 932 제품을 구매하세요.
          </Paragraph>
        </ContentLayout>
        <ContentLayout>
          <Paragraph>
            (Kosher) 코셔 자격 인증된 물은 타당함과 순수함이 검증된 제품입니다. 코셔 자격 인증서는 유태인의 식이요법 기준에 맞춰서 심사합니다. 공장에서부터 물이 가공되는 모든 과정까지 퀄리티와 제품의 순수함을 수시로 검사합니다. Otakiri 932도 빠짐없이 코셔 심사를 받으며 자격 인증서를 보유 중입니다.코셔 자격 인증서는 소비자들 사이에서 높은 퀄리티와 청정함을 증명합니다.
          </Paragraph>
        </ContentLayout>
      </Section>
      <Section>
        <ContentLayout>
          <ContentLayout desktopWidth="33%" tabletWidth="50%" mobileLargeWidth="100%" align='center' column={true}>
            <Image src='https://i.imgur.com/2oV0z4F.png' alt="Otakiri springs logo" height="300px"></Image>
          </ContentLayout>
          <ContentLayout desktopWidth="33%" tabletWidth="50%" mobileLargeWidth="100%" align='center' justify='center' column={true}>
            <Paragraph align='center'>
              57 Johnson Road,<br />
              Wakatane. Bay of Plenty,<br />
              New Zealand<br /><br />
              +64 0800 OTAKIRI<br />
              (0800 682 547)<br /><br />
              www.otakirisprings.co.nz
            </Paragraph>
            <Button
              isSecondary
              handleClick={(e): void => {
                e.preventDefault();
                console.log('CLICKED');
                navigate('/#contact-us');
              }}
            >
              Enquire
          </Button>
          </ContentLayout>
        </ContentLayout>
        <div></div>
      </Section>
    </PageLayout >
  );
};

export default Otakiri;
