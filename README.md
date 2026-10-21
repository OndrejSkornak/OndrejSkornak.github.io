# OndrejSkornak.github.io

Môj osobný blog postavený na [Astre](https://astro.build), hostovaný na GitHub Pages.

## Ako napísať nový článok

1. Vytvor súbor `src/content/blog/nazov-clanku.md` (názov súboru = adresa článku):

   ```md
   ---
   title: Názov článku
   description: Krátky popis (nepovinné)
   date: 2026-10-21
   tags: [tag1, tag2]
   draft: true   # kým je true, článok nie je na webe
   ---

   Text článku v Markdowne…
   ```

2. Pozri si ho lokálne: `npm run dev` → http://localhost:4321
3. Keď je hotový, zmaž `draft: true`, potom `git add . && git commit -m "..." && git push`.
   Za minútu–dve je na https://ondrejskornak.github.io

## Príkazy

| Príkaz            | Čo robí                              |
| ----------------- | ------------------------------------ |
| `npm install`     | nainštaluje závislosti (raz)         |
| `npm run dev`     | lokálny server s živým náhľadom      |
| `npm run build`   | zostaví stránku do `dist/`           |
| `npm run preview` | pozrie si zostavenú stránku          |

Potrebuje Node 22.22+ (`nvm use` podľa `.nvmrc`).
