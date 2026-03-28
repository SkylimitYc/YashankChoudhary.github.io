# Yashank Portfolio

A personal portfolio website showcasing my journey in DevOps, Cloud, automation, and frontend development.

## Live Demo

- Render: [https://portfolio-skql.onrender.com/](https://portfolio-skql.onrender.com/)
- GitHub Pages: [https://skylimityc.github.io/YashankChoudhary.github.io/](https://skylimityc.github.io/YashankChoudhary.github.io/)

## About The Project

This portfolio is designed to present my skills, projects, experience, and contact information through a modern interactive UI. It also serves as a hands-on DevOps practice project where I work with deployment, Docker, hosting, and CI/CD workflows.

## Features

- Responsive portfolio layout
- Dark and light theme switch
- Interactive panels for:
  - Me
  - Projects
  - Skills
  - Experience
  - Fun
  - Contact
- Typing text effect in the hero section
- CI/CD status badge
- Deployed and publicly accessible online

## Tech Stack

- HTML
- CSS
- JavaScript
- Git & GitHub
- Docker
- Render
- GitHub Pages

## DevOps Highlights

- Version control with Git and GitHub
- Containerized setup using Docker
- Deployment workflow practice
- Hosted on Render
- Published on GitHub Pages
- CI/CD enabled for smoother updates

## Project Structure

```text
.
|-- index.html
|-- style.css
|-- script.js
|-- README.md
```

## Run Locally

Since this is a static site, you can run it locally by opening `index.html` in your browser.

If you want to use a local development server, you can use VS Code Live Server or any static file server.

## Docker

Example `Dockerfile`:

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

Build the image:

```bash
docker build -t yashank-portfolio .
```

Run the container:

```bash
docker run -d -p 8080:80 --name yashank-site yashank-portfolio
```

Then open:

```text
http://localhost:8080
```

## Contact

- Email: [Yashankch@gmail.com](mailto:Yashankch@gmail.com)
- LinkedIn: [yashank-choudhary](https://www.linkedin.com/in/yashank-choudhary-b984b8252/)
- GitHub: [SkylimitYc](https://github.com/SkylimitYc)

## Purpose

This project is not only a portfolio website, but also a demonstration of my growing skills in:

- DevOps
- Cloud Engineering
- Deployment workflows
- Docker
- CI/CD
- Building practical and production-style projects
