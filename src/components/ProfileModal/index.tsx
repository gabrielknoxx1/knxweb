import { Container } from './styles';


function ProfileModal() {
  return (
    <Container>
      <h1>Oi Seja bem vindo à meu site,  selecione seu  o perfil que mais se adequa a você ?</h1>

      <div>
        <button type="button" onClick={() => {}}>
          Visitante
        </button>
        <button type="button" onClick={() => {}}>
          RH - Head Hunter
        </button>
        <button type="button" onClick={() => {}}>
          Procuro um freelancer
        </button>
      </div>
    </Container>
  );
};

export default ProfileModal;
