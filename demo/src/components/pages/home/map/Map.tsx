import React, { FC } from 'react';
import { motion } from 'framer-motion';
import World from './world/World';

interface Props {
  currentRegionId?: string;
  setRegion: (regionId: string) => void;
}

const REGION_ANIMATION = {
  // whileHover: { scale: 1.2 },
  // whileTap: { scale: 0.98 },
  fill: 'white',
  fillOpacity: 0.1,
};

const Map: FC<Props> = ({ currentRegionId, setRegion }) => {
  const getRegionColor = (regionId: string) => {
    return regionId === currentRegionId ? '#2165F5' : '#9CA5B7';
  };

  return (
    <svg
      className="pb-10"
      width="100%"
      viewBox="0 0 1090 495"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <World />

        <g>
          <motion.g
            onClick={() => setRegion('australia')}
            {...REGION_ANIMATION}
          >
            <g id="australia" filter="url(#filter0_d)">
              <circle
                cx="948"
                cy="403"
                r="7.5"
                stroke={getRegionColor('australia')}
                strokeWidth="5"
              />
            </g>
          </motion.g>
          <motion.g onClick={() => setRegion('us-east')} {...REGION_ANIMATION}>
            <g id="us_east" filter="url(#filter1_d)">
              <circle
                cx="199.336"
                cy="143.631"
                r="7.5"
                stroke={getRegionColor('us-east')}
                strokeWidth="5"
              />
            </g>
          </motion.g>
          <motion.g onClick={() => setRegion('us-west')} {...REGION_ANIMATION}>
            <g id="us_west" filter="url(#filter2_d)">
              <circle
                cx="65.3364"
                cy="158.631"
                r="7.5"
                stroke={getRegionColor('us-west')}
                strokeWidth="5"
              />
            </g>
          </motion.g>
          <motion.g onClick={() => setRegion('brazil')} {...REGION_ANIMATION}>
            <g id="brazil" filter="url(#filter3_d)">
              <circle
                cx="299"
                cy="350"
                r="7.5"
                stroke={getRegionColor('brazil')}
                strokeWidth="5"
              />
            </g>
          </motion.g>
          <motion.g
            onClick={() => setRegion('south-africa')}
            {...REGION_ANIMATION}
          >
            <g id="south_africa" filter="url(#filter4_d)">
              <circle
                cx="532"
                cy="399"
                r="7.5"
                stroke={getRegionColor('south-africa')}
                strokeWidth="5"
              />
            </g>
          </motion.g>
          <motion.g
            onClick={() => setRegion('europe-west')}
            {...REGION_ANIMATION}
          >
            <g id="uk" filter="url(#filter5_d)">
              <circle
                cx="456"
                cy="97"
                r="7.5"
                stroke={getRegionColor('europe-west')}
                strokeWidth="5"
              />
            </g>
          </motion.g>
          <motion.g onClick={() => setRegion('india')} {...REGION_ANIMATION}>
            <g id="india" filter="url(#filter6_d)">
              <circle
                cx="702"
                cy="218"
                r="7.5"
                stroke={getRegionColor('india')}
                strokeWidth="5"
              />
            </g>
          </motion.g>
          <motion.g onClick={() => setRegion('japan')} {...REGION_ANIMATION}>
            <g id="japan" filter="url(#filter7_d)">
              <circle
                cx="900"
                cy="154"
                r="7.5"
                stroke={getRegionColor('japan')}
                strokeWidth="5"
              />
            </g>
          </motion.g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="928"
          y="393"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="179.336"
          y="133.631"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d"
          x="45.3364"
          y="148.631"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d"
          x="279"
          y="340"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d"
          x="512"
          y="389"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d"
          x="436"
          y="87"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d"
          x="682"
          y="208"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d"
          x="880"
          y="144"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Map;
