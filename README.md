# StartUpHub

Une plateforme de mise en relation entre startups et investisseurs.

## Configuration du projet

### Prérequis
- Node.js 18+
- npm 8+

### Variables d'environnement
Créez un fichier `.env` à la racine du projet avec les variables suivantes :
```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_anon_supabase
```

### Installation
```bash
npm install
```

### Développement
```bash
npm run dev
```

### Production
```bash
npm run build
npm run preview
```

## Structure du projet

```
src/
├── components/     # Composants React réutilisables
├── features/       # Fonctionnalités par domaine
├── services/       # Services d'API et intégrations
├── utils/          # Fonctions utilitaires
└── pages/          # Pages de l'application
```

## Contribution

Les contributions sont les bienvenues !  
Avant de commencer, veuillez lire le [Guide de Contribution](./CONTRIBUTING.md) et respecter le [Code de Conduite](./CODE_OF_CONDUCT.md).  

Pour contribuer :

1. **Forker** le projet
2. Créez une branche (`git checkout -b feature/amélioration`)
3. Committez vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amélioration`)
5. Ouvrez une **Pull Request** sur ce dépot
