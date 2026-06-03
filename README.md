# Catarinetes Reus - Astro Website

Astro version of the Catarinetes Reus website.

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
npm run preview
```

## GitHub Pages

This project is configured for GitHub Pages at:

```txt
https://anubis7star.github.io/catarinetes-reus-preview/
```

Important files:

- `astro.config.mjs` includes the correct `site` and `base` for GitHub Pages.
- `.github/workflows/deploy.yml` builds Astro and deploys the generated `dist/` folder.
- Image and script paths are handled with `import.meta.env.BASE_URL`, so they work inside the GitHub Pages subfolder.

## Images

Place images inside:

```txt
public/assets/img/
```

Expected filenames:

```txt
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

## Hostinger deployment

For Hostinger, run:

```bash
npm run build
```

Then upload the contents of `dist/` to `public_html/`.

If you deploy to a normal root domain on Hostinger, remove or change the `base` value in `astro.config.mjs` before building for Hostinger.
