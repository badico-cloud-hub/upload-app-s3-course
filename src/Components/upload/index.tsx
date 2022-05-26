///libs//
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import mocke from './mocke';
///Icons ///
import FileUploadIcon from '@mui/icons-material/FileUpload';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewComfySharpIcon from '@mui/icons-material/ViewComfySharp';
import RectangleRoundedIcon from '@mui/icons-material/RectangleRounded';
import SearchIcon from '@mui/icons-material/Search';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
/// style css///
import {
  Container,
  Content,
  Filelists,
  Uploader,
  ContentIcons,
  ThumbsContainer,
  ThumbInfor,
  Thumb,
  ButtonRemove,
  ButtonRemoveGrid,
  ButtonRemoveOne
} from './styles';

interface UploadProps {
  preview: string;
  name: string;
  id: number;
  path: string;
}

export default function Upload(file: UploadProps) {
  const [files, setFiles] = useState([...mocke]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: true,

    onDrop: acceptedFiles => {
      setFiles(previous => {
        const newsfiles = acceptedFiles.map(file =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        );
        return [...newsfiles, ...previous];
      });
    }
  });

  const handleRemoveImage = useCallback(
    name => {
      const newFiles = files.filter(file => file.name !== name);

      setFiles(newFiles);
    },

    [files]
  );

  const Thumbs = () =>
    files.map((file, index) => (
      <Thumb key={index}>
        <ThumbInfor>
          <img src={file.preview} />
          <div key={file.name} />
          <div key={file.path}>{file.path}</div>
        </ThumbInfor>
        <ButtonRemove
          type="button"
          onClick={() => handleRemoveImage(file.name)}
        >
          <DeleteForeverIcon />
        </ButtonRemove>
      </Thumb>
    ));

  const ThumbGrid = () =>
    files.map((file, index) => (
      <Thumb key={index}>
        <div>
          <img src={file.preview} />
          <div key={file.name} />
          <div key={file.path}>{file.path}</div>
        </div>
        <ButtonRemoveGrid
          type="button"
          onClick={() => handleRemoveImage(file.name)}
        >
          <DeleteForeverIcon />
        </ButtonRemoveGrid>
      </Thumb>
    ));

  const ThumbOne = () =>
    files.map((file, index) => (
      <Thumb key={index}>
        <div className="one">
          <img src={file.preview} />
          <div key={file.name} />
          <div key={file.path}>{file.path}</div>
        </div>
        <ButtonRemoveOne
          type="button"
          onClick={() => handleRemoveImage(file.name)}
        >
          <DeleteForeverIcon />
        </ButtonRemoveOne>
      </Thumb>
    ));

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <Container>
      <Content>
        <Uploader>
          <div className="file" {...getRootProps()}>
            <FileUploadIcon />
            <input {...getInputProps()} />
            <p>Arraste e solte arquivos para fazer upload</p>
            <strong>OU</strong>
            <button>
              <h2>Buscar</h2>
              <SearchIcon />
            </button>
          </div>
          <h5>Arquivos suportados: Lorem Ipsun</h5>
        </Uploader>

        <Filelists>
          <h1>Arquivos enviados</h1>
          <TabsUnstyled defaultValue={0}>
            <ContentIcons>
              <TabsListUnstyled>
                <TabUnstyled>
                  <ViewComfySharpIcon />
                </TabUnstyled>
                <TabUnstyled>
                  <GridViewRoundedIcon />
                </TabUnstyled>
                <TabUnstyled>
                  <RectangleRoundedIcon />
                </TabUnstyled>
              </TabsListUnstyled>
            </ContentIcons>

            <ThumbsContainer>
              <TabPanelUnstyled value={0}>
                <Thumbs />
              </TabPanelUnstyled>
              <ThumbInfor className="namegrid">
                <TabPanelUnstyled className="grid" value={1}>
                  <ThumbGrid />
                </TabPanelUnstyled>
              </ThumbInfor>

              <ThumbInfor className="nameviewOne">
                <TabPanelUnstyled className="viewone" value={2}>
                  <ThumbOne />
                </TabPanelUnstyled>
              </ThumbInfor>
            </ThumbsContainer>
          </TabsUnstyled>
        </Filelists>
      </Content>
    </Container>
  );
}
