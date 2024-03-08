import { Fragment, HTMLAttributes, ReactNode, useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType as CarouselApi } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay';
import { useDotButton } from './carousel-use-dots';
import { usePrevNextButtons } from './carousel-use-prev-next';
import { IconPrev, IconNext } from '@/ui/icons';
import { classNames } from '@/utils/classnames';
import css from "./carousel.module.css";

// console.log('css', css);

type CarouselProps<T> = {
    slides: T[];
    options?: EmblaOptionsType;
    card: (index: number) => ReactNode;
    showButtonText?: boolean;
};

export function Carousel<T = string>({ slides, options, className, card, showButtonText = true, ...rest }: CarouselProps<T> & HTMLAttributes<HTMLDivElement>) {
    const [emblaRef, api] = useEmblaCarousel(options, [/*Autoplay({ stopOnInteraction: false, delay: 5000 })*/]);

    const onButtonClick = useCallback(
        (api: CarouselApi) => {
            const { autoplay } = api.plugins() as AutoplayType;
            if (autoplay?.options.stopOnInteraction) {
                autoplay.stop();
            }
        }, []
    );

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api, onButtonClick);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(api, onButtonClick);

    return (<>
        <div className={classNames(css["carousel-wrapper"], className)} {...rest}>
            <div className={css["overflow-hidden"]} ref={emblaRef}>
                <div className={css["map-wrapper"]}>
                    {slides.map(
                        (imgSrc, index) => (
                            <Fragment key={index}>
                                {card(index)}
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </div>

        <div className={css["buttons-wrapper"]}>
            <button className={classNames(css["button__arrow"], css["button__arrow-left"])} onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
                <IconPrev className={css["button__icon"]} />
                {showButtonText && (
                    <span>Prev</span>
                )}
            </button>

            <div className={css["button-dots-wrapper"]}>
                {scrollSnaps.map((_, index) => (
                    <button className={css["carousel-dots"]} onClick={() => onDotButtonClick(index)} key={index}>
                        <div className={classNames(css["button-dots__button"], index === selectedIndex && css["active"])} />
                    </button>
                ))}
            </div>

            <button className={classNames(css["button__arrow"], css["button__arrow-right"])} onClick={onNextButtonClick} disabled={nextBtnDisabled}>
                {showButtonText && (
                    <span>Next</span>
                )}
                <IconNext className={css["button__icon"]} />
            </button>
        </div>
    </>);
}

export function imageUrlByIndex<T>(arr: T[], idx: number): T {
    return arr[idx % arr.length];
}
