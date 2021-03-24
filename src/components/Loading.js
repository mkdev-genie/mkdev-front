import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <LoadingWrap>
      <Spinner />
      <Text>Loading..</Text>
    </LoadingWrap>
  );
};

export default Loading;

const LoadingWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.dark};
`;
const rotate = keyframes`
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
		opacity: 0;
	}
`;
const Spinner = styled.div`
  width: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(4)};
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.light};
  animation: ${rotate} 1s infinite ease-in-out;
`;
const Text = styled.span`
  margin-top: ${({ theme }) => theme.spacing(2.5)};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  color: ${({ theme }) => theme.color.light};
`;
