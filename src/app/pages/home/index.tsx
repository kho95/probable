/* eslint-disable no-alert */
import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from '@reach/router';
import _ from 'lodash'
import { HashLink as Link } from 'react-router-hash-link';

import Button from '../../../components/button';
import ContentLayout from '../../../components/contentLayout';
import Image from '../../../components/image';
import Paragraph from '../../../components/paragraph';
import ContactForm from '../../components/contactForm';

import Hero from '../../components/hero';
import TextWithImage from '../../components/text-with-image';
import PageLayout from '../../components/pageLayout';
import Section from '../../components/section';
import Map from '../../components/google-map';

import { ArrowDownwardOutline } from '@styled-icons/evaicons-outline/ArrowDownwardOutline';

import {
  DownArrow,
  Title,
  Header,
  ContactInfoCtn,
  FormCtn,
  SectionCtn,
} from './index.style';

const Home: React.FC<any> = (): React.ReactElement => {

  return (
    <PageLayout>
      <Hero
        backgroundImg="https://i.imgur.com/7MUHhn2.jpg" overlayColor='#00000090'>
        <Image src='https://i.imgur.com/3OaGeti.png' alt="Otakiri 932" height="300px"></Image>
        <Header>PROBABLE KOREA</Header>
        <DownArrow>
          <ArrowDownwardOutline></ArrowDownwardOutline>
        </DownArrow>
      </Hero>

      <Section backgroundColor="#ffffff">
        <TextWithImage img="https://i.imgur.com/YsIBqOD.png">
          <Title>ABOUT US</Title>
          <Paragraph>
            더 큰 가능성의 시작이라 (The beginning of greater possibilites.)”는 프라버블의 슬로건을 통해 해외 및 국내의 가능성 있는 상품을 투자 제작 및 유통하고 있습니다.
          </Paragraph>
          <Paragraph>
            잠재력(Potential), 가능성(Possibility) 잠재된 가능성을 알아보는 기업이 되겠습니다.
          </Paragraph>
          <Paragraph>
            당신의 가능성
            프라버블 코리아가 함께 하겠습니다..
          </Paragraph>
          <Paragraph>
            대표이사 / CEO
          </Paragraph>
          <Paragraph>
            Able Yoo
          </Paragraph>
        </TextWithImage>
      </Section>

      <Section id="products">
        <Title>OUR PRODUCTS</Title>
        <TextWithImage img="https://i.imgur.com/9a7duqW.jpg" imgRight={true}>
          <Title>Otakiri - New Zealand</Title>
          <Paragraph>
            뉴질랜드 북섬 중심부에 위치한 동부 플랜티, 오타키리 지역은 수백만 년
            동안 산업과 인간의 개입이 없었던 천연 그대로의 아름다운 지역입니다.
          </Paragraph>
          <Paragraph>
            오타키리 물의 출처는 수 문학자들 (Hydrologisits)이 “932”란 이름으로
            지정한 알티시안 (Artesian) 장소입니다.
          </Paragraph>
          <Paragraph>
            일년 내내 계절이 바뀌어도 물 수압은 변함이 없습니다. 물 고유의 청정함
            (Purity)이 그대로 전달될 수 있도록 수원지에서 바로 제조됩니다.
          </Paragraph>
          <div>
            <Button
              isSecondary
              handleClick={(e): void => {
                e.preventDefault();
                console.log('CLICKED');
                navigate('/otakiri');
              }}
            >
              Learn more
          </Button>
          </div>
        </TextWithImage>
      </Section>
      <Section id="contact-us">
        <Title>CONTACT US</Title>
        <ContentLayout>
          <ContentLayout desktopWidth="30%">
            <FormCtn>
              <ContactForm />
            </FormCtn>
          </ContentLayout>
          <ContentLayout desktopWidth="50%" column={true}>
            <ContentLayout justify="center">
              <Map />
            </ContentLayout>
            <ContentLayout justify="space-between">
              <ContactInfoCtn>
                <SectionCtn>
                  probable@probable.co.kr<br />
                  Ph: (+82) 010-7917-0906<br />
                  Fax: 032-204-2787
              </SectionCtn>
                <SectionCtn>
                  경기도 부천시 소향로 131, <br />
                  일산빌딩 7층 131호 (중동)<br /><br />
                  131 Sohyang-ro, 7th floor,<br />
                  Jung 1(il)-dongWonmi-gu, <br />
                  Bucheon, Gyeonggi-do, <br />
                  South Korea<br />
                </SectionCtn>
              </ContactInfoCtn>
            </ContentLayout>
          </ContentLayout>
        </ContentLayout>
      </Section>
    </PageLayout >
  );
};

export default Home;
