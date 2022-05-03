import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary.main};
  width: 944px;
  height: 500px;
  left: 16%;
  align-items: center;
  position: relative;
  margin-top: 3rem;
  border-radius: 5px;
  padding: 30px;

  p {
    margin-top: 24px;
    font-size: 20px;
    line-height: 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Uploader = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  font-size: calc(5px + 2vmin);
  width: 392px;
  height: 396px;
  border: 2px dashed rgba(216, 255, 254, 0.4);
  box-sizing: border-box;
  border-radius: 4px;
  svg {
    color: #008a86;
    left: 140px;
    font-size: 4rem;
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

export const Filelists = styled.div`
  display: flex;
  justify-content: space-around;
  width: 392px;
  height: 396px;
  border: 2px dashed rgba(216, 255, 254, 0.4);
  box-sizing: border-box;
  border-radius: 4px;
`;
export const ContentFile = styled.div`
  font-size: 11px;
  display: flex;
  margin-top: 20px;

  justify-content: space-around;
  color: ${props => props.theme.colors.primary.text};
  margin-top: px;
  weight: 700, bold;

  svg {
    margin-top: 3px;
    margin-left: 15px;
  }
`;
