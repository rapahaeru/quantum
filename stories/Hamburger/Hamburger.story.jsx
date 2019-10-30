import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  AutoExample,
  Tab,
  Example,
  Title,
  StoryContainer,
} from '@catho/quantum-storybook-ui';

import Hamburger from '../../components/Hamburger';
import Button from '../../components/Button';
import { colors } from '../../components/shared/theme';
import { Container } from '../../components/Grid';

const TabExample = (
  <Tab title="Examples">
    <StoryContainer>
      <Container fluid>
        <Title as="h2">Default</Title>
        <Example
          component={
            <div>
              <span>
                Here is a Hamburger: (default / showNotification / opened)
              </span>
              <br />
              <div style={{ backgroundColor: '#000' }}>
                <Hamburger />
                <Hamburger showNotification />
                <Hamburger isOpened />
              </div>
            </div>
          }
          code={`<div>
  <span>
    Here is a Hamburger: (default / showNotification / opened)
  </span>
  <br />
  <div style={{ backgroundColor: '#000' }}>
    <Hamburger />
    <Hamburger showNotification />
    <Hamburger isOpened />
  </div>
</div>`}
        />

        <Title as="h2">Inverted</Title>
        <Example
          component={
            <div>
              <span>
                Here is a Hamburger: (default / showNotification / opened)
              </span>
              <br />
              <div>
                <Hamburger inverted />
                <Hamburger inverted showNotification />
                <Hamburger inverted isOpened />
              </div>
            </div>
          }
          code={`<div>
  <span>
    Here is a Hamburger: (default / showNotification / opened)
  </span>
  <br />
  <div style={{ backgroundColor: '#000' }}>
    <Hamburger />
    <Hamburger showNotification />
    <Hamburger isOpened />
  </div>
</div>`}
        />
      </Container>
    </StoryContainer>
  </Tab>
);

const description = `Hamburgers are used for showing quantity of something, as
warnings, inbox messages and others.`;

storiesOf('Hamburger', module).add('Hamburger', () => (
  <AutoExample
    description={description}
    component={Hamburger}
    componentProps={{
      number: 10,
    }}
    additionalTabs={TabExample}
  />
));
