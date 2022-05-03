import { Container, Content, Filelists, Uploader } from './styles';

export default function upload() {
  return (
    <Container>
      <Content>
        <Uploader>
          <h1>Upload</h1>
        </Uploader>
        <Filelists>
          <h1>Arquivos Enviados</h1>
        </Filelists>
      </Content>
    </Container>
  );
}
