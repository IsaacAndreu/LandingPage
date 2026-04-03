# ReservaPro Landing Page

Landing page multipagina per comercialitzar `ReservaPro`, un SaaS de gestio de reserves orientat a petits negocis locals com perruqueries, centres d'estetica, tallers, entrenadors personals o cliniques petites.

## Objectiu

Aquest projecte correspon a la part de `landing page` del repte de `Projecte 1`, i esta plantejat per connectar amb el `Projecte 2`, on es desenvolupra una aplicacio SaaS real amb:

- autenticacio d'usuaris
- rols i permisos
- administracio de l'aplicacio
- CRUD de dades
- notificacions
- model de subscripcio

La landing esta dissenyada per comunicar el valor del producte, captar interes mitjancant newsletter i complir el maxim possible dels requisits del repte.

## Contingut Del Projecte

- `index.html`: pagina principal amb hero, funcionalitats, CTA, FAQ, preus, newsletter i footer
- `styles.css`: estils globals, responsive design i identitat visual
- `script.js`: interactivitat de navegacio, formulari, cookies i animacions suaus
- `legal.html`: avis legal
- `privacy.html`: politica de privacitat
- `cookies.html`: politica de cookies
- `thank-you.html`: pagina de confirmacio del formulari

## Requisits Coberts

- menu de navegacio
- hero section
- features section
- CTA section
- FAQ section
- preus
- registre newsletter
- footer
- pagines legals separades
- banner de cookies amb acceptar o rebutjar i persistencia
- enllacos a xarxes socials
- estructura responsive
- base d'accessibilitat

## Com Obrir El Projecte

Com que es una web estatica, es pot obrir directament fent doble clic a `index.html`.

Opcio recomanada amb servidor local:

```powershell
npx.cmd serve .
```

Despres, obrir al navegador l'URL local que mostri la comanda.

## Formulari Newsletter

El formulari esta preparat per funcionar amb `Netlify Forms`.

Si es publica a Netlify:

- el formulari pot funcionar sense backend propi
- la pagina `thank-you.html` actua com a confirmacio d'enviament

Si es publica en un altre hosting, caldra connectar-lo a:

- un servei extern com Formspree, Brevo o Mailchimp
- o be al backend del SaaS quan existeixi

## Cookies

La gestio de cookies es resol mitjancant `localStorage`, guardant la decisio de l'usuari:

- `accept`
- `reject`

La preferencia es conserva en futures visites fins que s'esborri l'emmagatzematge local del navegador.

## Deploy Recomanat

La forma mes practica de publicar aquesta landing es:

1. pujar el repositori a GitHub
2. connectar-lo a Netlify
3. desplegar la branca `main`

Aixo permet tenir:

- hosting public
- HTTPS
- deploy rapid
- suport senzill per al formulari de newsletter

## Repositori

Repositori public:

[https://github.com/IsaacAndreu/LandingPage](https://github.com/IsaacAndreu/LandingPage)
