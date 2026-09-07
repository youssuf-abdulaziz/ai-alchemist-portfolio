# Static single-page scroll architecture

The portfolio is a static, presentational site: no backend, no form endpoint, no dynamic data fetching. All five sections (Hero, About, Skills, Work, Contact) live on a single `/` route as stacked sections with anchor-navigation, rather than being split across routes. We chose this because the design brief (section numbers 01–05, sticky-nav-appears-after-scroll, editorial scroll rhythm) describes one long scrollable page, and a full static export keeps the portfolio fast, dependency-light, and trivially deployable.
