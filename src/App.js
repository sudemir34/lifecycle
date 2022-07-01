import React, {Component} from 'react';
import Mounting from './Mounting';
import UnMounting from './UnMounting';
import Updating from './Updateing';
import Updateing2 from './Updateing2';
import {Container, Row, Col} from 'reactstrap';

export default class App extends Component {
  render () {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Mounting favcol="Yollow" />
            </Col>
            <Col>
              <Updating />
            </Col>

            <Col>
              <Updateing2 />
            </Col>

            <Col>
              <UnMounting />

            </Col>

          </Row>

        </Container>
      </div>
    );
  }
}
