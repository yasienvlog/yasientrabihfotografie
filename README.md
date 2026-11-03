# Yasien Trabih Fotografie

Statische HTML5-website, klaar voor GitHub Pages.

## Bestanden

- `index.html` — paginastructuur en inhoud
- `styles.css` — vormgeving en mobiele layout
- `app.js` — zoeken en filteren in de fotogalerij
- `CNAME` — koppeling met `yasientrabihfotografie.nl`

## Publiceren via GitHub Pages

1. Plaats deze bestanden in de hoofdmap van een GitHub-repository.
2. Open **Settings → Pages** en kies bij **Build and deployment** de branch `main` en map `/(root)`.
3. Vul bij **Custom domain** `yasientrabihfotografie.nl` in en sla op. Doe dit voordat je de DNS-records aanpast.
4. Stel bij je domeinprovider voor het hoofddomein (`@`) deze vier DNS-`A`-records in:

   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

5. Wacht tot DNS is bijgewerkt en schakel in **Settings → Pages** **Enforce HTTPS** in zodra die optie beschikbaar is.

DNS-wijzigingen kunnen tot 24 uur nodig hebben om overal zichtbaar te worden. De website gebruikt Google Fonts en voorbeeldfoto's van Unsplash, waarvoor een internetverbinding nodig is.
