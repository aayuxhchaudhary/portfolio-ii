import React from 'react';
import styled from 'styled-components';

const CombinedPattern = ({ children }) => {
  return (
    <StyledWrapper className="flex min-h-screen w-full relative overflow-hidden">
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="advanced-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves={8} result="noise" />
          <feSpecularLighting in="noise" surfaceScale={300} specularConstant={2000} specularExponent={20} lightingColor="#fff" result="specular">
            <fePointLight x={50} y={50} z={600} />
          </feSpecularLighting>
          <feComposite in="specular" in2="SourceGraphic" operator="in" result="litNoise" />
          <feBlend in="SourceGraphic" in2="litNoise" mode="overlay" />
        </filter>
      </svg>

      <div className="w-[5%] min-h-screen futuristic-pattern relative flex-shrink-0">
        <span className="ripple-overlay" />
      </div>

      <div className="w-[90%] min-h-screen bg-[#fafafa] relative text-gray-900 flex-shrink-0">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
              repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>

      <div className="w-[5%] min-h-screen futuristic-pattern relative flex-shrink-0">
        <span className="ripple-overlay" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .futuristic-pattern {
    background: linear-gradient(
      145deg,
      rgb(0, 0, 0),
      rgba(35, 35, 35, 0.9),
      rgb(50, 50, 50)
    );
    filter: url(#advanced-texture);
  }
`;

export default CombinedPattern;