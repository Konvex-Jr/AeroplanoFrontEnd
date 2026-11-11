interface CarouselDotsProps {
  total:        number
  currentIndex: number
  onDotClick:   (index: number) => void
}

export default function CarouselDots({ total, currentIndex, onDotClick }: CarouselDotsProps) {
  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: total }).map((_, index) => {
        const active = index === currentIndex

        return (
          // O botão tem 24x24px (área de toque); só a bolinha visível continua com 10px
          <button
            key={index}
            type="button"
            onClick={() => onDotClick(index)}
            aria-label={`Ir para o projeto ${index + 1}`}
            aria-current={active ? "true" : undefined}
            className="group flex size-6 cursor-pointer items-center justify-center"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                active ? "bg-[#325A76]" : "bg-[#8a9aa8] group-hover:bg-slate-500"
              }`}
            />
          </button>
        )
      })}
    </div>
  );
}
