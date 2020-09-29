/* eslint-disable no-alert */
import React, { useEffect, useContext, useState } from 'react';
import _ from 'lodash'


import Section from '../../components/section';

import Image from '../../../components/image';
import ContentLayout from '../../../components/contentLayout';

import ContactForm from '../../components/contactForm';
import PageLayout from '../../components/pageLayout';

import {
  ContactInfoCtn,
  FormCtn,
  SectionCtn,
  Title,
} from './index.style';

const ContactUs: React.FC<any> = (): React.ReactElement => {

  useEffect(() => {

  }, []);


  return (
    <PageLayout>
      <Section backgroundColor="#ffffff">
        <Title>CONTACT US</Title>
        <ContentLayout>
          <ContentLayout desktopWidth="30%">
            <FormCtn>
              <ContactForm />
            </FormCtn>
          </ContentLayout>
          <ContentLayout desktopWidth="50%" column={true}>
            <ContentLayout justify="space-between">
              <ContactInfoCtn>
                <SectionCtn>
                  probable@probable.co.kr
                <br /><br />
                +82 010 7917 0906
              </SectionCtn>
                <SectionCtn>
                  131 Sohyang-ro, 7th floor,<br />
                Jung 1(il)-dongWonmi-gu, <br />
                Bucheon, Gyeonggi-do, <br />
                South Korea<br />
                  <br />
                경기도 부천시 소향로, <br />
                7층  131 (중동)
              </SectionCtn>
              </ContactInfoCtn>
            </ContentLayout>
            <ContentLayout justify="center">
              <Image src='https://i.imgur.com/HmHqEei.png' alt="Location of Probable" height="300px"></Image>
            </ContentLayout>
          </ContentLayout>
        </ContentLayout>
      </Section>
      <div></div>
    </PageLayout>
  );
};

export default ContactUs;
