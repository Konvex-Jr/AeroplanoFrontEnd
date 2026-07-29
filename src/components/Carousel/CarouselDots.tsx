interface CarouselDotsProps {
  total: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export default function CarouselDots({ total, currentIndex, onDotClick }: CarouselDotsProps) {
  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onDotClick(index)}
          aria-label={`Ir para o projeto ${index + 1}`}
          className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
            index === currentIndex ? "bg-sky-400" : "bg-slate-500 hover:bg-slate-400"
          }`}
        />
      ))}
    </div>
  );
}