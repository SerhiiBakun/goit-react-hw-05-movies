import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: solid grey 2px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Poster = styled.img`
  max-width: 250px;
  margin-right: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const Score = styled.span`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const InfoTitle = styled.p`
  font-weight: 700;
`;

export const Overview = styled.p`
  margin-bottom: 20px;
`;

export const Genres = styled.div`
  margin-bottom: 20px;
`;

export const Genre = styled.span`
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
`;

export const AdditionalInformation = styled.ul`
  padding-bottom: 20px;
  border-bottom: solid 2px grey;
`;
