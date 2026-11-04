# Kumaran R | Data Analytics Portfolio

A clean, mobile-friendly portfolio built with plain HTML, CSS and a little JavaScript (no frameworks). It showcases my data analytics projects with a case study for each: problem, data, method, key insights and visuals.

**Live site:** https://ramukumaran.github.io/portfolio/ *(update this link after you deploy)*

## Projects

| Project | Tools | Highlight |
|---|---|---|
| Titanic Survival Analysis | Python, Pandas, NumPy, Matplotlib, Seaborn | 74.2% of women survived vs 18.9% of men |
| World Cup Match Analysis | MySQL, Jupyter, CTEs, window functions | Brazil ranks first with 220 goals |
| Walmart Global Sales Dashboard | Power BI, Excel | Consumer segment drives 52.06% of profit |
| Global Superstore Dashboard | Tableau, Excel | 25,035 orders, $12.6M sales, 11.6% margin |
| Job Salary Dashboard | Excel Pivot Tables, Slicers | 250,000 records; AI Engineer pays the most on average |

## Features

- Sections: intro, about, skills, project case studies, contact, resume download
- Reusable case-study layout (copy one `<article class="case">` block to add a project)
- Light and dark theme (follows your device, with a manual toggle)
- Click-to-zoom dashboard screenshots
- Works on phones, tablets and desktops

## Folder structure

```text
portfolio/
├── index.html      # all page content
├── style.css       # colours, fonts, layout
├── script.js       # theme toggle, menu, image zoom
├── images/         # photo, dashboard screenshots, charts
│   ├── titanic/
│   └── sql/
└── files/          # resume PDF, Python script, dataset
```

## Run it on your computer

Double-click `index.html`, or in the project folder run `python -m http.server 8000` and open http://localhost:8000.

## Add a new project

1. Put its screenshots in `images/`.
2. In `index.html`, copy the whole `<article class="case"> ... </article>` block.
3. Paste it under the last project and change the title, facts, text, image paths and links.

## Contact

Kumaran R · Chennai, Tamil Nadu
[LinkedIn](https://www.linkedin.com/in/kumaran-r-7ab6b4266/) · [GitHub](https://github.com/Ramukumaran) · kesavanramu2224@gmail.com
