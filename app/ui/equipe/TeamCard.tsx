import BotaoSaibaMais from "./BotaoSaibaMais";

// TeamCard.tsx
interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  phone: string;
  email: string;
  photo: string | null;
  bio: string;
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .98.804l1.06 5.3a1 1 0 0 1-.502 1.06l-1.65.943a11.05 11.05 0 0 0 5.716 5.716l.943-1.65a1 1 0 0 1 1.06-.502l5.3 1.06a1 1 0 0 1 .804.98V19a2 2 0 0 1-2 2h-1C9.163 21 3 14.837 3 7V5z"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
    </svg>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
      <div className="flex flex-col items-center justify-start w-full lg:w-[40%] gap-4 sm:gap-5">
        <div className="flex items-center lg:justify-center w-full lg:w-[40%] gap-4 sm:gap-5" >
          <div className="h-30 w-30 shrink-0 overflow-hidden rounded-full bg-slate-200 sm:h-56 sm:w-56 md:h-64 md:w-64">
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="h-full w-full object-cover grayscale"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                Foto
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold uppercase tracking-wide text-slate-800 sm:text-lg">
              {member.name}
            </h3>
            <p className="text-xs md:text-lg text-slate-600">{member.role}</p>
            <p className="text-xs md:text-lg text-slate-600">{member.specialty}</p>
            <div className="mt-1.5 flex flex-col gap-1">
              <a
                href={`tel:${member.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-xs md:text-lg text-slate-600 hover:text-slate-800"
              >
                <PhoneIcon className="h-4 w-4 shrink-0 text-text-founders" />
                {member.phone}
              </a>
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-2 text-xs md:text-lg text-slate-600 hover:text-slate-800"
              >
                <MailIcon className="h-4 w-4 shrink-0 text-text-founders" />
                {member.email}
              </a>
            </div>
          </div>
        </div>

        { /* Adicionar SAIBA MAIS AQUI */ }
        <div className="flex justify-start w-full pl-4 lg:pl-12" >
          <BotaoSaibaMais bio={member.bio} />
        </div>

      </div>
  );
}

const team: TeamMember[] = [
  {
    name: "Rodolfo Floeter Jr.",
    role: "Design de Produto",
    specialty: "Especialização em Publicidade e Propaganda",
    phone: "(47) 99108-5092",
    email: "rodolfo@aeroplanodesign.com.br",
    photo: "/rodolfo.png",
    bio: "Graduação pela UFPR e Univille, com experiência profissional na Whirlpool Latin America liderando projetos para as marcas Brastemp e Consul. Entre os prêmios de Design estão a 29ª Edição Museu da Casa Brasileira com a máquina de bebidas em cápsulas B.Blend Brastemp; IDEA Brasil com a Cervejeira Consul e a 27ª Edição Museu da Casa Brasileira com a Linha de Fogões Brastemp."
  },
  {
    name: "Rogério F. Negrão",
    role: "Design de Produto",
    specialty: "Especialização em Gestão e Design",
    phone: "(47) 99962-6217",
    email: "rogerio@aeroplanodesign.com.br",
    photo: "/rogerio.png",
    bio: "Graduação pela UFPR com especialização pela Universidade Tuiuti do Paraná, adquiriu experiência profissional na Whirlpool Latin America, atuando em projetos de Condicionadores de Ar, Refrigeração, Cocção e Lavanderia em projetos no Brasil, EUA, Itália e China. Premiado na 25ª edição do Prêmio de Design Museu da Casa Brasileira na categoria eletroeletrônicos com o projeto do Climatizador Consul Bem Estar."
  },
];

export default function Equipe() {
  return (
    <section className="w-full bg-white px-4 py-14 lg:block lg:py-20">
      <div className="flex justify-center w-full flex-col text-text-founders items-center gap-10 xl:flex-row sm:items-center sm:justify-center sm:gap-20">
        {team.map((member) => (
          <TeamCard key={member.email} member={member} />
        ))}
      </div>
    </section>
  );
}