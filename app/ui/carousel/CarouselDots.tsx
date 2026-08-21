export default function CarouselDots({ total, currentIndex, onDotClick }: CarouselDots) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onDotClick(index)}
          aria-label={`Ir para o projeto ${index + 1}`}
          className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
            index === currentIndex ? "bg-[#325A76]" : "bg-[#D3D3D3] hover:bg-slate-400"
          }`}
        />
      ))}
    </div>
  );
}