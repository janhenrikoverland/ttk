import styled from 'styled-components';

export const SCHeaderWrapper = styled.div`
    padding: 0 12px;
    background-color: #fbfbfb;
`;

export const SCHeader = styled.header`
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
`;

export const SCName = styled.div`
    font-size: 20px;
    font-weight: 400;
    padding-top: 1px;
`;

export const SCSeason = styled.div`
    flex: 1;
    font-size: 20px;
    color: #666;
    padding-top: 1px;
`;

export const SCDateWrapper = styled.div`
    text-align: right;
    padding-top: 1px;
`;

export const SCDate = styled.div`
    font-size: 9px;
    color: #111;
`;

export const SCShadow = styled.div`
    width: 100%;
    height: 7px;
    box-shadow: inset 0px 3px 6px -4px rgba(0, 0, 0, 0.3);
`;
