# Catarinetes Reus - Astro Website

Upgraded Astro version of the Catarinetes Reus static website.

## Run locally

```bash
npm install
npm run dev
```

Open the local Astro URL, usually:

```text
http://localhost:4321
```

## Build for Hostinger

```bash
npm run build
```

Upload the **contents of `dist/`** to Hostinger `public_html`.

## Images

Add your image files manually inside:

```text
public/assets/img/
```

Expected filenames:

```text
logo-catarinetes-crop.jpg
logo-catarinetes.jpg
historia-catarinetes.png
look-blau.jpg
look-negre.jpg
look-quadres-rosa.jpg
look-rosa-ratlles.jpg
look-verd.jpg
look-vermell.jpg
enviaments.jpg
devolucions.jpg
```

The site references those filenames from `src/data/site.ts`.

## Main files to edit

```text
src/data/site.ts          Business info, looks, policies, reviews
src/pages/index.astro     Page order
src/styles/global.css     Design system and layout
src/components/           Reusable page sections
```

## Recommended workflow

```bash
npm run dev
# edit files
npm run build
# upload dist/ to Hostinger
```
