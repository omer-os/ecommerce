"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "~/components/ui/carousel";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";

export default function StHeroCarousel({ images }: { images: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="overflow-hidden rounded-xl"
      >
        <CarouselContent className="h-[20em] rounded-xl  sm:h-[40em]">
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image}
                alt="Placeholder"
                className="h-full w-full rounded-xl object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
        <div className="flex gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <div className="relative h-3 w-3 rounded-full bg-foreground">
              {index + 1 === current && (
                <motion.div
                  className="absolute inset-0 z-10 rounded-full bg-background"
                  layoutId="carousel-indicator"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
