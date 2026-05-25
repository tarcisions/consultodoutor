# Consultório Dr. Rodrigo Vieira Pacheco

Site profissional do consultório odontológico do Dr. Rodrigo Vieira Pacheco, localizado em Santa Luíza, Vitória - ES.

## Stack

- **Frontend:** React 18, TypeScript, TailwindCSS, Vite
- **Backend:** Express, TypeScript
- **Deploy:** Render

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor inicia em `http://localhost:5000`.

## Produção (Render)

### Build Command

```bash
npm install && npm run build
```

### Start Command

```bash
npm start
```

### Variáveis de Ambiente

| Variável | Valor |
|---|---|
| `NODE_ENV` | `production` |

O servidor escuta na porta definida pela variável `PORT` do Render (padrão: 5000).

## Estrutura

```
├── client/            # Frontend React
│   ├── src/
│   │   ├── components/  # Componentes do site
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utilitários
│   │   └── pages/       # Páginas
│   └── index.html
├── server/            # Backend Express
├── shared/            # Código compartilhado
├── public/            # Assets públicos
└── attached_assets/   # Imagens e logos
```
