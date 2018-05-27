import styled from 'styled-components';

export const SCHeaderWrapper = styled.div`
    padding: 0 12px;
    background-color: #fff;
    font-weight: 400;
    color: #777;
`;

export const SCHeader = styled.header`
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    position: relative;
    top: 2px;
`;

export const SCLogo = styled.div`
    flex: 1;
    font-weight: 700;
`;

export const SCName = styled.span`
    color: #333;
`;

export const SCSeason = styled.span`
    color: #888;
`;

export const SCGameWeek = styled.div`
    flex: 1;
    text-align: center;
`;

export const SCLastUpdated = styled.div`
    flex: 1;
    text-align: right;
`;

export const SCShadow = styled.div`
    width: 100%;
    height: 7px;
    box-shadow: inset 0px 4px 6px -4px rgba(0, 0, 0, 0.3);
`;
