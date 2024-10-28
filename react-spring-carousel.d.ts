declare module 'react-spring-carousel' {
  export const useSpringCarousel: ReturnType<'fixed' | 'fluid'>;
  export const carouselFragment: ReactNode;
  export const slideToPrevItem: void;
  export const slideToNextItem: void;
}
