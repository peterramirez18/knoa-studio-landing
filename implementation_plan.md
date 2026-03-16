# Adaptar Knoa Studio Landing al Estilo DOT4.co

Reestructurar la landing page de Knoa Studio para que siga la estructura de secciones y el smooth scroll fluido de [dot4.co](https://dot4.co/). Se mantiene el branding y contenido de Knoa Studio, pero se adopta la arquitectura visual, layout, y animaciones de DOT4.

## User Review Required

> [!IMPORTANT]
> **Smooth Scroll con Lenis**: Se instala `lenis` como dependencia para lograr el scroll suave con inercia que usa DOT4. Esto reemplaza el `scroll-behavior: smooth` actual de CSS.

> [!IMPORTANT]
> **Tema oscuro/dark**: DOT4 usa un fondo oscuro (`#0C0C0C` aprox) con texto blanco. Esto cambia significativamente la paleta de colores actual (fondo claro, texto oscuro). ¿Prefieres adoptar el tema oscuro completo o mantener el tema claro actual adaptando solo la estructura?

> [!IMPORTANT]
> **Componente [Problem.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/components/Problem.astro)**: En DOT4.co no hay una sección equivalente a "The Problem". Se propone eliminarla o fusionarla dentro de la nueva sección "About". ¿Estás de acuerdo?

## Proposed Changes

### Dependencias

#### [MODIFY] [package.json](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/package.json)
- Instalar `lenis` para smooth scroll (`pnpm add lenis`)

---

### Layout y Estilos Globales

#### [MODIFY] [Layout.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/layouts/Layout.astro)
- Inicializar Lenis en un `<script>` global que conecte Lenis con GSAP ScrollTrigger
- Importar Google Fonts (Inter + Outfit ya están)

#### [MODIFY] [global.css](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/styles/global.css)
- Actualizar las variables de color al tema oscuro si se aprueba
- Ajustar scrollbar para tema oscuro
- Eliminar `scroll-behavior: smooth` (Lenis lo maneja)
- Agregar estilos base para Lenis (`html.lenis`, `html.lenis body`)

---

### Componentes

#### [MODIFY] [Navbar.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/components/Navbar.astro)
- Simplificar a estilo DOT4: logo izquierda, botón CTA derecho, menú hamburguesa que abre un overlay fullscreen
- Fondo transparente → fondo semitranslúcido al hacer scroll
- Links navegación dentro del menú overlay en móvil y desktop

#### [MODIFY] [Hero.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/components/Hero.astro)
- **Nuevo layout**: Título enorme centrado tipo DOT4 ("Elevate Your Brand with Motion" → "We Build Launch Experiences That Turn Attention Into Revenue")
- Contenedor de video/visual grande debajo del título con bordes redondeados
- Botón CTA debajo del visual (como "Watch our Full Showreel" en DOT4)
- Eliminar la columna derecha con SVG canvas interactivo (reemplazar por video placeholder)
- Animaciones de entrada con GSAP

#### [NEW] [About.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/components/About.astro)
- Sección "We Are Knoa Studio" inspirada en DOT4 "We Are DOT4"
- Layout: subtítulo pequeño + título grande a la izquierda, párrafo descripción a la derecha
- Scroll fade-in con GSAP ScrollTrigger

#### [MODIFY] [Services.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/components/Services.astro)
- Reestructurar como **"The Power of Our Approach"** de DOT4
- Layout sticky: títulos interactivos a la izquierda (sticky), contenido visual que cambia a la derecha según scroll
- 3 items: "Design a Strong Visual Identity" → adaptados a Knoa (Videos, Landing Pages, Web Dev)
- Scroll-driven con GSAP ScrollTrigger + sticky positioning

#### [MODIFY] [Process.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/components/Process.astro)
- Reemplazar el editor de curvas interactivo por una **timeline horizontal scroll-driven** tipo DOT4 "From Concept to Delivery"
- Una barra de progreso horizontal que avanza con el scroll
- Tabs/fases clickeables con contenido bullet-point que aparece
- 4-6 fases del proceso con detalles expandibles

#### [MODIFY] [CaseStudies.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/components/CaseStudies.astro)
- Grid similar al actual pero con thumbnails más grandes tipo DOT4 "Highlighted Work"
- Hover con video preview o animaciones más dramáticas
- Tags de categorías en cada card
- Botón "Discover More" para ver más proyectos

#### [NEW] [UseCases.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/components/UseCases.astro)
- Nuevo componente inspirado en DOT4 "How Our Motion Can Work for You"
- Lista vertical tipo accordion con items expandibles
- Items: Launch Videos, Landing Pages, Web Development, Brand Identity, etc.
- Cada item se expande para mostrar descripción con animación suave

#### [MODIFY] [CtaSection.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/components/CtaSection.astro)
- Mayor impacto visual tipo DOT4 "Curious how DOT4 can transform your brand?"
- Título más grande, botón CTA prominente "Let's Talk!" con efecto hover

#### [MODIFY] [Footer.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/components/Footer.astro)
- Minimalizar al estilo DOT4: links navegación simples + copyright
- Quitar las columnas múltiples, mantener solo navegación básica y redes sociales

#### [DELETE] [Problem.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/components/Problem.astro)
- Eliminar (DOT4 no tiene sección similar, el contenido se puede integrar en About)

#### [MODIFY] [index.astro](file:///c:/Users/pitel/Documents/githubProjects/knoa-studio-landing/knoa-studio-landing/src/pages/index.astro)
- Actualizar orden de componentes: `Navbar → Hero → About → CaseStudies → Services → Process → UseCases → CtaSection → Footer`
- Importar nuevos componentes `About` y `UseCases`
- Eliminar import de `Problem`

---

## Verification Plan

### Automated Tests
No hay tests unitarios existentes en el proyecto. La verificación es visual.

- `pnpm build` — verificar que el build de producción compila sin errores

### Manual Verification
1. **Ejecutar `pnpm dev`** y abrir en el navegador
2. **Smooth scroll**: Verificar que al scrollear la página el movimiento es fluido con inercia (no instantáneo)
3. **Navbar**: Verificar que el navbar cambia de transparente a semitranslúcido al hacer scroll
4. **Hero**: Verificar título grande centrado con visual debajo
5. **About**: Verificar sección con layout 2 columnas (título izquierda, descripción derecha)
6. **Services**: Verificar que los títulos son sticky y el contenido visual cambia con el scroll
7. **Process**: Verificar timeline horizontal que se activa con scroll
8. **CTA**: Verificar sección con gran impacto visual
9. **Click en links de navegación**: Verificar smooth scroll a cada sección
10. **Responsividad**: Verificar en viewport móvil (375px) que todo se reorganiza correctamente
