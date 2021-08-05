import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <Container>
      <svg
        id="logo"
        width="100%"
        height="100%"
        viewBox="0 0 393 359"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M199.254 283.369C195.794 285.402 192.737 286.434 190.083 286.464C187.248 286.534 185.089 285.543 183.606 283.492L181.125 280.16C183.114 278.243 184.206 275.664 184.401 272.424C184.435 271.52 184.308 270.83 184.02 270.354C183.625 269.703 183.099 269.57 182.443 269.956L182.329 270.023C182.319 270.063 182.276 270.105 182.2 270.15C182.664 274.872 180.913 278.398 176.948 280.728C174.927 281.916 172.931 282.494 170.96 282.463C169.014 282.418 166.795 281.666 164.302 280.209L164.074 280.343C163.392 280.743 163.226 281.232 163.575 281.808C163.818 282.209 164.243 282.571 164.85 282.894C166.877 283.979 168.937 284.552 171.03 284.614C172.703 284.718 174.242 284.459 175.646 283.838L179.648 291.119C178.725 292.986 177.546 294.631 176.112 296.051C174.718 297.482 172.468 299.11 169.361 300.936C166.279 302.746 163.162 303.763 160.008 303.985C156.132 304.259 153.396 303.08 151.802 300.449C149.813 297.167 145.558 288.676 139.036 274.975C135.659 267.82 133.373 262.776 132.177 259.843C133.382 256.009 136.523 252.6 141.6 249.616C145.287 247.449 148.754 246.33 151.998 246.258L158.273 251.948L160.295 258.252C160.422 258.687 160.591 259.08 160.804 259.431C161.335 260.308 162.114 260.462 163.139 259.894L157.742 242.933C158.444 241.774 159.507 240.503 160.931 239.123C162.34 237.717 164.029 236.436 165.999 235.278C169.687 233.111 172.795 232.134 175.322 232.348C177.859 232.522 180.18 233.978 182.285 236.716C182.695 237.223 183.363 238.071 184.289 239.259C198.461 257.502 206.603 268.364 208.713 271.847C207.686 276.426 204.533 280.266 199.254 283.369ZM235.506 262.728C228.509 266.839 221.821 268.153 215.441 266.67C208.945 265.221 203.655 261.126 199.571 254.386C195.471 247.621 194.356 241.005 196.225 234.538C197.934 228.54 201.806 223.767 207.843 220.219C213.88 216.672 219.719 215.483 225.36 216.652C231.012 217.782 235.295 220.753 238.211 225.563C240.807 229.848 241.263 233.963 239.578 237.909C238.045 241.596 234.879 244.85 230.08 247.67C226.493 249.778 223.014 250.82 219.643 250.796C219.532 251.065 219.598 251.4 219.841 251.801C220.296 252.553 221.712 252.656 224.087 252.109C226.492 251.613 228.958 250.623 231.483 249.139C234.035 247.64 236.156 245.968 237.847 244.125C239.549 242.241 240.766 240.49 241.497 238.871C242.422 239.041 243.494 239.736 244.713 240.956C245.943 242.137 246.914 243.316 247.628 244.493C248.326 245.646 248.835 246.74 249.154 247.776C248.186 250.587 246.879 252.952 245.233 254.871C242.941 257.645 239.698 260.264 235.506 262.728ZM219.594 237.574C220.857 236.832 221.199 235.985 220.622 235.033C220.076 234.131 219.133 234.073 217.795 234.86C216.456 235.646 216.118 236.813 216.782 238.36C217.747 238.37 218.684 238.108 219.594 237.574ZM266.77 243.438C263.764 245.204 261.038 246.076 258.592 246.052C255.913 246.097 253.905 245.017 252.569 242.813L240.84 223.458C238.089 222.254 235.795 220.136 233.958 217.104C232.105 214.048 231.249 210.967 231.387 207.861L237.184 204.454C240.165 202.703 242.876 202.401 245.318 203.548C245.112 204.621 245.095 205.837 245.268 207.196C245.441 208.555 245.672 209.473 245.961 209.949C246.234 210.4 246.553 210.672 246.916 210.763C247.306 210.84 247.728 210.745 248.182 210.478C246.956 206.476 247.087 202.933 248.575 199.85C249.786 197.27 251.894 195.097 254.9 193.33C258.638 191.133 262.046 190.201 265.125 190.532C267.097 192.092 268.964 194.324 270.725 197.231C272.472 200.112 273.477 203.072 273.743 206.11C273.157 207.065 272.206 208.151 270.887 209.368C269.554 210.559 268.117 211.607 266.576 212.513C265.036 213.418 263.586 214.134 262.227 214.661C260.877 215.148 259.872 215.467 259.21 215.618C259.129 215.937 259.203 216.285 259.431 216.661C259.658 217.037 260.073 217.184 260.674 217.102C261.286 216.981 262.241 216.691 263.539 216.234L274.973 235.1C273.268 238.447 270.533 241.226 266.77 243.438ZM290.72 182.83L299.74 197.713C302.002 201.446 304.384 203.342 306.886 203.401C306.987 203.511 307.144 203.742 307.357 204.093L307.767 204.769C309.999 208.452 310.666 211.815 309.769 214.856C308.963 217.708 306.994 220.055 303.862 221.895C300.755 223.721 297.66 224.351 294.576 223.784C290.674 223.054 287.424 220.546 284.828 216.262L270.023 191.833C270.281 191.24 270.614 190.688 271.023 190.175C271.432 189.663 271.835 189.086 272.234 188.444C270.814 188.531 269.252 188.158 267.548 187.325C265.829 186.466 264.415 185.122 263.307 183.293C261.393 180.136 260.878 176.94 261.759 173.703C262.641 170.467 264.597 167.958 267.628 166.177C270.685 164.381 273.858 163.909 277.149 164.761C280.45 165.574 283.035 167.521 284.902 170.602C286.406 173.083 286.944 175.723 286.516 178.522C286.074 181.296 284.873 183.582 282.914 185.379C283.491 186.331 284.145 186.592 284.878 186.162C286.166 185.405 287.176 184.132 287.907 182.343C289.388 182.526 290.326 182.688 290.72 182.83Z"
          fill="black"
        />
        <path
          d="M102.94 105.793C102.793 128.062 102.842 148.118 103.138 166.187M339.884 105.793C342.569 243.762 324.72 311.51 295.339 325.665C265.957 339.82 184.449 341.707 147.486 325.665C126.811 316.692 115.005 297.992 108.796 255.834M103.138 166.187C103.138 166.187 62.1857 163.356 53.6557 166.187C45.1257 169.018 20.9395 237.519 63.1334 260.553C79.3228 266.544 90.4941 260.995 108.796 255.834M103.138 166.187C103.761 204.145 105.481 233.332 108.796 255.834"
          stroke="black"
          strokeWidth="25"
        />
        <path
          d="M340 110.5C340 110.612 339.966 112.892 334.955 117.003C330.052 121.027 322.049 125.318 310.835 129.209C288.549 136.943 256.788 142 221 142C185.212 142 153.451 136.943 131.165 129.209C119.951 125.318 111.948 121.027 107.045 117.003C102.034 112.892 102 110.612 102 110.5C102 110.388 102.034 108.108 107.045 103.997C111.948 99.9735 119.951 95.6819 131.165 91.7906C153.451 84.057 185.212 79 221 79C256.788 79 288.549 84.057 310.835 91.7906C322.049 95.6819 330.052 99.9735 334.955 103.997C339.966 108.108 340 110.388 340 110.5Z"
          stroke="black"
          strokeWidth="30"
        />
        <path
          d="M167.28 27.795C170.344 29.0573 173.851 27.5968 175.114 24.5329C176.376 21.469 174.915 17.962 171.851 16.6997L167.28 27.795ZM169.566 87.2454L165.089 83.2508L164.543 83.8626L164.181 84.5984L169.566 87.2454ZM166.95 111.849C169.933 113.294 173.521 112.047 174.966 109.065C176.41 106.082 175.164 102.494 172.181 101.049L166.95 111.849ZM171.851 16.6997C168.916 15.4905 165.997 15.9589 163.691 17.2441C161.581 18.4193 160.025 20.2222 158.909 21.9275C156.657 25.371 155.169 29.9979 154.58 34.6363C153.987 39.3057 154.223 44.6202 156.038 49.4286C157.904 54.3729 161.521 58.9006 167.479 61.1105L171.652 49.8595C169.562 49.0841 168.156 47.5529 167.264 45.1909C166.322 42.693 166.065 39.4539 166.485 36.1487C166.908 32.8124 167.94 30.0436 168.952 28.4966C169.468 27.7067 169.731 27.6156 169.531 27.7266C169.135 27.9474 168.217 28.1811 167.28 27.795L171.851 16.6997ZM167.479 61.1105C171.158 62.4748 173.227 63.7705 174.31 64.8333C175.196 65.7024 175.365 66.3256 175.351 67.0478C175.332 68.0842 174.87 69.9024 173.142 72.8038C171.446 75.65 168.806 79.0846 165.089 83.2508L174.043 91.24C177.989 86.8167 181.194 82.7329 183.45 78.9464C185.674 75.2152 187.273 71.2864 187.349 67.2764C187.432 62.9522 185.733 59.2294 182.715 56.2679C179.894 53.5001 176.023 51.4804 171.652 49.8595L167.479 61.1105ZM169.566 87.2454C164.181 84.5984 164.181 84.5997 164.18 84.6011C164.18 84.6017 164.179 84.6031 164.178 84.6042C164.177 84.6065 164.176 84.6089 164.175 84.6116C164.172 84.617 164.169 84.6233 164.166 84.6306C164.158 84.6452 164.15 84.6635 164.139 84.6856C164.118 84.7298 164.089 84.7888 164.055 84.8618C163.986 85.0077 163.892 85.2101 163.779 85.4621C163.554 85.9651 163.248 86.6719 162.911 87.5271C162.247 89.2128 161.414 91.5881 160.846 94.1752C160.297 96.6744 159.883 99.8563 160.445 102.96C161.044 106.269 162.871 109.874 166.95 111.849L172.181 101.049C172.169 101.044 172.201 101.058 172.252 101.102C172.303 101.146 172.34 101.192 172.36 101.223C172.398 101.28 172.32 101.192 172.253 100.821C172.1 99.9782 172.163 98.5899 172.567 96.7497C172.952 94.9974 173.549 93.2642 174.076 91.9262C174.335 91.2695 174.566 90.7358 174.727 90.376C174.808 90.1967 174.87 90.0622 174.909 89.9792C174.929 89.9377 174.942 89.9091 174.95 89.8943C174.953 89.887 174.955 89.883 174.955 89.8827C174.955 89.8825 174.955 89.8832 174.954 89.8848C174.954 89.8856 174.953 89.8867 174.953 89.8879C174.952 89.8885 174.952 89.8897 174.952 89.89C174.951 89.8912 174.95 89.8924 169.566 87.2454Z"
          fill="black"
        />
        <path
          d="M213.235 27.795C216.299 29.0573 219.806 27.5968 221.068 24.5329C222.33 21.469 220.87 17.962 217.806 16.6997L213.235 27.795ZM215.52 87.2454L211.043 83.2508L210.497 83.8626L210.136 84.5984L215.52 87.2454ZM212.905 111.849C215.887 113.294 219.476 112.047 220.92 109.065C222.365 106.082 221.118 102.494 218.136 101.049L212.905 111.849ZM217.806 16.6997C214.871 15.4905 211.951 15.9589 209.645 17.2441C207.536 18.4193 205.979 20.2222 204.864 21.9275C202.611 25.371 201.124 29.9979 200.535 34.6363C199.941 39.3057 200.177 44.6202 201.992 49.4286C203.858 54.3729 207.476 58.9006 213.434 61.1105L217.607 49.8595C215.516 49.0841 214.11 47.5529 213.219 45.1909C212.276 42.693 212.019 39.4539 212.439 36.1487C212.863 32.8124 213.894 30.0436 214.906 28.4966C215.423 27.7067 215.685 27.6156 215.486 27.7266C215.09 27.9474 214.172 28.1811 213.235 27.795L217.806 16.6997ZM213.434 61.1105C217.112 62.4748 219.181 63.7705 220.264 64.8333C221.15 65.7024 221.319 66.3256 221.306 67.0478C221.286 68.0842 220.825 69.9024 219.096 72.8038C217.4 75.65 214.761 79.0846 211.043 83.2508L219.997 91.24C223.944 86.8167 227.148 82.7329 229.405 78.9464C231.628 75.2152 233.227 71.2864 233.303 67.2764C233.386 62.9522 231.687 59.2294 228.669 56.2679C225.848 53.5001 221.977 51.4804 217.607 49.8595L213.434 61.1105ZM215.52 87.2454C210.136 84.5984 210.135 84.5997 210.134 84.6011C210.134 84.6017 210.133 84.6031 210.133 84.6042C210.132 84.6065 210.13 84.6089 210.129 84.6116C210.127 84.617 210.123 84.6233 210.12 84.6306C210.113 84.6452 210.104 84.6635 210.093 84.6856C210.072 84.7298 210.044 84.7888 210.009 84.8618C209.941 85.0077 209.847 85.2101 209.734 85.4621C209.508 85.9651 209.203 86.6719 208.866 87.5271C208.201 89.2128 207.369 91.5881 206.801 94.1752C206.252 96.6744 205.837 99.8563 206.399 102.96C206.999 106.269 208.826 109.874 212.905 111.849L218.136 101.049C218.124 101.044 218.156 101.058 218.206 101.102C218.257 101.146 218.294 101.192 218.315 101.223C218.353 101.28 218.274 101.192 218.207 100.821C218.055 99.9782 218.117 98.5899 218.521 96.7497C218.906 94.9974 219.503 93.2642 220.03 91.9262C220.289 91.2695 220.52 90.7358 220.681 90.376C220.762 90.1967 220.824 90.0622 220.864 89.9792C220.883 89.9377 220.897 89.9091 220.904 89.8943C220.907 89.887 220.909 89.883 220.91 89.8827C220.91 89.8825 220.909 89.8832 220.908 89.8848C220.908 89.8856 220.908 89.8867 220.907 89.8879C220.907 89.8885 220.906 89.8897 220.906 89.89C220.905 89.8912 220.905 89.8924 215.52 87.2454Z"
          fill="black"
        />
        <path
          d="M257.274 27.795C260.338 29.0573 263.845 27.5968 265.107 24.5329C266.37 21.469 264.909 17.962 261.845 16.6997L257.274 27.795ZM259.56 87.2454L255.083 83.2508L254.537 83.8626L254.175 84.5984L259.56 87.2454ZM256.944 111.849C259.927 113.294 263.515 112.047 264.96 109.065C266.404 106.082 265.157 102.494 262.175 101.049L256.944 111.849ZM261.845 16.6997C258.91 15.4905 255.991 15.9589 253.684 17.2441C251.575 18.4193 250.019 20.2222 248.903 21.9275C246.651 25.371 245.163 29.9979 244.574 34.6363C243.981 39.3057 244.216 44.6202 246.031 49.4286C247.898 54.3729 251.515 58.9006 257.473 61.1105L261.646 49.8595C259.556 49.0841 258.15 47.5529 257.258 45.1909C256.315 42.693 256.058 39.4539 256.478 36.1487C256.902 32.8124 257.934 30.0436 258.946 28.4966C259.462 27.7067 259.724 27.6156 259.525 27.7266C259.129 27.9474 258.211 28.1811 257.274 27.795L261.845 16.6997ZM257.473 61.1105C261.152 62.4748 263.221 63.7705 264.304 64.8333C265.19 65.7024 265.359 66.3256 265.345 67.0478C265.325 68.0842 264.864 69.9024 263.135 72.8038C261.44 75.65 258.8 79.0846 255.083 83.2508L264.037 91.24C267.983 86.8167 271.188 82.7329 273.444 78.9464C275.667 75.2152 277.267 71.2864 277.343 67.2764C277.425 62.9522 275.727 59.2294 272.708 56.2679C269.888 53.5001 266.017 51.4804 261.646 49.8595L257.473 61.1105ZM259.56 87.2454C254.175 84.5984 254.175 84.5997 254.174 84.6011C254.174 84.6017 254.173 84.6031 254.172 84.6042C254.171 84.6065 254.17 84.6089 254.169 84.6116C254.166 84.617 254.163 84.6233 254.159 84.6306C254.152 84.6452 254.143 84.6635 254.133 84.6856C254.112 84.7298 254.083 84.7888 254.049 84.8618C253.98 85.0077 253.886 85.2101 253.773 85.4621C253.547 85.9651 253.242 86.6719 252.905 87.5271C252.241 89.2128 251.408 91.5881 250.84 94.1752C250.291 96.6744 249.877 99.8563 250.439 102.96C251.038 106.269 252.865 109.874 256.944 111.849L262.175 101.049C262.163 101.044 262.195 101.058 262.246 101.102C262.297 101.146 262.334 101.192 262.354 101.223C262.392 101.28 262.314 101.192 262.247 100.821C262.094 99.9782 262.156 98.5899 262.561 96.7497C262.946 94.9974 263.543 93.2642 264.07 91.9262C264.329 91.2695 264.559 90.7358 264.721 90.376C264.801 90.1967 264.864 90.0622 264.903 89.9792C264.923 89.9377 264.936 89.9091 264.943 89.8943C264.947 89.887 264.949 89.883 264.949 89.8827C264.949 89.8825 264.949 89.8832 264.948 89.8848C264.948 89.8856 264.947 89.8867 264.946 89.8879C264.946 89.8885 264.946 89.8897 264.945 89.89C264.945 89.8912 264.944 89.8924 259.56 87.2454Z"
          fill="black"
        />
      </svg>
    </Container>
  );
}

export default Logo;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
