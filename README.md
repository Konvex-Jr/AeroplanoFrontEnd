# Website Aeroplano

Website da Aeroplano Design.

Projeto sendo feito com NextJS

---

## 🚀 Rodando o projeto

Clone o repositório:

```bash
git clone https://github.com/Konvex-Jr/AeroplanoFrontEnd.git
```

Navegue até o projeto:
```bash
cd AeroplanoFrontend
```

Instale as dependências:

```bash
npm install
npm run dev
```

Acesse em `http://localhost:3000`

---

## 🗂️ Arquitetura do código


```
app/
├── ui/                            # Componentes da Aplicação
│   ├── Nav.tsx
│   └── carousel/
│   
├── lib/                           # Funções e arquivos auxiliares 
│   └── projects.ts                # Array de projetos para desenvolvimento
│
├── fonts/                          # Arquivos das fontes utilizadas
│   ├── neo_sans_pro_bold.woff2     # NÃO USADA
│   ├── neo_sans_pro_medium.woff2   # NÃO USADA
│   ├── neo_sans_pro_ultra.woff2    # NÃO USADA
│   └── neo_sans_pro.woff2          # USANDO
│
├── projetos/                       # Página de Projetos
│   └── page.tsx
│
├── servicos/                       # Página de Serviços
│   └── page.tsx
│
├── blog/                           # Página do Blog
│   └── page.tsx
│  
├── globals.css                     # CSS global
├── layout.tsx                      # Definição da fonte
└── page.tsx                        # Página Home 
```

```
public/                             # Imagens e ícones
```

## 🌿 Branches — como trabalhar

**Nunca trabalhe diretamente na `main`.**

### Sempre crie uma branch nova para cada funcionalidade ou correção

```bash
git checkout -b nome-da-branch
```

### Como nomear a branch

Siga o padrão `tipo/descricao-curta`:

| Tipo        | Quando usar 
|-------------|----------------------------------------------------------------
| `feature/`  | Novo componente / feature
| `fix/`      | Correção de bug 
| `style/`    | Ajustes visuais, CSS, layout
| `refactor/` | Refatoração de código sem mudar comportamento
| `docs/`     | Alteração de documentação


**Exemplos:**
```
feature/nav
feature/carousel
fix/botao-carousel
style/cores-fontes
```

---

## 💬 Conventional Commits

Ao fazer um commit, siga o padrão `tipo: descrição curta no imperativo`:

```bash
git commit -m "tipo: o que esse commit faz"
```

| Tipo       | Quando usar
|------------|-----------------------------------------------------------------
| `feature`  | Novo componente / feature
| `fix`      | Correção de bug
| `style`    | Ajustes visuais, CSS, layout
| `refactor` | Refatoração sem mudança de comportamento
| `docs`     | Alterações em documentação

**Exemplos:**
```bash
git commit -m "feat: adicionar página de serviços"
git commit -m "fix: corrigir animação da home"
git commit -m "style: ajustar espaçamento dos cards de projetos"
git commit -m "docs: atualizar README com instruções de branch"
```

> **Dica:** commits pequenos e frequentes são melhores do que um commit gigante no fim do dia. Fica muito mais fácil rastrear o que mudou e reverter se necessário.

---

## 📋 Fluxo de trabalho resumido


1. Puxar as atualizações da main

```bash
   git checkout main
   git pull
```

2. Criar sua branch

```bash
   git checkout -b feature/nome-da-funcionalidade
```

3. Desenvolver e commitar com conventional commits
   
```bash
   git commit -m "feat: ..."
```

4. Subir a branch
   
```bash
   git push origin feature/nome-da-funcionalidade
```

5. Abrir um Pull Request para revisão
   ⚠️  Nunca fazer merge na main por conta própria