import styled from 'styled-components'

export const Load = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div {
        display: inline-block;
        position:fixed;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #ccc;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #ccc transparent transparent transparent;
    }
    div:nth-child(1) {
        animation-delay: -0.45s;
    }
    div:nth-child(2) {
        animation-delay: -0.3s;
    }
    div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes  lds-ring{
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`