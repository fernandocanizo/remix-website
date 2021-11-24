export function Hamburger() {
  return (
    <svg
      x-comp="Hamburger"
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="2" fill="currentColor" />
      <rect y="6" width="20" height="2" fill="currentColor" />
      <rect y="12" width="20" height="2" fill="currentColor" />
    </svg>
  );
}

export function Twitter(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      width="40"
      {...props}
    >
      <title>Twitter Logo</title>
      <path
        d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM29.1318 15.5939C29.1406 15.7907 29.1449 15.9885 29.1449 16.1871C29.1449 22.2531 24.5276 29.248 16.0837 29.2484C13.4912 29.2484 11.0788 28.4885 9.04724 27.1863C9.40643 27.2287 9.77203 27.2498 10.1422 27.2498C12.2931 27.2498 14.2725 26.5161 15.8438 25.2847C13.8342 25.2475 12.1399 23.9203 11.5552 22.0963C11.835 22.15 12.1228 22.1793 12.4179 22.1793C12.8369 22.1793 13.2428 22.1228 13.6285 22.0175C11.528 21.597 9.94568 19.7406 9.94568 17.5177C9.94568 17.4969 9.94568 17.4783 9.94629 17.4591C10.5649 17.803 11.2723 18.0099 12.0255 18.0331C10.7928 17.2107 9.9826 15.8047 9.9826 14.212C9.9826 13.371 10.21 12.583 10.6042 11.9046C12.868 14.6823 16.2512 16.5091 20.0665 16.701C19.9878 16.3647 19.9472 16.0144 19.9472 15.6543C19.9472 13.1201 22.0032 11.0641 24.5383 11.0641C25.8588 11.0641 27.0514 11.6223 27.8891 12.5146C28.9349 12.3083 29.917 11.9263 30.8041 11.4005C30.4608 12.4719 29.7333 13.371 28.7854 13.9395C29.7141 13.8284 30.5991 13.5822 31.4215 13.2166C30.8072 14.1373 30.0281 14.946 29.1318 15.5939Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GitHub(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>GitHub Logo</title>
      <path
        d="M20.0002 0C9.01496 0 0 9.01496 0 20.0002C0 29.3743 6.57781 37.8897 15.3126 40.0003V33.3834C14.4471 33.5729 13.6506 33.5784 12.7696 33.3187C11.5876 32.9699 10.6272 32.1826 9.91432 30.982C9.45991 30.2154 8.65455 29.3841 7.81439 29.4451L7.6084 27.1105C9.42512 26.9549 10.9968 28.2174 11.9297 29.7848C12.3441 30.4818 12.8211 30.8904 13.4333 31.0711C14.0251 31.2454 14.6605 31.1617 15.4008 30.9002C15.5867 29.4179 16.2657 28.8631 16.7787 28.0819V28.0807C11.5693 27.3037 9.49318 24.54 8.66919 22.3586C7.57727 19.4621 8.16321 15.8436 10.0941 13.5569C10.1316 13.5124 10.1994 13.3958 10.1731 13.3143C9.28779 10.64 10.3666 8.4278 10.4063 8.19312C11.428 8.49524 11.594 7.88916 14.8445 9.86397L15.4063 10.2015C15.6413 10.3416 15.5674 10.2616 15.8024 10.2439C17.1596 9.87526 18.5902 9.6717 19.9998 9.65339C21.4201 9.6717 22.8417 9.87526 24.2549 10.2589L24.4368 10.2772C24.421 10.2747 24.4863 10.2656 24.5958 10.2003C28.6562 7.74084 28.5103 8.54468 29.5992 8.19068C29.6386 8.42566 30.7031 10.6739 29.8272 13.3143C29.7091 13.6781 33.3474 17.0097 31.3308 22.3577C30.5068 24.54 28.431 27.3037 23.2216 28.0807V28.0819C23.8893 29.0996 24.6917 29.641 24.6874 31.7407V40.0003C33.4225 37.8897 40 29.3743 40 20.0002C40.0003 9.01496 30.9853 0 20.0002 0V0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function YouTube(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>YouTube logo</title>
      <path
        d="M17.5088 23.7468L24.0145 19.9999L17.5088 16.2529V23.7468Z"
        fill="currentColor"
      />
      <path
        d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM32.4969 20.0204C32.4969 20.0204 32.4969 24.0765 31.9824 26.0324C31.694 27.103 30.8499 27.9471 29.7794 28.2352C27.8235 28.75 20 28.75 20 28.75C20 28.75 12.197 28.75 10.2206 28.2147C9.15009 27.9266 8.30597 27.0822 8.01758 26.0117C7.50275 24.0765 7.50275 20 7.50275 20C7.50275 20 7.50275 15.9442 8.01758 13.9883C8.30566 12.9178 9.17053 12.0529 10.2206 11.7648C12.1765 11.25 20 11.25 20 11.25C20 11.25 27.8235 11.25 29.7794 11.7853C30.8499 12.0734 31.694 12.9178 31.9824 13.9883C32.5177 15.9442 32.4969 20.0204 32.4969 20.0204Z"
        fill="currentColor"
      />
    </svg>
  );
}
