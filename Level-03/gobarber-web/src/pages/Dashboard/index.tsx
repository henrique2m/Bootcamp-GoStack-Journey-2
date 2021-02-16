import React, { useState } from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContainer,
  Profile,
  Schedule,
  Content,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContainer>
          <img src={logoImg} alt="Gobarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span> Bem-vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContainer>
      </Header>

      <Content>
        <Schedule>
          <h1> Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 15</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>

            <div>
              <img
                src="https://avatars.githubusercontent.com/u/53455458?s=460&u=edc2d0cec8d5e617144fab573cae142cae4449a2&v=4"
                alt="Henrique Moreira"
              />

              <p>Henrique Moreira</p>

              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/53455458?s=460&u=edc2d0cec8d5e617144fab573cae142cae4449a2&v=4"
                  alt="Henrique Moreira"
                />

                <strong>Henrique Moreira</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/53455458?s=460&u=edc2d0cec8d5e617144fab573cae142cae4449a2&v=4"
                  alt="Henrique Moreira"
                />

                <strong>Henrique Moreira</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>

        <Calendar> Calendar </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
