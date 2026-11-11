export interface NavigationItem {
    href: string
    text: string
}

export const navigation: NavigationItem[] = [
    { href: '/',          text: "INÍCIO" },
    { href: '/servicos',  text: "SERVIÇOS" },
    { href: '/portfolio', text: "PORTFÓLIO" },
    { href: '/#sobre',    text: "SOBRE" },
    { href: '/blog',      text: "BLOG" },
    { href: '/#contato',  text: "CONTATO" },
]
