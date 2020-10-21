import React from 'react';

import {
  ContentCtn,
  EndCtn,
  FooterCtn,
  SectionCtn,
  SocialIcon,
  SocialIconCtn,
  FooterText,
  FooterLink,
} from './index.style';

import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';

const Footer: React.FC<any> = (): React.ReactElement => {
  return (
    <FooterCtn>
      <ContentCtn>
        <SectionCtn>
          <FooterText>
            <FooterLink href="mailto:probable@probable.co.kr">probable@probable.co.kr</FooterLink><br />
            Ph: (+82) 010-7917-0906<br />
            Fax: 032-204-2787<br />
            <br />
            사업자 번호: 782-22-01090<br />
            통신관매 신고 번호: 2020 - 경기부천 - 0310호
          </FooterText>
        </SectionCtn>

        <SectionCtn>
          <FooterText>
            경기도 부천시 소향로 131,<br />
            일산빌딩 7층 131호 (중동)<br />
            <br />
            131 Sohyang-ro, 7th floor,<br />
            Jung 1(il)-dongWonmi-gu,<br />
            Bucheon, Gyeonggi-do,<br />
            South Korea<br />
            <br />
            고객센터 운영시간<br />
            (훨~금) 9:00 ~ 18:00<br />
            주말및 공휴일 휴무
          </FooterText>
        </SectionCtn>

        <EndCtn>
          <SocialIconCtn>
            <SocialIcon onClick={() => window.open('https://www.instagram.com/probable.korea/', '_blank')}>
              <FacebookSquare></FacebookSquare>
            </SocialIcon>
            <SocialIcon onClick={() => window.open('https://www.facebook.com/Probable-111459767290836/', '_blank')}>
              <Instagram></Instagram>
            </SocialIcon>
          </SocialIconCtn>
          <FooterText>
            Copyright © 2020 Probable
          </FooterText>
          <FooterText>
            All rights reserved
          </FooterText>
        </EndCtn>
      </ContentCtn>
    </FooterCtn>
  );
};

export default Footer;