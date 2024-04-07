import React from "react";

export const MiniPlay = (props) => (
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z"
            stroke="white"
            strokeWidth={4}
        />
    </svg>
);

export const TheaterMode = (props) => (
    <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24px"
        height="24px"
        viewBox="0 0 64 64"
        enableBackground="new 0 0 64 64"
        xmlSpace="preserve"
        {...props}
    >
        <rect
            x={1}
            y={12}
            fill="none"
            stroke="white"
            strokeWidth={8}
            strokeMiterlimit={10}
            width={62}
            height={40}
        />
    </svg>
);
export const FullScreen = (props) => (
    <svg
        width="20px"
        height="20px"
        viewBox="0 -0.5 17 17"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="si-glyph si-glyph-square-dashed-2"
        {...props}
    >
        <title>{"1198"}</title>
        <defs />
        <g stroke="white" strokeWidth={1} fill="none" fillRule="evenodd">
            <g fill="white">
                <path
                    d="M10,0.834 L15.083,0.834 L15.083,5.875 L15.917,5.875 L15.917,0 L10,0 L10,0.834 Z"
                    className="si-glyph-fill"
                />
                <path
                    d="M0.834,5.875 L0.834,0.834 L5.917,0.834 L5.917,0 L0,0 L0,5.875 L0.834,5.875 Z"
                    className="si-glyph-fill"
                />
                <path
                    d="M15.083,10.125 L15.083,15.166 L10,15.166 L10,16 L15.917,16 L15.917,10.125 L15.083,10.125 Z"
                    className="si-glyph-fill"
                />
                <path
                    d="M5.917,15.166 L0.834,15.166 L0.834,10.125 L0,10.125 L0,16 L5.917,16 L5.917,15.166 Z"
                    className="si-glyph-fill"
                />
            </g>
        </g>
    </svg>
);

export const YtLikeButton = (props) => (
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
            stroke="white"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const YtDislikeButton = (props) => (
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        transform="matrix(-1,0,0,-1,0,0)"
        {...props}
    >
        <path
            d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
            stroke="white"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const YtShareButton = (props) => (
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        id="share"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            id="Rectangle_3"
            data-name="Rectangle 3"
            width={24}
            height={24}
            fill="none"
        />
        <path
            id="Rectangle"
            d="M12,4V0l8,7-8,7V10S0,9.069,0,14.737C0,3.4,12,4,12,4Z"
            transform="translate(2 5)"
            fill="none"
            stroke="white"
            strokeMiterlimit={10}
            strokeWidth={1}
        />
    </svg>
);

// eslint-disable-next-line
export const YtDownloadButton1 = (props) => (
    <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32"
        enableBackground="new 0 0 32 32"
        xmlSpace="preserve"
        {...props}
    >
        <line
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeMiterlimit={10}
            x1={25}
            y1={28}
            x2={7}
            y2={28}
        />
        <line
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeMiterlimit={10}
            x1={16}
            y1={23}
            x2={16}
            y2={4}
        />
        <polyline
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeMiterlimit={10}
            points="9,16 16,23 23,16 "
        />
    </svg>
);
export const YtDownloadButton = (props) => (
    <svg
        width="22px"
        height="22px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
    >
        <path stroke="white" strokeLinecap="round" strokeWidth={2} d="M16 22V5" />
        <path
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 16l7 7 7-7M9 27h14"
        />
    </svg>
);

export const YtMenuButton = (props) => (
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx={6.5} cy={12} r={1.5} fill="white" />
        <circle cx={12} cy={12} r={1.5} fill="white" />
        <circle cx={17.5} cy={12} r={1.5} fill="white" />
    </svg>
);

export const YtVerifiedTick = (props) => (
    <svg
        width={12}
        height={12}
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M800 510a30 30 0 1 1 30-30 30 30 0 0 1-30 30Zm-16.986-23.235a3.484 3.484 0 0 1 0-4.9l1.766-1.756a3.185 3.185 0 0 1 4.574.051l3.12 3.237a1.592 1.592 0 0 0 2.311 0l15.9-16.39a3.187 3.187 0 0 1 4.6-.027l1.715 1.734a3.482 3.482 0 0 1 0 4.846l-21.109 21.451a3.185 3.185 0 0 1-4.552.03Z"
            transform="translate(-770 -450)"
            style={{
                fill: "#aaaaaa",
                fillRule: "evenodd",
            }}
        />
    </svg>
);

export const YtSort = (props) => (
    <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        id="align-left-2"
        data-name="Flat Line"
        xmlns="http://www.w3.org/2000/svg"
        className="icon flat-line"
        {...props}
    >
        <path
            id="primary"
            d="M3,12H17M3,6H21M3,18H13"
            style={{
                fill: "none",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
            }}
        />
    </svg>
);

export const SearchBarLogo = (props) => (
    <svg
        width="22px"
        height="22px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z"
            fill="#ffffffcc"
        />
    </svg>
);